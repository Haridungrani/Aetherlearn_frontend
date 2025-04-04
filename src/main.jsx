import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducer/reducer.js'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const store = configureStore({
  //added "rootReducer" into store variable and rootReducer is combination of all reducer which is made in slices;
  reducer: rootReducer,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)
