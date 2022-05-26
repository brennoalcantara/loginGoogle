import React, { useState } from "react";
import GoogleLogin from "react-google-login";

function App() {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [profilePic, setProfilePic] = useState();
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const responseGoogle = (response) => {
		console.log(response);
		const {
			profileObj: { name, email, imageUrl },
		} = response;
		setName(name);
		setEmail(email);
		setProfilePic(imageUrl);
		setIsLoggedIn(true);
	};
	return (
		<div className="container">
			<GoogleLogin
				clientId="622146585158-lat1f03kkvc9jdo08db8alhd9hpqi2dp.apps.googleusercontent.com"
				buttonText="Entrar com o Google"
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
			/>
			{isLoggedIn ? (
				<div style={{ textAlign: "center" }}>
					<h1>Informações do usuário:</h1>
					<img className="profile" src={profilePic} alt="Profile" />
					<p>Name: {name}</p>
					<p>Email: {email}</p>
				</div>
			) : (
				""
			)}
		</div>
	);
}

export default App;
