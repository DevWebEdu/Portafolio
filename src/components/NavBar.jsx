import React from 'react'
import { NavLink } from 'react-router-dom'


export default function NavBar({handleMenu}) {
    console.log(handleMenu)
    return (
        <>
        {
            handleMenu && (
                        <nav className='navbar navbar-dark  px-4 w-auto d-inline-block h-100 nav-style'>
                    
                    <ul className='navbar-nav'>
                        <li className='nav-item' id="navbarNav">
                            <NavLink to='/' className='nav-link '>
                                Me
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/Projects' className='nav-link '>
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/Contact' className='nav-link '>
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                </nav>
                    )
                }
        </>        
    )
}
