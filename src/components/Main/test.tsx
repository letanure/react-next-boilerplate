import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /Boilerplate/i }),
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it.skip('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({
      'background-color': 'rgb(162, 174, 205)',
    })
  })
})
