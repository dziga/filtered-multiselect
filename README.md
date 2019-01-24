# Filterable multiselect component

## Install, build, run

### Docker

Requirements [docker](https://www.docker.com)

Build `docker build -t multiselect .`

Run `docker run -d -p 3000:3000 multiselect:latest`

Open `http://localhost:3000`

### Native

Requirements `node 10.x, npm 6.x`

Install & build `npm i`

Run `npm start`

Open `http://localhost:3000`

Run tests: `npm test`

## Architecture overview

### Server

Server side with API is built with express framework on top of nodejs. For persistance lokiJS (in memory db) is used. Serves client bundle and exposes several endpoints for delivering filter items and saving selection.

### Client

Client is built with reactJS and split in several components. Main component and FilterItems components are in charge of all the heavy lifting while other components are manly used for rendering. Client is usable without server if server endpoints are mocked (mock is not provided). 

Sass and flexbox are used for styling with assumtion that modern browsers are used. Responsive design tested on chrome device emulator with several major devices.