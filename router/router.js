// routes.js
const { Router } = require ('express');
const router = Router();

router.get('/', (req, res) =>{
    console.log('/home');
    // res.render('./home);
    res.send('Probando home.html..');

});

router.get("/allUsers", function(req, res){
  console.log('/allUsers');
  User.find(function(err, data){
    console.log(data);
  });
});

router.post('/algo', async function(req, res){
    let body = req.body;
    try {
    //    let notasDB = await Model.create(body);
       res.status(200).json(notasDB);
    } catch (error) {
        return res.status(500).json({ msg: "Error", error});
    }
})
module.exports = router;
