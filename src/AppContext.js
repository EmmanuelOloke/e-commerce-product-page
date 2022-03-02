import { createContext, useState } from 'react';


const AppContext = createContext({quantity: 0, setQuantity: null, price: 0, setPrice: null});


function AppProvider(props) {
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(125.00.toFixed(2));

    return (
    <AppContext.Provider value={{quantity, setQuantity, price, setPrice}}>
            { props.children } 
     </AppContext.Provider>)
}

export {AppProvider, AppContext}