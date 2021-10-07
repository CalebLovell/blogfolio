import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang='en'>
				<Head>
					{/* <link rel='preload' href='/fonts/inter-var.ttf' as='font' type='font/ttf' crossOrigin='anonymous' />
					<link rel='icon' href='/favicons/favicon.ico' />
					<link href='/favicons/favicon.ico' rel='shortcut icon' />
					<link href='/favicons/site.webmanifest' rel='manifest' />
					<link href='/favicons/apple-touch-icon.png' rel='apple-touch-icon' sizes='180x180' />
					<link href='/favicons/favicon-32x32.png' rel='icon' sizes='32x32' type='image/png' />
					<link href='/favicons/favicon-16x16.png' rel='icon' sizes='16x16' type='image/png' />
					<link color='#3b82f6' href='/favicons/safari-pinned-tab.svg' rel='mask-icon' />
					<link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#5bbad5' />
					<meta name='theme-color' content='#ffffff' />
					<meta name='msapplication-TileColor' content='#2b5797' />
					<meta content='/favicons/browserconfig.xml' name='msapplication-config' /> */}
				</Head>
				<body className='overflow-y-scroll bg-gray-800'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
