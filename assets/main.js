const { createApp } = Vue

  createApp({
    data() {
      return {
        emailList: []
      }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(response){
                this.emailList.push(response.data.response)
            }.bind(this))
        }
    }
  }).mount('#app')