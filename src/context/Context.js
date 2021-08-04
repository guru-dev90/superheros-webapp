import {createContext} from "react"

const Context = createContext()

function StateProvider(props){

    const heros = props.value
    
    return(
        <Context.Provider value={heros}>
            {props.children}
        </Context.Provider>
    )
}

export {StateProvider, Context}