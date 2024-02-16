import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './style.css';

function Navbar() {
  return (
    <div className='navbar-container'>
        <Link href='/'>
        <Image className='image' width='79' height='79' src='https://img.freepik.com/premium-vector/meme-logo-m-letter-logo-smiling-logo_644562-4.jpg?w=740' alt='Meme logo'/>
        </Link>
      <h1>Meme maker</h1>
    </div>
  )
}

export default Navbar;
