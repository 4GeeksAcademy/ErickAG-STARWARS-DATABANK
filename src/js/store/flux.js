const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],

			currentCharacter: [],
			favourites: JSON.parse(localStorage.getItem('favourites')) || [],
		},
		actions: {
			getInformation: async (category) => {
				const store = getStore();
				try {
					const request = await fetch(`https://www.swapi.tech/api/${category}/`);
					const response = await request.json();
					setStore({ ...store, [`${category}`]: response.results });
				} catch (error) {
					console.log(error);
				}
			},

			getData: async () => {
				const actions = getActions();
				try {
					await actions.getInformation("people");
					await actions.getInformation("vehicles");
					await actions.getInformation("planets");
				} catch (error) {
					console.log(error);
				}
			},


			currentCharacter: async (params) => {
				const store = getStore()
				try {
					const request = await fetch(`https://www.swapi.tech/api/${params.category}/${params.id}`)
					const response = await request.json()
					setStore({ ...store, currentCharacter: response.result.properties })
					console.log(response.result.properties)
				}
				catch (error) {
					console.log(error)
				}
			},

			addFavourites: (people) => {
				const store = getStore();
				const existing = store.favourites.find(fav => fav.uid === people.uid);
			
				if (!existing) {
					setStore({ favourites: [...store.favourites, people] });
					console.log(store.favourites);
				}
			},
			
			deleteFavourite:(people)=>{
				const store = getStore();
				const filteredFavorites=store.favourites.filter(fav => fav.uid !== people.uid)
				setStore({ favourites:filteredFavorites });

			}

		}
	};
};

export default getState;
