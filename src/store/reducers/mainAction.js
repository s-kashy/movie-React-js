
import *as  actionType from "../actions/actionType"
import { updateObject } from "../utility"
const initialState = {
    listOfMovie: null,
    openModelOurClose: false,
    chosenMovie:null



};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.GET_ALL_MOVIES:
            return updateObject(state, {
                listOfMovie: action.data
            });
        case actionType.CLOSE_MODEL:
            return updateObject(state, { openModelOurClose: false ,chosenMovie:null })

        case actionType.OPEN_MODEL:
            return updateObject(state, { openModelOurClose: true })
            case actionType.GET_SINGEL_MOVIE:
            return updateObject(state,{chosenMovie:action.data,openModelOurClose:true})
           case  actionType.CLOSE_VIEW_MOVIE:
           return updateObject(state,{chosenMovie:null,openModelOurClose:false})
        default:
            return state;
    }
};
export default reducer;
