import React from 'react';
import './App.css';
import Feed from './Components/Feed/Feed';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Sidebar from './Components/Sidebar/Sidebar';
import { useStateValue } from './Components/StateProvider';
import Widgets from './Components/Widgets/Widgets';


function App() {

  const [{ user }, dispatch] = useStateValue();
  return (
    //BEM naming covertion
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>

      )}

    </div>
  );
}

export default App;
