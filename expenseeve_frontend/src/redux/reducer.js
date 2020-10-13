const initialState = {
    currentTab: 'settings',
    isModalOpen: false,
    expenses: [
        { id: 3, name: 'Third', category: 'Leisure', amount: 30, date: '2020-10-03', deleted: 'false'},
        { id: 1, name: 'First', category: 'Groceries', amount: 10, date: '2020-10-01', deleted: 'true'},
        { id: 4, name: 'Fourth', category: 'Others', amount: 30, date: '2020-10-04', deleted: 'false'},
        { id: 7, name: 'Fourth', category: 'Others', amount: 30, date: '2020-10-04', deleted: 'false'},
        { id: 2, name: 'Second', category: 'Bills', amount: 20, date: '2020-10-02', deleted: 'false'},
        { id: 5, name: 'Fifth', category: 'Commuting', amount: 50, date: '2020-10-05', deleted: 'false'},
        { id: 8, name: 'Fifth', category: 'Commuting', amount: 50, date: '2020-10-05', deleted: 'false'},
        { id: 6, name: 'Third', category: 'Leisure', amount: 30, date: '2020-10-03', deleted: 'false'},
        { id: 11, name: 'Fifth', category: 'Commuting', amount: 50, date: '2020-10-05', deleted: 'false'},
        { id: 9, name: 'Third', category: 'Leisure', amount: 30, date: '2020-10-03', deleted: 'false'},
        { id: 10, name: 'Fourth', category: 'Others', amount: 30, date: '2020-10-04', deleted: 'false'},
    ],
    categories: ["Groceries", "Commuting", "Leisure", "Bills", "Others"],
    modalValues: null,
    currentPage: 1,
    budget: 15000
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'changeTab':
            return {...state, currentTab: action.data}

        case 'toggleModal': {
            let values = state.isModalOpen ? null : action.data;
            return {...state, isModalOpen: !state.isModalOpen, modalValues: values}
        }

        case 'deleteExpense': {
            let expenses = [...state.expenses];
            let deletedItem = expenses.find( el => el.id===action.data );
            deletedItem.deleted = deletedItem.deleted === 'true' ? 'false' : 'true';
            return {...state, expenses}
        }

        case 'handleChange': {
            let modalValues = state.modalValues ? {...state.modalValues} : {};
            modalValues[action.data.name] = action.data.value;           
            return {...state, modalValues}
        }

        case 'handlePageClick':       
            return {...state, currentPage: action.data}

        case 'deleteCategory': {
            let categories = [...state.categories];
            let index = categories.indexOf(action.data);
            categories.splice(index, 1);
            return {...state, categories};
        } 

        case 'addCategory': {
            let categories = [...state.categories];
            categories.unshift(action.data);
            return {...state, categories};
        }

        case 'updateBudget': {
            return {...state, budget: action.data};
        }   

        case 'addExpense': {
            if ( state.modalValues === null )
                return {...state, isModalOpen: false};

            let expenses = [...state.expenses];
            let modalValues = state.modalValues;
            let currentPage = state.currentPage;

                if( Object.keys(modalValues).includes('id') ) {
                    let index = expenses.findIndex( ( el ) => el.id===modalValues.id );
                    expenses[index] = {...expenses[index], ...modalValues};
                }
                else {
                    let newItem = {...modalValues};
                    newItem.id = 99;
                    newItem.deleted = 'false';
                    expenses.push(newItem);
                    currentPage = 1;
                }

            return {...state, expenses, isModalOpen: false, modalValues: null, currentPage}
            }

        default :
            return state;
    }
}

export default reducer;