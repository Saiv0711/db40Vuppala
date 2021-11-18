var express = require('express'); 
const water_controlers= require('../controllers/water'); 
var router = express.Router(); 
 
/* GET waters */ 
router.get('/', water_controlers.water_view_all_Page ); 
 

// GET request for one water. 
router.get('/waters/:id', water_controlers.water_detail); 

/* GET detail water page */ 
router.get('/detail', water_controlers.water_view_one_Page); 

/* GET create water page */ 
router.get('/create', water_controlers.water_create_Page); 

/* GET create update page */ 
router.get('/update', water_controlers.water_update_Page); 

/* GET create water page */ 
router.get('/delete', water_controlers.water_delete_Page); 
 
 
module.exports = router;