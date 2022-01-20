import { useSelector, useDispatch } from 'react-redux';
import { setShowPopup } from '../../reducers/appReducer';

import Person from './../person/Person';

import './personsList.scss';

const PersonsList = () => {
    const { persons, showPopup, idPopup } = useSelector(state => state);
    const dispatch = useDispatch();

    const onShowPopup = (id) => {
        dispatch(setShowPopup(showPopup, id));
    }
    const renderItem = persons.map(item => {
        const { id } = item;
        return (
            <Person
                key={id}
                showPopup={showPopup}
                item={item}
                idPopup={idPopup}
                onShowPopup={() => onShowPopup(id)} />
        )
    })

    return <ul className='person__list'>
        {renderItem}
    </ul>;
}

export default PersonsList;