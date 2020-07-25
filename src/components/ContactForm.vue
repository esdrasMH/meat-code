<template>
  <v-container>
    <v-form ref="suscription" v-model="valid">

      <v-row
        align="center" justify="center"
        class="text" no-gutters
      >
        <v-col cols="12" sm="12" md="6">
          <div style="padding: 2%">
            <label for="name">NOMBRE</label>
            <v-text-field
              outlined
              v-model="name"
              :rules="[rules.required]"
            ></v-text-field>                
          </div>
        </v-col>

        <v-col cols="12" sm="12" md="6">
          <div style="padding: 2%">
            <label for="lastname">APELLIDO</label>
            <v-text-field
              outlined
              v-model="lastname"
              :rules="[rules.required]"
            ></v-text-field>                
          </div>
        </v-col>

        <v-col cols="12" sm="12" md="6">
          <div style="padding: 2%">
            <label for="mail">MAIL</label>
            <v-text-field
              outlined
              v-model="mail"
              :rules="[rules.required, rules.email]"
            ></v-text-field>                
          </div>
        </v-col>

        <v-col cols="12" sm="12" md="6">
          <div style="padding: 2%">
            <label for="phone">TELÉFONO</label>
            <v-text-field
              outlined
              v-model="phone"
              v-mask="'(+56) # #### ####'"
              :rules="[rules.required]"
            ></v-text-field>                
          </div>

        </v-col>
      </v-row>

      <v-row class="text">
        <v-col cols="12" class="mt-0 submit-button">
          <v-hover v-slot:default="{ hover }" open-delay="100">
            <v-btn
              class="ma-2"
              rounded 
              x-large 
              :loading="loading"
              :disabled="loading"
              width="180"
              :color="hover ? 'secondary' : 'primary'" 
              @click="subscribe"
            >
              <span class="text white--text">ENVIAR</span>
            </v-btn>

            <!-- <v-btn 
              :color="hover ? 'secondary' : 'primary'" 
              width="180"
              rounded 
              x-large 
              @click="subscribe" 
              :disabled="!valid"
            >
              <span class="text white--text">ENVIAR</span>
            </v-btn> -->
          </v-hover>
        </v-col>
      </v-row>      
    </v-form>

  </v-container>
</template>

<script>
  import mixin from '../mixin'
  import { mapState, mapActions, mapMutations } from 'vuex'

  export default {
    name: 'ContactForm',
    mixins: [
      mixin
    ],
    computed: {
      ...mapState([
        "loading"
      ]),
      getloading: {
        get() {
          return this.loading
        },
        set() {
          this.setloading()
        }
      }
    },
    data: () => ({
      name: '',
      lastname: '',
      mail: '',
      phone: '',
      valid: true,
    }),
    methods: {
      ...mapActions([
        "postSubscription"
      ]),
      ...mapMutations([
        "setloading"
      ]),
      subscribe() {
        if (this.$refs.suscription.validate()) {

          let userData = {
            name: this.name,
            lastname: this.lastname,
            mail: this.mail,
            phone: this.phone,
          }
          
          this.setloading()
          this.postSubscription(userData)

          setTimeout(() => {
            this.resetForm()
          },500)
        }
      },
      resetForm() {
        this.$refs.suscription.reset()
      }
    }
  }
</script>

<style scoped>
  @media only screen and (max-width: 600px) {
    .submit-button {
      margin-left: 25% !important;
      margin-top: 5px !important;
    }
  }
  .submit-button {
    margin-left: 82%;
    margin-top: 5px;
  }
  .text {
    font-family: Open Sans !important;
    font-style: normal !important;
    font-weight: bold !important;
    font-size: 15px !important;
  }
</style>
