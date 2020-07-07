const mobilereducer = (state, action) => {

    const {type,payload:context}= action
    const {mobile,cart}=state;

    switch (type) {
        case 'API_CALL': {
            return{
                ...state,
                ...context
            }
        }
        case 'CART': {
          const {index}=context
          console.log(cart)
            return{
                ...state,
              // mobile:[...mobile,...mobile.filter((item,i)=>i==index)],
               //cart:[...cart],
               cart: [...cart,...mobile.filter((item, i) => i == index)],
            }
        }
        default:{
            return state
        }
    }
}
export default mobilereducer