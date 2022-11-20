import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import Hero from './hero'

// Our main Layout

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
			<Hero/>
      {children}
      <Footer />
    </>
  )
}

export default Layout
