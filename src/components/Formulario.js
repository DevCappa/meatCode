import * as React from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from "axios";
import {motion} from "framer-motion";


export default function Formulario() {
    const MySwal = withReactContent(Swal);
    const [disbaledB, changeDiable] = React.useState(false);

    const [valueInputE, changeInputE] = React.useState("");
    const [validarE, changeValidarE] = React.useState(0);
    const [valueInputP, changeInputP] = React.useState("");
    const [validarP, changeValidarP] = React.useState(0);
    const [valueInputN, changeInputN] = React.useState("");
    const [validarN, changeValidarN] = React.useState(0);
    const [valueInputL, changeInputL] = React.useState("");
    const [validarL, changeValidarL] = React.useState(0);

    const validateInput = (value, caso, data) =>{
        let regx = "";
        let ValidarTipo = "";
        if(caso === "Email"){
            ValidarTipo = "valEmail";
            regx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        }else if(caso === "Last"){
            ValidarTipo = "valLast";
            regx = /^[A-Za-z]{1,30}$/;
        }else if(caso === "Phone"){
            ValidarTipo = "valPhone";
            regx = /^[0-9]{1,30}$/;
        }else if(caso === "Name"){
            ValidarTipo = "valName";
            regx = /^[A-Za-z]{1,30}$/;
        }
        let respuesta = regx.test(value);
        if(respuesta){
            data.style = "border-color:#D8AD3D";
            if(ValidarTipo === "valEmail"){
                changeValidarE(1);
            }
            if(ValidarTipo === "valPhone"){
                changeValidarP(1);
                return;
            }
            if(ValidarTipo === "valName"){
                changeValidarN(1);
                return;
            }
            if(ValidarTipo === "valLast"){
                changeValidarL(1);
                return;
            }
        }else{
            data.style = "border-color:red";
            if(ValidarTipo === "valEmail"){
                changeValidarE(0);
            }
            if(ValidarTipo === "valPhone"){
                changeValidarP(0);
                return;
            }
            if(ValidarTipo === "valName"){
                changeValidarN(0);
                return;
            }
            if(ValidarTipo === "valLast"){
                changeValidarL(0);
                return;
            }
        }
    }

    const sendContacto = async () =>{
        changeDiable(true);
        if(validarL === 1 && validarN === 1 && validarP === 1 && validarE === 1){
            const json = JSON.stringify({firstname : valueInputN, lastname: valueInputL, email : valueInputE, phone: valueInputP});
            await axios.post("https://5eed24da4cbc340016330f0d.mockapi.io/api/newsletter", json, {
                headers: {
                  'Content-Type': 'application/json'
                }}).then((response) => {           
                MySwal.fire({
                    title: <strong>Good!</strong>,
                    html: <i>Registro exitoso!</i>,
                    icon: 'success'
                })}).catch((error) => console.log(error)); 
            changeDiable(false);
        }else{
            changeDiable(false)
            MySwal.fire({
                title: <strong>Oops!</strong>,
                html: <i>Debes ingresar toda la información</i>,
                icon: 'info'
            })
        }
        
    }


    return (
      <div className="footerFormulario">
        <div className="col-2">
            <div className="InputCol">
                <label>NOMBRE</label>
                <input type="text" placeholder="Nombre"  onChange={(e) => {changeInputN(e.target.value)}} onBlur={(e) => validateInput(valueInputN, 'Name', e.target) }></input>
            </div>
            <div className="InputCol">
                <label>APELLIDO</label>
                <input type="text" placeholder="Apellido"  onChange={(e) => {changeInputL(e.target.value)}} onBlur={(e) => validateInput(valueInputL, 'Last', e.target) }></input>
            </div>
        </div>
        <div className="col-2">
            <div className="InputCol">
                <label>MAIL</label>
                <input type="text" placeholder="Mail"  onChange={(e) => {changeInputE(e.target.value)}} onBlur={(e) => validateInput(valueInputE, 'Email', e.target) }></input>
            </div>
            <div className="InputCol">
                <label>TÉLEFONO</label>
                <input type="text" placeholder="Télefono"  onChange={(e) => {changeInputP(e.target.value)}} onBlur={(e) => validateInput(valueInputP, 'Phone', e.target) }></input>
            </div>
        </div>
        <div className="col-2">
            <div className="InputCol">
            </div>
            <div className="InputCol">
             <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }} className="ButtonPrimary l-60" disabled={disbaledB} onClick={() => {sendContacto()}}>ENVIAR</motion.button>
            </div>
        </div>
      </div>
    );
}