import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';
import './globals.css';
import Providers from './Providers';

export const metadata = {
  title: 'IMDB',
  robots: {
    index: true,
  },
  description: '엄준식',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* {header} */}
          <Header />
          {/* {navbar} */}
          <Navbar />
          {/* {searchBox} */}
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
