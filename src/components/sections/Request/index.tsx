import React, { ChangeEvent, FormEvent, useState } from 'react'

// Тип для данных формы
interface FormData {
	name: string
	phone: string
	adults: number
	children: number
	destination: string
	wishes: string
}

// Тип для props компонента
interface RequestProps {
	className?: string
	onClose?: () => void
}

// Тип для кастомного Button
interface ButtonProps {
	type?: 'button' | 'submit' | 'reset'
	className?: string
	children: React.ReactNode
}

const Request: React.FC<RequestProps> = ({ className, onClose }) => {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		phone: '',
		adults: 0, // Начальное значение 0, но будет отображаться как пустое
		children: 0, // Начальное значение 0, но будет отображаться как пустое
		destination: '',
		wishes: '',
	})

	const [error, setError] = useState<string | null>(null)
	const [success, setSuccess] = useState<string | null>(null)

	// Обработка изменений в полях формы
	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]:
				name === 'adults' || name === 'children'
					? value === '' // Если поле пустое, устанавливаем 0
						? 0
						: Number(value) || 0 // Преобразуем в число или 0, если некорректно
					: value,
		}))
	}

	// Обработка отправки формы
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setError(null)
		setSuccess(null)

		try {
			const response = await fetch(
				'https://request.smol-bali.ru/submit-request',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				}
			)

			if (!response.ok) {
				throw new Error('Ошибка при отправке заявки')
			}

			const result = await response.json()
			setSuccess(result.message) // "Заявка успешно отправлена"
			// Сбрасываем форму после успешной отправки
			setFormData({
				name: '',
				phone: '',
				adults: 0, // Сброс на 0
				children: 0, // Сброс на 0
				destination: '',
				wishes: '',
			})
			// Call onClose if provided
			if (onClose) {
				onClose()
			}
		} catch (err) {
			setError(
				err instanceof Error ? err.message : 'Произошла неизвестная ошибка'
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
					Заявка автоматически попадет к менеджеру турагентства и с Вами
					свяжутся в ближайшее время
				</p>

				{/* Отображение сообщений об успехе или ошибке */}
				{success && (
					<p className='text-green-600 text-center mb-4'>{success}</p>
				)}
				{error && <p className='text-red-600 text-center mb-4'>{error}</p>}
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
								value={formData.adults === 0 ? '' : formData.adults} // Если 0, показываем пустую строку
								onChange={handleChange}
								min='0'
								placeholder='Взрослых'
								className='w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-black transition-colors'
							/>
							<input
								type='number'
								name='children'
								value={formData.children === 0 ? '' : formData.children} // Если 0, показываем пустую строку
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
					<div className='flex items-center gap-2 text-sm text-gray-500'>
						Нажимая на кнопку «Отправить заявку», я соглашаюсь с политикой
						обработки персональных данных
					</div>
					<Button
						type='submit'
						className='w-full flex items-center justify-center gap-2'
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

// Мокаем компонент Button
const Button: React.FC<ButtonProps> = ({ type, className, children }) => (
	<button
		type={type}
		className={`${className} bg-black text-white py-3 rounded-full transition-colors hover:bg-gray-800`}
	>
		{children}
	</button>
)

export default Request
