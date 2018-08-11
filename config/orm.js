// Import MYSQL connection from connection.js
const connection = require('./connection.js');

// Init ORM object to hold all SQL statements
const orm = {

    /* 
    Select all function to select all items in table 
    Use table name as paramater so it can be called in models folder
    */
   all: function(table, cb){
       let sql = `SELECT * FROM ${table};`;
       connection.query(sql, function(err, result){
           if (err) throw err;
           cb(result);
       });
   },

   /* 
    Create function that will insert into specifed values into table
    Use table name and values of new burger as paramater so it can be called in models folder
    */
    create: function(table, vals, cb){
        let sql = `INSERT INTO ${table} (burger_name, devoured) VALUES ("${vals}", false);`;
        connection.query(sql, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },

    /* 
    Update Function that will update existing record of table
    Use table name and values of new burger as paramater so it can be called in models folder
    */
   update: function(table, condition, cb){
       let sql = `UPDATE ${table} SET devoured = true WHERE ${condition};`;
       connection.query(sql, function(err, result){
           if (err) throw err;
           cb(result);
       });
   },

    /* 
    Delete Function that will delete devoured = true burger from database
    */
   remove: function(table, value, cb){
       let sql = `DELETE FROM ${table} WHERE id=${value};`;
       connection.query(sql, function(err, result){
           if (err) throw err;
           cb(result);
       });
   }
   
}

// Export ORM object so it can be called in models folder when querying databse
module.exports = orm;