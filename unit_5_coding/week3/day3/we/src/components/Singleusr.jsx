import { useParams } from "react-router-dom"

export const Singleusr = ()=>{
    const { id } = useParams();
    return <div>
        UserId:{id}
    </div>
}