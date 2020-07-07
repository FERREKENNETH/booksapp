import React from 'react';
import Item from './Item';

//List nos sirve para hacer el recorrido de los books que le pasamos por props, nada mas!, y para pasarle los props a <Item/>
//Al no utilizar el estado, no necesitamos extends Component
function List (props){
    return(
        //estructura de la interfaz para mostrar los elementos
        <div className="list">
            {
                props.books.map(item =>
                    /* La key ya la contiene react por defecto */
                    <Item 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        rating={item.rating}
                    
                    />
                )
            }
        </div>
    );
}
export default List;