

const { createApp } = Vue

createApp({
  data() {
    return {
        emails: [
            {
                email: "",
            },
            {
                email: "",
            },
            {
                email: "",
            },
            {
                email: "",
            },
            {
                email: "",
            },
            {
                email: "",
            },
            {
                email: "",
            },
            {
                email: "",
            },
            {
                email: "",
            },
            {
                email: "",
            },
        ]
    }
  },
  mounted () {
    axios
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then
        (risposta => {
            console.log(risposta.data.response);
            this.emails.email = risposta.data.response;
        })
  }
}).mount('#app')


