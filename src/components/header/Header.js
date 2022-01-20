import HeaderMenu from '../headerMenu/HeaderMenu';
import SearchPanel from '../searchPanel/SearchPanel';

import './header.scss';

const Header = () => {
    return (
        <header className='header'>
            <HeaderMenu />
            <SearchPanel />
        </header>
    )
}

export default Header;