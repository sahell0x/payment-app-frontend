import Button from "./components/Button";
import Heading from "./components/Heading";
import Modal from "./components/Modal";
function App() {
  

  return (
    <>
      <Modal width={"500px"}><Button color={"blue"} onClick={()=>console.log("hi thre")}>click me</Button></Modal>
    </>
  )
}

export default App
