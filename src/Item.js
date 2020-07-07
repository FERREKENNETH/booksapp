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

    componentDidMount () {
        this.setState({
            stars: Array(parseInt(this.props.rating)).fill(1)
        });
    }

    render () {
        return(
            <div className="item" > {/* key={this.props.id} */}

                <div className="image">

                    <img src={'img/'+ this.props.image+'.jpg'} width="100%"/>
                    
                </div>

                <div className="title">
                    {this.props.title}
                </div>

                <div className="rating">
                    <p>
                        {
                            this.state.stars.map(x =>
                                <img src={'img/star.png'} width="32"/>        
                            )
                        }
                    </p>
                    Calificacion:
                    <select value={this.props.rating} >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="actions">
                    <button>Eliminar</button>
                </div>

            </div>
        );
    }
}
export default Item;

