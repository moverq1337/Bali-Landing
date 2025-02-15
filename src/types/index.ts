export interface NavLink {
	href: string
	label: string
}

export interface ManagerContact {
	name: string
	position: string
	phone: string
}

export interface SectionProps {
	className?: string
	onClose?: () => void
}
