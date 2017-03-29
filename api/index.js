import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(cors());

app.get('/past', (req, res) => {
  axios.get(process.env.PAST_MEETUPS_URL)
       .then(response => response.data)
       .then((data) => { res.json(data.results) })
       .catch(res.json);  
});

app.get('/upcoming', (req, res) => {
  axios.get(process.env.UPCOMING_MEETUPS_URL)
       .then(response => response.data)
       .then((data) => { res.json(data.results) })
       .catch(res.json);
});

app.listen(3000, () => console.log('Active in port 3000'));