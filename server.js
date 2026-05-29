const express = require('express');
const path = require('path');
const app = express();

let visitCount = 0;
const MILESTONE = 10000;

app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/counter', (req, res) => {
  visitCount++;
  res.json({ count: visitCount, milestone: MILESTONE });
});

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => console.log(`EDF Training: http://localhost:${PORT}`));
