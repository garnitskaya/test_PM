import { serviceAPI } from './../../services/serviceAPI';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { personsLoading, setFilterWithPhoto, setTotalCount } from '../../reducers/appReducer';

import Header from '../header/Header';
import Filters from '../filters/Filters';
import MainContainer from '../mainContainer/MainContainer';
import Footer from './../footer/Footer';

import './app.scss';


function App() {
    const { persons, filterWithPhoto, currentPage } = useSelector(state => state);
    const dispatch = useDispatch();

    const { getAllSummaries, getAllData } = serviceAPI();

    useEffect(() => {
        getAllData(filterWithPhoto, currentPage)
            .then(data => dispatch(setTotalCount(data.total_count)))

        getAllSummaries(filterWithPhoto, currentPage)
            .then(persons => dispatch(personsLoading(persons)))

        // eslint-disable-next-line
    }, [filterWithPhoto, currentPage]);

    const onChangeFilter = () => {
        dispatch(setFilterWithPhoto(filterWithPhoto, persons));
    }

    return (
        <div className="app">
            <Header />
            <div className='container'>
                <MainContainer />
                <Filters onChangeFilter={onChangeFilter} />
            </div>
            <Footer />
        </div>
    );
}

export default App;
