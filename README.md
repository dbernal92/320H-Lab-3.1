# Learner List - React App

This is a simple React app that displays a list of learners, their bios, and their scores. The app dynamically renders components based on provided data.

## Features
- Uses React state to manage learner data.
- Dynamically renders learners and their scores.
- Organized into modular components (`App`, `Learner`, and `Score`).
- Basic styling support via `App.css`.

## Project Structure
learner-list/
├── src/
│   ├── components/
│   │   ├── Learner.jsx   # Displays learner name, bio, and scores
│   │   ├── Score.jsx     # Displays individual scores
│   ├── App.jsx           # Main component, holds state and renders Learner components
│   ├── App.css           # Global styles for the app
│   ├── index.js          # Entry point for the React app
├── public/
│   ├── index.html        # Root HTML file
├── package.json          # Project dependencies and scripts
├── README.md             # Project documentation

## How It Works
### App.jsx:
Stores the list of learners in state.
Loops through learners and renders <Learner> components.

### Learner.jsx:
Displays the name and bio of each learner.
Loops through their scores and renders <Score> components.

### Score.jsx:
Displays each score’s date and value.