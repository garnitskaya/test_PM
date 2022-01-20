import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setArrCurrentButton, setCurrentPage } from '../../reducers/appReducer';

import './paginator.scss';

const Paginator = () => {
    const { pageSize, totalCount, currentPage, arrCurrentButton } = useSelector(state => state)
    const dispatch = useDispatch();

    const pagesCount = Math.ceil(totalCount / pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    useEffect(() => {
        let tempPages = [...arrCurrentButton];

        let dotsLeft = '... ';
        let dotsRight = ' ...';

        if (currentPage >= 1 && currentPage <= 4) {
            tempPages = [1, 2, 3, 4, dotsRight, pages.length]
        }

        else if (currentPage > 4 && currentPage < pages.length - 2) {
            const sliced = pages.slice(currentPage - 1, currentPage + 1)
            tempPages = ([1, dotsLeft, ...sliced, dotsRight, pages.length])
        }

        else if (currentPage > pages.length - 3) {
            const sliced = pages.slice(pages.length - 4)
            tempPages = ([1, dotsLeft, ...sliced])
        }

        else if (currentPage === dotsRight) {
            dispatch(setCurrentPage(arrCurrentButton[3] + 1));
        }

        else if (currentPage === dotsLeft) {
            dispatch(setCurrentPage(arrCurrentButton[3] - 2));
        }


        dispatch(setArrCurrentButton(tempPages));

        // eslint-disable-next-line
    }, [currentPage, totalCount])


    const handlePrevbtn = () => {
        if (currentPage <= 1) {
            return
        } else {
            dispatch(setCurrentPage(currentPage - 1))
        }
    }

    const handleNextbtn = () => {
        if (currentPage >= pages.length) {
            return
        } else {
            dispatch(setCurrentPage(currentPage + 1))
        }
    }

    return (
        <div className='paginator'>
            <div className='paginator__wrap'>
                <button
                    onClick={handlePrevbtn}
                    className='paginator__btn-prev'
                    disabled={currentPage <= 1}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.8741 6.12588C14.914 6.16568 14.9457 6.21296 14.9673 6.26501C14.9889 6.31707 15 6.37287 15 6.42923C15 6.48559 14.9889 6.54139 14.9673 6.59344C14.9457 6.6455 14.914 6.69278 14.8741 6.73258L10.0351 11.5708L14.8741 16.409C14.914 16.4488 14.9456 16.4961 14.9671 16.5481C14.9887 16.6002 14.9998 16.656 14.9998 16.7123C14.9998 16.7687 14.9887 16.8244 14.9671 16.8765C14.9456 16.9285 14.914 16.9758 14.8741 17.0157C14.8343 17.0555 14.787 17.0871 14.7349 17.1087C14.6829 17.1302 14.6271 17.1413 14.5708 17.1413C14.5144 17.1413 14.4586 17.1302 14.4066 17.1087C14.3546 17.0871 14.3073 17.0555 14.2674 17.0157L9.12588 11.8741C9.08598 11.8343 9.05432 11.787 9.03272 11.735C9.01112 11.6829 9 11.6271 9 11.5708C9 11.5144 9.01112 11.4586 9.03272 11.4066C9.05432 11.3545 9.08598 11.3072 9.12588 11.2674L14.2674 6.12588C14.3072 6.08598 14.3545 6.05432 14.4066 6.03272C14.4586 6.01112 14.5144 6 14.5708 6C14.6271 6 14.6829 6.01112 14.735 6.03272C14.787 6.05432 14.8343 6.08598 14.8741 6.12588Z" fill=" rgba(0, 0, 70, 1)" />
                    </svg>
                </button>
                {arrCurrentButton.map((page, i) => {
                    return (
                        <span
                            key={i}
                            className={currentPage === page ? 'paginator__numbers active' : 'paginator__numbers'}
                            onClick={() => dispatch(setCurrentPage(page))} >
                            {page}
                        </span>
                    )
                })}
                <button className='paginator__btn-next'
                    disabled={currentPage >= pages.length}
                    onClick={handleNextbtn}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.12588 17.8741C9.08598 17.8343 9.05432 17.787 9.03272 17.735C9.01112 17.6829 9 17.6271 9 17.5708C9 17.5144 9.01112 17.4586 9.03272 17.4066C9.05432 17.3545 9.08598 17.3072 9.12588 17.2674L13.9649 12.4292L9.12588 7.59104C9.08604 7.5512 9.05444 7.50391 9.03288 7.45186C9.01132 7.39981 9.00022 7.34402 9.00022 7.28769C9.00022 7.23135 9.01132 7.17556 9.03288 7.12351C9.05444 7.07146 9.08604 7.02417 9.12588 6.98433C9.16571 6.9445 9.21301 6.9129 9.26506 6.89134C9.3171 6.86978 9.37289 6.85868 9.42923 6.85868C9.48557 6.85868 9.54135 6.86978 9.5934 6.89134C9.64545 6.9129 9.69274 6.9445 9.73258 6.98433L14.8741 12.1259C14.914 12.1657 14.9457 12.213 14.9673 12.265C14.9889 12.3171 15 12.3729 15 12.4292C15 12.4856 14.9889 12.5414 14.9673 12.5934C14.9457 12.6455 14.914 12.6928 14.8741 12.7326L9.73258 17.8741C9.69278 17.914 9.6455 17.9457 9.59344 17.9673C9.54139 17.9889 9.48559 18 9.42923 18C9.37287 18 9.31707 17.9889 9.26501 17.9673C9.21296 17.9457 9.16568 17.914 9.12588 17.8741Z" fill=" rgba(0, 0, 70, 1)" />
                    </svg>
                </button>
            </div>
        </div >
    )
}

export default Paginator;

