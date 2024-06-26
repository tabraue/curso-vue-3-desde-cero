const API = 'https://api.github.com/users/';

const app = Vue.createApp({
  data() {
    return {
      search: null,
      result: null,
      error: null,
    };
  },
  methods: {
    async doSearch() {
        this.result = this.error = null
      try {
        const res = await fetch(`${API}${this.search}`); // ||user de parametros
        if (!res.ok) throw new Error('User not found')

        const data = await res.json();

        console.log(data);
        this.result = data;

      } catch (error) {
        console.log(error);
        this.error = error; // error propiamente dicho

      } finally {
        //this.search = true;
      }
    },
  },
});
