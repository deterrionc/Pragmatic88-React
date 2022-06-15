import React from 'react'

const Header = () => {

  return (
    <div className='header row bg-black border-bottom border-success'>
      <div className='container'>
        <div className='row py-4'>
          {/* <div className='col-12'>
            <div className='d-flex align-items-center justify-content-between'>
              <img alt='SETIMAGE' src='/images/logo.png' className='img-fluid logo-header' />
              <div>
                <button className='btn bg-success text-white mx-1'>Daftar</button>
                <button className='btn btn-primary text-white mx-1'>Masuk</button>
              </div>
            </div>
          </div> */}
          <div className='col-12 text-center'>
            <img alt='SETIMAGE' src='/images/logo.png' className='img-fluid logo-header' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header