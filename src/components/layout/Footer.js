import React from 'react'

const Footer = () => {

  return (
    <div className='row'>
      <div className='col mobile-show fixed-bottom'>
        <div className='row bg-dark py-2'>
          <div className='col-3 text-center'>
            <img alt='SETIMAGE' width='25px' src='/images/home-footer-1.svg' />
            <div className='text-danger'>Beranda</div>
          </div>
          <div className='col-3 text-center'>
            <img alt='SETIMAGE' width='25px' src='/images/home-footer-2.svg' />
            <div className='text-white text-content'>Beranda</div>
          </div>
          <div className='col-3 text-center'>
            <img alt='SETIMAGE' width='25px' src='/images/home-footer-3.svg' />
            <div className='text-white text-content'>Beranda</div>
          </div>
          <div className='col-3 text-center'>
            <img alt='SETIMAGE' width='25px' src='/images/home-footer-4.svg' />
            <div className='text-white text-content'>Beranda</div>
          </div>
        </div>
      </div>

      <div className='col-12 bg-success py-4 text-center text-white'>
        Copyright Pragmatic88
      </div>
      <div className='mobile-show'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}

export default Footer