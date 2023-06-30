JSX JavaScript XML
JSX-> JS
for,class -> reserved keywords(`htmlFor`,`className`)
{} -> Template Syntax

1.  First letter must be `capital`
2.  It should return atleastn `one jsx elemet`
3.  `https://codepen.io/ragavkumarv/pen/PoJWbJj` movie list
4.  Inside the `jsx` ternary operator are called as `conditional rendernig` but, in JS it is ternary operator.
5.  `Parent to child` trafersing information we use `props`

### `Hooks`

1. React listen to changes made by hooks
2. Hooks function
3. It starts with "use"
4. `useState`

- const [state, setState] = useState(InitialValue)`
- state → state of mind I state of the art technology | current
- In App state current data\_
- "setState updates the value of 'state'
- "setState react listens and updates 'state` & view
- import `{useState }` from "react";"
- Flow: User clicks → onClick trigger → setLike → React updates view

### `Virtual DOM`

1. Copy of the Real Dom
2. Large `{key: value}`
3. Updating it does not cost performance
4. To access VDOM you could use hooks `(setState)`
5. Once the update is done on the virtual DOM, then the Real dom is update
6. Comparison - Reconciliation - VDOM & Real Dom
7. Key helps is quickly compare the changes
8. `document.\*` in React Looses

## `Routes`

### `#Hash VS /Browser Router`

1. `Hash` -> old browers(eg.IE) -> works in both new and old browers.
2. `browers` -> New browers -> additional feature -> only in new browers.

`********important******** ` -> we `install `router in` index.js` not in `app.js`

### ADD array of datas in mock Api

- fetch POST

1. method - POST
2. data(newMovie) - body & JSON
3. Header - JSON
