import './searchPanel.scss';

const SearchPanel = () => {
    return (
        <form className='searchPanel'>
            <input
                className='searchPanel__text'
                type="text"
                placeholder='На какую должность вы ищете кандидата?' />
            <input
                className='searchPanel__city'
                type="text"
                placeholder='Город' />
            <button className='searchPanel__button' type='button'>Найти кандидатов</button>
        </form>
    )
}

export default SearchPanel;