import {
    RECORD_ADDRESS,
    GET_USERINFO,
    SAVE_GEOHASH,
} from './mutation-types.js'

export default {
    // 记录当前经纬度
    [RECORD_ADDRESS](state, {
        latitude,
        longitude
    }) {
        state.latitude = latitude;
        state.longitude = longitude;
    },

    //保存geohash
	[SAVE_GEOHASH](state, geohash) {
		state.geohash = geohash;
		if (true) {}
	},

    // 获取用户信息，存入vuex
    [GET_USERINFO](state, info){
        if (state.userInfo && (state.userInfo.username !== info.username)) {
			return;
		};
		if (!state.login) {
			return
		}
        if (!info.message) {
            state.userInfo = {...info};
            let validity = 30;
            let now = new Date();
            now.setTime(now.getTime() + validity
             * 24 * 60 * 60 * 1000);
            document.cookie = "USERID=" + info.user_id + ";expires=" + now.toGMTString();
            document.cookie="SID=huRyTRd9QLij7NkbpHJoj3PQrx1eRiO6bAiw" + ";expires=" + now.toGMTString();
            console.log('设置COOKIE成功');
        } else {
            state.userInfo = null;
        }
    }
}