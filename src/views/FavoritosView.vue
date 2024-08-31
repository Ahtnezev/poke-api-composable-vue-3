<script setup>
import { useFavoritosStore } from '@/store/favoritos';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const useFavoritos = useFavoritosStore();
const { favoritos } = storeToRefs(useFavoritos);
const { remove } = useFavoritos;

const route = useRoute();

</script>

<template>
	<div>
		<h1>Favoritos</h1>
		<p v-if="favoritos.length === 0">Sin favoritos</p>
		<ul class="list-group" v-else>
			<li class="list-group-item text-white" v-for="poke in favoritos" :key="poke.id">
				<div>
					<router-link :to="`/pokemons/${poke.name}`">
						{{ poke.name }}
					</router-link>
				</div>
				<div class="float-end">
					<button class="btn btn-sm btn-danger me-3" @click="remove(poke.id)">Delete</button>
					<button class="btn btn-sm btn-success" @click="remove(poke.id)">More details</button>
				</div>
			</li>
		</ul>
	</div>
</template>