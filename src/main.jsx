import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
      <BrowserRouter> 
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
)
