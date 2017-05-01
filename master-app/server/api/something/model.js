var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(GET.root('data/data.sqlite'));

// db.run('update table set name = ? where id = ?', 'william', 2);

exports.create_table = function(cb) {
   db.serialize(function() {
      db.run('create table something (id integer primary key autoincrement, body varchar(255))', function(err) {
         if (err) {
            cb(err.message);
         } else {
            cb(null);
         }
      });
   });
};

exports.delete_table = function(callback) {
   db.serialize(function() {
      db.run('drop table something', function(err) {
         if (err) {
            callback(err.message);
         } else {
            callback(null);
         }
      });
   });
};

exports.create_db = function(req, res) {
   db.serialize(function() {
      db.run('create table something (id integer primary key autoincrement, body varchar(255))');

      var stmt = db.prepare('insert into something values (?)');

      for (var i=0; i<10; i++) {
         stmt.run(`I'm lvl ${i} on something.`);
      }

      stmt.finalize();

      db.each('select rowid as id, body from something', function(err, row) {
         console.log(row.id, row.body);
      });
   });

   res.send({
      message: `I should create a database.`
   });
};

exports.create = function(something, cb) {
   db.run('insert into something (body) values ($body)', {
      $body: something.body
   }, function(err, res) {
      console.log(err, res);
   });
   //var stmt = db.prepare('insert into something (body) values (?)');
   //stmt.run(something.body);
};

db.serialize(function() {
   db.all('select * from something', function(err, rows) {
      if (err) {
         console.log(err.message);
         return;
      }
      // console.log(rows);
   });
});

db.serialize(function() {
   db.run('insert into something (body) values ($body)', {
      $body: 'this is the body'
   }, function(err, test) {
      if (err) {
         console.log(err);
      } else {
         var lastID = this.lastID;
         db.run('select * from something where id = $id', {
            $id: lastID
         }, function(err, row) {
            console.log(err, row, this);
         });
      }
   });
});

// var somethings = [];
// db.each('select rowid as id, body from something', function(err, row) {
// somethings.push(row);
// console.log(row);
// });
// console.log(somethings);
