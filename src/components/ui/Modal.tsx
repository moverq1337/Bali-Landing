import { FC, ReactNode } from 'react'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	children: ReactNode
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
			<div
				className='fixed inset-0 bg-black/50 backdrop-blur-sm'
				onClick={onClose}
			/>
			<div className='relative z-10 w-full max-w-2xl bg-white rounded-3xl p-6 md:p-8'>
				<button
					onClick={onClose}
					className='absolute right-4 top-4 text-gray-500 hover:text-gray-700'
				>
					<svg width='24' height='24' viewBox='0 0 24 24'>
						<path
							d='M6 18L18 6M6 6l12 12'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
						/>
					</svg>
				</button>
				{children}
			</div>
		</div>
	)
}

export default Modal
