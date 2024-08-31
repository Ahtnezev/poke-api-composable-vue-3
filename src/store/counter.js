import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

// export const useCounterStore = defineStore('counter' , {
// 	// datos reactivos
// 	state: () => {
// 		return {
// 			count: 0
// 		}
// 	},
// 	// propiedades computadas
// 	getters: {
// 		double: (state) => state.count * 2
// 	},
// 	// metodos
// 	actions: {
// 		incrementar() {
// 			this.count++;
// 		}
// 	}
// });

export const useCounterStore = defineStore('counter' , () => {
	const count = ref(0);
	const increment = () => count.value++
	const double = computed(() => count.value * 2);

	return {
		count,
		increment,
		double
	}

});