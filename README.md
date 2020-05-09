## Requirements

* node >= 10
* npm >= 6 or yarn 

1. Checkout code in any directory.
1. It have 2 folder. client (react app) and server (express server as proxy)
1. Move to `client` directory from terminal.
1. Run `npm install`
1. Run `npm start`. This will launch FE application at http://localhost:3000. You can change port in env variable PORT
1. Landing page will show records. clicking on image will move to detail page. Which can have video or image

## Express Server
1. Move to `server` directory from terminal.
1. Run `npm install`
1. Run `npm start`. This will launch BE server application at http://localhost:4000

#### Point to Proxy
By default FE is pointing to APIs of imgur. You can point it to express proxy by changing
a const value in `app/utils/constants`

`export const API_BASE = 'https://api.imgur.com/3';`

`//export const API_BASE = 'http://localhost:4000/3';`

Uncomment the second one and comment out the first one

## Note
imgur Api returns some records as album. I am excluding those for simplicity, in selectors, because ui is not supporting albums
To run server



