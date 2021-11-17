const express = require('express');

const PORT = 1234;
const json = { 'Content-Type': 'application/json; charset=utf-8' };
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,DELETE',
  'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers',
};

express()
  .use(express.static('dist'))
  .get('/env', r => r.res.set({ ...json, ...CORS }).send(process.env))
  .get('/*', r => r.res.sendFile('dist/index.html', { root: '.' }))
  .use(r => r.res.status(404).end('Still not here, sorry!'))
  .use((e, r, res, n) => res.status(500).end(`Error: ${e}`))
  .listen(process.env.PORT || PORT);
