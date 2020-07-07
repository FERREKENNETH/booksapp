import React from 'react';
/* function PanelAdd (props) { */
class PanelAdd extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            title:'',
            image:'',
            rating:1
        }
    }

    cancelAction = () => {
        this.props.onhide();
    }

    onChangeTitle = (e) => {
        this.setState ( {title: e.target.value} );
        console.log(e.target.value)
        console.log(this.props.title)// es undefined porque no lo actializa inmediatamente!!
    }

    onChangeImage = (e) => {
        this.setState ( {image: e.target.value})
        console.log(e.target.value)
    }

    onChangeRating = (e) => {
        const rating = parseInt(e.target.value);
        this.setState ( {rating: rating} );
        console.log(rating)
    }

    createItem = (e) => {
        e.preventDefault();
        const title = this.state.title;
        const image = this.state.image;
        const rating = this.state.rating;
        this.props.onadd ( {title: title, image: image, rating: rating} );
        this.cancelAction();

    }



    render (){
        return(
            <div className="new-item-panel-container"> {/* Actua como una pantalla negra para tapar el contenido y solo se vea el formulario */}
                <div className="new-item-panel">
                    <form onSubmit={this.createItem}>
                        <p>
                            <label>Título del libro</label><br />
                            <input 
                                type="text" 
                                name="title" 
                                className="input"  
                                placeholder="title"   
                                onChange={this.onChangeTitle} 
                                
                            /> 
                        </p>

                        <p>
                            <label>Nombre de imagen</label><br />
                            <input 
                                type="text" 
                                name="image" 
                                className="input"  
                                placeholder="image"
                                onChange={this.onChangeImage}
                            /> 
                        </p>

                        <p>
                        <label>Rating</label><br/>
                        <select onChange={this.onChangeRating}>Rating
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        </p>
                        <input 
                            type="submit" 
                            className="button btn-blue" 
                            value="Registrar libro" 
                        />
                        <button 
                            className="button btn-normal"
                            onClick={this.cancelAction} 
                        >
                            Cancelar
                        </button> {/* onClick={this.props.onhide} en el button haria la misma funcion!*/}
                    </form>
                </div>
            </div>
        );
    }
}

export default PanelAdd;