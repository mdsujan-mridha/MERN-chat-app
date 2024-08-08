
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { lazy } from "react"

const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/Login"))
const Groups = lazy(() => import("./pages/Groups"))
const Chat = lazy(() => import("./pages/Chat"))
const NotFound = lazy(() => import("./pages/NotFound"))


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Router>

    </>
  )
}

export default App
