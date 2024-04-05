### space footbal telegram mini app

#### dev

for creating local cert keys, run in this directory (for macos):

need installed mkcert

`brew install mkcert` for installing

`mkdir -p .cert && mkcert -key-file ./.cert/localhost-key.pem -cert-file ./.cert/localhost.pem 'tg-mini-app.local'`

#### Deploy

`yarn build`

copy all to hosting
`scp -rp ./dist/* ildar-nasrov@ildar-nasrov.myjino.ru:/home/users/i/ildar-nasrov/domains/tgapp.dobromam.ru`
