### space footbal telegram mini app

#### dev

for creating local cert keys, run in this directory (for macos):

need installed mkcert

`brew install mkcert` for installing

`mkdir -p .cert && mkcert -key-file ./.cert/localhost-key.pem -cert-file ./.cert/localhost.pem 'tg-mini-app.local'`
