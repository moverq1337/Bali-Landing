export const formatPhoneNumber = (phone: string): string => {
	// Форматирование номера телефона
	return phone.replace(
		/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
		'+$1 ($2) $3-$4-$5'
	)
}

export const classNames = (...classes: string[]): string => {
	return classes.filter(Boolean).join(' ')
}
