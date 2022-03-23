const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');



// @Desc Get user Tickets
// @route GET /api/tickets
// @access Protected
const getTickets = asyncHandler(async (req, res) => {
   // const ticket = req.body;

    res.sendStatus(200).json({ message: 'getTickets' });
});



// @desc Create a new ticket
// @route POST /api/tickets
// @access Protected
const createTicket = asyncHandler(async (req, res) => {
    

    res.sendStatus(201).json({message: 'createTicket'})
});

module.exports = {
    createTicket,
    getTickets
};