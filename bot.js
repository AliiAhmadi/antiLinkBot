const telegraf = require("telegraf");
const config = require("./config/default.json");
const controller = require("./controllers/app.controller");
const bot = new telegraf.Telegraf(config.botToken); // first Go to default.json and insert your token

bot.start(controller.StartHandler);
bot.help(controller.HelpHandler);
bot.settings(controller.SettingHandler);
bot.hears(
  [
    /.*https:\/\/.*/i,
    /.*\.com\/?.*/i,
    /.*\.ir\/?.*/i,
    /.*\.org\/?.*/i,
    /.*http:\/?\/?.*/i,
    /.*\.gov\/?.*/i,
    /.*\.info\/?.*/i,
  ],
  controller.MessageHasLink
);
bot.launch();
