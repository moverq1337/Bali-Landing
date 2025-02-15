import { ManagerContact, NavLink } from '../types'

export const NAV_LINKS: NavLink[] = [
	{ href: '#hero', label: 'Главная' },
	{ href: '#features', label: 'О нас' },
	{ href: '#contacts', label: 'Контакты' },
]

export const MANAGER_CONTACTS: ManagerContact[] = [
	{ name: 'Елена', position: 'менеджер', phone: '+7 903 649-61-00' },
	{ name: 'Вячеслав', position: 'менеджер', phone: '+7 906 519-10-00' },
	{ name: 'Сергей', position: 'Ген. Директор', phone: '+7 903 649-01-40' },
]
