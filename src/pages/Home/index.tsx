import {Play} from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { HomeContainer,
         FormContainer,
         CountdownContainer, 
         Separator, 
         StartCountdownButton, 
         TaskInput, 
         MinutesAmount 
} from './styles'


const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1,'Informe a tarefa'),
  minutesAmount: zod.number().min(5).max(60) ,
})

function Home() {
  const {register, handleSubmit, watch} = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
  })

  function handleCreateNewCycle(data: any){
    console.log(data)
  }

  const task = watch('task')
  const isSubtmitDisabled = !task

  return(
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder='Dê um nome para seu projeto'
            {...register('task')}
          />

            <datalist id="task-suggestions">
              <option value="Projeto 1"></option>
              <option value="Projeto 2"></option>
              <option value="Projeto 3"></option>
              <option value="Projeto 4"></option>
            </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmount
           type="number"
           id="minutesAmount"
           placeholder='00' 
           step={5} 
           min={5} 
           max={60}
           {...register('minutesAmount', {valueAsNumber:true})}
          />
          <span>minutos.</span>
        </FormContainer>

      <CountdownContainer>
        <span>0</span>
        <span>0</span>
        <Separator>:</Separator>
        <span>0</span>
        <span>0</span>
      </CountdownContainer>

        <StartCountdownButton disabled={isSubtmitDisabled} type="submit" >
          <Play size={24}/>
          começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}

export default Home
