import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar ' style={{height:"4rem"}}>
        <div className="container-fluid">
            <a href="" className="navbar-brand text-white fw-bold">CodePen</a>
            <div className="" id="navbarNavDropdown">
            <ul className='navbar-nav' >
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
            </ul>
          </div>
            
            
           
        </div>
    </nav>
  )
}

export default Navbar