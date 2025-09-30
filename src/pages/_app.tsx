import '../styles/globals.css';

import { Toast } from '@components/Toast';
import { ToastContainer } from '@components/ToastContainer';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastProvider } from 'react-toast-notifications';

const queryClient = new QueryClient({
	defaultOptions: {
		mutations: {
			onError: (error: Error) => {
				console.log(error.message);
			},
		},
	},
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<ToastProvider
				components={{ Toast, ToastContainer }}
				placement='bottom-center'
				transitionDuration={100}
				autoDismiss={true}
				autoDismissTimeout={10000}
			>
				<Component {...pageProps} />
			</ToastProvider>
		</QueryClientProvider>
	);
}

export default MyApp;
