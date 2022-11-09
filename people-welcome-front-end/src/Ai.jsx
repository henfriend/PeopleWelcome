function Ai(props) {
    const onClickAi = () => {
        const three = 1 + 2
    }

    return(
        <div className="ai">
            <h3>{props.value}</h3>
            <button onClick={onClickAi}></button>
        </div>
    )
}

export default Ai