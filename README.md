# Fitness Exercise App

## Description
The Fitness Exercise App is a web application designed to model aspects of a healthy and fit lifestyle. It allows users to browse various exercises, view instructional videos, and find similar exercises. Real-time data retrieval from the Rapid API ensures users have access to a wide variety of current and varied workout routines. 

This project is built using React.js and Material UI, providing a responsive and user-friendly interface.

## Features
- **Search Exercises:** Allows users to search for exercises based on the body part, target muscle, or equipment used.
- **Exercise Details:** Provides detailed information about selected exercises, including instructional videos from YouTube.
- **Similar Exercises:** Recommends exercises that target the same body part or use similar equipment.
- **Responsive Design:** Built with Material UI, ensuring that the app looks great on all devices.
- **Real-Time Data Retrieval:** Utilizes Rapid API to fetch up-to-date exercise data and related YouTube videos.
- **Exercise Video Integration:** View instructional videos directly from the app for better understanding of exercises.
- **Scalable Components:** Modularized components for easy scalability and maintenance.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/fitness-exercise-app.git
    cd fitness-exercise-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory with the following content:

    ```bash
    VITE_REACT_APP_RAPID_API_KEY=your-rapidapi-key
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Visit `http://localhost:3000` in your browser to view the app.

## API Integration
The app fetches exercise data from the [ExerciseDB API](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb) and YouTube videos from the [YouTube Search API](https://rapidapi.com/h0p3rwe/api/youtube-search-and-download/).

Key API endpoints used:
- **Exercise Data:** Fetches exercise information based on body part, muscle target, and equipment used.
- **YouTube Integration:** Fetches YouTube videos related to exercises to help users perform exercises correctly.

## Components

### BodyPart.jsx
Allows users to select body parts and filter exercises accordingly.

### Detail.jsx
Displays detailed information about the selected exercise.

### ExerciseCard.jsx
Renders individual exercise cards in the exercise list.

### Exercises.jsx
Displays a list of exercises based on user-selected filters.

### ExerciseVideos.jsx
Fetches and displays related YouTube videos for the selected exercise.

### Footer.jsx
The footer component for the app.

### HeroBanner.jsx
Displays the banner on the homepage, providing a welcoming and engaging entry to the app.

### HorizontalScrollbar.jsx
Used to scroll through the list of body parts for filtering exercises.

### Loader.jsx
Displays a loading spinner when fetching data from the API.

### Navbar.jsx
Navigation bar for the app.

### SearchExercises.jsx
Search bar component to find exercises based on user input.

### SimilarExercises.jsx
Displays exercises similar to the currently selected exercise.

### ExerciseDetail.jsx
A combination of details, videos, and similar exercises for the selected exercise.

### Home.jsx
The main page that users land on when they open the app.

### fetchData.js
Contains functions to fetch data from the Rapid API for exercises and YouTube videos.

## Future Enhancements
- Add user authentication to track progress and create personalized workout routines.
- Allow users to create and save custom exercise routines.
- Implement a nutrition module to complement the exercise routines with diet recommendations.


