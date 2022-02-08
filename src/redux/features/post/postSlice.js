import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import callApi from '../../requests/callApi';

const POST_PER_PAGE = 5;

// ------------------------------------- AsyncThunk -------------------------------------

export const addPost = createAsyncThunk("post/add", async (args, { getState }) => {
  const { post } = getState();

  const payload = {
    path: '/api/post/add',
    requestBody: post.newPostEntity,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }
  const response = await callApi(payload);
  return response;
});

export const getPostPaging = createAsyncThunk("post/getPaging", async (page, { getState }) => {
  const { post } = getState();

  //FIXME checking if data already loaded 
  const finded = post.postEntities.find(post => post.id === (page * POST_PER_PAGE) + 1);
  if (finded) {
    console.log('Data already loaded!');
    return null;
  }

  const payload = {
    path: `/api/post?page=${page}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }
  const response = await callApi(payload);
  return response;
});

// ------------------------------------- Slice -------------------------------------

const initialState = {
  newPostEntity: {
    id: null,
    postImage: null,
    category: null,
    title: null,
    date: null,
    author: null,
    disclosure: null,
    description: null,
    subPosts: [], //! Это массив объектов
    status: 'idle',
    error: null
  },
  postEntities: [], //! Это массив объектов
  currentPage: 0,
  maxPageCount: null,
  status: 'idle',
  error: null
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fillPostMainContent(state, { payload }) {
      state.newPostEntity = {
        ...state.newPostEntity,
        ...payload
      }
    },
    fillPostSubPostContent(state, { payload }) {
      const { index, subPost } = payload;
      state.newPostEntity.subPosts[index] = subPost;
    },
    changeCurrentPage(state, { payload }) {
      switch (payload) {
        case 'next': {
          if (state.currentPage >= state.maxPageCount) break;
          state.currentPage += 1;
          break;
        }
        case 'previous': {
          if (state.currentPage === 0) break;
          state.currentPage -= 1;
          break;
        }
        case 'init': {
          state.currentPage = 0;
          break;
        }
        default: return state.currentPage;
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(addPost.pending, (state) => {
        state.newPostEntity.status = 'loading';
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.newPostEntity.status = 'succeeded';
      })
      .addCase(addPost.rejected, (state, action) => {
        state.newPostEntity.status = 'failed';
        state.newPostEntity.error = action.error.message;
      })
      //! Fetch paging posts
      .addCase(getPostPaging.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getPostPaging.fulfilled, (state, action) => { //TODO Обрати внимание, что этот метод не отрабатывает!
        state.status = 'succeeded';
        const { allPostsCount, pagingPosts } = action.payload;

        state.postEntities.push(...pagingPosts);
        state.maxPageCount
          = Math.ceil(allPostsCount / POST_PER_PAGE);
      })
      .addCase(getPostPaging.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
});

export const { fillPostMainContent, fillPostSubPostContent, changeCurrentPage } = postSlice.actions;

// ------------------------------------- Selector -------------------------------------

export const postEntitiesSelector = state => state.post.postEntities;
export const postEntityByIdSelector = (state, id) => {
  const postById = state.post.postEntities.filter(post => post.id == id)[0]; //FIXME НЕ строгое равенство

  return postById;
};
export const currentPageSelector = state => state.post.currentPage;
export const newPostSelector = state => state.post.newPostEntity;
export const maxPageCountSelector = state => state.post.maxPageCount;

export default postSlice.reducer;