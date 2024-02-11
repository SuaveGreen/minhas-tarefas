import { configureStore } from '@reduxjs/toolkit'

import terefasReducer from './reducers/tarefas'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    terefas: terefasReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
