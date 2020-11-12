import { getConfigs } from './configs';

const SERVER_ENDPOINT = getConfigs().SERVER_ENDPOINT + getConfigs().APP_VERSION + '/';

export const ROUTES = {
    SUBMIT_FORM : SERVER_ENDPOINT + 'contact/sb_fm',
    GET_ALL_CONTACTS : SERVER_ENDPOINT + 'contact/gt_cts',
    DELETE_CONTACT: SERVER_ENDPOINT + 'contact/del_ct', 
}