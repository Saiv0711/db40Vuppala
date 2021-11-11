var water = require('../models/water');
// List of all waters

// for a specific water.
exports.water_detail = function(req, res) {
res.send('NOT IMPLEMENTED: water detail: ' + req.params.id);
};
// Handle water create on POST.

// Handle water delete form on DELETE.
exports.water_delete = function(req, res) {
res.send('NOT IMPLEMENTED: water delete DELETE ' + req.params.id);
};
// Handle water update form on PUT.
exports.water_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: water update PUT' + req.params.id);
};

// List of all waters
exports.water_list = async function(req, res) {
    try{
    thewaters = await water.find();
    res.send(thewaters);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // Handle water create on POST.
exports.water_create_post = async function(req, res) {
    console.log(req.body)
    let document = new water();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"water_type":"goat", "cost":12, "size":"large"}
    document.types = req.body.types;
    document.capacity = req.body.capacity;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // VIEWS
// Handle a show all view
exports.water_view_all_Page = async function(req, res) {
    try{
    thewaters = await water.find();
    res.render('water', { title: 'water Search Results', results: thewaters });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };