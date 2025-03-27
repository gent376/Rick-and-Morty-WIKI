Rick and Morty Character List

This project is a simple React application that uses Apollo Client to fetch and display a list of characters from the Rick and Morty GraphQL API. It includes features to filter characters by status and species, sort characters by name and origin, and paginate through the results. Additionally, a language switcher allows users to toggle between different languages (English and German).


Features

-Display character details: Name, Status, Species, Gender, and Origin.

-Filter characters by Status (Alive, Dead, Unknown) and Species.

-Sort characters by Name and Origin.

-Language switcher to toggle between English and German.

-Infinite scrolling to dynamically load more characters as the user scrolls.


Technologies Used

-React

-Apollo Client

-GraphQL

-CSS

-Tailwind CSS

Setup Instructions

Clone the repository:

---git clone https://github.com/gent376/Rick-and-Morty-WIKI.git  ---

Install dependencies:

Ensure that you have Node.js installed. Then run the following command to install the required packages:

---npm install---

Start the development server:

To start the development server and view the application locally, run:

---npm start---

-This will start the application and open it in your default browser at http://localhost:3000.

Build the application:

If you're ready to deploy, you can build the app using:

---npm run build---

-This will generate a production build in the build/ directory.


How to Use

-Upon loading, the page will display a list of characters from the Rick and Morty universe.

-You can filter the characters by their status and species using the filter controls.

-Sort the characters by name or origin.

-Use the language switcher in the footer to toggle between English and German.
-Infinite scrolling is enabled: as you scroll down, more characters will be loaded dynamically.
