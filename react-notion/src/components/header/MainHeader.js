import './MainHeader.scss';
import MenuIcon from '../../assets/icons/mdi_dehaze.svg';
import Button from '../button/Button';

function MainHeader({ history }) {
    return (
        <header className="main-header">
            <img className="main-header__icon" src={MenuIcon} alt="menu icon"/>
            <nav className="main-header__nav">
                <Button text="[ON SOPT] Web Part" onClickFunc={() => history.push('/')}></Button>
                <Button text="👩‍💻 파트원 소개 👨‍💻" onClickFunc={() => history.push('/members')}></Button>
            </nav>
            <div className="empty"></div>
            <div className="main-header__nav">
                <Button text="Share"></Button>
                <Button text="Updates"></Button>
                <Button text="Favorites"></Button>
                <Button text="…"></Button>
            </div>
        </header>
    );
}


export default MainHeader;