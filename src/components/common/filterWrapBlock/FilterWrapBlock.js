import './filterWrapBlock.scss';

const FilterWrapBlock = ({ clazz, title, children }) => {
    return (
        <div className={`filters__items ${clazz}`}>
            <h4 className='filters__subtitle'>{title}</h4>
            <div className='filters__wrapper'>
                {children}
            </div>
        </div>
    )
}

export default FilterWrapBlock;
