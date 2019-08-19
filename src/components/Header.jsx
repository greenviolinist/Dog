import React from 'react';

function Header(props) {
  return (
  <header>
    <h1>My Dog Website</h1>
    <hr />
    <ul>
    <li onClick={()=>{
      props.setView('random dog')}}>Random Picture</li>
    <li onClick={()=>{
      props.setView('dog breeds')}}>Dog Breeds</li>
    </ul>
  </header>
)
}

export default Header;