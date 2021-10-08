/* eslint-disable @typescript-eslint/no-var-requires */
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	require(`dotenv`).config();
	const nodemailer = require(`nodemailer`);
	const transporter = nodemailer.createTransport({
		port: 465,
		host: `smtp.gmail.com`,
		auth: {
			user: `clovellemailer@gmail.com`,
			pass: process.env.EMAIL_PASSWORD,
		},
		secure: true,
	});

	const email = {
		from: `clovellemailer@gmail.com`,
		to: `caleblovell1@gmail.com`,
		subject: `Message From ${req.body.name}`,
		text: `Prompt: ${req.body.prompt} Message: ${req.body.message} | Sent from: ${req.body.email}`,
		html: `<div><p>From: ${req.body.name}</p><p>Email: ${req.body.email}</p><p><b>Prompt: ${req.body.prompt}</b></p><p><p>${req.body.message}</p>Reply to: ${req.body.email}</p></div>`,
	};

	try {
		transporter.sendMail(email, (err, info) => {
			if (err) console.log(err);
			else res.status(200).json({ message: info });
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}
