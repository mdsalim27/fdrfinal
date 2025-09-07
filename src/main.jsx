
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextApi } from './compunent/ContextApi.jsx'


createRoot(document.getElementById('root')).render(
  <ContextApi>
    <App />
  </ContextApi>,
)
