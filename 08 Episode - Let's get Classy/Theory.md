# Episode 8 - Let's get Classy!

## Timeline
```sh
00:09:30 – Class based component example
00:16:00 – Props, Props in Function based component, Destructure
00:18:00 – How to write same example in a Class based component
00:21:00 – Mentioned about “Super(props)”
00:23:00 – What if you want more props?
00:26:00 – How can we write local/state variables in a Function Component
00:28:00 – how can we create state/local variable in Class component
00:30:00 – “this.state” explained, Destructuring 
00:34:00 – How do we create 2 state/local variables in both functional & class-based component
00:37:05 – How to update the state variables in Class component 
00:47:55 – Interview Question
00:48:20 – Life cycle of Class based components
00:50:00 – Detailed Explanation
         – Parent, child – Constructor 
         – Parent, child – Render
00:58:25 – ComponentDidMount(){ }, Life cycle of a Parent-child relationship
01:05:00 –ComponentDidMount() used for API class
01:07:00 – API calls inside useEffect()
01:14:00 – this.props.name + “child constructor” 
01:20:00 – React Lifecycle Methods Diagram
01:21:00 – Why React is so fast?
01:27:00 – DOM Manipulation 
01:29:00 – Render phase, Commit phase
01:33:00 – How to make API calls in class based components?
01:36:00 – GitHub API call
01:38:40 – How to update the json data into our web page
01:43:38 – Coding UserClass.js component
01:44:00 – How life cycle works here in this code
01:45:00 - Debugger
01:49:30 – ComponentDidUpdate()
01:52:00 – Mounting Cycle
01:55:00 – API rate limit exceeded
01:56:15 – Unmounting Phase/cycle
01:58:00 - in older days we were coding like this
02:09:00 – How to write the same in class based component – ProfileClass.js
02:15:00 – More Deeper we explore the old way of writing React Code
02:18:00 – what is the use case of componentWillUnmount()?
02:24:30 – Problem of Single Page Application
02:30:00 – Senior Developer should know this
02:32:00 – What will happen if we create setInterval inside useEffect
02:36:30 – coding Profile.js 
02:45:30 – Async in useEffect()
```


## Theory Assignment Question:
- How do you create `Nested Routes react-router-dom` configuration?
- Read about `createHashRouter`, `createMemoryRouter` from React Router docs.
- What is the `order of life cycle method calls` in `Class Based Components`?
- Why do we use `componentDidMount`?
- Why do we use `componentWillUnmount`? Show with `example`.
- (Research) Why do we use `super(props)` in `constructor`?
- (Research) Why `can't we have` the `callback function` of `useEffect async`?


## Coding Assignment Answer:

### Q: How do you create `Nested Routes` react-router-dom configuration?
A: We can create a `Nested Routes` inside a react router configuration as follows:
first call createBrowserRouter for routing different pages
```
const router = createBrowserRouter([
   {
      path: "/", // show path for routing
      element: <Parent />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children: [ // show children component for routing
         {
            path: "/path",
            element: <Child />
         }
      ],
   }
])
```
Now we can create a nested routing for `/path` using `children` again as follows:

```
const router = createBrowserRouter([
   {
      path: "/",
      element: <Parent />,
      errorElement: <Error />,
      children: [
         {
            path: "/path",
            element: <Child />,
            children: [ // nested routing for subchild
               {
                  path: "/child",
                  element: <SubChild />,
               }
            ],
         }
      ],
   }
])
```


### Q: Read about `createHashRouter`, `createMemoryRouter` from React Router docs.
A: `createHashRouter` is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the `hash (#)` portion of the URL to manage the "application URL".
Other than that, it is functionally the same as `createBrowserRouter`.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-hash-router)

`createMemoryRouter` Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-memory-router)


### Q: What is the order of life cycle method calls in `Class Based Components`?
A: Following is the order of lifecycle methods calls in `Class Based Components`:
1. constructor()
2. render ()
3. componentDidMount()
4. componentDidUpdate()
5. componentWillUnmount()

For more reference [React-Lifecycle-methods-Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)


### Q: Why do we use `componentDidMount`?
A: The `componentDidMount()` method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.
Wwe can run any piece of react code to modify the components. For ex. It's the best place to `make API calls`.


### Q: Why do we use `componentWillUnmount`? Show with example.
A: `componentWillUnmount()` is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance.
For example, in Repo class, during `componentDidMount()` a timer is set with an interval of every one second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example `clearInterval`(timer) to clear the timer interval before unmounting Repo component.


### Q: (Research) Why do we use `super(props)` in constructor?
A: `super(props)` is used to inherit the properties and access of variables of the React parent class when we initialize our component.
super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console.
The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.


### Q: (Research) Why can't we have the `callback function` of `useEffect async`?
A: `useEffect` expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as `async`, it will return a `promise` and the promise will affect the clean-up function from being called.


## Coding Assignment Question:
- Create `Class Based` Component.
    - Create 2 `class-based child components`.
    - `Pass props` from `Parent to child`.
    - Create a `constructor`.
    - Create a `state variable` inside child.
    - Use `this.setState` to update it.
    - What if there are `multiple state variables`?
    - Write a `console.log` for each lifecycle method.
    - Play with the `console logs` to find out the `correct order of their execution`.
- Create `interval` inside `componentDidMount`?
    - Use `clearInterval` to `fix the issue` caused by the `interval`

## References:
- [React Life Cycle Method Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)