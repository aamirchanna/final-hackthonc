const Loan = require('../models/Loan');

// Create Loan Request
exports.createLoanRequest = async (req, res) => {
  try {
    const { userId, category, subcategory, amount, loanPeriod } = req.body;

    const validCategories = ['Wedding', 'Home Construction', 'Business Startup', 'Education'];
    if (!validCategories.includes(category)) {
      return res.status(400).json({ message: `Invalid category value. Allowed values are: ${validCategories.join(', ')}` });
    }

    const newLoan = new Loan({ userId, category, subcategory, amount, loanPeriod });
    await newLoan.save();

    res.status(201).json({ message: 'Loan request created successfully', newLoan });
  } catch (error) {
    console.error("Error creating loan request:", error); // Log the full error for debugging
    res.status(500).json({
      message: 'Error creating loan request',
      error: error.message || error
    });
  }
};

// Get All Loans
exports.getAllLoans = async (req, res) => {
  try {
    const loans = await Loan.find().populate('userId', 'name email');
    res.status(200).json(loans);
  } catch (error) {
    console.error("Error fetching loans:", error); // Log the error for debugging
    res.status(500).json({
      message: 'Error fetching loans',
      error: error.message || error
    });
  }
};

// Get Loan Details by ID
exports.getLoanById = async (req, res) => {
  try {
    const { loanId } = req.params;
    const loan = await Loan.findById(loanId).populate('userId', 'name email');
    if (!loan) {
      return res.status(404).json({ message: 'Loan not found' });
    }
    res.status(200).json(loan);
  } catch (error) {
    console.error("Error fetching loan details:", error); // Log the error for debugging
    res.status(500).json({
      message: 'Error fetching loan details',
      error: error.message || error
    });
  }
};
