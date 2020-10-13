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

export const deleteExpense = (data) => {
    return {
        type: 'deleteExpense',
        data: data
    }
}

export const addExpense = (data) => {
    return {
        type: 'addExpense',
        data: data
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

export const deleteCategory = (categories) => {
    return {
        type: 'deleteCategory',
        data: categories
    }
}

export const addCategory = (categories) => {
    return {
        type: 'addCategory',
        data: categories
    }
}

export const updateBudget = (budget) => {
    return {
        type: 'updateBudget',
        data: budget
    }
}

export const getExpenses = (data) => {
    return {
        type: 'getExpenses',
        data: data
    }
}

export const getSettings = (data) => {
    return {
        type: 'getSettings',
        data: data
    }
}
