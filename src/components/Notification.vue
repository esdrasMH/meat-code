<template>
  <v-snackbar v-model="getNotification" top>
      Lorem ipsum dolor sit amet

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink" text
          v-bind="attrs"
          @click="setNotification"
        >
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

export default {
    name: 'Notification',
    computed: {
      ...mapState([
        "notification"
      ]),
      getNotification: {
        get() {
          return this.notification
        },
        set() {
          this.setNotification()
        }
      }
    },
    methods: {
      ...mapMutations([
        "setNotification"
      ]),
    }

}
</script>

<style>

</style>