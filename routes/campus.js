var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Floor = require('../models/floor.js');
var Reservation = require('../models/reservation');
var Room = require('../models/Room');
var Type = require('../models/Type');


/* GET ALL FLOORS */
router.get('/floor', function(req, res, next) {
  Floor.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET FLOOR BY ID */
router.get('/floor/:id', function(req, res, next) {
  Floor.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE FLOOR */
router.post('/floor', function(req, res, next) {
  Floor.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE FLOOR */
router.put('/floor/:id', function(req, res, next) {
  Floor.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE FLOOR */
router.delete('/floor/:id', function(req, res, next) {
  Floor.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* GET ALL RESERVATION */
router.get('/reservation', function(req, res, next) {
  Reservation.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET RESERVATION BY ID */
router.get('/reservation/:id', function(req, res, next) {
  Reservation.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Reservation */
router.post('/reservation', function(req, res, next) {
  Reservation.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE RESERVATION */
router.put('/reservation/:id', function(req, res, next) {
  Reservation.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE RESERVATION */
router.delete('/reservation/:id', function(req, res, next) {
  Reservation.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET ALL ROOMS */
router.get('/room', function(req, res, next) {
  Room.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET ROOM BY ID */
router.get('/room/:id', function(req, res, next) {
  Room.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE room */
router.post('/room', function(req, res, next) {
  Room.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE ROOM */
router.put('/room/:id', function(req, res, next) {
  Room.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE ROOM */
router.delete('/room/:id', function(req, res, next) {
  Room.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* GET ALL Types */
router.get('/type', function(req, res, next) {
  Type.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET TYPE BY ID */
router.get('/type/:id', function(req, res, next) {
  Type.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE TYPE */
router.post('/type', function(req, res, next) {
  Type.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE TYPE */
router.put('/type/:id', function(req, res, next) {
  Type.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE TYPE */
router.delete('/type/:id', function(req, res, next) {
  Type.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
