const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

let nodeMCUIP; // Variable to store the NodeMCU's IP dynamically

app.get('/api/getExample', (req, res) => {
    console.log('Received GET request from NodeMCU');
    res.json({ message: 'This is a GET request example', nodeMCUIP });
});

app.post('/api/postExample', (req, res) => {
    const dataFromClient = req.body;
    console.log('Received POST request from NodeMCU with data:', dataFromClient);
    res.json({ receivedData: dataFromClient, nodeMCUIP });
});

app.post('/api/registerNodeMCUIP', (req, res) => {
    const { ip } = req.body;
    nodeMCUIP = ip;
    console.log('NodeMCU IP registered:', nodeMCUIP);
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
