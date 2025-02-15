import { FC, useState } from 'react'
import Modal from '../../ui/Modal'
import Request from '../Request'
import Politika from './politika'
const Footer: FC = () => {
	const [isRequestModalOpen, setIsRequestModalOpen] = useState(false)
	const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)
	const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)

	return (
		<>
			<footer className='bg-white px-4 md:px-8 py-8 md:py-16'>
				<div className='flex flex-col md:flex-row justify-between items-center md:items-start mb-8 md:mb-16 gap-8 md:gap-0'>
					<div className='text-4xl md:text-5xl font-main'>БАЛИ</div>
					<nav className='space-y-2 md:space-y-4 text-center md:text-right lg:text-right xl:text-right'>
						<a
							href='/'
							className='block hover:bg-main hover:text-bg px-2 py-1 rounded-lg transition-colors'
						>
							Главная
						</a>
						<button
							onClick={() => setIsRequestModalOpen(true)}
							className='block w-full text-center md:text-right lg:text-right xl:text-right hover:bg-main hover:text-bg px-2 py-1 rounded-lg transition-colors'
						>
							Оставить заявку
						</button>
						<button
							onClick={() => setIsAboutModalOpen(true)}
							className='block w-full text-center md:text-right lg:text-right xl:text-right hover:bg-main hover:text-bg px-2 py-1 rounded-lg transition-colors'
						>
							О нас
						</button>
						<button
							onClick={() => setIsPrivacyModalOpen(true)}
							className='block w-full text-center lg:text-right hover:bg-main hover:text-bg px-2 py-1 rounded-lg transition-colors'
						>
							Политика конфиденциальности
						</button>
					</nav>
				</div>

				<div className='flex flex-col md:flex-row justify-between items-center md:items-end gap-4 md:gap-0 text-sm md:text-base'>
					<img
						src='/logo.png'
						alt='Бали'
						className='w-10 h-10 md:w-52 md:h-52'
					/>
					<div className='text-center md:text-right'>
						<p>214018, г. Смоленск, пр. Гагарина, д. 18</p>
						<p>+7 (4812) 630140, 636100</p>
						<p>630140@mail.ru</p>
					</div>
				</div>
			</footer>

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

			<Modal
				isOpen={isPrivacyModalOpen}
				onClose={() => setIsPrivacyModalOpen(false)}
			>
				<div className='space-y-6 max-h-[70vh] overflow-y-auto'>
					<h2 className="text-2xl md:text-3xl lg:text-4xl font-['DelaGothicOne'] mb-4 text-center">
						Политика конфиденциальности
					</h2>
					<div className='space-y-4 font-text'>
						<Politika />
					</div>
				</div>
			</Modal>
		</>
	)
}

export default Footer
