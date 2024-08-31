
<!-- Creamos archivo de configuración `_redirects` en public/ para páginas SPA -->
<!-- Composables: fn que aprovecha composition api para encapsular y reutilizar la lógica con estado -->

<template>
	<div class="container">
		<nav class="navbar bg-dark navbar-dark">
			<div class="container-fluid">
				<router-link to="/" class="navbar-brand text-white">
					<img src="@/assets/logo.svg" alt="Logo" width="30" height="24"
						class="d-inline-block align-text-top">
					PokeAPI
				</router-link>
				<div>
					<router-link class="text-decoration-none me-3 btn btn-sm btn-outline-light" to="/">Home</router-link>
					<router-link class="text-decoration-none btn btn-sm btn-outline-success" to="/pokemons">Pokemons</router-link>
				</div>
			</div>

		</nav>

		<RouterView />
	</div>

	<!-- Se repetirá en todas las páginas -->
	<!-- <footer>Footer</footer> -->
</template>