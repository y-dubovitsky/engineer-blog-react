import cn from 'classnames';

import style from './services.module.css';

export default function Services() {
	return (
		<section className={cn(style.container)}>
			<div className={cn(style.description)}>
				<span>What I do?</span>
				<h2>Here are some of my expertise</h2>
			</div>
			<div className={cn(style.services)}>
				<div className={cn(style.service)}>
					<div className={cn(style.hexagon)}>
						<i className={cn("fab", "fa-docker")}></i>
					</div>
					<h1>INNOVATIVE IDEAS</h1>
					<p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
				</div>
				<div className={cn(style.service)}>
					<div className={cn(style.hexagon)}>
						<i className="fab fa-java"></i>
					</div>
					<h1>INNOVATIVE IDEAS</h1>
					<p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
				</div>
				<div className={cn(style.service)}>
					<div className={cn(style.hexagon)}>
						<i className="fab fa-js-square"></i>
					</div>
					<h1>INNOVATIVE IDEAS</h1>
					<p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
				</div>
				<div className={cn(style.service)}>
					<div className={cn(style.hexagon)}>
						<i className="fas fa-seedling"></i>
					</div>
					<h1>INNOVATIVE IDEAS</h1>
					<p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
				</div>
				<div className={cn(style.service)}>
					<div className={cn(style.hexagon)}>
						<i className="fab fa-angular"></i>
					</div>
					<h1>INNOVATIVE IDEAS</h1>
					<p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
				</div>
				<div className={cn(style.service)}>
					<div className={cn(style.hexagon)}>
						<i className="fab fa-node"></i>
					</div>
					<h1>INNOVATIVE IDEAS</h1>
					<p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
				</div>
				<div className={cn(style.service)}>
					<div className={cn(style.hexagon)}>
						<i className="fab fa-github"></i>
					</div>
					<h1>INNOVATIVE IDEAS</h1>
					<p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
				</div>
				<div className={cn(style.service)}>
					<div className={cn(style.hexagon)}>
						<i className="fas fa-database"></i>
					</div>
					<h1>INNOVATIVE IDEAS</h1>
					<p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
				</div>
				<div className={cn(style.service)}>
					<div className={cn(style.hexagon)}>
						<i className="fab fa-react"></i>
					</div>
					<h1>INNOVATIVE IDEAS</h1>
					<p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
				</div>
			</div>
		</section>
	)
}