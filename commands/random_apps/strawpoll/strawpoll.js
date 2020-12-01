const botPoll = require('strawpoll-bots').default;
const { join } = require('path');

// Args: (url, optionID, protection, socksFilePath, amount)
botPoll('strawpoll.link', 2, true, join(__dirname, 'socks.txt'));
