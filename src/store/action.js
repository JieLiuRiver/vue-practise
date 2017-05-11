
import {
    getUser
} from '../service/getData'

import {
    GET_USERINFO
} from './mutation-types.js'

export default {
    async getUserInfo({
        commit,
        state
    }) {
        let res = await getUser();
        console.log('action')
        commit(GET_USERINFO, res);
    }
}