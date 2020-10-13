const initialState = {
    currentTab: 'home',
    isModalOpen: false,
    expenses: [
        // { id: 3, name: 'Third', category: 'Leisure', amount: 30, date: '2020-10-03', deleted: 'false'},
        // { id: 1, name: 'First', category: 'Groceries', amount: 10, date: '2020-10-01', deleted: 'true'},
        // { id: 4, name: 'Fourth', category: 'Others', amount: 30, date: '2020-10-04', deleted: 'false'},
        // { id: 7, name: 'Fourth', category: 'Others', amount: 30, date: '2020-10-04', deleted: 'false'},
        // { id: 2, name: 'Second', category: 'Bills', amount: 20, date: '2020-10-02', deleted: 'false'},
        // { id: 5, name: 'Fifth', category: 'Commuting', amount: 50, date: '2020-10-05', deleted: 'false'},
        // { id: 8, name: 'Fifth', category: 'Commuting', amount: 50, date: '2020-10-05', deleted: 'false'},
        // { id: 6, name: 'Third', category: 'Leisure', amount: 30, date: '2020-10-03', deleted: 'false'},
        // { id: 11, name: 'Fifth', category: 'Commuting', amount: 50, date: '2020-10-05', deleted: 'false'},
        // { id: 9, name: 'Third', category: 'Leisure', amount: 30, date: '2020-10-03', deleted: 'false'},
        // { id: 10, name: 'Fourth', category: 'Others', amount: 30, date: '2020-10-04', deleted: 'false'},
    ],
    categories: ["Groceries", "Commuting", "Leisure", "Bills", "Others"],
    modalValues: null,
    currentPage: 1,
    budget: 15000
}

const reducer = (state=initialState, action) => {
    switch(action.type) {

        case 'getExpenses': {
            let expenses = action.data;
            return {...state, expenses}
        }

        case 'getSettings': {
            let budget = action.data.budget;
            let categories = action.data.categories;
            return {...state, budget, categories}
        }

        case 'changeTab':
            return {...state, currentTab: action.data}

        case 'toggleModal': {
            let values = state.isModalOpen ? null : action.data;
            return {...state, isModalOpen: !state.isModalOpen, modalValues: values}
        }

        case 'deleteExpense': {
            let expenses = action.data;
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
            let categories = action.data
            console.log(categories)
            return {...state, categories};
        } 

        case 'addCategory': {
            let categories = action.data;
            console.log(categories)
            return {...state, categories};
        }

        case 'updateBudget': {
            return {...state, budget: action.data};
        }   

        case 'addExpense': {
            let expenses = action.data;
            return {...state, expenses, isModalOpen: false, modalValues: null }
            }

        default :
            return state;
    }
}

export default reducer;