import './App.css';
import { useState } from 'react';
import data from '../src/data/crayola.json';

function App() {

    const [hex, setHex] = useState('#6E5160')
    const [name, setName] = useState('Eggplant')
    const [rgb, setRgb] = useState('(110, 81, 96)')

    const colorHandler = (e) => {
        setHex(e.hex)
        setName(e.name)
        setRgb(e.rgb)
    }

    return (
        <div className="App" style={{backgroundColor: hex}}>
            <header className="App-header">
                Background Color Picker
            </header>

            <div className="color-palette">  
                { 
                    data.map(data => 
                        <button 
                            className="btn" 
                            value={data} 
                            onClick={() => colorHandler(data)} 
                            style={{backgroundColor: data.hex}}
                            title={data.name}>
                        </button>
                    )
                }
                <div className="color-info">
                    <p>Selected color:</p> 
                    <span>Name: <b>{name}</b></span>
                    <span>HEX: <b>{hex}</b></span>
                    <span>RGB: <b>{rgb}</b></span>
                </div>
            </div>
        </div>
    );
}

export default App;
