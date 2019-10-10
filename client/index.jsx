import React from 'react';
import ReactDOM from 'react-dom';

const Stuff = () => {
  return (
    <div className='react'>
      <div>Hello React</div>
      <div>Wepback is up and running</div>
    </div>
  )
}

ReactDOM.render(<Stuff />, document.getElementById('app'));