const TelegramBot = require('node-telegram-bot-api');
const fs = require("fs");
const schedule = require('node-schedule');


const token = '577254993:AAGkQzsSQj3ZMfnWJTIg6t2qgIYlHlKYJGg';
const bot = new TelegramBot(token, { polling: true });
const chatId = '-1001290975094';

let contents = fs.readFileSync("data.json");
let jsonContent = JSON.parse(contents);
let curDate = new Date().getHours() + ':' + new Date().getMinutes();

let sendMessage = schedule.scheduleJob('48 11 * * *', function(){
    for (var i = 0; i < jsonContent.length; i++) {

            bot.sendMessage(chatId, jsonContent[i].sign + '\n' + '\n' + jsonContent[i].content)

        }
  });


  console.log('bot');