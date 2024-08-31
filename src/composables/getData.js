import axios from "axios";
import { ref } from "vue";

// los composables en vuejs en react vendrían siendo los hooks
export const useGetData = () => {

	const isLoading = ref(true);
	const data  = ref(null);
	const error = ref(null);

	const getData = async (url) => {
		isLoading.value = true;
		try {
			const res = await axios.get(url);
			data.value = res.data;
			// console.table(data.results);
			// pokemons.value = data.results;
		} catch (e) {
			console.warn(e);
			error.value = 'Error de servidor';
		} finally {
			isLoading.value = false;
		}
	}

	return {
		data,
		getData,
		isLoading,
		error
	}

};