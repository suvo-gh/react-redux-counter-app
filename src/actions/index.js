export const increment = (laod = 1) =>{
    return {
        type: "Inc",
        payload: parseInt(laod)
    }
}

export const decrement = (load = 1) =>{
    return{
        type:"Dec",
        payload: parseInt(load)
    }
}

export const reset = () =>{
    return{
        type:"Reset",
        payload: 0
    }
}