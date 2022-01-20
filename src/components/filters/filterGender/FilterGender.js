import FilterBlock from './../../common/filterWrapBlock/FilterWrapBlock';

import './filterGender.scss';

const FilterGender = () => {
    return (
        <FilterBlock title='Пол' clazz='gender '>
            <div className='gender__container'>
                <div className='gender__item'>
                    <input className='gender__item-input' type='radio' name="radio" id='any' value='any' />
                    <label className='gender__item-label' htmlFor='any'>Любой </label>
                </div>
                <div className='gender__item'>
                    <input className='gender__item-input' type='radio' name='radio' value='female' id='female' />
                    <label className='gender__item-label' htmlFor="female">Женщины</label>
                </div>
                <div className='gender__item'>
                    <input className='gender__item-input' type='radio' name='radio' value='male' id='male' />
                    <label className='gender__item-label' htmlFor="male">Мужчины  </label>
                </div>
            </div>
        </FilterBlock>
    )
}

export default FilterGender;