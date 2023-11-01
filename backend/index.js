const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
 
app.use(cors());

app.use((req, res, next) => {
  res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
  });

  next();
});

const corsOptions = {
  origin: 'https://egysnakes.com',
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));
const tasks = [
    { id: 1, item: 'قم بالتسوق' },
    { id: 2, item: 'انهي مشروع Node.js' },
    { id: 3, item: 'استجم قليلاً' },
  ];
  

  // عرض قائمة المهام
  app.get('/tasks', (req, res) => {
    res.json(tasks);
  });

 
  const usersController = require('./controllers/usersController.js');

    app.get('/users', usersController.getUsers);

  


// app = config(app);
app.set("port", process.env.PORT || 5000);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`we work in port  ${port}`);
});
 