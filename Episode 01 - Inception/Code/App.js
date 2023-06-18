// <div class="container">
//   <div class="left">
//     <h1>left h1</h1>
//     <p>left para</p>
//   </div>
//   <div class="right">
//     <h1>right h1</h1>
//     <p>right para</p>
//   </div>
// </div>

const div = React.createElement(
  'div',
  { className: 'container' },
  React.createElement(
    'div',
    { className: 'left' },
    React.createElement('h1', { className: 'heading' }, 'left h1'),
    React.createElement('p', { className: 'para' }, 'left para')
  ),
  React.createElement(
    'div',
    { className: 'right' },
    React.createElement('h1', { className: 'heading' }, 'right h1'),
    React.createElement('p', { className: 'para' }, 'right para')
  )
)

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(div)

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)
