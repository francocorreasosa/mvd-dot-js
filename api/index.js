import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(cors());

app.get('/past', (req, res) => {
  axios.get('https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=montevideojs&photo-host=public&page=500&fields=&order=time&status=past&desc=false&sig_id=186661001&sig=aa8e77c37668ac24b7d8fb6af2f6bf0b226c5b57')
       .then(response => response.data)
       .then((data) => { res.json(data.results) })
       .catch(res.json);  
});

app.get('/upcoming', (req, res) => {
  axios.get('https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=montevideojs&photo-host=public&page=500&fields=&order=time&status=upcoming&desc=false&sig_id=186661001&sig=6de2859bce5fda77c47f4cebfb43479bb0508e3a')
       .then(response => response.data)
       .then((data) => { res.json(data.results) })
       .catch(res.json);
});

app.listen(3000, () => console.log('Active in port 3000'));