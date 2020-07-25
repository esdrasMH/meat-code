<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="menu-mobile">
        <v-tabs background-color="white" class="menu-tabs" centered>
          <v-tab
            v-for="item in items" :key="item.id"
            @click="setFilter(item.title)"
          >
            {{ item.title }}
          </v-tab>
        </v-tabs>
      </v-col>
      
      <v-col cols="12" sm="12" md="3" lg="3" xl="3" class="menu">
        <v-card width="300" height="300px" style="margin-top: 25px; border-radius: 15px;">
          <v-list dense rounded>
            <v-list-item v-for="item in items" :key="item.id" link>
              <v-list-item-title
                @click="setFilter(item.title), setActive(item.id)"
                :class="item.active? 'primary--text' : ''"
                class="text"
              >{{ item.title }}
              </v-list-item-title>
              <v-icon color="primary" v-if="item.active">
                mdi-arrow-right
              </v-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <v-col cols="12" sm="12" md="9" lg="9" xl="9">
        <CardSection :data="articlesByCategory" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardSection from "../components/CardSection.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "Menu",
  components: {
    CardSection
  },
  created() {
    this.getArticles();
  },
  computed: {
    ...mapState(["articlesByCategory"])
  },
  data: () => ({
    items: [
      { id: 0, title: "Todos", active: true },
      { id: 1, title: "Productos", active: false },
      { id: 2, title: "Recetas", active: false },
      { id: 3, title: "Consejos", active: false }
    ]
  }),
  methods: {
    ...mapMutations(["setFilter"]),
    ...mapActions(["getArticles"]),
    setActive(item) {
      this.items.map((i, index) => {
        if (i.id != item) {
          this.items[index].active = false;
        }
      });
      this.items[item].active = true;
    }
  }
};
</script>

<style scoped>
  @media only screen and (max-width: 600px) {
    .menu-mobile {
      display: block !important;
    }
    .menu {
      display: none !important;
    }
  }
  .menu-mobile {
    display: none;
  }
  .menu-tabs {
    width: 100%;
  }
  .menu {
    display: block;
  }
  .text {
    font-family: Open Sans !important;
    font-style: normal !important;
    font-weight: bold !important;
    font-size: 18px !important;
  }
</style>