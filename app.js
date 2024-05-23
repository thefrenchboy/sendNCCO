const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

app.post('/onEvent', (req, res, next) => {
    if (req.body.status == 'machine' && req.body.sub_state == 'beep_start') {
        console.log("BEEP STARTED... SEND NCCO !!!")
        const ncco = [{
            action: 'stream',
            streamUrl: 'https://mychezmoi.retool.com/api/file/a257bcf1-6da5-43ee-8371-939189cd96f5'
        }];
        console.log(req.body);
        res.json(ncco);
    } else {
        console.log(req.body);
        res.sendStatus(204);
    }
})

app.listen(process.env.SERVER_PORT || 3000)
