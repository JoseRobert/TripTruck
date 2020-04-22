// userRouter.js

const express = require('express');
const router = express.Router();
// Models
const User = require('../models/userModel').User;

// Get all documents
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
      } catch (err) {
        // res.status(500).json({ message: err.message });
        res.status(500).json([]);
      }
    // res.json({
    //     status: 'ok',
    //     crud: 'read all'
    // });
});
// Get one document
router.get('/:id', (req, res) => {
    // console.log('get:id');
    // let id = req.params;
    // console.log('params: ', id);
    res.json({
        status: 'ok',
        crud: 'read one',
        id: id
    });

});
// Create document
router.post('/', (req, res) => {
    const {username, fullname, role, password, mobile} = req.body;
    console.log(username, fullname, role, password, mobile);
    let user = new User({
        username,
        fullname,
        role,
        password,
        mobile
        // mobile: req.body.mobile
    });
    user.save(function(err, user){
        if(err){
            console.log(String(err));
        }else{
            // res.send("Successfull");
            res.json(user);
        }
    });
    // res.json({
    //     status: 'ok',
    //     crud: 'create'
    // });
});
// Update document
router.put('/:id', (req, res) => {
    let id = req.params.id;
    const {username, fullname, role, password, mobile} = req.body;
    console.log(id);
    res.json({
        status: 'ok',
        crud: 'update'
    });
    // user.save()
});

// Delete one document
router.delete('/:id', (req, res) => {
    // console.log('delete:id');
    // const { id } = req.params;
    // // let id = req.params.id;
    // console.log(req.params);
    // console.log( id );   
    res.json({
        status: 'ok',
        crud: 'delete on'
    });

});
// res.set('Content-Type', 'text/plain')

// pass a local variable to the view
//res.render('user', { name: 'Tobi' }, function (err, html) {
    // ...
//  });
module.exports = router;