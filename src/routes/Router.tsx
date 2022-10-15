import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { PaintCalculator } from '../pages/PaintCalculator'
import { Settings } from '../pages/Settings'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { FormStep1 } from '../pages/PaintCalculator/components/FormStep1'
import { FormStep2 } from '../pages/PaintCalculator/components/FormStep2'
import { FormStep3 } from '../pages/PaintCalculator/components/FormStep3'
import { FormStep4 } from '../pages/PaintCalculator/components/FormStep4'
import { CalcCompleted } from '../pages/PaintCalculator/components/CalcCompleted'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/paint-calculator/*" element={<PaintCalculator />}>
          <Route path="step1" element={<FormStep1 />} />
          <Route path="step2" element={<FormStep2 />} />
          <Route path="step3" element={<FormStep3 />} />
          <Route path="step4" element={<FormStep4 />} />
        </Route>
        <Route path="completed" element={<CalcCompleted />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}
