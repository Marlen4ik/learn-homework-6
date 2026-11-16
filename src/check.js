import { books } from "./books.js";
import { getAvailableBooks, getBookTitles } from "./utils.js";
const availableBooks = getAvailableBooks(books)
const bookPrices = availableBooks.map((book) => {
  return `${book.title} — ${book.price} ₸`
});
// Ручная проверка: прочитай вывод и сравни с исходными данными.
// Пока TODO не выполнены, заглушки возвращают только [].
console.log("Исходные книги:", books);
console.log("Доступные книги:", getAvailableBooks(books));
console.log("Названия всех книг:", getBookTitles(books));
console.log("Пустой массив — доступные:", getAvailableBooks([]));
console.log("Пустой массив — названия:", getBookTitles([]));
console.log(bookPrices)