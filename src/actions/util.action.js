// import axios from 'axios';
// import { TABS } from '../constants/constants';
// import { ROUTES } from '../constants/routes';
// import { UTIL } from './actiontypes';
// import { ERROR_BLOCKS } from '../constants/errors';
// import { FUNCTIONS, STORAGEFUNCTIONS } from '../utils/functions';


// export const setPageTab = () => dispatch => {
//     let tab = FUNCTIONS.tabMapper();
//     let action = {};
//     action.type = UTIL.SET_PAGE_TAB;
//     action.tab = tab;
//     dispatch(action);    
// }
// export const loginUserAPI = (mob_no,password) => dispatch => {
//   let loading_action = {};
//   loading_action.type = UTIL.SET_FULLSCREEN_LOADER;
//   dispatch(loading_action);
//     var req_data = {
//         mob_no,
//         password,
//       }
//       axios.post(ROUTES.USER_LOGIN,req_data)
//       .then(res => {
//         let usr_data = res && res.data && res.data.data ? res.data.data : {}; 
//         let at = usr_data.at;
//         let user = usr_data.user;
//         STORAGEFUNCTIONS.setAt(at);
//         var req_header = {
//           "x-access-token" : at,
//         };
//         var req_data = {
//           uid : user && user._id ? user._id : null,
//         };
//       axios.post(ROUTES.VERIFY_SELLER,req_data,{
//         headers: req_header 
//       })
//       .then(res => {
//           let seller_data = res && res.data && res.data.data ? res.data.data : {};
//           let st = seller_data && seller_data.st;
//           STORAGEFUNCTIONS.setSt(st);
//           console.log(seller_data);
//           let seller_user = {};
//           seller_user.sid = seller_data && seller_data.seller_user && seller_data.seller_user.sid ? seller_data.seller_user.sid : null;
//           seller_user.uid = seller_data && seller_data.seller_user && seller_data.seller_user.uid ? seller_data.seller_user.uid : null;
//           seller_user.suid = seller_data && seller_data.seller_user && seller_data.seller_user.suid ? seller_data.seller_user.suid : null;
//           seller_user.f_nm = user && user.first_name ? user.first_name : null;
//           seller_user.l_nm = user && user.last_name ? user.first_name : null;
//           let action = {};
//           action.type = UTIL.SET_SELLER_METADATA;
//           action.value = seller_user;
//           dispatch(action);
//           loading_action.type = UTIL.UNSET_FULLSCREEN_LOADER;
//           dispatch(loading_action); 
//       }).catch(err => {
//         loading_action.type = UTIL.UNSET_FULLSCREEN_LOADER;
//         dispatch(loading_action);
//         FUNCTIONS.errorHandler(err,ERROR_BLOCKS.USER_LOGIN,dispatch);
//       })

//       })
//       .catch(err => {
//         FUNCTIONS.errorHandler(err,ERROR_BLOCKS.USER_LOGIN,dispatch);          
//       })
// }
// export const callSuccessErrorPopup = (error_msg,error_type) => dispatch => {
//   let action = {}, err_obj = {};
//   action.type = UTIL.SET_ERROR;
//   err_obj.et = error_type;
//   err_obj.um = error_msg.um;
//   err_obj.hd = error_msg.hd;
//   action.value = err_obj;
//   dispatch(action);
//     setTimeout(function(){
//         let action = {};
//         action.type = UTIL.UNSET_ERROR;
//         dispatch(action);
//     },3000)
// }
// export const getSellerUserAPI = (st) => dispatch => {
//   var st = STORAGEFUNCTIONS.getSt();
//     var req_data = {
//       headers: {
//         "x-seller-token": STORAGEFUNCTIONS.getSt(),
//       },
//       params: {
//         uid: "5f53ae81c7bdb33303beb161",
//        sid: "5f53ae82c7bdb33303beb162",
//       }
//     }
//     axios.get(ROUTES.GET_SELLER_USER, req_data)
//         .then(res => {
//           let seller_user = {};
//           let seller_data = res && res.data && res.data.data && res.data.data.seller ? res.data.data.seller : {};
//           let user_data = res && res.data && res.data.data && res.data.data.user ? res.data.data.user : {};
//           let action = {};
//           let value = {};
//           value.f_nm = user_data && user_data.f_nm? user_data.f_nm : '';    
//           value.l_nm = user_data && user_data.l_nm ? user_data.l_nm : '';    
//           value.sid = seller_data && seller_data._id ? seller_data._id : '';    
//           value.uid = user_data && user_data._id ? user_data._id : '';     
//           value.suid = seller_data && seller_data.suid ? seller_data.suid : '';    
//           value.org_nm = null;  
//           value.is_lg_in = true;
//           action.type = UTIL.SET_SELLER_METADATA;
//           action.value = value;
//           dispatch(action); 
//         }).catch(err => {
//             // console.log("ERROR::",err);
//             FUNCTIONS.errorHandler(err,dispatch);
//         })
// }
// export const setIsLoggedIn = (value) => dispatch => {
//   let action = {};
//   action.type = UTIL.SET_IS_LOGGED_IN;
//   action.value = value;
//   dispatch(action)
// }