import React from 'react';
import './css/App.css';
import Menu from './Menu';
import List from './List';


/* function App() {  si ponemos esto el render no se pone! render(){} */
//de esta manera (class App extends React.Component) podemos utilizar el estado , para eso necesitamos definir el constructor
class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      books: [
        {id:0, rating:4, title:'Harry Poter', image:'libro01'},
        {id:1, rating:3, title:'The Shining', image:'libro02'},
        {id:2, rating:5, title:'Codigo Da Vinci', image:'libro03'},
        {id:3, rating:2, title:'EL principito', image:'libro04'},
        {id:4, rating:1, title:'Sobrenatural', image:'libro05'}
      ]
    };
  }

  render(){
    return (
        <div className="app">
          <Menu title="La libreria en casa"/>
          <List books={this.state.books}/>
        </div>
    );
  }
  
}

export default App;

/*  
https://www.youtube.com/watch?v=eXSP524SBgw

Minuto 48 23
*/