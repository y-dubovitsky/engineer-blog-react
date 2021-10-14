import cn from 'classnames';

import style from './counter.module.css';

export default function Counter() {
	return (
		<div className={cn(style.container)}>
			<div className={cn(style.column)}>
				<span className={cn(style.count)}>100</span>
				<p>Cups of coffee</p>
			</div>
			<div className={cn(style.column)}>
				<span className={cn(style.count)}>200</span>
				<p>Projects</p>
			</div>
			<div className={cn(style.column)}>
				<span className={cn(style.count)}>300</span>
				<p>Clients</p>
			</div>
			<div className={cn(style.column)}>
				<span className={cn(style.count)}>400</span>
				<p>Partners</p>
			</div>
		</div>
	)
}