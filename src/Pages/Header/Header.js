import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1>Wellcome to shadhinbazar</h1>
            <nav>
                <a href="shop">Shop</a>
                <a href="dress">Dress</a>
                <a href="medicine">Mrdicine</a>
                <a href="cosmetic">Cosmetic</a>
                <input type="text" name="search" id="" />
            </nav>


        </div>
    );
};

export default Header;