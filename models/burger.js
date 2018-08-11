// Import ORM object so we can call its datbase query functions
const orm = require('../config/orm.js');

// Create burger object to call each of the orm database queries
const burger = {

    // Select all function retrieves all rows from table then uses callback function to dispaly data
    all: function(cb){
        orm.all('burgers', function(res){
           cb(res); 
        });
    },

    // Create Function that inserts new burger into databse
    create: function(vals, cb){
        orm.create('burgers', vals, function(res){
            cb(res);
        });
    },

    // Update function that marks burger as devoured as true 
    update: function(condition, cb){
        orm.update('burgers', condition, function(res){
            cb(res);
        });
    },

    // Delete function that removes burger from databse
    remove: function(value, cb){
        orm.remove('burgers', value, function(res){
            cb(res);
        });
    }
}

// Export Burger object to the controllers folder so it can use quries
module.exports = burger;