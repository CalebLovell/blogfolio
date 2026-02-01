/* eslint-disable @typescript-eslint/no-var-requires */
import type { NextApiRequest, NextApiResponse } from 'next';
import { MailOptions } from 'nodemailer-mailgun-transport';
import { z } from 'zod';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const schema = z.object({
		name: z.string().min(1),
		email: z.email(),
		message: z.string().min(1),
		prompt: z.string().min(1),
	});

	const result = schema.safeParse(req.body);
	if (!result.success) {
		return res.status(400).send({ error: z.prettifyError(result.error) });
	}

	try {
		const nodemailer = require(`nodemailer`);

		const transport = nodemailer.createTransport({
			service: `gmail`,
			auth: {
				user: process.env.MY_EMAIL,
				pass: process.env.MY_PASSWORD,
			},
		});

		const { name, email, message, prompt } = result.data;

		const mail: MailOptions = {
			from: `caleblovell1@gmail.com`,
			to: `caleblovell1@gmail.com`,
			subject: `Message From ${name}`,
			text: `Prompt: ${prompt} Message: ${message} | Sent from: ${email}`,
			html: `<div><p>From: ${name}</p><p>Email: ${email}</p><p><b>Prompt: ${prompt}</b></p><p><p>${message}</p>Reply to: ${email}</p></div>`,
		};

		transport.sendMail(mail, (error, response) => {
			if (error) {
				console.log(error.message);
				res.status(500).send({ error });
			} else res.status(200).send({ message: response });
		});
	} catch (err) {
		res.status(500).send({ error: err });
	}
}
