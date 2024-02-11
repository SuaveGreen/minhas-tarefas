import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import { Props } from '.'

type PropsSemLegendaContador = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsSemLegendaContador>`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      props.ativo ? `${variaveis.bgColorSelectedCard}` : 'transparent'};
  background-color: ${(props) =>
    props.ativo ? 'transparent' : `${variaveis.bgColorUnselectedCard}`};
  color: ${(props) =>
    props.ativo ? `${variaveis.bgColorSelectedCard}` : `${variaveis.texto}`};
`

export const Contador = styled.div`
  font-wight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.div`
  font-size: 14px;
`
