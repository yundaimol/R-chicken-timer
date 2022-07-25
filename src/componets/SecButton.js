const SecButton =({isWaiting,setIsWaiting}) =>{
    
    return (
        <div className="d-grid gap-2">
            <form className="ton">
                <button className="btn btn-light" type="button" onClick={()=>{setIsWaiting(!isWaiting)}}>Start!</button>
            </form>
        </div>
    )
}
export default SecButton;