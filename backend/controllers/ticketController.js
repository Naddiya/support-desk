const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');

// @Desc Get user Tickets
// @route GET /api/tickets
// @access Private
const getTickets = asyncHandler(async (req, res) => {
    // Get user using id and JWT
    const user = await User.findById(req.user.id);

    if (!user) {
        res.status(401);
        throw new Error('User not found');
    }

    const tickets = await Ticket.find({ user: req.user.id });

    res.status(200).json(tickets);
});

// @desc Create a new ticket
// @route POST /api/tickets
// @access Private
const createTicket = asyncHandler(async (req, res) => {
    const { product, description } = req.body;

    if (!product || !description) {
        res.status(400);
        throw new Error('Please add product and description');
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
    });

    res.status(201).json(ticket);
});

// @desc get user ticket
// @route GET /api/tickets/:id
// @access Private
const getTicket = asyncHandler(async (req, res) => {
    // Get user using id and JWT
    const user = await User.findById(req.user.id);

    if (!user) {
        res.status(401);
        throw new Error('User not found');
    }

    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
        res.status(400);
        throw new Error('Ticket not found');
    }

    if (ticket.user.toSTring() !== req.user.id) {
        res.status();
    }

    res.status(200).json(ticket);
});

module.exports = {
    createTicket,
    getTickets,
    getTicket
};