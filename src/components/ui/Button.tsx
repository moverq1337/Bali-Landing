import { ButtonHTMLAttributes, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary'
	size?: 'sm' | 'md' | 'lg'
}

const Button: FC<ButtonProps> = ({
	children,
	className = '',
	variant = 'primary',
	size = 'md',
	...props
}) => {
	const baseStyles = 'rounded-full transition-colors font-["Montserrat"]'

	const variantStyles = {
		primary: 'bg-black text-white hover:bg-gray-800',
		secondary: 'bg-white text-black hover:bg-gray-100',
	}

	const sizeStyles = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3 text-base',
		lg: 'px-8 py-4 text-lg',
	}

	return (
		<button
			className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
