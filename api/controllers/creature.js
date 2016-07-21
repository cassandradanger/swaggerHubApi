/**
 * Created by primeadmin on 7/20/16.
 */
'use strict';
// Include our "db"
var db = require('../../config/db')();

// Exports all the functions to perform on the db
module.exports = {getAll, save, getOne, update, delCreature};

//GET /creature operationId
function getAll(req, res, next) {
    res.json({ creatures: db.find()});
}
//POST /creature operationId
function save(req, res, next) {
    res.json({success: db.save(req.body), description: "Creature added to the list!"});
}
//GET /creature/{id} operationId
function getOne(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var creature = db.find(id);
    if(creature) {
        res.json(creature);
    }else {
        res.status(204).send();
    }
}
//PUT /creature/{id} operationId
function update(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var creature = req.body;
    if(db.update(id, creature)){
        res.json({success: 1, description: "Creature updated!"});
    }else{
        res.status(204).send();
    }
}
//DELETE /creature/{id} operationId
function delCreature(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    if(db.remove(id)){
        res.json({success: 1, description: "Creature deleted!"});
    }else{
        res.status(204).send();
    }
}