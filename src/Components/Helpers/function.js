export const shoren = title => {
    const splitedTitle = title.split(' ');
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`
    return newTitle
}



export const isInCart = (state, id) => {
    const result = !!state.selectedItems.find(item => item.id === id)
    return result
}

export const quantityCounter = (state, id) => {
    let index = state.selectedItems.findIndex(item => item.id === id)
    if (index === -1) {
        return false
    } else {
        return state.selectedItems[index].quantity
    }
}