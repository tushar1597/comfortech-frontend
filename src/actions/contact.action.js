import axios from 'axios';
import { ROUTES } from '../constants/routes';
import { CONTACT } from './actiontypes';

export const submitContactFormAPI = (f_nm,m_nm,l_nm,eml,p_no,desc) => dispatch => {
    var req_data = {
        f_nm : f_nm ? f_nm : '',
        m_nm : m_nm ? m_nm : '',
        l_nm : l_nm ? l_nm : '',
        eml  : eml ? eml : '',
        p_no : p_no ? p_no : '',
        desc : desc ? desc : '',
    }

    axios.post(ROUTES.SUBMIT_FORM,req_data)
      .then(res => {
        alert("Contact added");
      })
      .catch(err => {
          console.log(err);
      })

}

export const deleteContactAPI = (ct_id) => dispatch => {
    var req_data = {
        ct_id: ct_id,
    }

    axios.post(ROUTES.DELETE_CONTACT,req_data)
      .then(res => {
        alert("Contact deleted");
      })
      .catch(err => {
          console.log(err);
      })

}

export const getAllContactsAPI = (st) => dispatch => {
    var req_data = {
    }
    axios.get(ROUTES.GET_ALL_CONTACTS, req_data)
        .then(res => {
            let contacts = res && res.data && res.data.data ? res.data.data : [];     
          let action = {};
          action.type = CONTACT.GET_ALL_CONTACTS;
          action.value = contacts;
          dispatch(action); 
        }).catch(err => {
            console.log(err);
        })
}