import { PAGE_TYP } from '../constants/constants.js';
import { UTIL } from '../actions/actiontypes';

const initialState = {
    tab : 0,
    sh_pp : false, //show error success popup
    error : {
        ec : null,  //error code 
        um : '',  //error message
        et : 1,   //error type
        hd : '',  //error heading
    }, 
    f_nm : null,    //first name
    l_nm : null,    //last name
    sid : null,     //seller id
    uid : null,     //user id
    suid : null,    //seller user id
    org_nm : null,  //organisation name
    is_lg_in : false, //is logged in
    fs_loading : true,    //full screen loader
}

const utilReducer = (state = initialState, action) => {
	switch (action.type) {
        case UTIL.SET_PAGE_TAB : {
            return {...state,
                tab: action.tab
            }
        }
        case UTIL.SET_ERROR : {
            return {...state,
                error: action.value,
                sh_pp: true,
            }
        }
        case UTIL.UNSET_ERROR : {
            return {...state,
                error: {
                    ec : null,
                    um : '',  
                    et : 1,   
                    hd : ''
                },
                sh_pp: false,
            }
        }
        case UTIL.SET_FULLSCREEN_LOADER : {
            return {...state,
                fs_loading : true
            }
        }
        case UTIL.UNSET_FULLSCREEN_LOADER : {
            return {...state,
                fs_loading : false,
            }
        }
        case UTIL.SET_SELLER_METADATA : {
            return {...state,
                f_nm : action.value.f_nm ? action.value.f_nm : null, 
                l_nm : action.value.l_nm ? action.value.l_nm : null,  
                sid : action.value.sid ? action.value.sid : null,     
                uid : action.value.uid ? action.value.uid : null,     
                suid : action.value.suid ? action.value.suid : null,
                fs_loading : false,
                is_lg_in : true,
            }
        }
        case UTIL.SET_IS_LOGGED_IN : {
            return {...state,
                is_lg_in : action.value,
                fs_loading : false
            }
        }
		default:
			return state;
	}
}

export default utilReducer;