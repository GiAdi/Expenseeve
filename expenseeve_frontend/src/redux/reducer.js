const initialState = {
    currentTab: 'home'
}

const reducer = (state=initialState, action) => {
    switch(action.type) {

        case 'changeTab':
            return {...state, currentTab: action.data}

        default :
            return state;
    }
}

export default reducer;