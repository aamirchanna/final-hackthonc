const mongoose = require('mongoose');
const guarantorSchema = new mongoose.Schema({
    loanId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Loan',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    cnic: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  });
  
  module.exports = mongoose.model('Guarantor', guarantorSchema);