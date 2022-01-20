import { useDispatch, useSelector } from 'react-redux';
import { setActiveLanguageItems } from '../../../reducers/appReducer';

import CustomCheckbox from "../../common/customCheckbox/CustomCheckbox"
import FilterBlock from './../../common/filterWrapBlock/FilterWrapBlock';
import LanguagesChoice from "../languagesChoice/LanguagesChoice"

import './filterLanguages.scss';

const FilterLanguages = () => {
    const { idLanguageItems, activeLanguageItems } = useSelector(state => state);
    const dispatch = useDispatch();

    const onShowlanguages = (id) => {
        dispatch(setActiveLanguageItems(activeLanguageItems, id));
    }

    const languagesBlock = [
        {
            clazz: 'en languages', title: 'Английский', name: 'lang1', num: '603', children: <LanguagesChoice />, active: true
        },
        { clazz: 'ru languages', title: 'Русский', name: 'lang2', num: '603', active: false },
        { clazz: 'ua languages', title: 'Украинский', name: 'lang3', num: '603', active: false },
        { clazz: 'de languages', title: 'Немецкий', name: 'lang4', num: '603', active: false },
        { clazz: 'pl languages', title: 'Польский', name: 'lang5', num: '603', active: false },
        { clazz: 'es languages', title: 'Испанский', name: 'lang6', num: '603', active: false }
    ]

    const languagesItem = languagesBlock.map(({ clazz, name, title, num, children, active }) => {
        const activeClazz = idLanguageItems === name && activeLanguageItems && active ? 'active' : '';

        return (
            <div onClick={() => onShowlanguages(name)} key={name} className={`languages__wrap ${activeClazz}`}>
                <CustomCheckbox
                    clazz={clazz}
                    name={name}
                    title={title}
                    num={num} >
                    {children}
                </CustomCheckbox>
            </div>
        )
    })


    return (
        <FilterBlock title='Владение языками' clazz='languages'>
            {languagesItem}
        </FilterBlock >)
}

export default FilterLanguages;