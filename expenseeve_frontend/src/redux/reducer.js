const initialState = {
    currentTab: 'home',
    isModalOpen: false,
    expenses: [],
    categories: [],
    modalValues: null,
    currentPage: 1,
    // budget: 15000
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
            return {...state, categories};
        } 

        case 'addCategory': {
            let categories = action.data;
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