import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectShowTime, setFilterShow } from '../../reducers/appReducer';

import ItemForm from '../common/itemForm/ItemForm';
import Paginator from '../paginator/Paginator';
import PersonsList from './../personsList/PersonsList';

import './mainContainer.scss';


const MainContainer = () => {
    const { selectShow, filterShow, totalCount } = useSelector(state => state);
    const dispatch = useDispatch();

    const onShowSelect = () => {
        dispatch(selectShowTime(selectShow));
    }

    const onShowFilters = () => {
        dispatch(setFilterShow(filterShow));
    }

    const selectActive = selectShow ? 'active' : '';

    const selectTime = [
        { name: 'time', value: 'all', title: 'за все время' },
        { name: 'time', value: 'fourteen', title: 'за 14 дней' },
        { name: 'time', value: 'seven', title: 'за 7 дней' },
        { name: 'time', value: 'today', title: 'за сегодня' },
    ]

    const itemtTime = selectTime.map(({ name, value, title }) => {
        return (
            <ItemForm
                key={value}
                name={name}
                value={value}
                title={title}
            />)
    })

    return (
        <main className='main'>
            <h1 className='main__title'>Мы подобрали <span>{totalCount}</span> резюме</h1>
            <hr className='main__line' />
            <div className='main__block'>
                <div className='main__subtitle'>Резюме продавец консультант во Всей Украине</div>
                <form >
                    <div onClick={onShowSelect} className={`main__select select ${selectActive}`}>
                        <div className='select__title' >за все время</div>
                        <div className='select__content'>
                            {itemtTime}
                        </div>
                    </div>
                </form>
                <div onClick={onShowFilters} className='filter__btn'></div>
            </div>
            <PersonsList />
            <Paginator />
        </main>
    )
}

export default MainContainer;