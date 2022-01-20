import './customCheckbox.scss';

const CustomCheckbox = ({ clazz, title, name, value = name, num, type = 'checkbox', children }) => {
    return (
        <div className={`${clazz}-block custom-checkbox`}>
            <label htmlFor={value}>
                <input className={`${clazz}-block__checkbox custom-checkbox__input`} type={type} id={value} name={name} value={value} />
                <span className={`${clazz}-block__custom custom-checkbox__item`}></span>
                <span className={`${clazz}-block__label custom-checkbox__label`}>{title}</span>
            </label>
            <span className={`${clazz}-block_num custom-checkbox__num`}>
                {num}
            </span>
            {children}
        </div>
    )
}

export default CustomCheckbox;