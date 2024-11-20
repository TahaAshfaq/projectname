import { Poppins } from 'next/font/google'; // Import the Poppins font
import Navbar from './components/Navbar.jsx';
import Homesection from './components/Homesection.jsx';
import Aboutme from './components/Aboutme.jsx';
import Services from'./components/Services.jsx';

const poppins = Poppins({
  subsets: ['latin'], // This includes the Latin subset for general use
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // All available weights of Poppins
});

export default function Home() {
  return (
    <div className={poppins.className}> {/* Apply the Poppins font to the entire page */}
      <Navbar />
      <Homesection />
      <Aboutme />
      <Services />
    </div>
  );
}
