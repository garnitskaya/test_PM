import FilterToggle from "../../common/filterToggle/FilterToggle";

import './filterWithPhoto.scss';

const FilterWithPhoto = (props) => {
    return (
        <FilterToggle
            clazz='filters-photo'
            name='photo'
            title='Только с фотографией'
            onChangeInput={props.onChangeFilter}
        />
    )
}
export default FilterWithPhoto;