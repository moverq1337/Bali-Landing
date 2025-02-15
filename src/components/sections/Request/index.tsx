import { FC, useState } from 'react'
import { toast } from 'react-toastify'
import { SectionProps } from '../../../types'
import Button from '../../ui/Button'

const TELEGRAM_API = import.meta.env.VITE_APP_TELEGRAM_API ?? ''
const USER_ID = import.meta.env.VITE_APP_USER_ID ?? ''

const Request: FC<SectionProps> = ({ className = '', onClose }) => {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		adults: '',
		children: '',
		destination: '',
		wishes: '',
	})

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		if (!TELEGRAM_API || USER_ID === '') {
			toast.error(
				'Ошибка конфигурации. Пожалуйста, свяжитесь с администратором.'
			)
			return
		}

		const text = `
📌 Новая заявка на тур:
👤 Имя: ${formData.name}
📞 Телефон: ${formData.phone}
👥 Количество человек: ${formData.adults} взрослых, ${formData.children} детей
🌍 Направление: ${formData.destination}
📝 Пожелания: ${formData.wishes}
		`

		try {
			// Отправка сообщения Славе и Егору
			await Promise.all([
				fetch(TELEGRAM_API, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ chat_id: USER_ID, text }),
				}),
			])

			setFormData({
				name: '',
				phone: '',
				adults: '',
				children: '',
				destination: '',
				wishes: '',
			})

			if (onClose) onClose()
			toast.success(
				'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.'
			)
		} catch (error) {
			console.error('Ошибка отправки:', error)
			toast.error(
				'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.'
			)
		}
	}

	return (
		<section className={`px-4 md:px-8 py-8 md:py-16 ${className}`}>
			<div className='max-w-2xl mx-auto'>
				<h2 className="text-2xl md:text-3xl lg:text-4xl font-['DelaGothicOne'] text-center mb-4">
					Заявка на поиск тура
				</h2>
				<p className="text-center text-gray-600 mb-8 font-['Montserrat']">
					Заявка автоматически попадет к менеджеру турагенства и с Вами свяжутся
					в ближайшее время
				</p>
				<form onSubmit={handleSubmit} className='space-y-6'>
					<div className='space-y-4'>
						<input
							type='text'
							name='name'
							value={formData.name}
							onChange={handleChange}
							placeholder='Ваше имя'
							className='w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-black transition-colors'
							required
						/>
						<input
							type='tel'
							name='phone'
							value={formData.phone}
							onChange={handleChange}
							placeholder='Ваш телефон'
							className='w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-black transition-colors'
							required
						/>
						<div className='flex gap-4'>
							<input
								type='number'
								name='adults'
								value={formData.adults}
								onChange={handleChange}
								min='1'
								placeholder='Взрослых'
								className='w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-black transition-colors'
							/>
							<input
								type='number'
								name='children'
								value={formData.children}
								onChange={handleChange}
								min='0'
								placeholder='Детей'
								className='w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-black transition-colors'
							/>
						</div>
						<input
							type='text'
							name='destination'
							value={formData.destination}
							onChange={handleChange}
							placeholder='Куда хотите поехать?'
							className='w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-black transition-colors'
						/>
						<textarea
							name='wishes'
							value={formData.wishes}
							onChange={handleChange}
							placeholder='Прочие пожелания на организацию отдыха'
							rows={4}
							className='w-full px-6 py-3 rounded-3xl border border-gray-300 focus:outline-none focus:border-black transition-colors resize-none'
						/>
					</div>
					<Button
						type='submit'
						className='w-full flex items-center justify-center gap-2'
						variant='primary'
						size='lg'
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
					</Button>
				</form>
			</div>
		</section>
	)
}

export default Request
