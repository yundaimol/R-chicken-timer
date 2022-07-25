
import './App.css';
import Title from './componets/Title';

import Timer from './componets/Timer';
import SecButton from './componets/SecButton';

import { useState } from 'react';

function App() {
  const [isWaiting, setIsWaiting] = useState(false);

  return (
    <div className="wrapper">
      <div className='container'>
        <Title/>
        
        {
          isWaiting ? 
          <Timer/>
          : <SecButton setIsWaiting={setIsWaiting} isWaiting={isWaiting}/>
        }
        
      </div>
      
    </div>
  );

}


export default App;
