const express = require('express');

const app = express()

app.get('/', (req, res) => res.send('y ahorass qqsssss'))
app.listen(3000, () => console.log('Server ready'))