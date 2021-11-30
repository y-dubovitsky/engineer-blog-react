import cn from 'classnames';
import Search from '../search/search';
import style from './hero-search.module.css'
import logo from '../../../assets/hero_bg_5.jpg';

const HeroSearch = (props) => {

  return (
    <div className={style.container}>
      <div className={style.info}>
        <h1>Construct your resume for better life</h1>
        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est ullam autem incidunt eius libero quisquam.</h4>
        <div className={style.searchContainer}>
          <Search />
        </div>
        <h3>Popular tags: </h3>
      </div>
      <div className={style.image}>
        <img src={logo} alt="" srcset="" />
      </div>
    </div>
  )
}

export default HeroSearch;