import { FC } from 'react'
import { SectionProps } from '../../../types'

const Hero: FC<SectionProps> = ({ className = '' }) => {
	return (
		<section
			className={`relative px-4 md:px-8 py-8 md:py-16 h-screen ${className}`}
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

			{/* Картинки показываются только на md и больше */}
			<div className='hidden md:block absolute top-0 right-0 w-full h-full'>
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
