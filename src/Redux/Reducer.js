import  * as actions from './Action'
const initialState = {
    characterDetails : {},
    comics: [],
    comicsDetails: {},
    fill : false
}

function rootReducer(state = initialState, action){
    switch (action.type){
        case actions.GET_DETAILS:
            return{
                ...state,
                fill: true,
                characterDetails: action.payload,
                comics: []
            }
        case actions.GET_ALL_COMICS:
            return{
                ...state,
                comics: action.payload
            }
        case actions.GET_COMICS_DETAILS:
            return{
                ...state,
                comicsDetails: action.payload
            }
        default: return {...state}
    }
}

export default rootReducer;