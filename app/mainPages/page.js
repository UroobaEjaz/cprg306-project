  
import Link from 'next/link';

import Header from '../components/header.js';
import Footer from '../components/footer.jsx';
import MaleFemale from '../components/male&female.js';

export default function Home() {
  return (
    <main className="bg-grey min-h-screen ">
      <Header/>
    <MaleFemale/>
     
      <Footer/>
  
  
    </main>
  );
}