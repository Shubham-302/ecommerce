
# E-Commerce Application

Welcome to our simple e-commerce application! This project demonstrates how to create an e-commerce site with features like user authentication, product listing, and a shopping cart. It is a full-stack project using React for the frontend and Node.js with Express for the backend.

## Features

User Authentication: Register and log in to access your shopping cart.

Product Listing: Browse products, view details, and add them to your cart.

Shopping Cart: Manage items in your cart, ready for checkout.

Admin Features: Admins can add, update, and delete products.


## Technologies Used

Frontend
React: For building the user interface.

Redux: For state management.
React Router: For navigation.

Backend
Node.js: For the server-side application.

Express: For creating RESTful APIs.

MongoDB: For the database.

Mongoose: For database schema management.

JWT: For secure authentication.
Development Tools

Nodemon: For automatically restarting the server during development.

dotenv: For managing environment variables.

## Installation

Navigate to the backend directory:

```bash
  cd e-commerce/backend
```

Install backend dependencies:

```bash
  npm install

```

Add the following variables to the .env file:

```bash
 MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


```

Run the backend server:

```bash
 npm start


```
Navigate to the frontend directory:

```bash
cd e-commerce/frontend



```
Install dependencies

```bash
npm install




```

Start the frontend development server:

```bash
npm  start




```






    
## Usage

**register a new user:** Go to the /register page and create a new account.

**Log in:** Use the credentials to log in on the /login page.

**Browse products:** Check out the products listed on the homepage.

**Manage your cart:** Add items to your cart and review them on the /cart page.

**Admin actions:** If you are an admin, you can add, update, or delete products.


## Contributing

We welcome contributions! Please fork the repository and create a pull request. For major changes, please open an issue to discuss what you would like to change.

- Fork the repository.
- Create a new branch.
- Make your changes and commit them.
- Push to your branch.
- Open a pull request.

