const Product = require('../models/productModel')

// create Product -- Admin access
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body)
  res.status(201).json({
    success: true,
    product,
  })
}

// Get all products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find()
  res.status(201).json({
    success: true,
    product,
  })
}

// Update product  -- Admin access

exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id)

  if (!product) {
    return res.status(500).json({
      success: false,
      message: 'Product not found',
    })
  } else {
    product = await Product.findById(req.params.id, req.body, {
      new: true,
      runValidator: true,
      useFindAndModify: false,
    })
    res.status(200).json({
      success: true,
      product,
    })
  }
}

// delete product  -- Admin access

exports.deleteProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id)

  if (!product) {
    return res.status(500).json({
      success: false,
      message: 'Product not found',
    })
  } else {
    await product.remove()

    res.status(200).json({
      success: true,
      message: 'Product delete successful',
    })
  }
}
