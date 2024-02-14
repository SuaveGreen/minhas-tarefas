import BotaoAdd from '../../components/BotaoAdd'
import BarraLateral from '../../containers/BarraLateral'
import ListaTarefas from '../../containers/ListaTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaTarefas />
    <BotaoAdd />
  </>
)

export default Home
