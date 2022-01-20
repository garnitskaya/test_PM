import FilterBlock from './../../common/filterWrapBlock/FilterWrapBlock';
import FilterRange from '../../common/filterRange/FilterRange';

const FilterAge = () => {
    return (
        <FilterBlock title='Возраст' clazz='age'>
            <FilterRange
                nameMax='max-age'
                nameMin='min-age'
                valueMax='40'
                valueMin='18'
                unit='лет' />
        </FilterBlock>
    )
}

export default FilterAge;