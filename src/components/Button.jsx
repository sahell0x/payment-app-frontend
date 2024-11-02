function Button({color,children,onClick = ()=>{}}){
    return <button className={`bg-${color}-800 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded`} onClick={onClick}>{children}</button>
}

export default Button;