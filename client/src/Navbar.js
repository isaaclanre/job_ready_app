import React from 'react'
import { Link } from 'react-router-dom';
import './AdminPage.css';


const Navbar = () => {
  return (
    <>
    <nav>
        <ul>
            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to='/admin'>
                <li>Admin dashboard</li>
            </Link>
            <Link to='/profile'>
                <li>profile</li>
            </Link>    
            <Link className='div1' to='/'>
                    <li>Logout</li>
            </Link>
            <Link className='div1' to='/hire'>
                    <li>Hire Me</li>
            </Link>
        
        </ul>
    </nav>


    </>
  )
}

export default Navbar
