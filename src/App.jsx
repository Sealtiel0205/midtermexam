import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('10 Things That Require Zero Talent');

  // Mapping for keys to their corresponding values
  const keyMap = {
    '1': 'Being On Time',
    '2': 'Making An Effort',
    '3': 'Being High Energy',
    '4': 'Having A Positive Attitude',
    '5': 'Being Passionate',
    '6': 'Using Good Body Language',
    '7': 'Being Coachable',
    '8': 'Doing A Little Extra',
    '9': 'Being Prepared',
    '0': 'Having A Strong Work Ethic',
    'NAME': 'SEALTIEL SALAZAR',
    'SUBJ': 'C-PCIT9'
  };

  const handleKeyPress = (label) => {
    if (keyMap[label]) {
      setDisplay(keyMap[label]);
    }
  };

  const buttonLayout = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['NAME', '0', 'SUBJ']
  ];

  return (
    <div className="app-container">
      <div className="card">
        {/* Header Requirement A */}
        <h1 className="header">SEALTIEL NIELSEN SALAZAR - DA3A</h1>

        {/* Display Requirement B */}
        <div className="display-screen">
          {display}
        </div>

        {/* Buttons Requirement C */}
        <div className="button-grid">
          {buttonLayout.flat().map((btn) => (
            <button
              key={btn}
              className="calc-btn"
              onClick={() => handleKeyPress(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;