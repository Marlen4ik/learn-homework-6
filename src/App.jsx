import { books } from "./books.js";

export default function App() {
  // TODO: импортируй и вызови getAvailableBooks.
  // TODO: покажи число доступных книг и список через map.
  // TODO: передай каждому элементу списка устойчивый key.
  return (
    <main>
      <h1>Книжная полка</h1>
      <p>В исходном каталоге книг: {books.length}</p>
      <p>Стартовый проект: выполни TODO по инструкции в README.</p>
    </main>
  );
}
