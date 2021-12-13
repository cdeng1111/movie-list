const express = require('express');
const db = require('./database/connection.js');
const controllers = require('./controllers/movies.js');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('client/dist'));
app.use(express.json());
app.get('/movies', controllers.getMovies);
app.post('/movies', controllers.postMovies);
app.patch('/movies', controllers.updateMovies);

// app.get('/movies', (req, res) => {
//   db.query("select * from movies", (err, result) =>{
//     if (err) {
//       res.status(500).send(err);
//     }else {
//       console.log(result);
//     res.status(200).send(result);
//     }
//   } )
// });

// app.post('/movies', (req, res) => {
//   const sqlString=`INSERT INTO movies(title,watch) VALUES(?,'no') `
//   db.query(sqlString, [req.body.title ] ,(err, result) =>{
//     if (err) {
//       res.status(500).send(err);
//     }else {
//         db.query("select * from movies", (err, result) =>{
//           if (err) {
//             res.status(500).send(err);
//           }else {
//           res.status(200).send(result);
//           }
//         } )
//     }
//   } )
// });

// app.patch('/movies', (req, res) =>{
//   let sqlString = `UPDATE movies SET title="${req.body.title}", watch="${req.body.watch}" where id=${req.body.id}`;
//   db.query(sqlString, (err, result) =>{
//     if (err) {
//       res.status(500).send(err)
//     } else {
//       db.query("select * from movies", (err, result) =>{
//         if (err) {
//           res.status(500).send(err);
//         }else {
//         res.status(200).send(result);
//         }
//       } )
//     }
//   } )
// } )

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})