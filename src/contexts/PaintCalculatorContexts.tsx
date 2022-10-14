import { ReactNode, useState } from 'react'
import { createContext } from 'use-context-selector'
import { toast } from 'react-toastify'

interface PaintCalculatorContextType {
  startForm: boolean
  wallArea1: number
  wallArea2: number
  wallArea3: number
  wallArea4: number
  formStep1: boolean
  formStep2: boolean
  formStep3: boolean
  formStep4: boolean
  formInit: () => void
  formCancel: () => void
  updateWallArea1: (area: number) => void
  updateWallArea2: (area: number) => void
  updateWallArea3: (area: number) => void
  updateWallArea4: (area: number) => void
}

interface PaintCalculatorProviderProps {
  children: ReactNode
}

export const PaintCalculatorContext = createContext(
  {} as PaintCalculatorContextType,
)

export function PaintCalculatorProvider({
  children,
}: PaintCalculatorProviderProps) {
  const [startForm, setStartForm] = useState(false)
  const [wallArea1, setWallArea1] = useState(0)
  const [wallArea2, setWallArea2] = useState(0)
  const [wallArea3, setWallArea3] = useState(0)
  const [wallArea4, setWallArea4] = useState(0)
  const [formStep1, setFormStep1] = useState(false)
  const [formStep2, setFormStep2] = useState(false)
  const [formStep3, setFormStep3] = useState(false)
  const [formStep4, setFormStep4] = useState(false)

  function updateWallArea1(area: number) {
    setWallArea1(area)
    setFormStep1(true)
    toast.success('Área da parede 1 incluída com sucesso.')
  }

  function updateWallArea2(area: number) {
    setWallArea2(area)
    setFormStep2(true)
    toast.success('Área da parede 2 incluída com sucesso.')
  }

  function updateWallArea3(area: number) {
    setWallArea3(area)
    setFormStep3(true)
    toast.success('Área da parede 3 incluída com sucesso.')
  }

  function updateWallArea4(area: number) {
    setWallArea4(area)
    setFormStep4(true)
    toast.success('Área da parede 4 incluída com sucesso.')
  }

  function formInit() {
    setStartForm(true)
    toast.info('O cálculo foi iniciado.')
  }

  function formCancel() {
    setStartForm(false)
    setWallArea1(0)
    setFormStep1(false)
    setWallArea2(0)
    setFormStep2(false)
    setWallArea3(0)
    setFormStep3(false)
    setWallArea4(0)
    setFormStep4(false)
    toast.info('O cálculo foi cancelado.')
  }

  return (
    <PaintCalculatorContext.Provider
      value={{
        startForm,
        wallArea1,
        wallArea2,
        wallArea3,
        wallArea4,
        formStep1,
        formStep2,
        formStep3,
        formStep4,
        formInit,
        formCancel,
        updateWallArea1,
        updateWallArea2,
        updateWallArea3,
        updateWallArea4,
      }}
    >
      {children}
    </PaintCalculatorContext.Provider>
  )
}
