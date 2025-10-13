
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextApi } from './compunent/ContextApi.jsx'

import "slick-carousel/slick/slick.css";
import store from '../src/Store.js'
import { Provider } from 'react-redux'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <ContextApi>
      <App />
    </ContextApi>
   </Provider>
)
