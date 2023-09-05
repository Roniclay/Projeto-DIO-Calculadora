import { InputContainer, Display } from './styles'

const Input = ({ value }) => {
  return (
    <InputContainer>
      <div style={{ padding: 20 }}>
        {value}
      </div>
    </InputContainer>
  )
}

export default Input