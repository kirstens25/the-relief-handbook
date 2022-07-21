const path = require('path');
const express = require('express');
const { errorHandler } = require('./helper/error');
const connectDB = require('./config/connection.js');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false })) // is this needed?

app.use('api/class', require('./routes/classRoutes'))
app.use('api/teacher', require('./routes/teacherRoutes'))

// unsure of the following code
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../frontend/build')));
  
//     app.get('*', (req, res) =>
//       res.sendFile(
//         path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
//       )
//     );
//   } else {
//     app.get('api/class', (req, res) => {res.json({message: 'Get Class Name/Number'}));
//   }

app.use(errorHandler) // is this needed?

app.listen(port, () => console.log(`Server started on port${port}`))