const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

router.post('/notification-flow/ingredients-document-upload', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let formulationType = req.session.data['formulation-type']

  if (formulationType === 'choose-a-predefined-frame-formulation') {
    res.redirect('/notification-flow/select-frame-formulation')
  } else {
    res.redirect('/notification-flow/ingredients-document-upload')
  }
})


router.post('/notification-flow/ingredients-of-concern-document-upload', function (req,res) {

  let harmfulIngredients = req.session.data['does-the-product-contain-any-ingredients-of-concern']

  if (harmfulIngredients === 'yes') {
    res.redirect('/notification-flow/ingredients-of-concern-document-upload')
  } else {
    res.redirect('/notification-flow/ph-between-3-and-10')
  }

})

router.post('/notification-flow/image-upload', function (req,res) {

  let harmfulIngredients = req.session.data['ph-between-3-and-10']

  if (harmfulIngredients === 'no-it-is-lower-than-3-or-higher-than-10') {
    res.redirect('/notification-flow/ph-range')
  } else {
    res.redirect('/notification-flow/image-upload')
  }

})