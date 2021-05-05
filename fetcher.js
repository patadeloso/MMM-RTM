const	rememberthemilk = require("rtm-js");

getToday = config => {
    let api_key = config.api_key;
    let api_secret = config.api_secret;
    let api_token = config.api_token;
    let error = false;
    let data = [];
    rtm = new rememberthemilk(api_key, api_secret, 'read');

    rtm.auth_token = api_token;
    let params = {filter: 'due:today AND status:incomplete', auth_token: api_token};

    rtm.get('rtm.tasks.getList', params, function(resp) = promise(resolve, reject) {
        if (!error) {
        resolve(recursiveSearch(resp, 'name'));
        }  else {
          reject('Error: boo');
        }
    });
};


module.exports = {
	getToday
};

// Taken from https://www.tutorialspoint.com/recursively-list-nested-object-keys-javascript

const recursiveSearch = (obj, searchKey, results = []) => {
   const r = results;
   Object.keys(obj).forEach(key => {
      const value = obj[key];
      if(key === searchKey && typeof value !== 'object'){
         r.push(value);
      }else if(typeof value === 'object'){
         recursiveSearch(value, searchKey, r);
      }
   });
   return r;
};
