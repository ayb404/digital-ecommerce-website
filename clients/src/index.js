import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextContactProvider } from './contextApi/Contextcontact';
import { ContextOrderProvider } from './contextApiorder/OrderC';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextOrderProvider>

        <ContextContactProvider>
          <App />
        </ContextContactProvider>
    </ContextOrderProvider>


    
);

