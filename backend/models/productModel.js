const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Enter product Name'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please Enter product description '],
  },
  price: {
    type: Number,
    required: [true, 'Please Enter product price amount '],
    maxlength: [8, 'Price cannot exceed 8 digite'],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, 'Please Enter product Category '],
  },

  stock: {
    type: Number,
    maxlength: [8, 'stock cannot exceed 8 digite'],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      Comment: {
        type: String,
        required: true,
      },
    },
  ],

  cratedAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Product', productSchema)
