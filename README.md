# nowdigitaleasy_assignment

## Getting Started

To use this API, follow the instructions below:

1. **Installation:**
   - Ensure you have Node.js and npm installed on your system.
   - Clone this repository and navigate to the project directory.
   - Run `npm install` to install all dependencies.

2. **Environment Variables:**
   - Create a `.env` file in the root directory of the project.
   - Add the following environment variables to the `.env` file:
     ```
     PORT=your_desired_port
     MONGO_URL=your_mongo_connection_string
     ```
3. **Run the Server:**
   - Execute `npm start` to start the server.
   - The server will run on the defined port in the `.env` file.

# User API Documentation

This API provides functionality to manage user data including adding, retrieving, updating, and deleting users from the database.

## Endpoints

---

### Add User
- **Endpoint:** `/user/addUser`
- **Method:** `POST`
- **Description:** Creates a new user and adds them to the database.
- **Request Body:**
    - `name` (string): Name of the user.
    - `email` (string): Email address of the user.
    - `phoneNumber` (number): Phone number of the user.
    - `role` (string): Role of the user.
- **Success Response:**
    - **Code:** 201 (Created)
    - **Content:** 
        ```
        {
            "isError": false,
            "message": "New user created successfully",
            "data": { /* User Object */ }
        }
        ```
- **Error Response:**
    - **Code:** 400 (Bad Request)
    - **Content:** 
        ```
        {
            "isError": true,
            "error": "Error message description"
        }
        ```

---

### Get All Users
- **Endpoint:** `/user/allUsers`
- **Method:** `GET`
- **Description:** Retrieves all users' data from the database.
- **Success Response:**
    - **Code:** 200 (OK)
    - **Content:** 
        ```
        {
            "isError": false,
            "message": "All users data",
            "data": [ /* Array of User Objects */ ]
        }
        ```
- **Error Response:**
    - **Code:** 400 (Bad Request)
    - **Content:** 
        ```
        {
            "isError": true,
            "error": "Error message description"
        }
        ```

---

### Get User by ID
- **Endpoint:** `/user/getUser/:id`
- **Method:** `GET`
- **Description:** Retrieves specific user data by their ID from the database.
- **Request Parameter:**
    - `id` (string): ID of the user.
- **Success Response:**
    - **Code:** 200 (OK)
    - **Content:** 
        ```
        {
            "isError": false,
            "message": "Particular user's data",
            "data": { /* User Object */ }
        }
        ```
- **Error Response:**
    - **Code:** 404 (Not Found)
    - **Content:** 
        ```
        {
            "isError": true,
            "message": "User not found, please provide correct user ID"
        }
        ```

---

### Delete User by ID
- **Endpoint:** `/user/deleteUser/:id`
- **Method:** `DELETE`
- **Description:** Removes a user from the database by their ID.
- **Request Parameter:**
    - `id` (string): ID of the user.
- **Success Response:**
    - **Code:** 200 (OK)
    - **Content:** 
        ```
        {
            "isError": false,
            "message": "User data removed from the database",
            "data": { /* User Object */ }
        }
        ```
- **Error Response:**
    - **Code:** 404 (Not Found)
    - **Content:** 
        ```
        {
            "isError": true,
            "message": "User not found, please provide correct user ID"
        }
        ```

---

### Update User by ID
- **Endpoint:** `/user/updateUser/:id`
- **Method:** `PUT`
- **Description:** Updates a user's data by their ID in the database.
- **Request Parameter:**
    - `id` (string): ID of the user.
- **Request Body:**
    - `name` (string): Updated name of the user.
    - `email` (string): Updated email address of the user.
    - `phoneNumber` (string): Updated phone number of the user.
    - `role` (string): Updated role of the user.
- **Success Response:**
    - **Code:** 200 (OK)
    - **Content:** 
        ```
        {
            "isError": false,
            "message": "User data updated successfully",
        }
        ```
- **Error Response:**
    - **Code:** 404 (Not Found)
    - **Content:** 
        ```
        {
            "isError": true,
            "message": "User not found, please provide correct user ID"
        }
        ```

---

