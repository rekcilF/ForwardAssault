const commando = require('discord.js-commando')
const bot = new commando.Client();

bot.registry.registerDefaultTypes();
bot.registry.registerGroups([
    ['shoot' , 'Shoot'],
    ['media', 'Media'],
    ['fa gameplay', 'Fa gameplay'],
    ['default', 'Default'],
    ['fun', 'Fun'],
    ['eco', 'Eco'],
    ['beta', 'Beta'],
]);
bot.registry.registerDefaultGroups();
bot.registry.registerDefaultCommands();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('bot token here')