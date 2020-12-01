const botPoll = require('strawpoll-bots').default;
const { join } = require('path');

// Args: (url, optionID, protection, socksFilePath, amount)
botPoll('https://www.strawpoll.me/38307901', 2, true, join(__dirname, 'socks.txt'));