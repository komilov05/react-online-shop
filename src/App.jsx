import { Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"


function App(){

    return(
        <Routes>
            <Route element={<MainLayout/>} path="/">
                <Route index element={<></>}/>
            </Route>
        </Routes>
    )
}

export default App