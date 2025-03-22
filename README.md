# Movie Mania

Movie Mania is a React-based movie website that allows users to explore movies, view details, and stream trailers. Built using modern web technologies like React, Redux Toolkit, React Router, and Tailwind CSS, it provides a seamless and responsive user experience.

## Features

- Browse and search for movies
- View movie details, ratings, and trailers
- Infinite scrolling for smooth browsing
- State management using Redux Toolkit
- Responsive design with Tailwind CSS

## Tech Stack

- **Frontend**: React, React Router, Redux Toolkit, Tailwind CSS
- **API Calls**: Axios
- **Infinite Scroll**: react-infinite-scroll-component
- **Video Player**: react-player
- **Icons**: Remixicon
- **Build Tool**: Vite

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/movie-mania.git
   cd movie-mania
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open in the browser:
   Navigate to `http://localhost:5173/` (default Vite port).

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Folder Structure

```
movie-mania/
├── src/
│   ├── components/   # Reusable UI components
│   ├── pages/        # Different pages of the app
│   ├── store/        # Redux store and slices
│   ├── assets/       # Static files (images, icons, etc.)
│   ├── styles/       # Tailwind and other CSS files
│   ├── App.jsx       # Main app component
│   ├── main.jsx      # Entry point
├── public/           # Public assets
├── package.json      # Dependencies and scripts
├── vite.config.js    # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
└── README.md         # Project documentation
```

## API Integration

You need an API key from a movie database like [TMDB](https://www.themoviedb.org/). Store it in an `.env` file:

```
VITE_API_KEY=your_api_key_here
```

Use it in your requests:
```js
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`;
```
