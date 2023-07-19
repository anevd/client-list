import React, { useContext } from "react";
import { globalContext } from "../../contexts/globalContext";
import UserCard from "../UserCard/UserCard";
import styles from "./userlist.module.css";

function UserList() {
	const { list } = useContext(globalContext);
	return (
		<div className={`row ${styles.list_users}`}>
			{list.map((user) => (
				<div key={user.id} className="col s6 m6">
					<UserCard name={user.name} email={user.email} phone={user.phone} website={user.website} />
				</div>
			))}
		</div>
	);
}

export default UserList;
