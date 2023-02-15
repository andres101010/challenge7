import { Navigate } from "react-router-dom"
const Protect = ({isallowed,children})=>{
    if(!isallowed){
        return <Navigate to='/paginaPrincipal' />
    }else{
        return children

    }
}

export default Protect;