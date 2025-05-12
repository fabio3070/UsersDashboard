
import { BrowserRouter, Route, Routes } from "react-router"
import { routes } from "./router/routes"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({path, element}) => (
          <Route path={path} element={element}/>
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
