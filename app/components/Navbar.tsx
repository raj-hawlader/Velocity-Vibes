import Image from 'next/image'
import React from 'react'
import logo from '@/app/assets/velocity.jpg'

const Navbar = () => {
  return (
    <section>
        <div className='container'>
            <div className='grid grid-cols-2'>
                <Image src={logo} alt='company logo'
                    className='h-12 w-auto'
                />
                <div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar