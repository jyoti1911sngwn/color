import logo from './logo.svg';
import './App.css';
import React,{ useState} from 'react'



 const App =()=> {
   
  const [buttonColors, setButtonColors] = useState({
    btn1: '',
    btn2: '',
    btn3: ''
  });

  const handleButtonClick = (btn, color) => {
    setButtonColors(prevState => ({
      ...prevState,
      [btn]: color
    }));
  };

    
  return (
    <div className="App">
   <button
        onClick={() => handleButtonClick('btn1', 'red')}
        style={{
          height: '100px',
          width: '100px',
          borderRadius: '5px',
          margin: '2%',
          backgroundColor: buttonColors.btn1
        }}
      >
        Red
      </button>
      <button
        onClick={() => handleButtonClick('btn2', 'blue')}
        style={{
          height: '100px',
          width: '100px',
          borderRadius: '5px',
          margin: '2%',
          backgroundColor: buttonColors.btn2
        }}
      >
        Blue
      </button>
      <button
        onClick={() => handleButtonClick('btn3', 'green')}
        style={{
          height: '100px',
          width: '100px',
          borderRadius: '5px',
          margin: '2%',
          backgroundColor: buttonColors.btn3
        }}
      >
        Green
      </button>
    
    </div>

  );
}

export default App;
