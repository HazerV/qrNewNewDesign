export const config = {
    accentColor:  '#FF7A00',
    accentColorNonActive: '#555555',
    buttonBackgroundDark: 'black',
    otstupTop: 64,
    otstupBottom: 100,
    textColorOnImage: 'white',
    server: 'https://api.menu.true-false.ru/api',
    storage: 'https://api.menu.true-false.ru/storage/',
    getProductUrl: 'https://api.menu.true-false.ru'
}

// GET     https://api.menu.true-false.ru/api/carts - create new cart
// GET     https://api.menu.true-false.ru/api/carts/{id} - get cart data by id
// POST    https://api.menu.true-false.ru/api/carts/{cartId}/lines - {productId: int, quantity: int} - create new line in the cart
// PUT     https://api.menu.true-false.ru/api/carts/{cartId}/lines/{lineId} - {quantity: int} - edit line in the cart
// DELETE  https://api.menu.true-false.ru/api/carts/{cartId}/lines/{lineId} - delete line in the cart