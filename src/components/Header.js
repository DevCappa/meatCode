// @ts-nocheck
import * as React from "react";
import imgResaltar from "../assets/img/BRUSH.png";
import {FaFacebookF, FaInstagram, FaYoutube} from "react-icons/fa";
import {motion} from "framer-motion";

export default function HeaderWeb() {
    return (
    <div className="header imgHeader">
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.08]
            }} className="flex-end">
            <h1 className="header-logo">Logo</h1>
            <div className="flex-col">
              <div className="circle-secondary circle">
                <FaFacebookF></FaFacebookF>
              </div>
              <div className="circle-rojo circle">
                <FaInstagram></FaInstagram>
              </div>
              <div className="circle-primary circle">  
                <FaYoutube></FaYoutube>
              </div>
            </div>
        </motion.div>
        <motion.div
            className='pantalla-centro'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.08]
            }}
            className="flex-end container-4">
          <h1 className="header-sub">El secreto de tu cocina</h1>
          <img className="imgResaltar" src={imgResaltar}></img>
        </motion.div>
      </div>
    );
}