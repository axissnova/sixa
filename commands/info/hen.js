module.exports = {
    name: "hen",
    description: "returns with info",
    category: "info",
    run: async (client, message, args) => {
      
    let Henessly = message.guild.members.fetch('283299188697989120');
    let FuckHenRole = message.guild.roles.fetch('name', "Floofy Furry");
   
      Henessly.roles.add(FuckHenRole.id);
    
        /*
        Note from Hen: Fuck you axiss
        */
    }
}
