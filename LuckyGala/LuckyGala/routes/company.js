var express = require('express');
var QRCode = require('qrcode')
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  QRCode.toDataURL('I am a pony!', function (err, url) {
    console.log(url);
    
    res.render('company', { title: "当前公司名称为："+req.params.id,qrcodeurl:url });
  })

  

});

module.exports = router;
