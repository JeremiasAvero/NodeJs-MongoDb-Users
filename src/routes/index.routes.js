const express = require('express');
const { route } = require('./user.routes');
const router = express.Router();

router.get('/',(req,res) => {
    res.json({
        message: "Welcome to my Users Api. Made with NodeJs, Express, MongoDb and Swagger. Enter to /api-doc to see documentation"
    })
})

module.exports = router;