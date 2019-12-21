// TODO: use custom loader on ../app.css
export const cssVars = [
  '--primary-text-color',
  '--primary-theme-color',
  '--primary-font-family',
]

export function loadLocalCSSVars() {
  const rootElement = document.documentElement
  cssVars.forEach(cssVar =>
    rootElement.style.setProperty(cssVar, localStorage.getItem(`css-${cssVar}`))
  )
}

export function saveLocalCSSVar(cssVar, value) {
  localStorage.setItem(`css-${cssVar}`, value)
}