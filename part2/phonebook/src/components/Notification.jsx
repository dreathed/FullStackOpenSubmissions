const Notification = ({data}) => {
    if(data.text.length > 0){
        return (
            <div className={data.isError ? "error" : "notification"}>
                {data.text}
            </div>
        )
    }
    return <></>
    
}

export default Notification