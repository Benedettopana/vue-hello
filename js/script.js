const { createApp} = Vue;

createApp({
  data(){
    return{
      msg: 'Ciao Booleaners',
      myImg: '',
      msgAnimation: 'Fai click sul personaggio!',
      immagine: '<img src="./assets/img/2151120916.jpg" alt="landscape">',
      pgW: '<img src="./assets/img/left.png" alt="pg">',
      baloonPixel: '<img src="./assets/img/baloon.png" alt="baloon">',
      isStartMove: false,
      isMove: false,
      fpsUno: null,
      fpsDue: null,
    }
  },

  methods:{
    actionRight(){
      console.log('ciao');
      fpsUno = setInterval(() => {
        this.pgW = '<img src="./assets/img/right.png" alt="pg">';
      },1000);
      setTimeout(() => {
        // this.pgW = '<img src="./assets/img/w8.png" alt="pg">';
        clearInterval(fpsUno);
      }, 10000);
      
    },
    actionLeft(){
      
      console.log('ciao2');
      setTimeout(() => {
        fpsDue = setInterval(() => {
          this.pgW = '<img src="./assets/img/left.png" alt="pg">';
        },1000);
        setTimeout(() => {
          this.pgW = '<img src="./assets/img/left.png" alt="pg">';
          clearInterval(fpsDue);
        }, 10000);
      },500);
    }
  },
}).mount('#app')