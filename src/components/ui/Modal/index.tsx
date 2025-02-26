import { FC, ReactNode, useEffect } from 'react'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	children: ReactNode
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
	useEffect(() => {
		const originalStyle = window.getComputedStyle(document.body).overflow

		if (isOpen) {
			document.body.style.overflow = 'hidden'
			document.body.style.paddingRight = '15px'
		}

		return () => {
			document.body.style.overflow = originalStyle
			document.body.style.paddingRight = '0px'
		}
	}, [isOpen])

	if (!isOpen) return null

	return (
		<div className='fixed inset-0 z-50' onClick={onClose}>
			<div className='absolute inset-0 bg-black/50' />
			<div className='fixed inset-0 overflow-y-auto'>
				<div className='flex min-h-full items-center justify-center p-4'>
					<div
						className='relative bg-white rounded-2xl w-full max-w-2xl'
						onClick={e => e.stopPropagation()}
					>
						<button
							onClick={onClose}
							className='absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors'
						>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M18 6L6 18M6 6L18 18'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
						<div className='p-6 md:p-8 max-h-[70vh] overflow-y-auto'>
							{children}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
