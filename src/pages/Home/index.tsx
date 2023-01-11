import {Play} from 'phosphor-react'
import { HomeContainer, FormContainer, CountdownContainer, Separator, StartCountdownButton, TaskInput, MinutesAmount } from './styles'

function Home() {
  return(
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id="task" list="task-suggestions" placeholder='Dê um nome para seu projeto'/>

            <datalist id="task-suggestions">
              <option value="Projeto 1"></option>
              <option value="Projeto 2"></option>
              <option value="Projeto 3"></option>
              <option value="Projeto 4"></option>
            </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmount type="number" id="minutesAmount" placeholder='00' step={5} min={5} max={60}/>
          <span>minutos.</span>
        </FormContainer>

      <CountdownContainer>
        <span>0</span>
        <span>0</span>
        <Separator>:</Separator>
        <span>0</span>
        <span>0</span>
      </CountdownContainer>

        <StartCountdownButton type="submit" disabled>
          <Play size={24}/>
          começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}

export default Home
