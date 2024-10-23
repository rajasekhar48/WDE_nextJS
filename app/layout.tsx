// app/layout.tsx

import './globals.css'; // Import global styles
import Navbar from './components/page'; // Import the Navbar component

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
