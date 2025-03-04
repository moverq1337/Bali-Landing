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
						Заявка будет передана менеджеру, и он свяжется с Вами в ближайшее
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
			</div>

			<hr className='border-t border-secondary mt-12 md:mt-16' />
		</section>
	)
}

export default Contacts
