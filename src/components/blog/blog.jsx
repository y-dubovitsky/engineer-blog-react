import cn from 'classnames';

import style from './blog.module.css';
import image from '../../assets/hero_bg_3.jpg';

export default function Blog() {
  return (
    <div className={cn(style.container)}>
      <div className={cn(style.info)}>
        <span>Read</span>
        <h2>Recent Blog</h2>
      </div>
      <div className={cn(style.blog)}>
        <div className={cn(style.postContainer)}>
          <img src={image} alt="" />
          <h3><a href="blog.html">Renovating National Gallery</a></h3>
          <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        </div>
        <div className={cn(style.postContainer)}>
          <img src={image} alt="" />
          <h3><a href="blog.html">Renovating National Gallery</a></h3>
          <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        </div>
        <div className={cn(style.postContainer)}>
          <img src={image} alt="" />
          <h3><a href="blog.html">Renovating National Gallery</a></h3>
          <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        </div>
      </div>
      <button>Load More</button>
    </div>
  )
}