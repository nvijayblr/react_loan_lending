import axios from 'axios';

export const FETCH_CLIENT_APPLICATION = 'fetch_client_application';
export const CHANGE_STEP = 'change_step';

const ROOT_URL = 'http://localhost:65011/api/';
const LOCAL_ROOT_URL = 'http://localhost:3000/'
const PAGES = 'pages/';

export function fetchClientApplication(id) {
    // Replace if running against live web service:
    //const request = axios.post(`${ROOT_URL}${PAGES}${id}`);
    const request = require(`json-loader!../mockdata/${id}.json`);
    return {
        type: FETCH_CLIENT_APPLICATION,
        payload: request
    };
}

export function changeStep(newStep)
{
    return {
        type: CHANGE_STEP,
        payload: {
            newStep
        }
    };
}