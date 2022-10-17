import { ReactNode, useState } from 'react'
import { createContext } from 'use-context-selector'
import { toast } from 'react-toastify'

export interface WallAreaType {
  height: number
  width: number
  doors: number
  windows: number
  wallArea: number
}

interface PaintCalculatorContextType {
  startForm: boolean
  name: string
  wallArea1: WallAreaType
  wallArea2: WallAreaType
  wallArea3: WallAreaType
  wallArea4: WallAreaType
  formStep1: boolean
  formStep2: boolean
  formStep3: boolean
  formStep4: boolean
  formInit: () => void
  formCancel: () => void
  updateName: (name: string) => void
  updateWallArea1: (data: WallAreaType) => void
  updateWallArea2: (data: WallAreaType) => void
  updateWallArea3: (data: WallAreaType) => void
  updateWallArea4: (data: WallAreaType) => void
}

interface PaintCalculatorProviderProps {
  children: ReactNode
}

export const PaintCalculatorContext = createContext(
  {} as PaintCalculatorContextType,
)

const initialValueWallArea = {
  height: 0,
  width: 0,
  doors: 0,
  windows: 0,
  wallArea: 0,
}

export function PaintCalculatorProvider({
  children,
}: PaintCalculatorProviderProps) {
  const [startForm, setStartForm] = useState(false)
  const [name, setName] = useState('')
  const [wallArea1, setWallArea1] = useState<WallAreaType>(initialValueWallArea)
  const [wallArea2, setWallArea2] = useState<WallAreaType>(initialValueWallArea)
  const [wallArea3, setWallArea3] = useState<WallAreaType>(initialValueWallArea)
  const [wallArea4, setWallArea4] = useState<WallAreaType>(initialValueWallArea)
  const [formStep1, setFormStep1] = useState(false)
  const [formStep2, setFormStep2] = useState(false)
  const [formStep3, setFormStep3] = useState(false)
  const [formStep4, setFormStep4] = useState(false)

  function updateName(name: string) {
    setName(name)
    toast.success('Nome do cômodo definido com sucesso.')
  }

  function updateWallArea1(data: WallAreaType) {
    setWallArea1(data)
    setFormStep1(true)
    toast.success('Área da parede 1 incluída com sucesso.')
  }

  function updateWallArea2(data: WallAreaType) {
    setWallArea2(data)
    setFormStep2(true)
    toast.success('Área da parede 2 incluída com sucesso.')
  }

  function updateWallArea3(data: WallAreaType) {
    setWallArea3(data)
    setFormStep3(true)
    toast.success('Área da parede 3 incluída com sucesso.')
  }

  function updateWallArea4(data: WallAreaType) {
    setWallArea4(data)
    setFormStep4(true)
    toast.success('Área da parede 4 incluída com sucesso.')
  }

  function formInit() {
    setStartForm(true)
    toast.info('O cálculo foi iniciado.')
  }

  function formCancel() {
    setStartForm(false)
    setName('')
    setWallArea1(initialValueWallArea)
    setFormStep1(false)
    setWallArea2(initialValueWallArea)
    setFormStep2(false)
    setWallArea3(initialValueWallArea)
    setFormStep3(false)
    setWallArea4(initialValueWallArea)
    setFormStep4(false)
    toast.info('O cálculo foi finalizado.')
  }

  return (
    <PaintCalculatorContext.Provider
      value={{
        startForm,
        name,
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
        updateName,
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
