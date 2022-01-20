import CustomCheckbox from '../../common/customCheckbox/CustomCheckbox';
import './languagesChoice.scss';

const LanguagesChoice = () => {

    const languagesChoiceBlock = [
        { clazz: 'languages-choice', title: '(А1) – начальный', name: 'languages', value: 'a1', num: '73', type: 'radio' },
        { clazz: 'languages-choice', title: '(А2) – ниже среднего', name: 'languages', value: 'a2', num: '73', type: 'radio' },
        { clazz: 'languages-choice', title: '(В1) – средний', name: 'languages', value: 'a3', num: '73', type: 'radio' },
        { clazz: 'languages-choice', title: '(В2) – выше среднего', name: 'languages', value: 'a4', num: '73', type: 'radio' },
        { clazz: 'languages-choice', title: '(C1) – продвинутый', name: 'languages', value: 'a5', num: '73', type: 'radio' },
        { clazz: 'languages-choice', title: '(C2) – профессиональный уровень владения', name: 'languages', value: 'a6', num: '73', type: 'radio' }
    ]

    const languagesChoiceItem = languagesChoiceBlock.map(({ clazz, name, value, title, num, type }) => {
        return (
            <CustomCheckbox
                key={value}
                clazz={clazz}
                name={name}
                value={value}
                title={title}
                num={num}
                type={type} />
        )
    })


    return (
        <div className='languages-choice'>
            {languagesChoiceItem}
        </div>)
}

export default LanguagesChoice;