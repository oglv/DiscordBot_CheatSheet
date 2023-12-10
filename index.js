const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const { token } = require('./config.json');

//Command

client.on('ready', () => { console.log(`${client.user.tag} activated`);});
client.on('interactionCreate', async interaction => { if (!interaction.isCommand()) return;
    if (interaction.commandName === 'Write command name') { await interaction.reply('Reply message');
    console.log('');
} });

//Detect and process specific messages.

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (message.content === ('message')) {
        message.channel.send('reply');
        console.log('log');
    }
});
client.login(token);
