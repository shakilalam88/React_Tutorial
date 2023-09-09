import { render, screen } from '@testing-library/react'
import Contact from '../Contact'
import '@testing-library/jest-dom'

test('Should load contact us component', () => {
  render(<Contact />)
  const heading = screen.getByRole('heading')

  expect(heading).toBeInTheDocument()
})
// test('Should load contact us button', () => {
//   render(<Contact />)
//   const button = screen.getByRole('button')

//   expect(button).toBeInTheDocument()
// })

// test by text (it is failed because text is case sensitive)

// test('Should load contact us button', () => {
//   render(<Contact />)
//   const button = screen.getByText('submit')

//   expect(button).toBeInTheDocument()
// })

test('Should load contact us button', () => {
  render(<Contact />)
  const button = screen.getByText('Submit')

  expect(button).toBeInTheDocument()
})
