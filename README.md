# ChatQuantum

ChatQuantum is a real-time chat application built with React and Firebase. It allows users to engage in instant messaging with features such as user authentication, real-time chat updates, and a user-friendly interface.

## Features

- **Real-Time Messaging:** Send and receive messages instantly with real-time updates.
- **User Authentication:** Secure sign-in and sign-out functionality using Firebase Authentication.
- **User Profiles:** Users can set up and customize their profiles.
- **Message Storage:** Messages are stored in Firebase Firestore for persistence.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Sharad1013/chat-quantum.git
    ```

2. Navigate to the project directory:

    ```bash
    cd chat-quantum
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up Firebase:

    - Create a new Firebase project at [Firebase Console].
    - Obtain your Firebase configuration object.
    - Create a `.env` file in the root directory of your project and add the Firebase configuration:

    ```plaintext
    FIREBASE_API_KEY=your-api-key
    FIREBASE_AUTH_DOMAIN=your-auth-domain
    FIREBASE_PROJECT_ID=your-project-id
    FIREBASE_STORAGE_BUCKET=your-storage-bucket
    FIREBASE_MESSAGING_SENDER_ID=your-sender-id
    FIREBASE_APP_ID=your-app-id
    ```

5. Start the development server:

    ```bash
    npm start
    ```

6. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- **Sign Up / Sign In:** Use the provided authentication methods to create a new account or log in.
- **Chat:** Start a new chat or continue existing conversations from the chat interface.


## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.


## Acknowledgements

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Firebase](https://firebase.google.com/) - Backend service for authentication and real-time data storage.

---
Feel free to modify this template based on your specific project details and preferences.


