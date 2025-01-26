 const mongoose = require('mongoose');

// Define the schema for the loan
const loanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: String, enum: ['Wedding', 'Home Construction', 'Business Startup', 'Education'], required: true },
  subcategory: { type: String, required: true },
  amount: { type: Number, required: true },
  loanPeriod: { type: Number, required: true }
});

// Create and export the Loan model
const Loan = mongoose.model('Loan', loanSchema);
module.exports = Loan;