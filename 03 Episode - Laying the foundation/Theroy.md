# Episode 03 - Laying the Foundation

## Timeline
```sh
00:01:04 – starting the project by using terminal
00:03:00 – create a npm script for starting the project in dev world
00:06:00 – Tips to start a project when you joined a new company 
         – scripts in package.json discussion
00:20:58 – JSX Introduced & its usage
00:38:00 – Transpiling the JSX
00:40:35 – Babel explanation
         – JSX code
00:45:00 – Babel’s explanation again but its more concise
00:53:30 – usage of class & className in JSX
00:58:00 – Visual Studio Code Extensions
         – Prettier
         – “Bracket Pair Colorization” Toggler
         – ES Lint and “Better Comments”
01:01:13 – React Component & its 2 ways of writing (Class based & Functional)
01:16:00 – Nested Functional Component
         – React Element
         – React Component
01:18:45 – Rendering a functional component 
         – root.render(<HeadingComponent/>);
01:22:30 – How to render a component inside another component
01:25:05 – Component Composition 
01:27:00 – Component without Arrow function
         – Other ways of writing a component
01:35:00 – How to put a react element inside a component?
01:37:25 – How to put a React element inside a React element?
01:46:55 – Cross Site Scripting, JSX Expressions, React Fragments
02:05:00 – Session Recap 
```

## Theory Assignment Question:
- What is `JSX`?
- Superpowers of `JSX`.
- Role of type `attribute` in script tag? What `options can I use` there?
- `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
- What is  `Functional Components`


## Theory Assignment Answer:
### Q: What is `JSX`?
A: JSX stands for JavaScript XML.
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
JSX makes it easier to write and add HTML in React.
JSX converts HTML tags into react elements.

#### Example 1 using JSX:
```
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```
#### Example 2 Without JSX:
```
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```


### Q: Superpowers of `JSX`.
A: Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.
#### Example
```
function greeting(user) {
//JSX
  return <h1>{user}, How are you!!!</h1>;
}
```


### Q: Role of `type` attribute in script tag? What options can I use there?
A: The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.
#### `type` attribute can be of the following types:
- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
    #### Syntax
    ```
    <script type="text/javascript"></script>
    ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.

### Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
A: The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable. 
The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
#### Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```

## Q: What is `Functional Components`.
A: A function that return JSX


## React.createElement('html tag',{attribute of tag},'children of this tag')

## Add
- add `"start":"parcel index.html"` in `Package.json`
- add `"build":"parcel build index.html"` in `Package.json`
- Run `npm run start` or `npm run build`
- `npm start`=== `npm run start` ===`npm parcel index.html`
- `React.createElement` => `ReactElement-Js object` => `HTMLElement(render)`


## Topics
- `JSX`
- `React.createElement` vs `JSX`
- `Benefits of JSX`
- `Behind the Scenes of JSX`
- `Babel` & `parcel` role in JSX
- `Components`
- `Functional Components`
- `Composing Components` 




## Coding Assignment:
- Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")
    - Create the `same element using JSX`
    - Create a `functional component of the same with JSX`
    - `Pass attribute` into the tag in `JSX`
    - `Composition of Component` (Add a component inside another)
    - `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

- Create a `Header Component` from scratch using `Functional Component` with JSX
    - Add a `Logo on Left`
    - Add a `search bar in middle`
    - Add `User icon on right`
    - Add `CSS to make it look nice`


## References:
- [Babel](https://babeljs.io/)
- [Attribute Type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type) 
- [JS Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Babel Playground](https://babeljs.io/repl#)
- [React without JSX](https://reactjs.org/docs/react-without-jsx.html)