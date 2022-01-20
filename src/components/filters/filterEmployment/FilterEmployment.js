import CustomCheckbox from "../../common/customCheckbox/CustomCheckbox"
import FilterBlock from './../../common/filterWrapBlock/FilterWrapBlock';

import './filterEmployment.scss';

const FilterEmployment = () => {

    const employmentBlock = [
        { clazz: 'employment', title: 'Полная занятость', name: 'em1', num: '  34567' },
        { clazz: 'employment', title: 'Неполная занятость', name: 'em2', num: '876' },
        { clazz: 'employment', title: 'Удаленная работа', name: 'em3', num: '1214' },
    ]

    const employmentItem = employmentBlock.map(({ clazz, name, title, num }) => {
        return (
            <CustomCheckbox
                key={name}
                clazz={clazz}
                name={name}
                title={title}
                num={num} />
        )
    })

    return (
        <FilterBlock title='Тип занятости' clazz='employment'>
            {employmentItem}
        </FilterBlock>
    )
}

export default FilterEmployment;