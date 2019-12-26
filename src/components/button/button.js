import { h } from 'preact'
import { forwardRef } from 'preact/compat'
import { classnames } from '../../utils/classnames'
import styles from './button.css'

export const Button = forwardRef(function Button({
	variant = "primary",
	onClick,
	class: className,
	children,
}, ref) {
	return <button
		ref={ref}
		class={classnames(
			styles.button,
			styles[variant],
			className
		)}
		onClick={onClick}
		tabIndex="0"
	>
		{children}
	</button>
})