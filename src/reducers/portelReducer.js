export const portalReducer = (state,action)=>{
    switch (action.type) {
      
        case 'ADD_PRODUCT':
            console.log(action);
            const adding={
                name:action.name,
                id: action.name + state.products.length
            }
            const newProducts = [...state.products,adding]
            return{
                ...state,
                products:newProducts,
            }
            break;
    case 'REMOVE_PRODUCTS' :
        const removed =state.products.filter(product=>product.id !== action.id);
        return{
            ...state,
            products : removed,
        }
        default:
            return state;
            break;
    }
}