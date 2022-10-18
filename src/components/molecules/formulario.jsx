import "../../assets/styles/formulario"
import InputT from "../atoms/InputT"
import Button from "../atoms/Button"



function Formulario(){
    return(
        <div className="formulario">
                <br/><br/><br/> <br/><br/><br/> <br/><br/><br/>
                
            <form>
                <h1>Iniciar sesion</h1>
                <br/><br></br>
                <InputT value={name} type={"text"} id={"name"} placeholder={"Nombre"}/>
                <InputT value={lastName} type={"text"}id={"lastName"} placeholder={"Apellido Paterno"}/>
                <InputT value={userName} type={"text"} id={"userName"} placeholder={"Usuario"}  />
                <InputT value={password} type={"password"} id={"password"} placeholder={"Contraseña"} />
                <br/>
                <Button></Button>
            </form>
        </div>
    );

}
export default Formulario;