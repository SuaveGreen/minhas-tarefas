import { Provider } from 'react-redux'
import BarraLateral from './containers/BarraLateral'
import ListaTarefas from './containers/ListaTarefas'
import EstiloGlobal, { Container } from './styles'

import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <EstiloGlobal />
        <Container>
          <BarraLateral />
          <ListaTarefas />
        </Container>
      </Provider>
    </div>
  )
}

export default App
