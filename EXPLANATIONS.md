# JavaScript и React: объяснения к домашке

Примеры ниже — про занятия и города, чтобы ты перенёс подход на книги самостоятельно. Готовых getAvailableBooks, getBookTitles и книжного компонента здесь нет.

## 1. const, значения и boolean

```javascript
const city = "Алматы";      // string — строка
const population = 2000000; // number — число
const isCapital = false;   // boolean — логическое значение
```

const запрещает переназначать переменную. Он не делает содержимое объекта или массива неизменяемым. `true` и `false` пишутся без кавычек: строка `"false"` не равна логическому `false`.

Обычно сравниваем через `===`, без автоматического приведения типов:

```javascript
2 === "2"; // false
```

## 2. Объект и массив

Объект объединяет поля одного предмета:

```javascript
const lesson = { id: 1, topic: "Основы CSS", duration: 45 };
console.log(lesson.topic); // "Основы CSS"
```

Массив хранит последовательность значений:

```javascript
const lessons = [
  { id: 1, topic: "Основы CSS", duration: 45 },
  { id: 2, topic: "Модули JavaScript", duration: 60 },
];

console.log(lessons.length);   // 2
console.log(lessons[0].topic); // "Основы CSS"
```

Если знаком Python: объект здесь похож по назначению на dict, массив — на list. Это аналогия, а не полное совпадение всех правил языков.

## 3. Параметры и return

```javascript
function addMinutes(minutes) {
  return minutes + 10;
}

const result = addMinutes(30);
console.log(result); // 40
```

minutes — параметр функции, 30 — переданный аргумент. return возвращает результат вызывающему коду. console.log только печатает значение; он не заменяет return. Без return обычная функция возвращает undefined.

Параметр доступен внутри функции. Используй переданный массив, чтобы функция могла работать с разными данными, включая пустой массив.

## 4. Стрелочные функции

Эти функции возвращают одинаковый результат:

```javascript
const double = (number) => number * 2;

const doubleWithBlock = (number) => {
  return number * 2;
};
```

После `=>` без блока результат выражения возвращается автоматически. Если написал блок `{ ... }`, нужен явный return. В callbacks для map и filter это частый источник ошибки.

## 5. filter выбирает элементы

```javascript
const durations = [20, 45, 60];
const longLessons = durations.filter((minutes) => minutes >= 45);

console.log(longLessons); // [45, 60]
console.log(durations);   // [20, 45, 60]
```

Callback вызывается для элементов массива. Если результат условия истинный, элемент остаётся в новом массиве. filter не меняет исходный массив сам по себе. При этом не изменяй объекты внутри callback: новый массив всё ещё может ссылаться на те же объекты.

## 6. map преобразует каждый элемент

```javascript
const durations = [20, 45, 60];
const extended = durations.map((minutes) => minutes + 5);

console.log(extended); // [25, 50, 65]
```

map возвращает новый массив результатов, по одному на каждый исходный элемент. Он сам не отбрасывает записи. Для пустого массива map и filter возвращают пустой массив.

Короткое различие: filter отвечает «какие оставить?», map — «во что превратить каждый?». Callback тоже должен что-то вернуть.

## 7. export и import

Именованный экспорт:

```javascript
// numbers.js
export const initialCount = 3;
export function triple(number) {
  return number * 3;
}
```

Импорт в другом файле:

```javascript
import { initialCount, triple } from "./numbers.js";
console.log(triple(initialCount)); // 9
```

Для именованного экспорта используй фигурные скобки и соответствующее имя. Путь `./` означает текущую папку.

Компонент App в проекте имеет default export, поэтому его импорт выглядит иначе: `import App from "./App.jsx"`. Фигурные скобки при таком импорте не нужны.

## 8. Компонент React и JSX

Компонент — функция, которая описывает интерфейс. Название компонента начинается с заглавной буквы:

```jsx
function Greeting() {
  const name = "Дана";
  return <h1>Привет, {name}!</h1>;
}
```

JSX похож на HTML, но позволяет вставлять JavaScript-выражения в `{ ... }`. В JSX пишем className вместо class и закрываем все теги, включая `<input />`. Несколько соседних элементов оборачиваем в один родительский элемент или фрагмент `<>...</>`.

Компонент используется как `<Greeting />`. Не вызывай его вручную как обычную функцию внутри JSX. Точку входа main.jsx в этой домашке менять не нужно.

## 9. Список и key

```jsx
const cities = [
  { id: 10, name: "Алматы" },
  { id: 20, name: "Астана" },
];

function Cities() {
  return (
    <ul>
      {cities.map((city) => (
        <li key={city.id}>{city.name}</li>
      ))}
    </ul>
  );
}
```

Здесь map создаёт массив JSX-элементов. key помогает React сопоставлять элементы между обновлениями. Для записей с id используй устойчивый id на внешнем элементе, который возвращает callback. Не генерируй случайный key при каждом рендере.

## 10. Props — необязательная часть

```jsx
function CityLabel({ name }) {
  return <strong>{name}</strong>;
}

// Использование в JSX:
// <CityLabel name="Алматы" />
```

Props передают данные от родительского компонента дочернему. `{ name }` в параметрах — деструктуризация объекта props. Не изменяй полученные props внутри компонента. Для обязательной части домашки отдельный дочерний компонент не требуется.

## 11. CSS и узкий экран

```css
main {
  width: min(92%, 52rem);
  margin: 2rem auto;
}
```

На узком экране содержимое занимает 92% ширины, а на широком не растягивается бесконечно. Не задавай всей странице большую фиксированную ширину. В DevTools попробуй ширину 375px и длинное название. CSS подключён в main.jsx, изменять нужно styles.css.

## 12. Как искать ошибки

- В терминале Vite смотри ошибки запуска и сборки.
- В DevTools → Console браузера смотри ошибки JavaScript и предупреждения React.
- pnpm demo проверяет только обычные JS-функции через вывод в терминал.
- pnpm build проверяет, собирается ли проект. Успешная сборка не доказывает правильность фильтрации — проверяй результат руками.
- Если появился undefined, проверь return и имя поля.
- Если страница не показывает записи, проверь результат filter через console.log.

Изменение данных в файле и сохранение во время pnpm dev вызывает обновление через Vite. Это не то же самое, что интерактивное изменение state кнопкой в приложении; useState разберём отдельно.

## Документация

- [React: первый компонент](https://react.dev/learn/your-first-component).
- [React: JSX](https://react.dev/learn/writing-markup-with-jsx).
- [React: списки, map, filter и key](https://react.dev/learn/rendering-lists).
- [Vite: запуск проекта](https://vite.dev/guide/).
