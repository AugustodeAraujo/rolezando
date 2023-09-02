import { render, screen } from '@testing-library/react'

import Test from '.'

describe('<Test/>', () => {
  it('should render the headi ng', () => {
    const { container } = render(<Test />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
