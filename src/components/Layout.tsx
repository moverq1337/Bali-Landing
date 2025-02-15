import { FC } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Contacts from './sections/Contacts'
import Features from './sections/Features'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Hero from './sections/Hero'

const Layout: FC = () => {
	const notify = () => toast('Wow so easy!')

	return (
		<div className='min-h-screen flex flex-col bg-[#FFFCF1]'>
			<Header />
			<hr className='border-t border-secondary' />
			<main className='flex-grow'>
				<Hero />
				<Features />
				<Contacts />
				<hr className='border-t border-secondary' />
			</main>
			<Footer />
			<ToastContainer />
		</div>
	)
}

export default Layout
