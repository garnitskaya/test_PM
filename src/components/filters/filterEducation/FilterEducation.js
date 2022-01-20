import CustomCheckbox from "../../common/customCheckbox/CustomCheckbox";
import FilterBlock from './../../common/filterWrapBlock/FilterWrapBlock';

import './filterEducation.scss';

const FilterEducation = () => {

    const educationBlock = [
        { clazz: 'education', title: 'Высшее', name: 'ed1', num: '34567' },
        { clazz: 'education', title: 'Неоконченное высшее', name: 'ed2', num: '34567' },
        { clazz: 'education', title: 'Средне-специальное', name: 'ed3', num: '34567' },
        { clazz: 'education', title: 'Среднее', name: 'ed4', num: '34567' },
    ]

    const educationItem = educationBlock.map(({ clazz, name, title, num }) => {
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
        <FilterBlock title='Образование' clazz='education'>
            {educationItem}
        </FilterBlock>
    )
}

export default FilterEducation;