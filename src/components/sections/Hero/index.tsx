import { FC } from 'react'
import { SectionProps } from '../../../types'

const Hero: FC<SectionProps> = ({ className = '' }) => {
	return (
		<section
			className={`relative px-4 mb-2 md:px-8 py-8 md:py-16 h-screen ${className}`}
		>
			<div className='relative z-10 flex flex-col items-center md:items-start pt-[12vh] md:pt-[15vh]'>
				<h1 className='text-center md:text-left'>
					<span className="block text-2xl md:text-2xl lg:text-3xl font-['DelaGothicOne'] leading-tight">
						Туристическое агентство
					</span>
					<div className="text-8xl sm:text-8xl md:text-8xl lg:text-[14rem] font-['DelaGothicOne'] leading-none">
						Бали
					</div>
				</h1>
				<p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-600 mt-4 font-['Montserrat'] text-center md:text-left">
					Самые лучшие впечатления
				</p>
			</div>
			<div className='flex flex-col md:flex-row lg:flex-row  mt-24  items-center text-main font-text md:items-start'>
				<a
					href='https://api.whatsapp.com/send?phone=79065191000'
					className='flex items-center'
				>
					<img src='/wa.svg' alt='whatsapp' />
					<span>WhatsApp</span>
				</a>

				<a href='https://t.me/bali_agency' className='flex items-center'>
					<img src='/tg.svg' alt='telegram' />
					<span>Телеграм </span>
				</a>
				<a href='https://vk.com/bali_smol' className='flex items-center'>
					<img src='/vk.svg' alt='vkontakte' />
					<span>ВКотнакте </span>
				</a>
			</div>

			{/* Картинки показываются только на md и больше */}
			<div className='hidden md:block  top-0 right-0 w-full h-full'>
				<div className='absolute right-[12%] top-[10%] w-[200px] md:w-[200px] lg:w-[400px] h-[150px] md:h-[150px] lg:h-[300px]'>
					<img
						src='/new.png'
						alt='Великая стена'
						className='w-full h-full object-cover rounded-lg shadow-lg'
					/>
				</div>
				<div className='absolute right-[5%] top-[35%] w-[180px] md:w-[180px] lg:w-[300px] h-[180px] md:h-[180px] lg:h-[300px]'>
					<img
						src='/new2.png'
						alt='Мечеть'
						className='w-full h-full object-cover rounded-lg shadow-lg'
					/>
				</div>
			</div>
		</section>
	)
}

export default Hero
