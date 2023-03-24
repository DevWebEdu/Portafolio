import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

export default function AllLayout() {
    // crearemos una variable para activar la animacion del boton de navegacion
    const [booleanMenu, setBooleanMenu] = useState(true)

    const handleMenuActive = () =>{
        setBooleanMenu(!booleanMenu)
    }

    return (
        <div className='d-flex vh-100 vw-100'>
                <NavBar className='' handleMenu={booleanMenu}/>              
                <div className='  container-child-style container-father'>
                    {
                        booleanMenu ? 
                        (<button className='hamburger' onClick={handleMenuActive}> x </button>) :
                        (<button className='hamburger' onClick={handleMenuActive}> - </button>)
                    }
                    
                    <Outlet/>
                </div >
        </div>
    )
}
