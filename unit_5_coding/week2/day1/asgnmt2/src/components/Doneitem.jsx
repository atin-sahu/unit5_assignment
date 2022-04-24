


export const Doneitem = ({done,changeStatus})=>{

    return (
        <div>
            <div>
                <span>{done.title}</span>
                <span>{done.staus}</span>
            </div>
            <div>
                <input type="checkbox" onClick={()=>{changeStatus(done,done.id)}}></input>
            </div>
        </div>
    )

}