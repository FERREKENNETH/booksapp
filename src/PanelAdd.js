import React from 'react';
/* function PanelAdd (props) { */
class PanelAdd extends React.Component {

    constructor (props){
        super(props);
        /* en React al utilizar Formularios siempre recomiendan utilizar el state para manejar los cambios de los inputs/campos, para que cuando cambien el valor del campo, se actualice el state directamente, y a su vez este campo recibe la informacion del state para mostrar ese valor  */
        this.state = {
            title:'',
            image:'',
            rating:1
        }
    }

    onChangeTitle = (e) => {
        this.setState ( {title: e.target.value} );
        console.log(e.target.value)
        //console.log(this.props.title)// es undefined porque NO lo actualiza inmediatamente!!
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
        this.props.addBook ( {title: title, image: image, rating: rating} );
        this.props.hidePanel();
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
                            onClick={this.props.hidePanel} 
                        >
                            Cancelar
                        </button> 
                        
                    </form>
                </div>
            </div>
        );
    }
}

export default PanelAdd;


/* ES UN EJEMPLO DE COMO SE OCULTA EL FORMULARIO(COMPONENTE) SIN LA NECESIDAD DE VOLVER A REFRESCAR LA PAGINA, AQUI ESTAMOS VIENDO UN EJEMPLO CLARO DE COMO UTILIZAMOS ESTILOS CSS PARA MOSTRAR COMPONENTES BASADOS EN EL ESTADO QUE DEFINIMOS CON REACTJS*/