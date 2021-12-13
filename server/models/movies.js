const db = require('../database/connection.js');

module.exports= {
getAll: function(callback) {
  db.query("select * from movies",callback);
} ,
post: function(req, callback) {
  const sqlString=`INSERT INTO movies(title,watch) VALUES(?,'no') `
  db.query(sqlString, [req.body.title ] ,callback);
},
update: function(req, callback) {
  let sqlString = `UPDATE movies SET title="${req.body.title}", watch="${req.body.watch}" where id=${req.body.id}`;
  db.query(sqlString, callback);
}


};
