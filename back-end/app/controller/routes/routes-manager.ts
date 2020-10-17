 
import express = require('express');
import routerWord from './router-word';

const app = express();

app.use(routerWord);


export default app;