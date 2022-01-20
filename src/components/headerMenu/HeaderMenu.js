import { useSelector, useDispatch } from 'react-redux';
import { setSelectLanguageShow } from '../../reducers/appReducer';

import glyphNetwork from '../../resources/icon/glyph_network.svg';
import ItemForm from '../common/itemForm/ItemForm';

import './headerMenu.scss';

const HeaderMenu = () => {
    const selectLanguageShow = useSelector(state => state.selectLanguageShow);
    const dispatch = useDispatch();

    const selectLanguage = [
        { name: 'language', value: 'ru' },
        { name: 'language', value: 'ua' },
        { name: 'language', value: 'en' }
    ]

    const itemtLanguage = selectLanguage.map(({ name, value }) => {
        return (
            <ItemForm
                key={value}
                name={name}
                value={value}
                title={value}
            />)
    })

    const onShowLanguage = () => {
        dispatch(setSelectLanguageShow(selectLanguageShow));
    }

    const languageActive = selectLanguageShow ? 'active' : '';

    return (
        <nav className='header__menu'>
            <div className='header__wrap'>
                <ul>
                    <li><a className='header__link' href="s#">Соискатель</a></li>
                    <li><a className='header__link active' href="s#">Работодатель</a></li>
                    <li><a className='header__link' href="s#">HR</a></li>
                </ul>
            </div>
            <div className='header__block'>
                <img className='header__icon' src={glyphNetwork} alt="network" />

                <form onClick={onShowLanguage} className={`header__select select ${languageActive}`} >
                    <div className='select__title' >ru</div>
                    <div className='select__content'>
                        {itemtLanguage}
                    </div>
                </form>
            </div>
            <div className='header__login'>
                <a href="s#">Войти</a>
            </div>
        </nav>
    )
}

export default HeaderMenu;