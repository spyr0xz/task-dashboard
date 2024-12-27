import {Route, Routes } from "react-router"
import { routeConfig } from "../../../shared/config/routeConfig/routeConfig"
import { Suspense } from "react"

const AppRouter = () => {
  return (
      <Routes>
    {
      Object.values(routeConfig).map(({path, element}) => (
        <Route key={path} path={path} element={
          <Suspense fallback="loading">
            {element}
          </Suspense>
        } />
      ))
    }
  </Routes>
  
  )
}
export default AppRouter