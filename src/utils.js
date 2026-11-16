export function getAvailableBooks(books) {
  // TODO: верни новый массив доступных книг через filter.
  // Пустой return [] — только стартовая заглушка, замени её.
  const availableBooks = books.filter((book) => {
    if (book.inStock === true) {
      return book.inStock;
    }
  });
  return availableBooks;
}

export function getBookTitles(books) {
  // TODO: верни новый массив названий через map.
  // Работай с параметром books, не с импортированными данными.
  const bookTitles = books.map((book) => {
    return book.title;
  });
  return bookTitles;
}
