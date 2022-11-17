
const  initialstate = 0;

const Counter = (state = initialstate, action)=>{
     switch(action.type){
        case  'Inc': return state + 1;
        case  'Dec' : return state - 1;
        default: return state;
     }
}

export default Counter;