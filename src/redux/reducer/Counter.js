const initialstate = 100;

export const Counter = (state =initialstate, action) =>{
    switch(action.type){
        case 'inc' : return state + 10;
        case 'dec' : return state - 10
        default : return state;
    }
}