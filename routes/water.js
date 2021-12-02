var express = require('express'); 
const water_controlers= require('../controllers/water'); 
var router = express.Router(); 

// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
/* GET waters */ 
router.get('/', water_controlers.water_view_all_Page ); 
 

// GET request for one water. 
router.get('/waters/:id', water_controlers.water_detail); 

/* GET detail water page */ 
router.get('/detail', water_controlers.water_view_one_Page); 

/* GET create water page */ 
router.get('/create',secured, water_controlers.water_create_Page); 

/* GET create update page */ 
router.get('/update',secured, water_controlers.water_update_Page); 

/* GET create water page */ 
router.get('/delete',secured, water_controlers.water_delete_Page); 
 
 
module.exports = router;