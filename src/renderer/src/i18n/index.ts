import i18n from 'i18next'
import type { Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'

function getResources(): Resource {
  const resources: Resource = {}

  const modules: Record<string, Resource> = import.meta.glob('./locales/*.ts', { eager: true })

  for (const path in modules) {
    const moduleName = path.split('/').pop()?.replace('.ts', '')
    if (moduleName) {
      resources[moduleName] = modules[path].default
    }
  }

  return resources
}

const resources = getResources()
const lng = 'en'

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })
  .then()

export default i18n
