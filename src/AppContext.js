import { createContext, useState } from 'react';


const AppContext = createContext({quantity: 0, setQuantity: null});


function AppProvider(props) {
    const [quantity, setQuantity] = useState(0);

    return (
    <AppContext.Provider value={{quantity, setQuantity}}>
        { props.children } 
     </AppContext.Provider>)
}

export {AppProvider, AppContext}