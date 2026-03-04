const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send('Node.js App in Docker');
});
app.listen(3000, () => console.log('Server running'));