<template>
  <div class="service">
    <slot name="img-slot" />
    <br>
    <p>{{ dataSet.title }}</p>
  </div>
</template>
<script>
export default {
  props: ["dataSet"],
  methods: {
    getImgUrl(pet) {
      var images = require.context("@/assets/", false, /\.jpg$/);
      return images("./" + pet + ".jpg");
    },
  },
};
</script>

<style scoped>
.service {
  width: 300px;
  height: 180px;
  cursor: pointer;
}
.service img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.service p {
  font-weight: bold;
  font-size: 18px;
}
</style>