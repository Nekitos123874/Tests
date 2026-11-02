function addToCart(inStock, quantity) {
    if (!inStock) {
        return "Ошибка: Товара нет в наличии";
    }
    if (quantity > 0) {
        return "Товар добавлен в корзину";
    } else {
        return "Ошибка: Укажите количество";
    }
}