import './filterRange.scss';

const FilterRange = ({ nameMin, nameMax, valueMin, valueMax, unit }) => {
    return (
        <div className='age__container filters-container'>
            <div className="filter-range">
                <div className="filter-range__scale">
                    <div className="filter-range__line" style={{ 'width': '75%' }}></div>
                </div>
                <button className="filter-range__min"></button>
                <button className="filter-range__max" style={{ 'left': '75%' }}></button>
            </div>
            <div className='age__interval items-interval'>
                <span className='age__interval-label '>от</span>
                <input className='age__interval-input input' type='text' name={nameMin} defaultValue={valueMin} />
                <span className='age__interval-label ' >до</span>
                <input className='age__interval-input input' type='text' name={nameMax} defaultValue={valueMax} />
                <span className='age__interval-label ' >{unit}</span>
            </div>
        </div>)
}

export default FilterRange;