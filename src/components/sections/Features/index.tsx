import { FC } from 'react'
import { SectionProps } from '../../../types'

const Features: FC<SectionProps> = ({ className = '' }) => {
	return (
		<section className={`px-4 md:px-8 ${className}`}>
			<hr className='border-t border-secondary mb-12 md:mb-16' />
			<div className='w-full flex flex-col md:flex-row gap-8 md:gap-12'>
				<div className='relative w-full md:w-1/2 min-h-[300px] sm:min-h-[350px] md:min-h-[400px]'>
					<img
						src='/2.png'
						alt='Пляж Бали'
						className='w-full h-full aspect-[4/3] object-cover rounded-lg shadow-lg'
						loading='eager'
						decoding='async'
						width={800}
						height={600}
					/>
				</div>
				<div className='w-full -mt-4 sm:-mt-20 md:mt-0 lg:mt-12 md:w-1/2 space-y-6 md:space-y-8 text-center'>
					<h3 className='font-main text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
						Выгодные цены
					</h3>
					<ul className="space-y-4 text-sm sm:text-base md:text-lg font-['Montserrat']">
						<li>• У нас Вы всегда сможете найти лучшие предложения</li>
						<li>• Индивидуальный подход к каждому клиенту</li>
						<li>• Мы очень тщательно подходим к пожеланиям каждого клиента</li>
						<li>• Надежность и честность</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Features
