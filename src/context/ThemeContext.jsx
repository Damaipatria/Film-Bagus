import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = (({ children }) => {

  const [theme, setTheme] = useState(false)

  const toggleDarkMode = (() => {
    if (theme == true) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  useEffect(() => {
    toggleDarkMode()
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
})