require('dotenv').config();

const config = {
  apiKey: process.env.API_KEY,
  serverSecret: process.env.SERVER_SECRET,
  isKalvian: process.env.IS_KALVIAN === "true",
};

if( process.env.IS_KALVIAN === "true"){
  console.log("true")
}



module.exports = config;
console.log(config)
