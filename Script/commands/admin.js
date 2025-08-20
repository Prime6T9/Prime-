module.exports.config = {
  name: "admin",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Shuvo",
  description: "Displays Admin Information",
  commandCategory: "Info",
  usages: "/admin",
  cooldowns: 2
};

module.exports.run = async ({ api, event }) => {
  const info = `
╔═══❖•ೋ 🌟 𝐀𝐃𝐌𝐈𝐍 𝐈𝐍𝐅𝐎 🌟 ೋ•❖═══╗

👤 𝐍𝐚𝐦𝐞: PRIME SHUVO
🧮 𝐀𝐠𝐞: 17
💬 𝐁𝐢𝐨: One, unique & peerless 💜✨
Love : Ekta Best frnd ase Take Nijer Thekew besi Valo Basi Ami 💝☺️
📘 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤:
https://www.facebook.com/SHUVOHASSAN66

📸 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦:
Chalai Nah 🥲💔

╚════════════════════════╝
`;

  api.sendMessage(info, event.threadID, event.messageID);
};
