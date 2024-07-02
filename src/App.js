
import './styles/style.css'
import Loading from './components/Loading';
import Home from './components/Home';
import Join from './components/Join';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Loading />
      <Home />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
