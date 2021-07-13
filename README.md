## rulesChannel
##### Copy ID of your rules channel, then paste it between the "".
## channelId
##### Copy ID of the channel that you want the welcome message to be sent in, and paste it between the "".

## <@${member.id}>
##### This message will make the bot tag the person that joined in the welcome message.

## ${member.guild.channels.cache.get(rulesChannel).toString()}

##### ^ This will make the bot send the rules' channel's name in the welcome message. For example: Welcome @Member! Please read #rules
