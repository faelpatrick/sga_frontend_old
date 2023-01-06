import React from "react";
import "./styles.css";

const WelcomePage = () => {
    return (
        <div className="welcome_page">
            <h1><p>SGA - Sistema de Gestão de Academico</p></h1>
            <h2><p>Gestão de:
                <ul>
                    <li>Cursos</li>
                    <li>Disciplinas</li>
                    <li>Professores</li>
                    <li>Aluno                   </li>

                </ul> </p></h2>
            <h3><p>Desenvolvido por: Rafael Patrick de Souza</p></h3>
        </div>
    )
}

export default WelcomePage;