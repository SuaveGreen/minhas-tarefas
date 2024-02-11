import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../Utils/enums/Tarefa'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function retornaCorFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.laranja
  } else {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
  }

  return variaveis.normal
}

export const Card = styled.div`
  background-color: ${variaveis.bgColorUnselectedCard};
  box-shadow: 0px 4px 4px ${variaveis.boxShadow};
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  color: ${variaveis.texto};
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  border: solid 1px ${(props) => retornaCorFundo(props)};
  color: ${(props) => retornaCorFundo(props)};
  background-color: transparent;
  padding: 6px 12px;
  font-weight: 700;
  font-size: 10px;
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: ${variaveis.texto};
  font-size: 14px;
  line-height; 24px
  font-family: 'JetBrains Mono ExtraLight', Roboto Mono, monospace;
  display: block;
  width:100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
  outline: none;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid ${variaveis.boxShadow};
  padding-top: 16px;
`

export const Botao = styled.button`
  border-radius: 8px;
  margin-right: 8px;
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  color: ${variaveis.bgButton};
  border: solid 1px ${variaveis.bgButton};
  background-color: transparent;
`
export const BotaoSalvar = styled(Botao)`
  background-color: transparent;
  color: ${variaveis.verde};
  border-color: ${variaveis.verde};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
  color: ${variaveis.texto};
  border-color: transparent;
`
