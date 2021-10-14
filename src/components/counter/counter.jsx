import cn from 'classnames';

import style from './counter.module.css';

export default function Counter() {
	return (
		<div className={cn(style.container)}>
			<div className={cn(style.column)}>
				<span className={cn(style.count)}>100</span>
				<p classname="">Cups of coffee</p>
			</div>
			<div className={cn(style.column)}>
				<span className={cn(style.count)}>200</span>
				<p className="">Projects</p>
			</div>
			<div className={cn(style.column)}>
				<span className={cn(style.count)}>300</span>
				<p className="">Clients</p>
			</div>
			<div className={cn(style.column)}>
				<span className={cn(style.count)}>400</span>
				<p className="">Partners</p>
			</div>
		</div>
	)
}