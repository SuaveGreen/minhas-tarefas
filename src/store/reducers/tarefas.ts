import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../Utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao:
        'Estudar ReactJS para conseguir meu certificado além de aprender mais sobre',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDA,
      titulo: 'Estudar ReactJS na RocketSeat'
    },
    {
      id: 2,
      descricao:
        'Preciso chegar aos 70% urgente, para entrar no programa de empregabilidade',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      titulo: 'Chegar aos 70% na EBAC até dia 29'
    },
    {
      id: 3,
      descricao:
        'Não é urgente, porém quero fazer para ver se eu vou me dar bem n oBack-End em Python',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar Python na RocketSeat'
    },
    {
      id: 4,
      descricao:
        'Não é urgente, porém quero fazer para ver se eu vou me dar bem no Back-End em Python',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar Python na RocketSeat'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexTarefa >= 0) {
        state.itens[indexTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
