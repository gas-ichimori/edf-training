const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 3006;
app.listen(PORT, () => console.log(`EDF Training: http://localhost:${PORT}`));
