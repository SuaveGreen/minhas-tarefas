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

export const BotaoVoltar = styled.button`
  border: none;
  font-size: 40px;
  cursor: pointer;
  color: ${variaveis.bgButton};
  background-color: transparent;
`
