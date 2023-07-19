import "./App.css";
import Header from "./components/Header/Header";
import UserList from "./components/UserList/UserList";
import { globalContext as GlobalContext } from "./contexts/globalContext";
import { useState } from "react";

function App() {
	const [list, setList] = useState([]);
	function createId(list) {
		list.map((el, index) => {
			el.id = Date.now() + index;
			return el;
		});
	}

	function addClients() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((list) => {
				setList((prev) => [...prev, ...list.slice(0, 10)]);
				createId(list);
			});
	}
	return (
		<GlobalContext.Provider value={{ list, addClients }}>
			<Header />
			<UserList />
		</GlobalContext.Provider>
	);
}

export default App;
