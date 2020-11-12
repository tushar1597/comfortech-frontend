import { PAGE_TYP } from '../constants/constants.js';
import { UTIL, CONTACT } from '../actions/actiontypes';

const initialState = {
    all_cts: []
}

const contactReducer = (state = initialState, action) => {
	switch (action.type) {
        case CONTACT.GET_ALL_CONTACTS : {
            return {...state,
                all_cts: action.value
            }
        }
		default:
			return state;
	}
}

export default contactReducer;