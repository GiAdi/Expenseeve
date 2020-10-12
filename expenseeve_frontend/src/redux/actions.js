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

export const editExpense = (id) => {
    return {
        type: 'editExpense',
        data: id
    }
}

export const addExpense = (id) => {
    return {
        type: 'addExpense',
        data: id
    }
}

export const handleChange = (change) => {
    return {
        type: 'handleChange',
        data: change
    }
}
