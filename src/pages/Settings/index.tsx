import { BusinessRulesConfig } from './components/BusinessRulesConfig'
import { PaintRulesConfig } from './components/PaintRulesConfig'

import { SettingsContainer } from './styles'

export function Settings() {
  return (
    <SettingsContainer>
      <BusinessRulesConfig />
      <PaintRulesConfig />
    </SettingsContainer>
  )
}
