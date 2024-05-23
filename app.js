const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

app.post('/onEvent', (req, res, next) => {
    if (req.body.status == 'machine' && req.body.sub_state == 'beep_start') {
        console.log("BEEP STARTED... SEND NCCO !!!")
        const ncco = [{
            action: 'talk',
            text: 'Hello, how are you doing Julien ? Im calling you to tell you that your script is working',
            language: "en-GB",
            loop: 5
        }];
        console.log(req.body);
        res.json(ncco);
    } else {
        console.log(req.body);
        res.sendStatus(204);
    }
})

app.listen(process.env.SERVER_PORT || 3000)
