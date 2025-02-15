import { FC, useState } from 'react'
import Button from '../../ui/Button'
import Modal from '../../ui/Modal'
import Request from '../Request'

const Header: FC = () => {
	const [isRequestModalOpen, setIsRequestModalOpen] = useState(false)
	const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)

	return (
		<>
			<header className='flex flex-col sm:flex-row justify-between items-center px-4 md:px-8 py-4 gap-4 sm:gap-0'>
				<div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-8'>
					<img
						src='/logo.png'
						alt='Бали'
						className='w-10 h-10 md:w-12 md:h-12 object-contain'
					/>
					<div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8'>
						<nav className='flex items-center gap-4 sm:gap-6 md:gap-8'>
							<a
								href='/'
								className='text-sm sm:text-base hover:bg-main hover:text-bg px-2 py-1 rounded-lg transition-colors'
							>
								Главная
							</a>
							<button
								onClick={() => setIsAboutModalOpen(true)}
								className='text-sm sm:text-base hover:bg-main hover:text-bg px-2 py-1 rounded-lg transition-colors'
							>
								О нас
							</button>
						</nav>
						<Button
							onClick={() => setIsRequestModalOpen(true)}
							className='flex items-center gap-1.5 px-2.5 py-1 md:px-3 md:py-1.5 text-xs md:text-sm animate-[pulse_2s_ease-in-out_infinite] hover:scale-105 transition-transform hover:bg-main hover:text-bg'
							variant='primary'
						>
							<span>Оставить заявку</span>
							<svg
								width='12'
								height='12'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='rotate-45'
							>
								<path
									d='M5 12H19M19 12L12 5M19 12L12 19'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</Button>
					</div>
				</div>

				<div className='flex flex-col items-center sm:items-end'>
					<a
						href='tel:+74812630140'
						className='text-sm sm:text-base text-gray-800 hover:text-gray-600 transition-colors'
					>
						+7 (4812) 630140
					</a>
					<address className='text-xs sm:text-sm md:text-base text-gray-600 not-italic text-center sm:text-right'>
						г. Смоленск, пр. Гагарина, д. 18
					</address>
				</div>
			</header>

			<Modal
				isOpen={isRequestModalOpen}
				onClose={() => setIsRequestModalOpen(false)}
			>
				<Request onClose={() => setIsRequestModalOpen(false)} />
			</Modal>

			<Modal
				isOpen={isAboutModalOpen}
				onClose={() => setIsAboutModalOpen(false)}
			>
				<div className='space-y-6 text-center'>
					<h2 className="text-2xl md:text-3xl lg:text-4xl font-['DelaGothicOne'] mb-4">
						О нас
					</h2>
					<div className="space-y-4 font-['Montserrat']">
						<p className='text-lg'>214018, г. Смоленск, пр. Гагарина, д. 18</p>
						<div className='space-y-2'>
							<p className='text-2xl md:text-3xl lg:text-4xl font-main mb-4'>
								Контакты менеджеров:
							</p>
							<p>+7 903 649-61-00 (менеджер Елена)</p>
							<p>+7 906 519-10-00 (менеджер Вячеслав)</p>
							<p>+7 903 649-01-40 (Ген. Директор Сергей)</p>
						</div>
						<p className='text-lg'>Email: 630140@mail.ru</p>
					</div>
				</div>
			</Modal>
		</>
	)
}

export default Header
