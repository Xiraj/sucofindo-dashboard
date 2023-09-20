import React from 'react';
import Sidebar from './components/Sidebar/Sidebar/Sidebar';
import Main from './pages/Main';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './pages/Login';

export default function App () {
  return (
    <div className='flex'>
      <Sidebar/>
      <Login/>
    </div>
  )
}
