import React from 'react';
import Main from './pages/Main';
import Sidebar from './components/Sidebar/Sidebar';

export default function App () {
  return (
    <div className='flex'>
      <Sidebar/>
      <Main/>
    </div>
  )
}
