const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

app.post('/onEvent', (req, res, next) => {
    if (req.body.status == 'machine' && req.body.sub_state == 'beep_start') {
        console.log("---------------------")
        console.log("BEEP STARTED... SEND NCCO !!!")
        const ncco = [{
            action: 'stream',
            streamUrl: 'https://mychezmoi.retool.com/api/file/1026504d-bac9-4787-b81a-85d8c989481d',
        }];
        console.log(req.body);
        res.json(ncco);
    } else {
        console.log("---------------------")
        console.log(req.body);
        res.sendStatus(204);
    }
})

app.post('/onAnswer', (req, res, next) => {
    const ncco = [{
        action: 'talk',
        text: 'Hello, how are you doing Julien ? Im calling you to tell you that your script is working',
        language: "en-GB",
        loop: 0
    }];
    console.log(req.body);
    res.json(ncco);
})

app.listen(process.env.SERVER_PORT || 3000)
