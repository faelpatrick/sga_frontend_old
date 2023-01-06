import React, { useState, useEffect } from "react";

const CoursesPage = () => {

    const newCourse = () => {
        console.log("novo")
        //call modal to create new item
    }

    const handleDeleteItem = (e) => {
        console.log(e.target);
    }

    return (
        <div id="cursos">
            <div className="content_options">
                <h1>Lista de Cursos</h1>
                <button className="newitem" onClick={newCourse}>+ Novo</button>
            </div>

            <table id="cards" className="cards">
                <thead>
                    <tr id="card-titles" className="card-titles">
                        <td className="table_td_name">Nome do Curso</td>
                        <td className="table_td_birth">Funções</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nome do Curso</td>
                        <td><button className="btn_edit"> Editar </button> | <button className="btn_remove" onClick={(e) => handleDeleteItem(e)} >Remover</button></td>
                    </tr>
                    <tr>
                        <td>Nome do Curso</td>
                        <td><button className="btn_edit"> Editar </button> | <button className="btn_remove" onClick={(e) => handleDeleteItem(e)} >Remover</button></td>
                    </tr>
                    <tr>
                        <td>Nome do Curso</td>
                        <td><button className="btn_edit"> Editar </button> | <button className="btn_remove" onClick={(e) => handleDeleteItem(e)} >Remover</button></td>
                    </tr>
                    <tr>
                        <td>Nome do Curso</td>
                        <td><button className="btn_edit"> Editar </button> | <button className="btn_remove" onClick={(e) => handleDeleteItem(e)} >Remover</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CoursesPage;