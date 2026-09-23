import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: 'Kingsley Kie | Front-end Developer',
  description:
    'Passionate IT student specializing in Front-end Web Development with expertise in HTML, CSS, JavaScript, and modern frameworks. Eager to leverage coding skills to build real-world web applications.',
  keywords: [
    'Kingsley Kie',
    'Front-end Developer',
    'React',
    'JavaScript',
    'Portfolio',
    'UI Designer',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
