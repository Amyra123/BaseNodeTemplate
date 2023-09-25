const express = require('express');
const { ServerConfig } = require('./config/index');
const app = express();

const apiRoutes = require("./routes");

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT, ()=>{
    console.log(`Successfully started the server at the port: ${ServerConfig.PORT}`);
});