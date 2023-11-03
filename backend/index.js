const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();


const usersController = require('./controllers/usersController.js');

// app.use(cors(""));
app.use(express.json()); // استخدام middleware لمعالجة البيانات بصيغة JSON

const tasks = [
  { id: 1, item: 'قم بالتسوق' },
  { id: 2, item: 'انهي مشروع Node.js' },
  { id: 3, item: 'استجم قليلاً' },
];



 
app.get('/tasks', (req, res) => {
  res.json(tasks);
});


app.get('/users', usersController.getUsers);





app.post('/checkName', (req, res) => {
  // const body  = req.body;

  const name = req.body.name;  
 
  console.log(name);

   if (name.includes('a')) {
    //  console.log("*** yas ");
     res.send('yes a is in name');
  } else {
    // console.log(" ****no");
    res.send('no a is not in name');
  }
});




app.set("port", process.env.PORT || 5000);

const port = process.env.PORT || 5000;
app.listen(port, () => {  console.log(`we work in port  ${port}`);});
