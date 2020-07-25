<template>
  <v-container>
    <v-row>
      <v-col
        cols="12" sm="6" md="6" lg="4" xl="4"
        v-for="item in data" :key="item.id"
      >
        <v-hover v-slot:default="{ hover }" open-delay="250">
          <v-card
            :class="hover ? '' : 'mb-10'" class="text card"
          >
            <v-img
              class="white--text align-end"
              height="200px" :src="item.image"
            ></v-img>

            <v-card-text
              class="text--primary"
              style="height:250px;"
            >
              <div>
                <span class="title-card" :class="hover ? 'primary--text' : ''">
                  {{item.title}}
                </span>
              </div>

              <div>{{item.content}}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn class="see-more" color="primary" text v-if="hover ? true : false">
                Ver más
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "CardSection",
    props: ["data"]
  };
</script>

<style scoped>
  @media only screen and (max-width: 600px) {
    .card {
      width: 100% !important;
      border-radius: 15px !important;
    }
  }
  .card {
    width: 300px;
    border-radius: 15px;
  }
  .title-card {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
  }
  .see-more {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 26px;
  }
  .text {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
  }
</style>