const PERSONS_LOADING = 'PERSONS_LOADING';
const SELECT_SHOW_TIME = 'SELECT_SHOW_TIME';
const SHOW_POPUP = 'SHOW_POPUP';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_ARR_CURRENT_BUTTONS = 'SET_ARR_CURRENT_BUTTONS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_FILTER_SHOW = 'SET_FILTER_SHOW';
const SET_ACTIVE_LANGUAGE_ITEMS = 'SET_ACTIVE_LANGUAGE_ITEMS';
const SET_FILTER_WITH_PHOTO = 'SET_FILTER_WITH_PHOTO';
const SET_SELECT_LANGUAGE_SHOW = 'SET_SELECT_LANGUAGE_SHOW';

const initialState = {
    persons: [],
    selectShow: false,
    idPopup: null,
    showPopup: false,
    currentPage: 1,
    pageSize: 10,
    totalCount: 0,
    arrCurrentButton: [],
    selectLanguageShow: false,
    filterShow: false,
    idLanguageItems: null,
    activeLanguageItems: false,
    filterWithPhoto: false,
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case PERSONS_LOADING:
            return {
                ...state,
                persons: action.payload
            };
        case SELECT_SHOW_TIME:
            return {
                ...state,
                selectShow: !action.payload
            };
        case SHOW_POPUP:
            return {
                ...state,
                showPopup: !action.payload,
                idPopup: action.idPopup
            };
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.payload
            }
        }
        case SET_ARR_CURRENT_BUTTONS: {
            return {
                ...state,
                arrCurrentButton: action.payload
            }
        }
        case SET_FILTER_SHOW:
            return {
                ...state,
                filterShow: !action.payload
            };
        case SET_ACTIVE_LANGUAGE_ITEMS:
            return {
                ...state,
                activeLanguageItems: !action.payload,
                idLanguageItems: action.id
            };
        case SET_FILTER_WITH_PHOTO:
            return {
                ...state,
                filterWithPhoto: !action.payload,
                filterShow: false,
                persons: action.persons
            };
        case SET_SELECT_LANGUAGE_SHOW:
            return {
                ...state,
                selectLanguageShow: !action.payload
            };
        default:
            return state;
    }
}

export default appReducer;


export const personsLoading = (payload, currentPage) => ({ type: PERSONS_LOADING, payload, currentPage });
export const selectShowTime = (payload) => ({ type: SELECT_SHOW_TIME, payload });
export const setShowPopup = (payload, idPopup) => ({ type: SHOW_POPUP, payload, idPopup });
export const setCurrentPage = (payload) => ({ type: SET_CURRENT_PAGE, payload });
export const setTotalCount = (payload) => ({ type: SET_TOTAL_COUNT, payload });
export const setArrCurrentButton = (payload) => ({ type: SET_ARR_CURRENT_BUTTONS, payload });
export const setFilterShow = (payload) => ({ type: SET_FILTER_SHOW, payload });
export const setActiveLanguageItems = (payload, id) => ({ type: SET_ACTIVE_LANGUAGE_ITEMS, payload, id });
export const setFilterWithPhoto = (payload, persons) => ({ type: SET_FILTER_WITH_PHOTO, payload, persons });
export const setSelectLanguageShow = (payload) => ({ type: SET_SELECT_LANGUAGE_SHOW, payload });

