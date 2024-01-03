import './App.css';
import Googleauth from './Firebase/Googleauth';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shoppingmain from './components/Shoppingmain';
import { useEffect ,useState} from 'react';

function App() {
  const [showSignIn, setShowSignIn] = useState(true);

  useEffect(() => {
    const handlePathChange = () => {
      const newPath = window.location.pathname;
      setShowSignIn(newPath === '/');
    };

    // Attach the event listener
    window.addEventListener('popstate', handlePathChange);

    // Call handlePathChange initially to set the initial state correctly
    handlePathChange();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('popstate', handlePathChange);
    };
  }, []); // The empty dependency array ensures that the effect runs only once on mount

  return (
    <>
      
      <BrowserRouter>
      
        <Routes>
          <Route path='/shoppingmain' element={<Shoppingmain/>} />
          <Route path='/' element={showSignIn && <Googleauth></Googleauth>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App
