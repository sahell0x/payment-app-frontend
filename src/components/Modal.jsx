function Modal({children,width="100%"}){
  return <div style={{width:width}} className=" p-6 bg-white border border-gray-200 rounded-lg shadow flex justify-center">
     {children}
  </div>
}

export default Modal;