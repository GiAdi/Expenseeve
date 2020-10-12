const initialState = {
    currentTab: 'home',
    isModalOpen: false
}

const reducer = (state=initialState, action) => {
    switch(action.type) {

        case 'changeTab':
            return {...state, currentTab: action.data}

        case 'toggleModal':
            return {...state, isModalOpen: !state.isModalOpen}

        default :
            return state;
    }
}

export default reducer;