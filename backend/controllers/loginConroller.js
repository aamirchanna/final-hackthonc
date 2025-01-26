import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import userModel from "../models/userModel.js";

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: 'Please provide both email and password',
            });
        }

        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User not found, please register first',
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({
                success: false,
                message: 'Invalid email or password',
            });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1d', // Token expires in 1 day
        });

        res.status(200).send({
            success: true,
            message: 'Login successful',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                address: user.address,
            },
            token,
        });
    } catch (error) {
        console.log('Error in loginController', error);
        res.status(500).send({
            success: false,
            message: 'Error in login',
            error,
        });
    }
};

// export default loginController;