const { REST, Routes } = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();
const commands = [
  {
    name: "มานี่",
    description: "เดี๋ยวเราจะตามทุกคนไปนะครับ/ค่ะ",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

// Wrap the code in an asynchronous function
(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
