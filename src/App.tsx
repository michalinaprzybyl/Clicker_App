import { useState } from 'react'; // hook useState 
import Display from './components/Display/Display';
import Manipulator from './components/Manipulator/Manipulator';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Display numberToDisplay={count} />  {/* to tak na prawdę wywołanie funkcji Display*/}
      <Manipulator setCount={setCount} />
    </div>
  );
}

export default App;
