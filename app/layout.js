import './globals.css'

export const metadata = {
  title: 'Product Store',
  description: 'Jewelry-style product listing',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}