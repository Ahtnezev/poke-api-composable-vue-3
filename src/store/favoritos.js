import { defineStore } from "pinia";
import { ref } from "vue";

// el identificador que le pasemos al store debe ser unico
export const useFavoritosStore = defineStore('favoritos', () => {
	const favoritos = ref([]);

	if (localStorage.getItem('favorites')) {
		favoritos.value = JSON.parse(localStorage.getItem('favorites'));
	}

	const add = (poke) => {
		favoritos.value.push(poke);
		localStorage.setItem('favorites', JSON.stringify(favoritos.value));
	}

	const remove = (poke_id) => {
		favoritos.value = favoritos.value.filter(item => item.id !== poke_id);
		localStorage.setItem('favorites', JSON.stringify(favoritos.value));
	}

	const findPoke = name =>
			favoritos.value.find(item => item.name === name);

	return {
		add,
		favoritos,
		findPoke,
		remove,
	};
});