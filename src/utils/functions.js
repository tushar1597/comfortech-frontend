import { ERROR_STATUS, ERROR_CODES, ERROR_MSG_SERVER, ERROR_MSG_USER } from "../constants/errors";
import { UTIL } from "../actions/actiontypes";
import store from '../store';
import { getConfigs } from '../constants/configs';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function tabMapper(){
    var path = getPath();
    switch(path) {
        case "": return 1;
        case "list-product": return 2.1; break;
        case "product-detail": return 2.1; break;
        case "create-product": return 2.2; break;
        case "create-single-product": return 2.2; break;
        case "create-combo-product": return 2.2; break;
        case "product-preview": return 2.2; break;
        case "all-order": return 3; break;
        case "order": return 3; break;
        case "all-invoice": return 4; break;
        case "invoice": return 4; break;
        default : return 0; break;
    }

}
function numberOrdinals(num){
    if(num == null || num == undefined){
        return "";
    }
    let last_digit = num % 10;
    let last_two_digit = num % 100;

    if(last_two_digit == 11 || last_two_digit == 12 || last_two_digit == 13){
        return num+"th";
    }
    switch(last_digit) {
        case 1 : return num+"st";
        case 2 : return num+"nd";
        case 3 : return num+"rd";
        default : return num+"th"; 
    }
}
function getPath(){
    var pathname = window.location.pathname;
    var path_to_lower = pathname ? pathname.toLowerCase() : "";
    var path_arr = pathname.split("/");
    return path_arr.join("");
}
function errorHandler(err,dispatch){
    console.log(store.getState().util);
    let err_obj = {};
    if(err && err.response && err.response.status == ERROR_STATUS.UNAUTHORIZED){
        STORAGEFUNCTIONS.removeSt();
        let action = {};
        action.type = UTIL.SET_IS_LOGGED_IN;
        action.value = false;
        dispatch(action);
    }
    if(err && err.response && err.response.data && !err.response.data.sucess && err.response.data.error){
        // err_obj.ec = err_blck + "__" + err.response.data.error;
        // err_obj.um = ERROR_MSG_USER[ERROR_CODES[err_obj.ec]];
        let action = {};
        // action.type = UTIL.SET_ERROR;
        // action.value = err_obj;
        // dispatch(action);
        setTimeout(function(){
            let action = {};
            action.type = UTIL.UNSET_ERROR;
            dispatch(action);
        },3000)
    } 
}
// function setError(err_arr,err_code,dispatch){
//     let new_err_arr = err_arr.slice();
//     let new_err = {
//         ec : err_code,
//         um : ERROR_MSG_USER[err_code]
//     }
//     new_err_arr.push(new_err);
//     let action = {};
//     action.type = UTIL.SET_ERROR;
//     action.value = new_err_arr;
//     dispatch(action);
//     setTimeout(function(){
//         let newest_err_arr = new_err_arr.filter(function(value, index, arr){ return value != new_err;});
//         let action = {};
//         action.type = UTIL.SET_ERROR;
//         action.value = newest_err_arr;
//         dispatch(action);
//     },3000)   
// }
export const STORAGEFUNCTIONS = {
    getAt: function() { // fetch access-token
        return cookies.get('at',{domain : getConfigs().DOMAIN, path : '/'});
    },
    getSt: function() { // fetch access-token
        return cookies.get('st',{domain : getConfigs().DOMAIN, path : '/'});
    },
    getAid: function() { // fetch account id
        return cookies.get('aid',{domain : getConfigs().DOMAIN, path : '/'});
    },
    setAt: function(at) {
        var expirydate = new Date();
        expirydate.setDate(expirydate.getDate() + 180);
        cookies.set('at', at, { domain : getConfigs().DOMAIN, path : '/'})
    },
    setSt: function(st) {
        var expirydate = new Date();
        expirydate.setDate(expirydate.getDate() + 180);
        cookies.set('st', st, { domain : getConfigs().DOMAIN, path : '/'})
    },
    setPid: function(pid) {
        var expirydate = new Date();
        expirydate.setDate(expirydate.getDate() + 180);
        cookies.set('pid', pid, { domain : getConfigs().DOMAIN, path : '/'})
    },
    removeSt: function() {
        cookies.remove('st');
    },
    getPid: function() {
        return cookies.get('pid',{ domain : getConfigs().DOMAIN, path : '/'});
    },
    getSecret: function(){
		return cookies.get('secret',{ domain : getConfigs().DOMAIN, path : '/'});
    },
}
export const FUNCTIONS = {
    tabMapper,
    numberOrdinals,
    // setError,
    errorHandler,
}