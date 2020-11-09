import React from 'react';
import './MainHeader.scss';
import Button from '../button/Button';

const MainHeader = ({ history }) => {
    return (
        <header className="main-header">
            <img className="main-header-icon" alt="icon"/>
            <nav className="main-header__nav">
                <Button text="[ON SOPT] Web Part" onClickFunc={() => history.push('/')}></Button>
                <span> / </span>
                <Button text="파트원 소개" onClick={() => history.push('/members')}></Button>
            </nav>
            <div className="empty"></div>
            <div className="main-header__nav">
                <Button text="Share"></Button>
                <Button text="Updates"></Button>
                <Button text="Favorites"></Button>
                <Button text="..."></Button>
            </div>
        </header>
    );
};

export default MainHeader;