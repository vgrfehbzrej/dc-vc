const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'join') {
    const channel = interaction.member.voice.channel;
    if (!channel) return interaction.reply('Du musst im VC sein!');

    joinVoiceChannel({
      channelId: channel.id,
      guildId: channel.guild.id,
      adapterCreator: channel.guild.voiceAdapterCreator
    });

    interaction.reply('Ich bin drin 👍');
  }
});

// Token als Environment Variable
client.login(process.env._MTQ3NDYyOTA4NjA0MjM5NDY2NA.GdfL14.1j1eehgUVWUU2Ju1uvq1Qnj8_DO-OM2LZC0fEk);
