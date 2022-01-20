import moment from 'moment';

import heart from '../../resources/icon/heart.svg';
import noPhoto from '../../resources/img/no_photo.png';

import './person.scss';

const Person = ({ item, onShowPopup, idPopup, showPopup }) => {

    const { id, name, desiredposition, age, updated, visibility, photo, workexperience } = item;

    const visibilityItem = visibility ? <span className='online' >Онлайн</span> : <span className='offline'>Не в сети</span>;
    const photoItem = photo ? photo : noPhoto;

    const difference = (from, to = []) => {
        const dateFrom = moment(from);
        const dateTo = moment(to);
        return dateFrom.to(dateTo, true);
    }

    const updatedData = (from, to = []) => {
        let start = moment(from);
        let end = moment(to);
        return end.to(start)
    }

    const personWork = workexperience.map(({ id, position, company_name, date_from, date_to }, i) => {
        // eslint-disable-next-line
        if (i > 1) return;
        return (
            <div key={id} className='person__work-item'>{position}  {company_name} - {difference(date_from, date_to)}</div>
        )
    })

    const activePopup = id === idPopup && showPopup ? 'active' : '';

    return (
        <li className='person' key={id}>
            <div className='person__wrap'>
                <div className='person__img'>
                    <img src={photoItem} alt='photo_profile' />
                </div>
                <h3 className='person__title'>{desiredposition}</h3>
                <div className='person__info'>
                    <div className='person__info-data'>{name}, {difference(age)} </div>
                    <div className='person__info-location'>Kyiv, Ukraine</div>
                </div>
                <div className='person__work'>
                    {personWork}
                </div>
                <div className='person__status'>Обновлено {updatedData(updated)}  {visibilityItem}</div>
                <div className='person__block'>
                    <div className='person__block-item  heart'>
                        <img src={heart} alt="favorite" />
                    </div>
                    <div onClick={onShowPopup} className='person__block-item'><span>...</span></div>
                    <div className={`person__block-popup  ${activePopup}`}>
                        <a href='s#'>Пожаловаться</a>
                        <a href='s#'>Скрыть кандидата</a>
                    </div>
                </div>
            </div>
        </li>
    )
}




export default Person;