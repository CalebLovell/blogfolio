import axios from 'axios';
import { useMutation } from 'react-query';
import { useToasts } from 'react-toast-notifications';

export interface EmailData {
	name: string;
	email: string;
	prompt: string;
	message: string;
}

const sendEmail = async (emailData: EmailData) => {
	const { data } = await axios.post<EmailData>(`/api/contact`, emailData, {
		headers: {
			Accept: `application/json, text/plain, */*`,
			'Content-Type': `application/json`,
		},
	});
	return data;
};

export const useSendEmail = () => {
	const toasts = useToasts();
	return useMutation((emailData: EmailData) => sendEmail(emailData), {
		onError: (error: any) => {
			const apiMessage = error?.response?.data?.error || error.message || `An error occurred`;
			toasts.addToast(apiMessage, { appearance: `error` });
		},
		onSuccess: () => {
			toasts.addToast(`Email Sent! Thanks for reaching out. I'll respond as soon as possible!`, { appearance: `success` });
		},
	});
};
