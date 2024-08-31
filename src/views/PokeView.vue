<script setup>
// import axios from "axios"
import { useGetData } from "@/composables/getData";
import { onMounted, ref } from "vue";
// useRoute -> sin `r` tiene acceso a los parametros que recibamos
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

// const poke = ref({});
const { data, isLoading, getData, error } = useGetData();
const apiKeyParam = `https://pokeapi.co/api/v2/pokemon/${route.params.pokemoncito}`;


const back = () => {
	router.push('/pokemons');
}

onMounted( () => getData(apiKeyParam));

// const getData = async() => {
// 	const apiKey = `https://pokeapi.co/api/v2/pokemon/${route.params.pokemoncito}`;
// 	try {
// 		const {data} = await axios.get(apiKey);
// 		console.log(data);
// 		poke.value = data;
// 	} catch (error) {
// 		console.log(error);
// 		poke.value = null;
// 	}
// }

</script>

<template>
	<p v-if="isLoading">Cargando...</p>
	<div class="alert alert-danger mt-4" v-if="error" role="alert">⚠️ No existe pokemon</div>
	<div v-if="data">
		<!-- si no existe la siguiente propiedad no la pintamos hasta que exista -->
		<img :src="data.sprites?.front_default" alt="">
		<h1>Poke name: {{ $route.params.pokemoncito }} </h1>
	</div>

	<button @click="back" class="btn btn-sm btn-outline-danger">Back</button>
</template>

<style>
	
</style>