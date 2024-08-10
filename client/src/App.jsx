
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { lazy } from "react"
import ProtectRoute from "./components/auth/ProtectedRoute"

const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/Login"))
const Groups = lazy(() => import("./pages/Groups"))
const Chat = lazy(() => import("./pages/Chat"))
const NotFound = lazy(() => import("./pages/NotFound"))


function App() {

  let user = true;

  return (
    <>
      <Router>
        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/chat/:chatId" element={<Chat />} />
          </Route>
          <Route element={<ProtectRoute user={!user} redirect="/" />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Router>

    </>
  )
}

export default App
