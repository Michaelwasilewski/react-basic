// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)
// //JSX - Javascript XML (flavor of javascrip that looks like html)

// const element = <h1 className="header">This is JSX</h1>
// console.log(element)
// /*
// {
//     type: "h1", 
//     key: null, 
//     ref: null, 
//     props: {
//         className: "header", 
//         children: "This is JSX"
//     }, 
//     _owner: null, 
//     _store: {}
// }
//  */

// ReactDOM.render(element, document.getElementById("root"))

// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )
// console.log(page)
// ReactDOM.render(
//     page,
//     document.getElementById("root")
// )

const navbar = (
    <nav>
        <h1>Pravi</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
    </nav>
)
ReactDOM.render(navbar, document.getElementById("root"))