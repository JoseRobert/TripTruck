// usersRouter.js

const express = require('express');
const router = express.Router();

// const currentUser = state.User_Name;

// Models
const User = require('../models/userModel').User;

// console.log('User-Model:', User);
// Get all documents
router.get('/all', async (req, res) => {
    try {
        let oCondition = { active: true };
        const users = await User.find(oCondition, { password: 0}, { sort: { username: 'asc'} });
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
// User verify 
router.post('/user', async (req, res) => {
    let existUser = true;
    // console.log("router.post('/user)------>");
    // console.log('body = ', req.body);
    let user = req.body.username;
    // user='user02';
    // console.log('users/user =>');
    // console.log('user = ', user);
    try {
        let oCondition = { active: true };
        const users = await User.find({ username : user });
        // console.log('users.length =>', users.length);
        existUser =  users.length == 0 ? false: true;
        // console.log('existUser = ', existUser);
        res.json({ 'username': user, 'existUser': existUser });
    } catch (err) {
        // res.status(500).json({ message: err.message });
        res.status(500).json( {'error': True} );
    }    
    // res.json({
    //     status: 'ok',
    //     crud: 'read one',
    //     id: id,
    //     fullname
    // });

});
// Get one document
// router.get('/:id', (req, res) => {
router.get('/one', async (req, res) => {
    // console.log('get:id');
    // let id = req.params;
    // console.log('params: ', id);
    const id = req.body._id;
    try {
        let oCondition = { active: true };
        const users = await User.find({ _id : id });
        res.json(users);
    } catch (err) {
        // res.status(500).json({ message: err.message });
        res.status(500).json([]);
    }    
    // res.json({
    //     status: 'ok',
    //     crud: 'read one',
    //     id: id,
    //     fullname
    // });

});
// Create document
router.post('/create', async (req, res) => {
    console.log('/users/create');
    const {username, fullname, role, password, mobile} = req.body;
    // console.log('------------ body ---------------');
    // console.log(username, fullname, role, password, mobile);
    let user = new User({
        username,
        fullname,
        role,
        password,
        mobile
        // mobile: req.body.mobile
    });
    try {
        await user.save(function(err, user){
            if(err){
                console.log('Create: Fail');
                console.log(String(err));
                res.json({ status: false, msg: 'Fail'});
            }else{
                console.log('Create: Successfull');
                // res.json(user);
                res.json({ status: true, msg: 'Successfull'});
            }
        });        
    } catch (error) {
        res.status(500).json([]);        
    }    

    // res.json({
    //     status: 'ok',
    //     crud: 'create'
    // });
});
// Update document
router.put('/update', (req, res) => {
    console.log('/users/update');
    let id = req.body._id;
    const {username, fullname, role, mobile, currentUser} = req.body;
    //console.log('_id => ', id);

    let user = {
        username,
        fullname,
        role,
        mobile,
        update: { username: currentUser, date: Date.now() }
    };
    User.updateOne({ _id: id }, user, function(err, raw) {
        if (err) {
            console.log('Update: Fail!'); 
            res.json({ status: false, msg: 'Fail'});
            // res.send(err);
        }else{
            console.log('Update: Successfull!');
            // res.send(raw);
            res.json({ status: true, msg: 'Successfull'});
        }
    }); 
    // res.json({
    //     status: 'ok',
    //     crud: 'update'
    // });
});

// Delete one document
// router.delete('/:id', (req, res) => {
router.delete('/delete', async (req, res) => {
    console.log('/users/delete');
    let id = req.body._id;
    let currentUser =  currentUser;
    // console.log('body._id =>', id);
    // const { id } = req.params;
    // // let id = req.params.id;
    // console.log(req.params);
    // console.log( id );   
    try {
        const users = await User.deleteOne({ _id : id }, function(err){
            if(err){
                res.json({ status: false, msg: 'Fail'});
            }else{
                console.log('Delete: Successfull');
                res.json({ status: true, msg: 'Successfull'});
            }
        });
        // res.json(users);
    } catch (err) {
        // res.status(500).json({ message: err.message });
        res.status(500).json([]);
    }       

    // res.json({
    //     id: id,
    //     status: 'ok',
    //     crud: 'delete on'
    // });

});
// res.set('Content-Type', 'text/plain')

// pass a local variable to the view
//res.render('user', { name: 'Tobi' }, function (err, html) {
    // ...
//  });
module.exports = router;