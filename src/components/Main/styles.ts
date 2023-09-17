import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${() => css`
    background-color: #a2aecd;
    height: 100%;
    width: 100%;

    ${media.lessThan('medium')`
      border: 5px solid red
    `}
  `}
`

export const Wrapper2 = styled.main`
  background-color: #a2aecd;
  height: 100%;
  width: 100%;
`

export const Title = styled.h1`
  color: #333;
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 2rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`
