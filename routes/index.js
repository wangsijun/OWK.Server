/**
 * Created by wangsijun on 2016/3/26.
 */
function attachRoutes(app){
    require('./home')(app);
};

module.exports.attachRoutes = attachRoutes;