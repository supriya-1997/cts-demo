const reducer = (state, action) => {

    const { type, payload } = action
    
    const { products, cart, Mobiles,Dress } = state
    
    switch (type) {
    
    case 'API_SUCCESS': {
    
    return {
    
    ...state,
    
    ...payload
    
    }
    
    } case 'INCREMENT_COUNTER': {
    
    const { index } = payload
    
    cart[index].quantity++
    
    return {
    
    ...state,
    
    cart: [...cart]
    
    }
    
    }
    
    case 'DECREMENT_COUNTER': {
    
    const { index } = payload
    
    cart[index].quantity--
    
    return {
    
    ...state,
    
    cart: [...cart]
    
    }
    
    }
    
    case 'TOTAL_AMOUNT': {
    
    const totalCost = cart.map(product => parseInt(product.price)
    
    * product.quantity)
    
    return {
    
    ...state,
    
    totalAmount: totalCost.reduce((acc, amount) => acc + amount, 0)
    
    }
    
    }
    
    
    
    case 'REMOVE_PRODUCT': {
    
    const { index } = payload
    
    const Id = cart[index].id
    
    products[Id - 1].incart = "false"
    
    // products[Id - 1].incart = "false"
    
    cart.splice(index, 1)
    
    return {
    
    ...state,
    
    products: [...products],
    
    cart: [...cart]
    
    }
    
    }
    
   
    
    
    
    
    case 'MOBILES': {
    
    const Mobiles = products.filter(product => product.category == "mobiles")
    
    return {
    
    ...state,
    
    Mobiles: [...Mobiles]
    
    }
    
    }
    case 'DRESS': {
    
        const Dress = products.filter(product => product.category == "dress")
        
        return {
        
        ...state,
        
        Dress: [...Dress]
        
        }
        
        }
    
    
    case 'RESET': {
    
    for (var i = 0; i < products.length; i++) {
    
    products[i].incart = "false"
    
    }
    
    return {
    
    ...state,
    
    products: [...products],
    
    cart: []
    
    }
    
    }
    
    case 'ADD_M_ITEM': {
    
    const { index } = payload
    
    Mobiles[index].incart = "true"
    
    return {
    
    ...state,
    
    Mobiles: [...Mobiles],
    
    cart: [...cart, Mobiles[index]],
    
    }
    
    }
    
    case 'ADD_D_ITEM': {
    
        const { index } = payload
        
        Dress[index].incart = "true"
        
        return {
        
        ...state,
        
        Dress: [...Dress],
        
        cart: [...cart, Dress[index]],
        
        }
        
        }
    
    
    
    default: {
    
    return state
    
    }
    
    }
    
    }
    
    export default reducer;