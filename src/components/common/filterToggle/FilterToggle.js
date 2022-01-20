import './filterToggle.scss';

const FilterToggle = ({ clazz, name, title, onChangeInput }) => {
    return (
        <div className={`${clazz} ${clazz}__toggle-block block-toggle`}>
            <div className={`${clazz}__item block-toggle__item`}>{title}</div>
            <div className={`${clazz}__items block-toggle__items`}>
                <input className={`${clazz}__items-checkbox block-toggle__items-checkbox`}
                    type="checkbox"
                    id={name}
                    name={name}
                    value={name}
                    onChange={onChangeInput} />
                <label className={`${clazz}__items-label block-toggle__items-label`} htmlFor={name}></label>
            </div>
        </div>
    )
}

export default FilterToggle;