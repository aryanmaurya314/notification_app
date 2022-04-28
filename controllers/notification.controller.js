/**
 * Controller for the notification request
 */
const Notification = require("../models/notification.model");

/**
 * Accept a new notification request and return the tracking id
 */
exports.acceptNotificationRequest = async (req, res) => {
    // request body
    const notificationObj = {
        subject: req.body.subject,
        content: req.body.content,
        recepientEmails: req.body.recepientEmails,
        requester: req.body.requester,
        ticketId: req.body.ticketId
    }

    try {
        const notification = await Notification.create(notificationObj);
        res.status(200).send({
            requestId: notification.ticketId,
            status: "Accepted Reques - it's in progress."
        })
    } catch (err) {
        console.log("Error while accepting a notification request. ", err.message);
        res.status(500).send({
            message: "Internal server error while accepting a notification request."
        })
    }
}


/**
 * Check the notification status(if email is sent or not) using tracking id
 */

exports.getNotificationStatus = async (req, res)=>{
    const reqId = req.params.id;

    try{
        const notification = await Notification.findOne({
            ticketId : reqId
        });
        res.status(200).send({
            requestId: notification.ticketId,
            sentStatus: notification.sentStatus
        })
    }catch(err){
        console.log(err);
        res.status(500).send({
            message:"Internal server error while fetching the notification status."
        })
    }
}