const initialState = {
    currentTab: 'home',
    isModalOpen: false,
    expenses: [
        { id: 1, name: 'first', category: 'grocery', amount: 10, date: '01-10-2020', deleted: 'true'},
        { id: 2, name: 'second', category: 'bills', amount: 20, date: '02-10-2020', deleted: 'false'},
        { id: 3, name: 'third', category: 'leisure', amount: 30, date: '03-10-2020', deleted: 'false'},
        { id: 4, name: 'fourth', category: 'others', amount: 30, date: '04-10-2020', deleted: 'false'},
        { id: 5, name: 'fifth', category: 'commuting', amount: 50, date: '05-10-2020', deleted: 'false'}
    ]
}

const reducer = (state=initialState, action) => {
    switch(action.type) {

        case 'changeTab':
            return {...state, currentTab: action.data}

        case 'toggleModal':
            return {...state, isModalOpen: !state.isModalOpen}

        case 'deleteExpense':
            let expenses = [...state.expenses];
            let deletedItem = expenses.find( el => el.id===action.data );
            deletedItem.deleted = deletedItem.deleted === 'true' ? 'false' : 'true';
            // expenses.splice(index,1);
            return {...state, expenses}

        case 'editExpense':
            // let expenses = [...state.expenses];
            // let deletedItem = expenses.find( el => el.id===action.data );
            // deletedItem.deleted = deletedItem.deleted === 'true' ? 'false' : 'true';
            // // expenses.splice(index,1);
            // return {...state, expenses}

        default :
            return state;
    }
}

export default reducer;