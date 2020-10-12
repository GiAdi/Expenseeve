export const changeTab = (element) => {
    return {
        type: 'changeTab',
        data: element
    }
}

export const toggleModal = () => {
    return {
        type: 'toggleModal'
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
