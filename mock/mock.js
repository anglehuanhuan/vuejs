var list = require('./list.json');
var mallSale = require('./mall-sale.json');
var mallClass = require('./mallClass.json');
var mallMore = require('./mallMore.json');
var newjson = require('./new.json');
module.exports = function() {
    return {
        "list": list,
        "mallSale":mallSale,
        "mallClass":mallClass,
        "mallMore":mallMore,
        "new":newjson
    }
}

// restful
