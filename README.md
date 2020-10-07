# Session Buddy Export

Puppeteer script for automating Session Buddy export

## Dependencies
- [Google Chrome](https://www.google.com/chrome/index.html) or [Microsoft Edge](https://www.microsoft.com/en-us/edge) (Chromium version)
- [Session Buddy](https://sessionbuddy.com/)
- [node.js](https://github.com/nodejs/node)
- [chrome-launcher](https://github.com/GoogleChrome/chrome-launcher)
- [axios](https://github.com/axios/axios)
- [puppeteer-core](https://github.com/puppeteer/puppeteer)

## Usage
Launch Chrome or Edge with remote-debugging-port option:

    chrome.exe --remote-debugging-port=9222

or

    msedge.exe --remote-debugging-port=9222

Run the script and save the stdout to an HTML file:

    node session-buddy-export.js > session_buddy_export.html

## Source code
https://github.com/rgomezjnr/session-buddy-export

## Authors
[Robert Gomez, Jr.](https://github.com/rgomezjnr)

## License
[MIT](https://github.com/rgomezjnr/session-buddy-export/blob/master/LICENSE.txt)