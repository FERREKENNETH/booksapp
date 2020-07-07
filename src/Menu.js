import React, {Component} from 'react';
import './css/Menu.css';
import Search from './Search';
import PanelAdd from './PanelAdd';

/* Para poder añadir una nueva funcion(add), cambiamos function por class! y le ponemos el render delante que envuelve todo (render () {}) ademas añadimos el this delante de las props o lo que queramos utilizar!!!
function Menu (props){
*/
class Menu extends Component{
    constructor (props){
        super(props);

        this.state = {newItemPanel: false};
        //para poder utilizar la funcion add
        //this.add = this.add.bind(this);
    }
    /* add () {} , si utilizamos arrowFunction no hace falta el this.add en el constructor!!!!*/
    //Con la funcion de flecha, el this si esta siendo heradado por la clase
    //Sin la funcion flecha, la funcion add no necesariamente esta siendo heredada por la clase, por eso le tenemos que añadir el bind!!
    add = () => {
        this.setState({newItemPanel: true})
        //console.log('click')
    }

    render () {

        return(

            <div className="container">
                <div className="subcontainer">

                    <div className="logo">
                        {this.props.title}
                    </div>

                    <div className="search">
                        <Search/>
                    </div>

                    <div className="actions">
                        <button 
                            className="button btn-blue"
                            onClick={this.add}   
                        >
                            Añadir libro
                        </button>
                    </div>

                </div>
                {/* Aqui añadimos la condicion de si la variable booleana esta a true o false, se muestre el panel o no */}
                {
                    (this.state.newItemPanel)
                    ? <PanelAdd/>
                    : ''
                }
                
            </div>
        );
    }
}
export default Menu;