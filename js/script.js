const { createApp} = Vue;

createApp({
  data(){
    return{
      msg: 'Ciao Booleaners',
      myImg: '',
      msgAnimation: 'Fai click sul personaggio!',
      immagine: '<img src="./assets/img/2151120916.jpg" alt="landscape">',
      pgW: '<img src="./assets/img/w8.png" alt="landscape">',
      isStartMove: false,
    }
  },

  methods:{
    action(){
      pgW= '';

    }
  },
}).mount('#app')