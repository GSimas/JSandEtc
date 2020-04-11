import React from 'react';

import NavBar from './NavBar';

const Header = () => {
    return (
        <div>
            <div className='bg-gray-200'>
                <h1>
                    <img className='h-24 mx-auto py-4' src='./logo.png' alt='logo'height='60' />
                </h1>
            </div>
            <NavBar />
        </div>
        )
    }
    
    export default Header