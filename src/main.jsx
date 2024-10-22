import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppRouter from './router/router.jsx'
import{Provider} from "react-redux"
import store from './redux/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <AppRouter />
    </Provider>
    
  </StrictMode>,
)
