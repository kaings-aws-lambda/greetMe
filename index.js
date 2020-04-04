const moment = require('moment');

const greeting = {
    en: 'Hello',
    jp: 'Konnichiwa',
    in: 'Halo',
    cn: 'Ni Hao',
    hi: 'Namaste'
}

exports.handler = async(event) => {
    let name = event.pathParameters.name;
    let {lang, ...info} = event.queryStringParameters;

    let message = `${greeting[lang] ? greeting[lang] : greeting['en']} ${name}!`;
    
    let response = {
        message: message,
        info: info,
        timeStamp: moment().format('LLLL')
    }

    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}