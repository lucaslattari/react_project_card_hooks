import React from 'react';

const Person = (props) => {
  if (props.genre == 'm') {
    return ( <
      div >
      <
      h1 > Oi, eu sou o {
        props.name
      }. < /h1> <
      p > {
        props.children
      } < /p> <
      /div>
    );
  } else if (props.genre == 'f') {
    return ( <
      div >
      <
      h1 > Oi, eu sou a {
        props.name
      }. < /h1> <
      p > {
        props.children
      } < /p> <
      /div>
    );
  }
}

export default Person;