import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.js';
import {legacy_createStore as createStore} from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reducer from './reducers/reducer.js';
import BaseLayout from './components/layout/BaseLayout.js';
import Students from './components/Students.js';
import Teachers from './components/Teachers';
import LogIn from './components/LogIn.js';
import Register from './components/Register.js';
import About from './components/About.js';

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>
);
