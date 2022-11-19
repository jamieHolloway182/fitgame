// window.onload = () => {
//     getWearableData();
// }

const fetch = require('node-fetch');
getWearableData = async () => {
    const response = await fetch('https://api.tryterra.co/v2/activity?to_webhook=false&user_id=0b2fb869-974a-4abb-8df4-aa74cab99f77&start_date=2022-07-20&end_date=2022-07-22&to_webhook=false', {
    headers: {
        'dev-id': 'testingTerra',
        'X-API-Key': 'UaQ0X6MCD16SRS2S8WxeSqR1TDHbh5c3k0IUf83e'
    }
    })
    console.log(response);
}
getWearableData();
