const http = require('http');
const url = require('url');
const { getDate } = require('./modules/utils');
const { greetingMessage, defaultName } = require('./lang/en/messages/en');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const name = parsedUrl.query.name;
    const currentTime = getDate();

    const responseMessage = `<p style="color: blue;">${greetingMessage.replace('%1', name)}${currentTime}`;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(responseMessage);
    res.end();
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
