import React, {Component} from 'react';
import './css/Item.css';

/* PAra poder utilizar el state, cambiamos function por class!
 function Item (props){
*/
class Item extends Component{
    // C O N S T R U C T O R
    constructor (props){
        super(props);
        this.state = {
            stars:[]
        };
    }
    /* componentDidMount() se invoca inmediatamente después de que un componente se monte (se inserte en el árbol) */
    componentDidMount () {
        this.setState({
            //define el array stars de tantas posiciones como sea el numero rating y le colocamos el valor de 1, por ponerle algo, podria ser otro valor
            stars: Array(parseInt(this.props.rating)).fill(1)
        });
    }

    render () {
        return(
            <div className="item" > {/* key={this.props.id} */}

                <div className="image">
                    {/* <img src={'img/' + this.state.image} width="100%" /> */}
                    <img src={this.props.image} width="100%"/>
                    
                </div>

                <div className="title">
                    {this.props.title}
                </div>

                <div className="rating">
                    <p>Calificación</p>
                    <p>
                        {
                            this.state.stars.map ( x =>
                                <img src={'img/star.png'} width="32"/>        
                            )
                        }
                    </p>
                </div>
                <div className="actions">
                    <button className="button">Eliminar</button>
                </div>

            </div>
        );
    }
}
export default Item;

