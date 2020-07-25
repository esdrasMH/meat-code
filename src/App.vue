<template>
  <v-app id="app">

    <Notification />

    <v-row>
      <FloatingButtons :data="buttons" />
    </v-row>

    <v-row>
      <div class="hero-background">
        <span class="text logo-position">
          Logo
        </span>

        <span class="text subtitle-position-1">
          El secreto
        </span>

        <span class="text subtitle-position-2">
          de tu cocina
        </span>

        <v-img class="hero-shape" src="./assets/hero-shape.png"></v-img>

        <div class="gradient">
          <div class="ourArticles">
            <span>Nuestros Artículos</span>
          </div>
          <img class="img-ourArticles" src="./assets/heading-shape.png">
        </div>
      </div>
    </v-row>

    <v-row>
      <Menu style="margin-top: 200px;" />
    </v-row>

    <v-row>
      <div class="contactUs">
        <span>Contáctanos</span>
      </div>
      <img class="img-contactUs" src="./assets/heading-shape.png">
    </v-row>

    <v-row>
      <ContactForm />      
    </v-row>
  </v-app>
</template>

<script>
  import Notification from "./components/Notification.vue"
  import FloatingButtons from "./components/FloatingButtons.vue"
  import Menu from "./components/Menu.vue"
  import ContactForm from "./components/ContactForm.vue"
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'App',
    components: {
      Notification,
      FloatingButtons,
      Menu,
      ContactForm
    },
    created() {
      this.getArticles()
    },
    computed: {
      ...mapState([
        "articlesByCategory",
        "buttons"
      ])
    },
    methods: {
      ...mapActions([
        "getArticles"
      ])
    }
};
</script>

<style scoped>
  @media only screen and (max-width: 600px) {
    #app{
      overflow-x: hidden;
    }
    .hero-background {
      background-size: 200% 100% !important;
      background-position: right center !important;
    }
    .logo-position{
      top: 20px;
      left: 5px !important;
      font-size:30px !important;
    }
    .subtitle-position-1 {
      top: 85px !important;
      left: 30px !important;
      font-size: 30px !important;
    }
    .subtitle-position-2 {
      top: 115px !important;
      left: 30px !important;
      font-size: 30px !important;
    }
    .gradient {
      width: 100% !important;
      height: 143px !important;
      margin-top: 540px !important;
      /* background-color: lawngreen !important; */
      background: linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 32.22%, #ffffffb5 61.99%, #ffffff13 93.72%, #ffffff00 93.72%);
      z-index: 0 !important;
    }
    .ourArticles {
      top: 60px !important;
      font-size: 35px !important;
      text-align: center !important;
      padding-top: 10% !important;
      margin: auto !important;
      width: 60% !important;
    }
    .img-ourArticles {
      height: 6vh !important;
      width: 45% !important;
      margin-left: 27% !important;
      margin-top: -8% !important;
    }
    .contactUs {
      font-size: 35px !important;
      text-align: center !important;
      margin: auto !important;
      width: 60% !important;
    }
    .img-contactUs {
      height: 6vh !important;
      width: 45% !important;
      margin-left: 27% !important;
      margin-top: -8% !important;
    }
    .hero-shape {
      display: none !important;
    }
  }

  .logo-position{
    top: 20px;
  }
  .subtitle-position-1 {
    top: 285px;
  }
  .subtitle-position-2 {
    top: 378px;
  }
  .hero-background {
    background-image: url('./assets/hero-background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
  }
  .hero-background .text {
    font-family: Caveat;
    font-style: normal;
    font-weight: bold;
    font-size: 120px;
    position: absolute;
    left: 160px;
    color: '#3F454A';
    z-index: 100;
  }
  .hero-shape {
    width: 100%;
    height: 20vh;
    margin-top: 29.5%;
    margin-left: -40%;
    transform: rotate(2.4deg);
  }
  .gradient {
    width: 100%;
    height: 253px;
    top: 539px;
    /* background-color: lawngreen; */
    background: linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 32.22%, #ffffffb5 61.99%, #ffffff13 93.72%, #ffffff00 93.72%);
    z-index: 0;
  }
  .ourArticles {
    top: 100px;
    font-family: Caveat;
    font-style: normal;
    font-weight: bold;
    font-size: 80px;
    text-align: center;
    color: '#3F454A';
    padding-top: 10%;
    margin: auto;
    width: 60%;
  }
  .img-ourArticles {
    height: 15vh;
    width: 40%;
    margin-left: 30%;
    margin-top: -5%;
    z-index: 0;
    opacity: .2;
  }
  .contactUs {
    font-family: Caveat;
    font-style: normal;
    font-weight: bold;
    font-size: 80px;
    text-align: center;
    color: '#3F454A';
    margin: auto;
    width: 60%;
  }
  .img-contactUs {
    height: 15vh;
    width: 35%;
    margin-left: 30%;
    margin-top: -5%;
    z-index: 0;
    opacity: .2;
  }
</style>
