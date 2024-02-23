import axios from 'axios'
import global from '../../constants/global';

export default class RestApi {
    instance = null
    instancedevRider = null
    constructor() {
        this.instance = axios.create({
            baseURL: `${global.URL}`,
            timeout: 15000,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
    }
    static getInstance() {
        if (this.instance == null) {
            this.instance = axios.create({
                baseURL: `${global.URL}`,
                timeout: 15000,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
        }
        return this.instance
    }
}
