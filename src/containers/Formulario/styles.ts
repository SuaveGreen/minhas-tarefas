import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-size: 14px;
  color: ${variaveis.texto};

  textarea {
    font-size: 16px;
    resize: none;
    margin: 16px 0;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 12px;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
