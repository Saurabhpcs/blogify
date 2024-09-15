# Blogify: AI-Powered Blog Generation

Blogify is a web application that enables users to generate blog posts based on keywords using AI. It provides features for user registration, login, and blog generation, allowing users to save drafts and manage their blogs efficiently.

## Tech Stack

- **Frontend**: React.js (for building interactive UI components)
- **Backend**: Node.js with Express (for handling API requests and server-side logic)
- **Database**: MongoDB (for storing user data and blog drafts)
- **AI Integration**: Hugging Face model (for generating blog content)
- **Authentication**: JWT (for user authentication) and bcrypt (for password hashing)
- **CSS Framework**: Styling using CSS
- **Libraries**: Axios (for making API requests), Mongoose (for database operations), Zod (for schema validation)

## Project Components

### Frontend

- **Navbar**  
  The `Navbar` component is responsible for the navigation menu of the website. It provides links to different sections such as Home, About, Login, Register, and Drafts and remains accessible at the top of each page.

- **Footer**  
  The `Footer` component is positioned at the bottom of the webpage.

- **Pages**  
  - **Home**  
    The Home page introduces the application and highlights its main features. It serves as a landing page with navigation options to other parts of the application.

  - **Register**  
    The Register page allows new users to sign up by entering their email and password. This page handles user creation and secure storage of credentials.

  - **Login**  
    The Login page enables registered users to access their accounts by entering their email and password. Authenticated users are redirected to their dashboard.

  - **Prompt**  
    The Prompt page allows users to input keywords for blog generation. This form submits the keywords to the AI model to generate a blog draft.

  - **GeneratedBlog**  
    The GeneratedBlog page displays the blog created by the AI based on the user's input. It includes the blog's title, content, and an option to save the blog as a draft.

  - **Drafts**  
    The Drafts page shows all the saved drafts for the logged-in user. Each draft is listed with options to view and edit.

### Backend

- **User Authentication**  
  The backend uses `bcrypt` for hashing passwords and `JWT` for user authentication. This ensures secure handling of user credentials and access control.

- **Blog Draft Management**  
  The backend handles storing, retrieving, and managing blog drafts. It provides APIs for saving new drafts and fetching existing ones.

- **AI Blog Generation**  
  The AI blog generation feature uses a Hugging Face model to create blog content based on user-provided keywords. The model processes the input and returns a generated blog draft.

- **Controllers**  
  Controllers manage the logic for handling requests, such as user registration, login, and blog operations.

- **Middleware**  
  Middleware functions handle tasks like checking if a request is authenticated and managing errors that occur during request processing.

- **Database**  
  The database configuration ensures proper connection to MongoDB and defines how user data and blog drafts are stored.

## Deployment

- **Frontend**: Deployed on Vercel
- **Backend**: Deployed on Koyed

## Live Demo

You can access the live version of the deployed Blogify application [here](https://blogify-lilac-three.vercel.app/).

## Working Demo

You can see a working video demo of Blogify [here](https://drive.google.com/file/d/1x6Rf9gQX97cK3_ztzVycKxzMs6TnGpDv/view).

## Conclusion

Blogify offers a comprehensive platform for generating and managing blog content. With its AI-driven blog generation, user authentication, and draft management, it provides an efficient tool for bloggers to create and organize their content.

For any questions or further information, please contact me at [saurabh.kumar.21cse@bmu.edu.in](mailto:saurabh.kumar.21cse@bmu.edu.in).
