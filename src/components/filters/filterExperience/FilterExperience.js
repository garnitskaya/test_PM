import CustomCheckbox from "../../common/customCheckbox/CustomCheckbox";
import FilterBlock from './../../common/filterWrapBlock/FilterWrapBlock';
import FilterToggle from "../../common/filterToggle/FilterToggle";

import './filterExperience.scss';

const FilterExperience = () => {

    const experienceBlock = [
        { clazz: 'experience', title: 'Без опыта', name: 'ex1', num: '603' },
        { clazz: 'experience', title: 'До 1 года', name: 'ex2', num: '603' },
        { clazz: 'experience', title: 'От 1 до 2 лет', name: 'ex3', num: '603' },
        { clazz: 'experience', title: 'От 2 до 5 лет', name: 'ex4', num: '603' },
        { clazz: 'experience', title: 'От 5 до 10 лет', name: 'ex5', num: '603' },
        { clazz: 'experience', title: 'Более 10 лет', name: 'ex6', num: '603' }
    ]

    const experienceItem = experienceBlock.map(({ clazz, name, title, num }) => {
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
        <FilterBlock title='Опыт работы' clazz='experience'>
            {experienceItem}
            <FilterToggle clazz='experience'
                name='ex7'
                title='Только студенты' />
        </FilterBlock>
    )
}

export default FilterExperience;