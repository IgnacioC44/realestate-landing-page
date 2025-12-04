import Header from "./components/header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=mona-sans@400,500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: 'Mona Sans, sans-serif' }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
