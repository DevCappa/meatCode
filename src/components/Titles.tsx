// @ts-nocheck
import * as React from "react";
import imgResaltar from "../assets/img/BRUSH.png";
import {motion} from "framer-motion";
export default function Titles({ title, style }: { title:string, style:any }) {
    return (
    <div className="Titulo" style={style}>
        <motion.h1 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="font-Titulos">{title}</motion.h1>
        <img className="imgAbajo" src={imgResaltar}></img>
    </div>
    );
}