const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');

// @Desc Get user Tickets
// @route GET /api/tickets
// @access Protected
const getTickets = asyncHandler(async (req, res) => {
    // Get user using id and JWT
    const user = await User.findById(req.user.id);

    if (!user) {
        res.sendStatus(401);
        throw new Error('User not found');
    }

    const tickets = await Ticket.find({ user: req.user.id });

    res.sendStatus(200).json(tickets);
});



// @desc Create a new ticket
// @route POST /api/tickets
// @access Protected
const createTicket = asyncHandler(async (req, res) => {
    const { product, description } = req.body;

    if (!product || !description) {
        res.sendStatus(400)
        throw new Error('Please add product and description')
    }

    // Get user using id and JWT
    const user = await User.findById(req.user.id);

    if (!user) {
        res.sendStatus(401);
        throw new Error('User not found');
    }

    const ticket = await Ticket.create({
        product,
        description,
        user: req.user.id,
        status: 'new'
    })

    res.sendStatus(201).json(ticket);
});

module.exports = {
    createTicket,
    getTickets
};