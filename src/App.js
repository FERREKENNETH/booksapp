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
        {id:0, rating:5, title:'Libertad Total', image:'https://images-na.ssl-images-amazon.com/images/I/419EdUhA-1L._SX331_BO1,204,203,200_.jpg'},
        {id:1, rating:3, title:'El Conocimiento de uno Mismo', image:'https://cdn.slidesharecdn.com/ss_thumbnails/elconocimientodeunomismodejiddukrishnamurtir1-140817165755-phpapp01-thumbnail-4.jpg?cb=1408295866'},
        {id:2, rating:5, title:'Darse Cuenta', image:'https://static.cegal.es/imagenes/marcadas/9788484/978848445322.gif'},
        {id:3, rating:2, title:'Las Cuatro Nobles Verdades', image:'https://imagessl5.casadellibro.com/a/l/t5/35/9788499887135.jpg'},
        {id:4, rating:3, title:'Ego, Apego y Liberación', image:'https://www.edicionesdharma.com/images/ego-apego.jpg'}
      ]
    };
    
  }
  addBook = (book) =>{
    //copiamos el array que tenemos en el state en la variable temp
    let temp = [ ... this.state.books ];
    //calculamos el nuevo id
    const id = temp[temp.length-1].id ++;
    temp.push(book);
    //en el array books, que esta en el state,  le copiamos el array temp, que es una copia de books del state mas el nuevo book agragado
    this.setState( { books: [... temp] } );



  }
  render(){
    return (
        <div className="app">
          <Menu 
            title="La libreria en casa"
            addBook={this.addBook}
          />
          <List books={this.state.books}/>
        </div>
    );
  }
  
}

export default App;

/*  
https://www.youtube.com/watch?v=eXSP524SBgw

Minuto 57 30-39
*/