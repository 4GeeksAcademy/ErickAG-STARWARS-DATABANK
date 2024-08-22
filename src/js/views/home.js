import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Navbar from "../component/Navbar.jsx";
import List from "../component/List.jsx";
import { stringify } from "query-string";

export const Home = () => {
	const { actions, store } = useContext(Context)


	useEffect(() => {
		actions.getData()
	}, [])

	useEffect(() => {
		localStorage.setItem('favourites', JSON.stringify(store.favourites));
	}, [store.favourites]);




	return (
		<>
			<Navbar />
			<List />
		</>
	)
}
