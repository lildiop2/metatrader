let MetaApi = require('metaapi.cloud-sdk').default;
const yahooFinance = require('yahoo-finance');

// Note: for information on how to use this example code please read https://metaapi.cloud/docs/client/usingCodeExamples

let token = process.env.TOKEN ||  'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhZDQ1MjkyNGRlYzQ1NjM0OTVlNTk3ZjVjYmZjYzNlNSIsInBlcm1pc3Npb25zIjpbXSwiYWNjZXNzUnVsZXMiOlt7Im1ldGhvZHMiOlsidHJhZGluZy1hY2NvdW50LW1hbmFnZW1lbnQtYXBpOnJlc3Q6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiLCJ3cml0ZXIiXSwicmVzb3VyY2VzIjpbIio6JFVTRVJfSUQkOioiXX0seyJtZXRob2RzIjpbIm1ldGFhcGktYXBpOnJlc3Q6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiLCJ3cml0ZXIiXSwicmVzb3VyY2VzIjpbIio6JFVTRVJfSUQkOioiXX0seyJtZXRob2RzIjpbIm1ldGFhcGktYXBpOndzOnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyIqOiRVU0VSX0lEJDoqIl19LHsibWV0aG9kcyI6WyJtZXRhYXBpLWFwaTp3czpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciIsIndyaXRlciJdLCJyZXNvdXJjZXMiOlsiKjokVVNFUl9JRCQ6KiJdfSx7Im1ldGhvZHMiOlsibWV0YXN0YXRzLWFwaTpyZXN0OnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIl0sInJlc291cmNlcyI6WyIqOiRVU0VSX0lEJDoqIl19LHsibWV0aG9kcyI6WyJyaXNrLW1hbmFnZW1lbnQtYXBpOnJlc3Q6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiLCJ3cml0ZXIiXSwicmVzb3VyY2VzIjpbIio6JFVTRVJfSUQkOioiXX0seyJtZXRob2RzIjpbImNvcHlmYWN0b3J5LWFwaTpyZXN0OnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyIqOiRVU0VSX0lEJDoqIl19LHsibWV0aG9kcyI6WyJtdC1tYW5hZ2VyLWFwaTpyZXN0OmRlYWxpbmc6KjoqIiwibXQtbWFuYWdlci1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciIsIndyaXRlciJdLCJyZXNvdXJjZXMiOlsiKjokVVNFUl9JRCQ6KiJdfV0sInRva2VuSWQiOiIyMDIxMDIxMyIsImltcGVyc29uYXRlZCI6ZmFsc2UsInJlYWxVc2VySWQiOiJhZDQ1MjkyNGRlYzQ1NjM0OTVlNTk3ZjVjYmZjYzNlNSIsImlhdCI6MTY4NTU4OTQ3MX0.NBa2sNzrj5d4H6s2m7Ffx_lSXnyOHzbr3XCqxcdWQOX3ziT5501MqFKf1qFLDF5nTsR5SiVUKhOVL1nkASe3UN6HcMnznlx9DqSc3TEeysLLX9zBhibNUJ8Wc6yaebJPAyafpPZCvrfWlLTNogQDrLjiRdDHUFZMNMJwpB37j_5lqZxbWlsY_XT6fixN-uWEwFVByRGaEXShnSGS9MPgZduibY2qxKj2HpDEKgvFsG9gtYo_4of3wZY4Qlfvl-dFTZeANBwRPt4RXMDoFeB9i_cC40OEgQBmVMrny9QVTsgbZc8_OGj7ERY5HwXlpAe6C3lYm_M5U8dgebN1g1M4mPYIe9sRmgpkLj1AaJ2w-iXlUF20VUhNjecVpxIZhsigu-95wHqW8V5j0ffCrwjitJ2H7Rj26_LaaUOKPDVmrN3u0iZFewCK1brbB26YRVISBXsoHMsUWoQ2nWmCk-sDp67nZKyZA3Kp_h_PB-1YoXsknSpx83c1cUHWZSt7aETKOL_5lADk46zMGxCHh0u_mPetJ5HnldmofGNPNyk4Ii6AAxhysYt05O4MMOmSuyhnoeQ9xig0ltZXzZyojRh7rFVsbdxCt0j-GQKxGS3rHKE3nBNR5LIp1VRh7-f2OM-ip6X-svQ9ImwAtXK20ZX-kkpX7l8WI6MDbOKK-TCFNPU';
let login = process.env.LOGIN || '3231776'
let password = process.env.PASSWORD || 'uRyKzwfn9p';
let serverName = process.env.SERVER || 'KOT-Demo';

const api = new MetaApi(token);

async function testMetaApiSynchronization() {
  try {
    // Add test MetaTrader account
    let accounts = await api.metatraderAccountApi.getAccounts();
    let account = accounts.find(a => a.login === login && a.type.startsWith('cloud'));
    if (!account) {
      console.log('Adding MT4 account to MetaApi');
      account = await api.metatraderAccountApi.createAccount({
        name: 'Test account',
        type: 'cloud',
        login: login,
        password: password,
        server: serverName,
        platform: 'mt4',
        magic: 1000
      });
    } else {
      console.log('MT4 account already added to MetaApi');
    }

    // wait until account is deployed and connected to broker
    console.log('Deploying account');
    await account.deploy();
    console.log('Waiting for API server to connect to broker (may take couple of minutes)');
    await account.waitConnected();

    // connect to MetaApi API
    let connection = account.getStreamingConnection();
    await connection.connect();

    // wait until terminal state synchronized to the local state
    console.log('Waiting for SDK to synchronize to terminal state (may take some time depending on your history size)');
    await connection.waitSynchronized();

    // access local copy of terminal state
    console.log('Testing terminal state access');
    let terminalState = connection.terminalState;
    console.log('connected:', terminalState.connected);
    console.log('connected to broker:', terminalState.connectedToBroker);
    console.log('account information:', terminalState.accountInformation);
    // console.log('positions:', terminalState.positions);
    // // console.log('orders:', terminalState.orders);
    // // console.log('specifications:', terminalState.specifications);
    // console.log('EURUSD specification:', terminalState.specification('EURUSD').tradeSessions.THURSDAY);
    await connection.subscribeToMarketData('BTCUSD');
    // console.log('EURUSD price:', terminalState.price('EURUSD'));


    // // calculate margin required for trade
    // console.log('margin required for trade', await connection.calculateMargin({
    //   symbol: 'GBPUSD',
    //   type: 'ORDER_TYPE_BUY',
    //   volume: 0.1,
    //   openPrice: 1.1
    // }));    

    // trade
    try {
      // Defina o símbolo do par de moedas que você deseja negociar
    const symbol = 'EURUSD';

    // Defina o tamanho da posição (volume) para as ordens
    const volume = 0.1; // 0.1 lote

    // Defina o número de pips para o stop loss e take profit
    const stopLossPips = 20;
    const takeProfitPips = 40; 
    let contador=1;
    while (true) {
      console.log('contador :>> ', contador);
      await tradingLogic(yahooFinance,connection,symbol,volume,stopLossPips,takeProfitPips);
      console.log('Trade Logic successful!');
      await new Promise((resolve, reject) => {setTimeout(() => {resolve();}, 1*60*1000);});
      contador++;
    }
    } catch (err) {
      console.log('Trade failed with result code ' + err);
    }

    // finally, undeploy account after the test
    console.log('Undeploying MT4 account so that it does not consume any unwanted resources');
    await connection.close();
    await account.undeploy();
  } catch (err) {
    // process errors
    if(err.details) {
      // returned if the server file for the specified server name has not been found
      // recommended to check the server name or create the account using a provisioning profile
      if(err.details === 'E_SRV_NOT_FOUND') {
        console.error(err);
      // returned if the server has failed to connect to the broker using your credentials
      // recommended to check your login and password
      } else if (err.details === 'E_AUTH') {
        console.log(err);
      // returned if the server has failed to detect the broker settings
      // recommended to try again later or create the account using a provisioning profile
      } else if (err.details === 'E_SERVER_TIMEZONE') {
        console.log(err);
      }
    }
    console.error(err);
  }
  process.exit();
}



// Defina a função principal para executar as operações de negociação
async function tradingLogic(yahooFinance,connection,symbol,volume,stopLossPips,takeProfitPips) {
  // // Obtenha os preços de abertura, máxima, mínima e fechamento do último candle
  // const candles = await connection.candles(symbol, 'M15', 1, 1);
  // const { open, high, low, close } = candles[0];
  

  let data=await yahooFinance.quote({
    symbol: 'EURUSD=X',
    modules: ['price']
});
console.log(data);

  // const { open, high, low, close } = candles[0];
  const open=data.price.regularMarketOpen;;
  const high= data.price.regularMarketDayHigh;
  const low=data.price.regularMarketDayLow;
  const close=data.price.regularMarketPreviousClose;
  
  // Calcule o valor do stop loss e take profit
  const pipValue = await connection.terminalState.specification(symbol).pipSize;
  const stopLoss = open - stopLossPips * pipValue;
  const takeProfit = open + takeProfitPips * pipValue;

  // Verifique se há posições abertas
  const positions = await connection.terminalState.positions;
  console.log('positions :>> ', positions);
  if (positions.length > 0) {
    // Se houver posições abertas, verifique se é necessário fechá-las
    for (const position of positions) {
      if (position.type === 'POSITION_TYPE_BUY') {
        // Verifique se o preço atingiu o take profit ou stop loss para a posição de compra
        if (close >= takeProfit || close <= stopLoss) {
          await connection.closePosition(position.id);
          console.log('close position :>> POSITION_TYPE_BUY ');
        }
      } else if (position.type === 'POSITION_TYPE_SELL') {
        // Verifique se o preço atingiu o take profit ou stop loss para a posição de venda
        if (close <= takeProfit || close >= stopLoss) {
          await connection.closePosition(position.id);
          console.log('close position :>> POSITION_TYPE_BUY ');
        }
      }
    }
  } else {
    // Se não houver posições abertas, verifique se é necessário abrir uma nova posição
    if (close > high) {
      // Abra uma posição de compra se o preço atual ultrapassar a máxima
      await connection.createMarketBuyOrder(symbol, volume, stopLoss, takeProfit);
      console.log('open position :>> POSITION_TYPE_BUY ');
    } else if (close < low) {
      // Abra uma posição de venda se o preço atual cair abaixo da mínima
      await connection.createMarketSellOrder(symbol, volume, stopLoss, takeProfit);
      console.log('open position :>> POSITION_TYPE_BUY ');
    }
  }
}


testMetaApiSynchronization();