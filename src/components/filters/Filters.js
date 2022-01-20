import { useSelector } from 'react-redux';

import FilterAge from './filterAge/FilterAge';
import FilterWithPhoto from './filterWithPhoto/FilterWithPhoto';
import FilterGender from './filterGender/FilterGender';
import FilterSalary from './filtersSalary/FilterSalary';
import FilterExperience from './filterExperience/FilterExperience';
import FilterLanguages from './filterLanguages/FilterLanguages';
import FilterEmployment from './filterEmployment/FilterEmployment';
import FilterEducation from './filterEducation/FilterEducation';

import './filters.scss';

const Filters = (props) => {
    const filterShow = useSelector(state => state.filterShow);

    const activeShowFilter = filterShow ? 'filters__active' : '';

    return (
        <form className={`filters ${activeShowFilter}`}>
            <h3 className='filters__title'>Фильтры</h3>
            <FilterWithPhoto onChangeFilter={props.onChangeFilter} />
            <FilterAge />
            <FilterGender />
            <FilterSalary />
            <FilterExperience />
            <FilterLanguages />
            <FilterEmployment />
            <FilterEducation />
        </form>
    )
}

export default Filters;