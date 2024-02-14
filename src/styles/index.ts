import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
import { Botao } from '../components/Tarefa/styles'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
    text-decoration: none;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  margin-left: 30px;
  padding: 36px;
  padding-top: 62px;
  height: 100vh;
  overflow-y: scroll;
  background-color: ${variaveis.bgColor};
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  color: ${variaveis.texto};
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
  font-size: 16px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: transparent;
  color: ${variaveis.verde};
  border-color: ${variaveis.verde};
`

export default EstiloGlobal
