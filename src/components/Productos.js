
import * as React from "react";
import {FaArrowRight} from "react-icons/fa";
import axios from "axios";
import {motion} from "framer-motion";

export default function Productos() {
    const [activateArrow, ChangeArrow] = React.useState("Todos");
    const [loadData, isLoad] = React.useState(0);
    const [content, changeContent] = React.useState([]);

    const getArticulo = async (filtro) => {
        if(filtro === "Todos"){
            return await axios.get(`https://5eed24da4cbc340016330f0d.mockapi.io/api/articles`);
        }
       return await axios.get(`https://5eed24da4cbc340016330f0d.mockapi.io/api/articles?filter=${filtro}`);
    }
    
    const getProductosURL = async (filtro) =>{
        try{
            const response = await getArticulo(filtro);
            changeContent(response.data);
        }catch (error) {
            console.error(error);
        }
    }

    const Component = () => {
        return content.map((key, value) => {
            return(<div className="cardFlex">
                    <div className="cardHeader">
                        <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} src={key["image"]}></motion.img>
                    </div>
                    <div className="cardBody">
                        <h2>{key["title"]}</h2>
                        <p>{key["content"]}</p>
                    </div>
            </div>)
        })
    }

    React.useEffect(() =>{
        if(loadData === 0){
            isLoad(1);
            getProductosURL("Todos");
        }

    })

    return (
      <motion.div initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.08]
      }} className="flex">
        <div className="menuBusqueda">
            <div className="flex-menu">
                <div className={(activateArrow === "Todos")? "buttonMenu Activo" : "buttonMenu"} onClick={() =>{ChangeArrow("Todos");getProductosURL("Todos")}}>TODOS  {(activateArrow === "Todos")?<FaArrowRight></FaArrowRight>:<></>}</div>
                <div className={(activateArrow === "Productos")? "buttonMenu Activo" : "buttonMenu"} onClick={() =>{ChangeArrow("Productos");getProductosURL("Productos")}}>PRODUCTOS  {(activateArrow === "Productos")?<FaArrowRight></FaArrowRight>:<></>}</div>
                <div className={(activateArrow === "Recetas")? "buttonMenu Activo" : "buttonMenu"} onClick={() =>{ChangeArrow("Recetas");getProductosURL("Recetas")}}>RECETAS  {(activateArrow === "Recetas")?<FaArrowRight></FaArrowRight>:<></>}</div>
                <div className={(activateArrow === "Consejos")? "buttonMenu Activo" : "buttonMenu"} onClick={() =>{ChangeArrow("Consejos");getProductosURL("Consejos")}}>CONSEJOS  {(activateArrow === "Consejos")?<FaArrowRight></FaArrowRight>:<></>}</div>
            </div>
        </div>
        <div className="Grid"> 
            <Component></Component>
        </div>
      </motion.div>
    );
}