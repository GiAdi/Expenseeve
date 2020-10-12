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
