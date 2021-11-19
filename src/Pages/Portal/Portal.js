import React, { useReducer, useState } from 'react';
import { portalReducer } from '../../reducers/portelReducer';
import { portalState } from '../../store/portalStore';

const Portal = () => {
    const [state, dispatch] = useReducer(portalReducer,portalState);
    const [name,setName] = useState('')
    return (
        <div> 
            <h2>My Product Portal</h2>
            <h2>Has Product : {state.products.length}</h2>
            <input type="text" onChange={e=>setName(e.target.value)} />
            <button onClick={()=>dispatch({type : 'ADD_PRODUCT',name:name})}>Add Product</button>
            <h3>................................................................</h3>
            {
              state.products.map(product=><p key={product.id}>
                {product.name}{product.id}
                <button onClick={()=>dispatch({type : 'REMOVE_PRODUCTS',id: product.id})}>X</button>
              </p>)  
            }
        </div>
    );
};

export default Portal;