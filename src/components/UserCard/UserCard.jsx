import React from "react";
import styles from "./usercard.module.css";

function UserCard({ name, email, phone, website }) {
	return (
		<div className="container">
			<div className="col s12 m12">
				<div className="card horizontal">
					<div className="card-stacked">
						<div className="card-content">
							<p className={styles.name}>{name}</p>
							<p>Email: {email}</p>
							<p>Phone: {phone}</p>
							<p>Website: {website}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserCard;
