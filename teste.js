var util = require('util');

require('colors');

var yahooFinance = require('yahoo-finance');

var SYMBOL ='EURUSD=X';


(async ()=>{
    let data=await yahooFinance.quote({
        symbol: SYMBOL,
        modules: ['price']
    });
        if (data.price) {
          console.log('price:',data.price);
        } else {
          console.log('N/A');
        }
})();