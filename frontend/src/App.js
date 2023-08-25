import React, { useState, useEffect } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <p>{message}</p>
            </header>
        </div>
    );
}

export default App;
