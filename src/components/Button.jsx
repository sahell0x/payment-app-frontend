function Button({color="gray",children,onClick = ()=>{}}){
    console.log(typeof(color));
    return <button className={`bg-${"blue"}-800 hover:bg-${"blue"}-700 text-black font-bold py-2 px-4 rounded`} onClick={onClick}>{children}</button>
}

export default Button;