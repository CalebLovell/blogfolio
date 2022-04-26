/* eslint-disable @typescript-eslint/no-var-requires */
import type { NextApiRequest, NextApiResponse } from 'next';
import { MailOptions } from 'nodemailer-mailgun-transport';
import { Transporter } from 'nodemailer';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const nodemailer = require(`nodemailer`);
		const mg = require(`nodemailer-mailgun-transport`);

		const mailgunAuth = {
			auth: {
				api_key: process.env.MAILGUN_API_KEY,
				domain: process.env.MAILGUN_DOMAIN,
			},
		};

		const smtpTransport: Transporter = nodemailer.createTransport(mg(mailgunAuth));

		const email: MailOptions = {
			from: `caleblovell1@gmail.com`,
			to: `caleblovell1@gmail.com`,
			subject: `Message From ${req.body.name}`,
			text: `Prompt: ${req.body.prompt} Message: ${req.body.message} | Sent from: ${req.body.email}`,
			html: `<div><p>From: ${req.body.name}</p><p>Email: ${req.body.email}</p><p><b>Prompt: ${req.body.prompt}</b></p><p><p>${req.body.message}</p>Reply to: ${req.body.email}</p></div>`,
		};

		smtpTransport.sendMail(email, (error, response) => {
			if (error) {
				console.log(error.message);
				res.status(500).send({ error });
			} else res.status(200).send({ message: response });
		});
	} catch (err) {
		res.status(500).send({ error: err });
	}
}
