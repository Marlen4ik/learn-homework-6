import { books } from "./books.js";
import { getAvailableBooks, getBookTitles } from "./utils.js";

export default function App() {
  // TODO: импортируй и вызови getAvailableBooks.
  // TODO: покажи число доступных книг и список через map.
  // TODO: передай каждому элементу списка устойчивый key.

  const availableBooks = getAvailableBooks(books);
  const bookTitles = getBookTitles(books);
  const bookPrices = availableBooks.map((book) => {
    return `${book.title} — ${book.price} ₸`
  });
  return (
    <main>
      <h1>Книжная полка</h1>
      <p>В исходном каталоге книг: {books.length}</p>
      {bookPrices.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </main>
  );
}
