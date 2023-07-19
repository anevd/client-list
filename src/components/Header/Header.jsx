import React from "react";
import styles from "./header.module.css";
import { globalContext } from "../../contexts/globalContext";
import { useContext } from "react";

function Header() {
	const { addClients } = useContext(globalContext);
	return (
		<nav className="deep-purple lighten-3">
			<div className="nav-wrapper container ">
				<button
					className="waves-effect waves-light btn deep-purple lighten-1"
					onClick={() => {
						addClients();
					}}>
					Добавить
				</button>
				<div className={`right ${styles.header_title}`}>Список клиентов</div>
			</div>
		</nav>
	);
}

export default Header;
