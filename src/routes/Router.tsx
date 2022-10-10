import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { PaintCalculator } from '../pages/PaintCalculator'
import { Settings } from '../pages/Settings'
import { DefaultLayout } from '../layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/paint-calculator" element={<PaintCalculator />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}
