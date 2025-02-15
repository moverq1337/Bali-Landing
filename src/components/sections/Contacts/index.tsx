import { FC } from 'react'
import { SectionProps } from '../../../types'
import Request from '../Request'

const Contacts: FC<SectionProps> = ({ className = '' }) => {
	return (
		<section className={`px-4 md:px-8 py-8 md:py-16 ${className}`}>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start'>
				<div className='space-y-6 md:space-y-8 text-center'>
					<h2 className='font-main text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>
						Контакты менеджеров:
					</h2>
					<div className='space-y-3 text-sm sm:text-base md:text-lg'>
						<p>+7 903 649-61-00 (менеджер Елена)</p>
						<p>+7 906 519-10-00 (менеджер Вячеслав)</p>
						<p>+7 903 649-01-40 (Ген. Директор Сергей)</p>
					</div>
					<p className='text-base sm:text-lg md:text-xl lg:text-2xl font-medium'>
						Заявка будет передана менеджеру, и он свяжется с вами в ближайшее
						время!
					</p>
				</div>

				<img
					src='/3.png'
					alt='Воздушные шары'
					className='w-full aspect-[4/3] object-cover rounded-lg shadow-lg -mt-6 sm:-mt-16 md:-mt-20 lg:-mt-32'
				/>
			</div>

			<hr className='border-t border-secondary my-12 md:my-16' />

			<div>
				<Request />
				{/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-['DelaGothicOne'] text-center mb-4">
					Заявка на поиск тура
				</h2>
				<p className="text-center text-gray-600 mb-8 font-['Montserrat']">
					Заявка автоматически попадет к менеджеру турагенства и с Вами свяжутся
					в ближайшее время
				</p>
				<form className='max-w-2xl mx-auto space-y-6'>
					<div className='space-y-4'>
						<input
							type='text'
							placeholder='Ваше имя'
							className='w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-black transition-colors'
							required
						/>
						<input
							type='tel'
							placeholder='Ваш телефон'
							className='w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-black transition-colors'
							required
						/>
						<div className='flex gap-4'>
							<input
								type='number'
								min='1'
								placeholder='Взрослых'
								className='w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-black transition-colors'
							/>
							<input
								type='number'
								min='0'
								placeholder='Детей'
								className='w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-black transition-colors'
							/>
						</div>
						<input
							type='text'
							placeholder='Куда хотите поехать?'
							className='w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-black transition-colors'
						/>
						<textarea
							placeholder='Прочие пожелания на организацию отдыха'
							rows={4}
							className='w-full px-6 py-3 rounded-3xl border border-gray-300 focus:outline-none focus:border-black transition-colors resize-none'
						/>
					</div>
					<button
						type='submit'
						className='w-full flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors'
					>
						<span>Отправить заявку</span>
						<svg
							width='20'
							height='20'
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
					</button>
				</form> */}
			</div>

			<hr className='border-t border-secondary mt-12 md:mt-16' />
		</section>
	)
}

export default Contacts
