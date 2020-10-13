export const changeTab = (element) => {
    return {
        type: 'changeTab',
        data: element
    }
}

export const toggleModal = (el = null) => {
    return {
        type: 'toggleModal',
        data: el
    }
}

export const deleteExpense = (id) => {
    return {
        type: 'deleteExpense',
        data: id
    }
}

export const addExpense = () => {
    return {
        type: 'addExpense',
    }
}

export const handleChange = (change) => {
    return {
        type: 'handleChange',
        data: change
    }
}

export const handlePageClick = (number) => {
    return {
        type: 'handlePageClick',
        data: number
    }
}

export const deleteCategory = (category) => {
    return {
        type: 'deleteCategory',
        data: category
    }
}

export const addCategory = (category) => {
    return {
        type: 'addCategory',
        data: category
    }
}

export const updateBudget = (budget) => {
    return {
        type: 'updateBudget',
        data: budget
    }
}
