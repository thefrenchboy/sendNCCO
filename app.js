const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

app.post('/onEvent', (req, res, next) => {
    if (req.body.status == 'machine' && req.body.sub_state == 'beep_start') {
        console.log("---------------------")
        console.log("- - onEvent - -")
        console.log("BEEP STARTED... SEND NCCO !!!")
        const ncco = [{
            "action": "stream",
            "streamUrl": ["https://storage.googleapis.com/mailing-vox-storage/GREG%20IAMV.mp3"],
            "bargeIn": "false",
            "loop": 1,
            "level": 1
        }];
        console.log(req.body);
        res.json(ncco);
    } else {
        console.log("---------------------")
        console.log("- - onEvent - -")
        console.log(req.body);
        res.sendStatus(204);
    }
})

app.post('/onAnswer', (req, res, next) => {
    const ncco = [{
        action: 'talk',
        text: 'Bonjour!',
        language: "fr-FR",
        loop: 1
    }];
    console.log("---------------------")
    console.log("- - onAnswer - -")
    console.log(req.body);
    res.json(ncco);
})

app.post('/firefliesTranscripts', (req, res, next) => {
    const ncco = [{
        action: 'talk',
        text: 'Hello, how are you doing Julien ? Im calling you to tell you that your script is working',
        language: "en-GB",
        loop: 1
    }];
    console.log("---------------------")
    console.log("- - onAnswer - -")
    console.log(req.body);
    res.json(ncco);
})

app.listen(process.env.SERVER_PORT || 3000)
