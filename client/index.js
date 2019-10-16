import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js'
// class ControlledComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//       select: ''
//     }
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleDropDownChange = this.handleDropDownChange.bind(this);
//   }

//   handleInputChange(event) {
//     var newState = Object.assign({}, this.state);
//     newState.value = event.target.value;
//     this.setState(newState);
//   }

//   handleDropDownChange(event) {
//     var newState = Object.assign({}, this.state);
//     newState.select = event.target.value;
//     this.setState(newState);
//   }

//   render() {
//     return(
//       <div className="userInputTest">
//         <form>
//           <label>
//             Write some stuff to see if react updates
//             <input value={this.state.value} onChange={this.handleInputChange} />
//           </label>
//           <label>
//             Pick a number to see if react stores drop down changes
//             <select value={this.select} onChange={this.handleDropDownChange}>
//               <option value='option1'>Option 1</option>
//               <option value='option2'>Option 2</option>
//               <option value='option3'>Option 3</option>
//             </select>
//           </label>

//         </form>

//       </div>
//     )
//   }
// }

ReactDOM.render(<App />, document.getElementById('app'));

//export default ControlledComponent;