import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-link-container']
    if (isActive) classes.push('nav-link-container--active')
    return classes.join(' ')
  }
  return (
    <nav className='nav-bar'>
      <NavLink
        className={navLinkClass}
        to='/'
      >
        Página Principal
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/lightbulb'
      >
        Ampolleta
      </NavLink>
    </nav>
  )
}
 
export default NavBar
