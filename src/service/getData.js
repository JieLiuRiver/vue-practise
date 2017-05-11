import fetch from '../config/ajax'


if (process.env.NODE_ENV == 'development') {
    
    // 获取首页热门城市
    var hotcity = () => fetch('GET', '/v1/cities', {type: 'hot'});

    // 获取首页所有城市
    var groupcity = () => fetch('GET', '/v1/cities', { type:'group' });

    // 获取用户信息
    var getUser = () => fetch('GET', '/v1/user', {});

    // 获取首页默认城市
    var cityGuess = () => fetch('GET', '/v1/cities', {type:'guess'});

    // 获取当前所在城市
    var currentcity = number => fetch('GET', 'v1/cities/' + number, {});  // number是传入的参数cityid

    // 获取搜索地址
    var  searchplace = (cityid, value) => fetch('GET', 'v1/pois', {
        type: 'search',
        city_id: cityid,
        keyword: value
    })

    // 根据geohash获取msite页面食品分类列表
    var msiteFoodTypes = geohash => fetch('GET', '/v2/index_entry', {
		geohash,
		group_type: '1',
		'flags[]': 'F'
	});

    // 获取msite页面地址信息
    var msiteAdress = geohash => fetch('GET', '/v2/pois/' + geohash, {});

}
export { 
    getUser, 
    hotcity, 
    groupcity, 
    cityGuess, 
    currentcity, 
    searchplace,
    msiteFoodTypes,
    msiteAdress
}