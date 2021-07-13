module.exports = (client) => {
  const channelId = "";
  const rulesChannel = "";
  client.on("guildMemberAdd", (member) => {
    console.log(member);

    const message = `Welcome <@${member.id}>! Please read ${member.guild.channels.cache
      .get(rulesChannel)
      .toString()}`;

    const channel = member.guild.channels.cache.get(channelId);
    channel.send(message);
  });
};
