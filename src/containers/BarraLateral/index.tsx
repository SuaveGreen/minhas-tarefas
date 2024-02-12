import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../Utils/enums/Tarefa'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Busque suas notas..."
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            valor={enums.Status.PENDENTE}
            criterio="Status"
            legenda="Pendentes"
          />
          <FiltroCard
            valor={enums.Status.CONCLUIDA}
            criterio="Status"
            legenda="Concluidas"
          />
          <FiltroCard
            valor={enums.Prioridade.URGENTE}
            criterio="Prioridade"
            legenda="Urgentes"
          />
          <FiltroCard
            valor={enums.Prioridade.IMPORTANTE}
            criterio="Prioridade"
            legenda="Importantes"
          />
          <FiltroCard
            valor={enums.Prioridade.NORMAL}
            criterio="Prioridade"
            legenda="Normal"
          />
          <FiltroCard
            // valor={enums.Prioridade.PENDENTE}
            criterio="Prioridade"
            legenda="Todas"
          />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
