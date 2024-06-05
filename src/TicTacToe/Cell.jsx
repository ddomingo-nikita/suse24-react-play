export const Cell = (props) => {
    const {_key, color, onClickHandler, value, ...rest} = props

    return <div key={_key} id={_key} style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", height: "100%", border: "1px solid #000", borderRadius: 12}} onClick={onClickHandler}>
        <h1 style={{color: color}}>{value}</h1>
    </div>
}