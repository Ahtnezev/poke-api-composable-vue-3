<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
// cuando usamos @ en una ruta hacemos referencia al `src`
import { useGetData } from '@/composables/getData';

/**--------------------------------------------
 *                   Constants
 *---------------------------------------------**/
// const pokemons = ref([]);
const { data, getData, isLoading, error } = useGetData();
const apiKey = 'https://pokeapi.co/api/v2/pokemon/';

/**--------------------------------------------
 *               Lifecycle Hooks
 *---------------------------------------------**/
onMounted(() => getData(apiKey));

/**--------------------------------------------
 *                   Functions
 *---------------------------------------------**/
// const getData = async () => {
// 	const apiKey = 'https://pokeapi.co/api/v2/pokemon/';
// 	try {
// 		const { data } = await axios.get(apiKey);
// 		// console.table(data.results);
// 		pokemons.value = data.results;
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
</script>

<template>
	<div>
		<h1>Pokemons</h1>
		<h2 v-if="isLoading">Cargando información...</h2>
		<div class="alert alert-danger mt-4" v-if="error" role="alert">{{ error }}</div>
		<div v-if="data">
			<div class="mb-4 text-end">
				<button :disabled="!data.previous" class="btn btn-sm btn-warning me-2" @click="getData(data.previous)">Previous</button>
				<button :disabled="!data.next" class="btn btn-sm btn-primary" @click="getData(data.next)">Next</button>
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item" v-for="(pokemon, index) in data.results" :key="index">
					<router-link :to="`/pokemons/${pokemon.name}`">{{ pokemon.name }}</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
