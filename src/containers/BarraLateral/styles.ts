import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Aside = styled.aside`
  width: 254px;
  padding: 16px;
  padding-left: 36px;
  background: ${variaveis.bgColor};
  height: 100vh;
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`
export const Campo = styled.input`
  outline: none;
  padding: 8px 1px;
  margin-top: 16px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid;
  color: ${variaveis.campoBusca};
  width: 100%;
`
