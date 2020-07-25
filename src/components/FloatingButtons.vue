<template>
  <div>
    <v-btn
      v-for="button in data" :key="button.id"
      :class="`btn-${button.id + 1}`" class="floating"
      :color="button.color" outlined bottom large fab
    >
      <img 
        :src="require(`./../assets/icons/${button.name}.svg`)"
        :alt="`${button.name}`"
      >
    </v-btn>
  </div>
</template>

<script>
  export default {
    name: "Header",
    props: ["data"]
  };
</script>

<style scoped>
  @media only screen and (max-width: 600px) {
    .btn-1 {
      left: 85% !important;
      height: 40px !important;
      width: 40px !important;
    }
    .btn-2{
      left: 85% !important;
      top: 15% !important;
      height: 40px !important;
      width: 40px !important;
    }
    .btn-3{
      left: 85% !important;
      top: 25% !important;
      height: 40px !important;
      width: 40px !important;
    }
  }
  .btn-1 {
    right: 2% ;
    position: fixed !important;
    top: 42px ;
    border: 3px solid !important;
    background: rgba(255, 255, 255, 0.15) !important;
    border: 3px solid !important;
    box-sizing: border-box !important;
    backdrop-filter: blur(8px) !important;
    z-index: 100 !important;
  }
  .btn-2{
    right: 9% ;
    position: fixed !important;
    top: 42px ;
    border: 3px solid !important;
    background: rgba(255, 255, 255, 0.15) !important;
    border: 3px solid !important;
    box-sizing: border-box !important;
    backdrop-filter: blur(8px) !important;
    z-index: 100 !important;
  }
  .btn-3{
    right: 16% ;
    position: fixed !important;
    top: 42px ;
    border: 3px solid !important;
    background: rgba(255, 255, 255, 0.15) !important;
    border: 3px solid !important;
    box-sizing: border-box !important;
    backdrop-filter: blur(8px) !important;
    z-index: 100 !important;
  }
</style>
