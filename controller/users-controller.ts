import app from "./app";

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//req va contine toate info trimise de utilizator.
//de instalat postman
