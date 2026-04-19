import { BrowserRouter } from "react-router-dom"
import Layout from "../02-layout/Layout"

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  )
}

export default App