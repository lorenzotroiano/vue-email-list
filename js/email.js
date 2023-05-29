

const { createApp } = Vue

createApp({
  data() {
    return {

        arrayEmail: [],
    }
  },
  
  mounted () {
    for (let i = 0; i < 10; i++) {
        
        axios
          .get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then(risposta => {
            console.log(risposta.data.response);
            this.arrayEmail.push(risposta.data.response);
          });
      }
  }
}).mount('#app')


