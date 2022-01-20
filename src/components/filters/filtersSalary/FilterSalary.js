import FilterBlock from './../../common/filterWrapBlock/FilterWrapBlock';
import FilterRange from "../../common/filterRange/FilterRange";
import FilterToggle from "../../common/filterToggle/FilterToggle";

import './filterSalary.scss';

const FilterSalary = () => {
    return (
        <FilterBlock title='Желаемая зарплата' clazz='salary'>
            <FilterRange
                nameMax='max'
                nameMin='min'
                valueMax='10000'
                valueMin='0'
                unit='грн' />
            <FilterToggle
                clazz='salary'
                name='salary-hide'
                title='Не показывать без зарплаты' />
        </FilterBlock>
    )
}

export default FilterSalary;