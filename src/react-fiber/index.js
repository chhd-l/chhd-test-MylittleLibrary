import React from 'react'
import ReactDOM from 'react-dom'

let element = (
    <div id='0'>
        <div id='1'>1</div>
        <div id='2'>2</div>
    </div>
)

function render(element, root) {
    console.log('1',1)
}

render(element, document.getElementById('root'))