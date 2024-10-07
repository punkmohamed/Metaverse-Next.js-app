import Head from 'next/head';
import '../styles/globals.css';

export const metadata = {
  title: "Metaversus",
  description: "Metaversus site",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
