'use strict'
const express = require('express');
var url  = require('url');
var ObjectId = require('mongodb').ObjectId;

module.exports = db => {
	const router = express.Router()
	const wrapAsync = handler => (req, res) => handler(req)
	.then(result => res.json(result))
	.catch(error => res.status(500).json({ error: error.message }))

	router.get('/', wrapAsync(async function(req){
		return db.collection('posts').find().sort({ createdAt: -1}).toArray()
	}))
	
	router.get('/story', wrapAsync(async function(req){
		//console.log("this is the request",req)
		console.log(req.query)
		var idArray = Object.keys(req.query)
		console.log(idArray)
		var post = await db.collection('posts').find({"_id":ObjectId(idArray[0])}).toArray();
		console.log(post)
		return post
	}))
	return router
}