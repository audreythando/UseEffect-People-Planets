
import './App.css';
import GetInfo from './pages/GetInfo';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <GetInfo />
      </div>
    </ChakraProvider>
  );
}

export default App;
