// import logo from './logo.svg';
// import './App.css';
import HeadingComponent from './Heading';
import SubHeadingComponent from './Subheading'
import CarComponent from './CarComponent'
import SongComponent from './SongComponent'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  
  // let firstWords = 'Hello World :D';
  // let firstNum = 25;
  let myNum = 10;

  let headingText = 'Boom Shaka Laka';
  let val = 9;

  let car = {
    model: 'Sierra 1500',
    make: 'GMC',
    year: 2021,
    type: 'AT4'
  };

  let song = {
    title: 'Nexus<MODv> (feat. Laco)',
    artist: ['Hiroyuki Sawano, ', 'Laco, ', 'mpi, ', 'Benjamin Anderson'],
    genre:'Pop',
    year: 2019,
    youTubeLink: 'https://www.youtube.com/watch?v=e9tNQmSqubw'
  }

  const addTwoNumbers = (num1, num2) => {
    return num1 + num2;
  };

  return ( // make sure to use ( ) instead of { }
    <div>
      {/* <h1>This is my {firstWords}!</h1> */}
      {/* <HeadingComponent 
        h1Text={headingText}
        textToLog={'This is some text to console.log'}
        numberToPass={25}
      />
      <SubHeadingComponent 
        num = {val}
      />

      <CarComponent 
        vehicle = {car}
      /> */}

      <SongComponent
        favSong = {song}
      />

      {/* <h2>My favorite number is: {myNum}</h2> */}
      {/* <h3>What is the sum of 55 and and 34? {addTwoNumbers(155, 349)}</h3> */}
    </div>
  );

};

// const HeadingComponent = () => {
//   let firstWords = 'Hello World D:'
//   return <h1>This is my {firstWords} in my HeadingComponent!</h1>;
// }

// const SubHeadingComponent = () => {
//   return <h2>This is Sparta!</h2>;
// }

export default App;
