// install and import express
const app = require("./index")

const connect = require("./configs/db");



app.listen(8000, async function ()  {
    try {
        await connect();
        console.log("listening on port 8000");
    } catch (error) {
        console.error(error.message);
    }
})

// Note: Do not remove this export statement
module.exports = app;
