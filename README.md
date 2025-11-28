# Bite Lite

Bite Lite is a simple ordering food app that provides the menu list, a search bar to filter the items, a shopping cart that
adds and removes items from the cart and displays the cart total.

## Installation

- Clone the Project<br>
 `https://github.com/rebzhaki/Bite-Lit.git`
- Navigate to the application directory<br>
 `cd bite-lite`
- And run the command to install dependencies<br>
 `npm install`
- Now you are ready to run the application<br>
 `npm run dev`

## Tech Stack
ReactJs <br>
React Bootstrap<br>
CSS<br>

## Statemanagement and API Handling
State management refers to how your app stores and updates data that changes over time — such as the cart, search input, selected category, and quantities.
In the Bite Lite project, state management is handled using React’s built-in useState and useContext hooks. <br>

Uses a mocked JSON for backend<br>
`import data from "../../data/db.json"`

Uses component state to manage dynamic values<br>
`const [cartItems, setCartItems] = useState([])`

Uses global state to store shared data across components<br>
`searchQuery` `updateCategory`

Temporary persistence using sessionStorage<br>
`sessionStorage.setItem("cartItems", JSON.stringify(cartItems))`
