import Axios from 'axios';
import { baseURL } from '../env'

// Keyword api is used by our services to reference the URL 
// that our api is hosted at. If eight seconds pass with no
// reposnse, error 408 Request Timeout.

export const api = Axios.create({
    baseURL,
    timeout: 8000
})