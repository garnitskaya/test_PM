const ItemForm = ({ name, value, title }) => {
    return (
        <>
            <label className='select__label' htmlFor={value}>{title}</label>
            <input className='select__input' type='radio' id={value} name={name} value={value} />
        </>
    )
}

export default ItemForm;