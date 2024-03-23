
import React from 'react';

function List(props) {
  let titleText = `Favorite ${props.type}`;
  if (props.children instanceof Array) {
    titleText += 's';
  }
  return (
    <div>
      <h1>{titleText}</h1>
      <ul>{props.children}</ul>
      <h2>{props.try}</h2>
    </div>
  );
}
List.defaultProps = {
  try:'happy'
}

export default List;

