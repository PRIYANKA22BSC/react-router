
# React Router Task

Live Demo-https://react-router-sandy-seven.vercel.app/

This project showcases the use of React Router to create a multi-page application with seamless navigation. Each route renders a unique component, demonstrating dynamic routing and URL management in React.

## Features

1. **Dynamic Routing**: 
   - Different components rendered based on the URL path.
   - Supports nested routes for complex layouts.
2. **Navigation Bar**:
   - A reusable navigation bar with links to different pages.
   - Active link highlighting for better user experience.
3. **Error Handling**:
   - A custom 404 page for undefined routes.
4. **Lazy Loading**:
   - Components are lazy-loaded to optimize performance.

## Technologies Used

- React.js
- React Router
- JavaScript (ES6+)
- CSS (for styling)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/router-task.git
   ```
2. Navigate to the project directory:
   ```bash
   cd router-task
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000` to view the app.

## Code Structure

### `App.js`

- Contains the main layout and sets up the `BrowserRouter`.
- Includes the navigation bar and renders the current route's component.

### `components/Navbar.js`

- Displays navigation links for each route.
- Highlights the active link based on the current URL.

### `pages/Home.js`

- The home page component.
- Contains welcome text and basic application details.

### `pages/About.js`

- Displays information about the application or team.

### `pages/Contact.js`

- Contains a form for users to submit their contact information.

### `pages/NotFound.js`

- A custom 404 page displayed for invalid routes.

## Components

### Navigation Bar

- Provides links to Home, About, and Contact pages.
- Highlights the active route.

### Page Components

- Each page is a separate React component, making the app modular and easy to maintain.

## Usage

1. Use the navigation bar to switch between Home, About, and Contact pages.
2. Try accessing an invalid route to see the custom 404 page.

## Example

### Navigating Pages

1. Click on "About" in the navigation bar.
2. The URL changes to `/about`, and the About page content is displayed.
3. Similarly, navigate to "Home" or "Contact".

### 404 Page

1. Enter an undefined URL, such as `/random`.
2. The custom 404 page is displayed with an error message.


## Contributing

Feel free to fork this repository and submit pull requests to enhance the functionality or fix issues.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
