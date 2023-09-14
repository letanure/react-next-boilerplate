import * as S from './styles'

const Button = ({ prop1 = 'Prop1Text' }) => (
  <S.Wrapper>
    <h1>Button</h1>
    <p>{prop1}</p>
  </S.Wrapper>
)

export default Button
