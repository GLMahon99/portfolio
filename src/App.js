
import './App.css';
import Education from './components/Education';
import Footer from './components/Footer';
import Me from './components/Me';
import Projetcs from './components/Projects';
import Skilss from './components/Skills';
import SocialMedias from './components/SocialMedias';


function App() {
  return (
    <div className="App">
      <main>
      <Me></Me>
        <Projetcs></Projetcs>
        <Education></Education>
        <Skilss></Skilss>

      </main>
      <SocialMedias/>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
