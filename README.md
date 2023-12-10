# This is DiscordBot_CheatSheet

## Table of Contents
- [config.json's explanation](#configjsons-explanation)
- [deploy-commands.js's explanation](#deploy-commandsjss-explanation)
- [index.js's explanation](#indexjss-explanation)

## config.json's explanation
Write down the bot's token and ID


## deploy-commands.js's explanation
- Used to add commands to the server

- Multiple can be added by duplicating this code
<code>
const commands = [
    new SlashCommandBuilder().setName('Write Command').setDescription('Command explanation'),
]
    .map(command => command.toJSON());
</code>

## index.js's explanation
Bot's main process.