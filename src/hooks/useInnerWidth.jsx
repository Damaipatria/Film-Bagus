import { useState, useEffect } from 'react';

const useInnerWidth = (() => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResizeWindow = (() => {
    setWindowWidth(window.innerWidth)
  })

  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow)

    return (() => {
      window.removeEventListener('resize', handleResizeWindow)
    })
  }, [windowWidth])

  return windowWidth

})

export default useInnerWidth