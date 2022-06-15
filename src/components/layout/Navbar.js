import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='top-navbar'>
      <div className='bg-nav bg-dark row py-1'>
        <div className='container'>
          <div className='d-flex align-items-center justify-content-between py-1'>
            <div className='web-nav'>
              <Link to='/' className='mx-2'>Beranda</Link>
              <Link to='/' className='mx-2'>Sports</Link>
              <Link to='/' className='mx-2'>Slots</Link>
              <Link to='/' className='mx-2'>Casino</Link>
              <Link to='/' className='mx-2'>Poker</Link>
            </div>
            <div></div>
            <div className='mobile-nav'>
              <div className='dropdown'>
                <button type='button' className='btn dropdown-toggle' data-toggle='dropdown'>
                  MENU <i className='fa fa-bars h1 ml-2'></i>
                </button>
                <div className="dropdown-menu">
                  <p className="dropdown-item"><Link to='/' className='mx-2'>Beranda</Link></p>
                  <p className="dropdown-item"><Link to='/' className='mx-2'>Sports</Link></p>
                  <p className="dropdown-item"><Link to='/' className='mx-2'>Slots</Link></p>
                  <p className="dropdown-item"><Link to='/' className='mx-2'>Casino</Link></p>
                  <p className="dropdown-item"><Link to='/' className='mx-2'>Poker</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
