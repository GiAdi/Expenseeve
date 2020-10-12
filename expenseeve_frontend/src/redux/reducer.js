const initialState = {
    currentTab: 'home',
    isModalOpen: false,
    expenses: [
        { id: 1, name: 'First', category: 'Groceries', amount: 10, date: '2020-10-01', deleted: 'true'},
        { id: 2, name: 'Second', category: 'Bills', amount: 20, date: '2020-10-02', deleted: 'false'},
        { id: 3, name: 'Third', category: 'Leisure', amount: 30, date: '2020-10-03', deleted: 'false'},
        { id: 4, name: 'Fourth', category: 'Others', amount: 30, date: '2020-10-04', deleted: 'false'},
        { id: 5, name: 'Fifth', category: 'Commuting', amount: 50, date: '2020-10-05', deleted: 'false'}
    ],
    modalValues: null
}

const reducer = (state=initialState, action) => {
    switch(action.type) {

        case 'changeTab':
            return {...state, currentTab: action.data}

        case 'toggleModal':
            let values = state.isModalOpen ? null : action.data;
            return {...state, isModalOpen: !state.isModalOpen, modalValues: values}

        case 'deleteExpense':
            let expenses = [...state.expenses];
            let deletedItem = expenses.find( el => el.id===action.data );
            deletedItem.deleted = deletedItem.deleted === 'true' ? 'false' : 'true';
            // expenses.splice(index,1);
            return {...state, expenses}

        case 'handleChange':
            let modalValues = state.modalValues ? {...state.modalValues} : {};
            modalValues[action.data.name] = action.data.value;           
            return {...state, modalValues}

        // case 'addExpense':
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