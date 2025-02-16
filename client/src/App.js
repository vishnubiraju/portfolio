// client/src/App.js
import React from 'react';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import createStore from './redux/store'; // Import your store (redux setup)
import AppRoutes from './routes';
import './assets/styles/index.scss';
import Header from './components/Header';
import NavigationComponent from './components/Navigation';


function App() {

  const store = createStore({});
  return (
    <Provider store={store}>
      <Header/>
      {/* <NavigationComponent /> */}
      <AppRoutes/>
    </Provider>
  );
}


export default App;

