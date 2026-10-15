# Browser Extensions Manager

A responsive browser extensions management application built with React. Users can browse extensions, filter them by status, activate or deactivate them, and remove extensions from the list.

## 🚀 Live Demo

**[View Live Project](https://amirhosseinmaniyan.github.io/browser-extensions-manager-project/)**

## ✨ Features

- **Extension Management:** View a list of browser extensions with their logos, names, descriptions, and status.
- **Filter Extensions:** Filter the list by All, Active, and Inactive.
- **Toggle Extension Status:** Activate or deactivate individual extensions.
- **Remove Extensions:** Remove extensions from the list.
- **Dynamic Rendering:** Automatically update the interface when an extension is toggled, removed, or filtered.
- **Empty State:** Display a message when no extensions match the selected filter or when all extensions have been removed.
- **Light and Dark Themes:** Switch between light and dark appearance modes.
- **Responsive Design:** Adapt the layout to mobile, tablet, and desktop screen sizes.
- **Reusable Components:** Build the interface using reusable React components.
- **Data Fetching:** Load extension data from a local JSON file.
- **GitHub Pages Deployment:** Deploy the application as a live website.

## 🛠️ Built With

- **React** — Building interactive user interfaces and reusable components.
- **JavaScript (ES6+)** — Application logic and event handling.
- **CSS3** — Styling, CSS variables, Flexbox, Grid, and responsive layouts.
- **Vite** — Development server and production build tool.
- **HTML5** — Semantic markup.
- **Git & GitHub** — Version control and project hosting.
- **GitHub Pages** — Deployment.

## ⚙️ Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and npm installed on your computer.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/amirhosseinmaniyan/browser-extensions-manager.git
   ```

2. Navigate to the project directory:

   ```bash
   cd browser-extensions-manager
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

### Production Build

To create an optimized production build, run:

```bash
npm run build
```

To preview the production build locally, run:

```bash
npm run preview
```

## 🧠 What I Learned

- Building reusable and maintainable React components.
- Managing component state with the `useState` Hook.
- Using the `useEffect` Hook to fetch data when a component mounts.
- Rendering dynamic lists with `map()` and assigning unique keys.
- Filtering arrays with `filter()` based on user-selected criteria.
- Updating objects in state immutably.
- Handling user interactions through event handlers and callback props.
- Using conditional rendering to display different UI states.
- Organizing CSS and creating responsive layouts with Flexbox and CSS Grid.
- Managing theme styles with CSS custom properties.
- Configuring asset and data paths for deployment with Vite and GitHub Pages.

## 🌐 Deployment

The project is deployed using GitHub Pages.

Vite's `base` configuration is set to the repository's deployment path to ensure that static assets, extension logos, and JSON data load correctly in production.

## 👨‍💻 Author

**Amir Hossein Maniyan**

- GitHub: [@amirhosseinmaniyan](https://github.com/amirhosseinmaniyan)
- Repository: [browser-extensions-manager-project](https://github.com/amirHosseinManiyan/browser-extensions-manager-project)
- Live Project: [Browser Extensions Manager](https://amirhosseinmaniyan.github.io/browser-extensions-manager-project/)

---

Built with React and JavaScript.
