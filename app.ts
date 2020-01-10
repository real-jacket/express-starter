import express from 'express'

const app = express();

app.get('/xxx',function(request,response) {
    response.send('aaa')
});

const port = 4000;
app.listen(port, function () {
    console.log(`Example app listening ${port}`)
});