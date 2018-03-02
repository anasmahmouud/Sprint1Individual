var express = require('express'),
  router = express.Router(),
  productCtrl = require('../controllers/AnasController');

  const authentication = require('../controllers/authentication')(router);
  app = express();
	memberCtrl = require('../controllers/MemberController');


//-------------------------------Product Routes-----------------------------------
router.get('/anas/getProducts', productCtrl.getProducts);
router.get('/anas/getProduct/:productId', productCtrl.getProduct);
router.get(
  '/anas/getProductsBelowPrice/:price',
  productCtrl.getProductsBelowPrice
);
router.post('/anas/createProduct', productCtrl.createProduct);
router.patch('/anas/updateProduct/:productId', productCtrl.updateProduct);
router.delete('/anas/deleteProduct/:productId', productCtrl.deleteProduct);


app.use('/authentication' , authentication);

//-------------------------------Member Routes-----------------------------------
router.get('/member/getMembers', memberCtrl.getMembers);
router.post('/member/createMember', memberCtrl.createMember);
router.patch('/member/updateMember/:memberId', memberCtrl.updateMember);
router.delete('/member/deleteMember/:memberId', memberCtrl.deleteMember);

//------------------------------User Routes-----------------------------------


module.exports = router;
