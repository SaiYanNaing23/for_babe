// import { Mentor } from "../models/mentor.model.js";
// // const { google } = require('googleapis');
// import { google } from 'googleapis'
// // const bodyParser = require('body-parser');
// // const fs = require('fs');
// import fs from 'fs';

// // Load credentials
// const credentials = JSON.parse(fs.readFileSync('./creditentials.json'));
// // const { client_id, client_secret, redirect_uris } = credentials.installed;
// const { client_id, client_secret, redirect_uris } = credentials.web;

// // Set up OAuth2 client
// const oAuth2Client = new google.auth.OAuth2(
//   client_id,
//   client_secret,
//   redirect_uris[0]
// );

// export const getMentorDetails = async (req, res) => {
//     try {
//         const { id } = req.body;
//         const mentor = await Mentor.findOne({ _id : id })
//         if(!mentor){
//             res.status(404).json({ message: 'mentor not found', success : false })
//         }
//         res.status(200).json({ success: true , mentor : mentor})
//     } catch (error) {
//         res.status(500).json({ message : "Internal Server Error", success : false });
//         console.log(error);
//     }
// }

// export const updateAgreedMentee = async(req, res) => {
//     try {
//         const { mentee_id, mentor_id } = req.body;
//         console.log('mentee_id', mentee_id)
//         console.log('mentor_id', mentor_id)
     

//         await Mentor.findByIdAndUpdate(mentor_id,{
//             $push: {
//                 agreedMenteeIds : mentee_id,
//             }
//         });

//         res.status(200).json({ success: true });
//     } catch (error) {
//         res.status(500).json({ message : "Internal Server Error", success : false });
//         console.log(error);
//     }
// }

// export const loginAuth = async(req, res) => {
//     try {
//         const authUrl = oAuth2Client.generateAuthUrl({
//             access_type: 'offline',
//             scope: ['https://www.googleapis.com/auth/calendar.events'],
//         });
//         res.status(200).json({ success: true, google_auth_url : authUrl });
//     } catch (error) {
//         res.status(500).json({ message : "Internal Server Error", success : false });
//         console.log(error);
//     }
// }

// export const generateMeetingLink = async(req,res) => {
//     try {
//         const { summary, description, startTime, endTime, attendees } = req.body;

//         const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

//         const event = {
//             summary: summary,
//             description: description,
//             start: { dateTime: startTime, timeZone: 'UTC' },
//             end: { dateTime: endTime, timeZone: 'UTC' },
//             attendees: attendees.map(email => ({ email })),
//             conferenceData: {
//                 createRequest: { requestId: 'meet-' + new Date().getTime() },
//         },
//         };

//         const response = await calendar.events.insert({
//             calendarId: 'primary',
//             resource: event,
//             conferenceDataVersion: 1,
//         });

//         res.json({
//         message: 'Event created successfully!',
//         meetLink: response.data.hangoutLink,
//         });

//     } catch (error) {
//         res.status(500).json({ message : "Internal Server Error", success : false });
//         console.log(error);
//     }
// }

import { Mentor } from "../models/mentor.model.js";
import { google } from 'googleapis';
import fs from 'fs';

// Load credentials
const credentials = JSON.parse(fs.readFileSync('./creditentials.json'));
const { client_id, client_secret, redirect_uris } = credentials.web;

// Set up OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
);

// Generate auth URL for Google login
export const loginAuth = async (req, res) => {
    try {
        const authUrl = oAuth2Client.generateAuthUrl({
            access_type: 'offline', // Ensure refresh token is granted
            scope: ['https://www.googleapis.com/auth/calendar.events'],
        });
        res.status(200).json({ success: true, google_auth_url: authUrl });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", success: false });
        console.error('Error generating auth URL:', error);
    }
};

// Handle Google OAuth callback and exchange code for tokens
export const handleGoogleCallback = async (req, res) => {
    try {
        const { code } = req.body; // Get the authorization code from the request body
        console.log("Authorization code:", code);

        // Exchange the authorization code for tokens
        const { tokens } = await oAuth2Client.getToken(code);

        // Set the tokens to the OAuth2 client
        oAuth2Client.setCredentials(tokens);

        // Save the tokens to a file
        fs.writeFileSync('tokens.json', JSON.stringify(tokens, null, 2));

        res.status(200).json({ success: true, message: "Authentication successful!", tokens });
    } catch (error) {
        console.error('Error exchanging code for tokens:', error);
        res.status(500).json({ success: false, message: "Failed to authenticate" });
    }
};

// Generate Google Meet link by creating an event
export const generateMeetingLink = async (req, res) => {
    try {
        const { summary, description, startTime, endTime, attendees } = req.body;
        // Load credentials
        const credentials = JSON.parse(fs.readFileSync('./creditentials.json'));
        const { client_id, client_secret, redirect_uris } = credentials.web;

        // Set up OAuth2 client
        const oAuth2Client = new google.auth.OAuth2(
            client_id,
            client_secret,
            redirect_uris[0]
        );

        if (fs.existsSync('tokens.json')) {
            const tokens = JSON.parse(fs.readFileSync('tokens.json'));
            oAuth2Client.setCredentials(tokens);
          }
        // Ensure oAuth2Client has credentials set
        if (!oAuth2Client.credentials) {
            return res.status(403).json({ message: "Unauthorized. Please authenticate first.", success: false });
        }

        const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

        const event = {
            summary,
            description,
            start: { dateTime: startTime, timeZone: 'UTC' },
            end: { dateTime: endTime, timeZone: 'UTC' },
            attendees: attendees.map(email => ({ email })),
            conferenceData: {
                createRequest: { requestId: `meet-${Date.now()}` },
            },
        };

        const response = await calendar.events.insert({
            calendarId: 'primary',
            resource: event,
            conferenceDataVersion: 1, // Required for creating Google Meet links
        });

        res.status(200).json({
            success: true,
            message: 'Event created successfully!',
            meetLink: response.data.hangoutLink,
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", success: false });
        console.error('Error creating meeting link:', error.response?.data || error.message);
    }
};

// Example route to get mentor details
export const getMentorDetails = async (req, res) => {
    try {
        const { id } = req.body;
        const mentor = await Mentor.findOne({ _id: id });
        if (!mentor) {
            return res.status(404).json({ message: 'Mentor not found', success: false });
        }
        res.status(200).json({ success: true, mentor });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", success: false });
        console.error('Error fetching mentor details:', error);
    }
};

// Example route to update agreed mentees
export const updateAgreedMentee = async (req, res) => {
    try {
        const { mentee_id, mentor_id } = req.body;

        await Mentor.findByIdAndUpdate(mentor_id, {
            $push: {
                agreedMenteeIds: mentee_id,
            },
        });

        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", success: false });
        console.error('Error updating agreed mentee:', error);
    }
};
