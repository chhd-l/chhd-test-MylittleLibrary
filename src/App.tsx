import React from 'react';
import './App.css';

import UglyWorld from "./commpents/UglyWorld";

interface ListNodeType {
  type: string,
  children: string
}

const arrType = [{
  type:'div',
  children: 'hhh'
},{
  type:'a',
  children: 'hhh'
},{
  type:'span',
  children: 'hhh'
},{
  type:'p',
  children: 'hhh'
}]

const listNode = (arr: ListNodeType[]) => {
    if(!arr.length) return
    return arr.map((item: ListNodeType) => {
     return React.createElement(
        item.type,
        {key: item.type, children: item.children}
      )
    })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>learn react</div>
        <UglyWorld name='wd' />
        <>
          {listNode(arrType)}
        </>
      </header>
    </div>
  );
}

export default App;
