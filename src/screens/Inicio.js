import { useEffect } from 'react';
import React from 'react';
import Header from '../components/Header';
import Title from '../components/Titles.tsx';
import Productos from '../components/Productos';
import Formulario from '../components/Formulario';
export default function Inicio(){

    return (
        <div className='Container'>
            <Header></Header>
            <div className='DegradadoBlanco'></div>
            <Title title="Nuestros artículos"></Title>
            <Productos></Productos>
            <Title title="Contáctanos"></Title>
            <Formulario></Formulario>
        </div>
      );
}