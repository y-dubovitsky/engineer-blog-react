import cn from 'classnames';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  Link,
  useHistory
} from "react-router-dom";
import {
  changeCurrentPage,
  currentPageSelector,
  maxPageCountSelector
} from '../../../redux/features/post/postSlice';
import styles from './pagination.module.css';

const Pagination = () => {

  const dispatch = useDispatch();
  const currentPage = useSelector(currentPageSelector);
  const maxPageCount = useSelector(maxPageCountSelector);

  return (
    <div className={styles.container}>
      {/* //!TODO Вынести эту логику в функцию? */}
      <Link to={`/main/${currentPage === 0 ? currentPage : currentPage - 1}`}
        className={styles.button}
        onClick={() => dispatch(changeCurrentPage("previous"))}
      >
        <i className="fas fa-arrow-left"></i>
      </Link>

      <div className={styles.center}>
        <Link to={`/main/${currentPage}`}
          className={styles.button}
          onClick={() => dispatch(changeCurrentPage("init"))}
        >
          0
        </Link>
        <div className={styles.etc}>...</div>
        <div
          className={cn(styles.button, styles.active, styles.heart)}
        >
          {currentPage}
        </div>
        <div className={styles.etc}>...</div>
        <div
          className={styles.button}
        >
          {maxPageCount}
        </div>
      </div>

      <Link to={`/main/${currentPage === maxPageCount ? currentPage : currentPage + 1}`}
        className={styles.button}
        onClick={() => dispatch(changeCurrentPage("next"))}
      >
        <i className="fas fa-arrow-right"></i>
      </Link>
    </div>
  )
}

export default Pagination;