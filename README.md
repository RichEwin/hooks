# 🪝 @rewin/hooks

A growing collection of lightweight, reusable React hooks for common patterns like debouncing and fetching data.

---

## ✨ Features

- 🧰 **Utility-first** – Designed for real-world needs like debouncing input or delaying effects.
- ⚛️ **React-friendly** – Built with idiomatic patterns and native hooks.
- ⚡ **Lightweight** – No dependencies, small footprint.
- 🧠 **Type-safe** – Written in TypeScript with full generics support.
- 🧩 **Composable** – Use standalone or together as building blocks.

---

## 💡 Why?

Sometimes you just need a small utility hook to make your code cleaner. Instead of rewriting the same logic over and over, `@rewin/hooks` gives you thoughtful, reusable solutions for everyday problems in React.

---

## 📦 Installation

```bash
npm install @rewin/hooks
```

## 📚 Available Hooks

```
- useDebounce<T>(value: T, delay?: number)

Delay a changing value by a set number of milliseconds.

- usePagination(data = [], itemsPerPage = 10, initialPage = 1)

Provides pagination logic for an array of data.
```

## 🛡️ Gotchas

These hooks are intended for use in client-side React (i.e., inside functional components).
Using them in server components or outside of React’s render lifecycle may result in errors.

## 🧱 Built With

- react
- typescript

## 🪪 License

MIT — Use freely and build cool things.
