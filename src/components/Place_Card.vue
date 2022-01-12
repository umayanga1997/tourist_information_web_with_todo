<template>
  <div class="place-container">
    <img :src="placeData.img" alt="" />
    <h4 class="title">{{ placeData.plaseTitle }}</h4>
    <div class="place-body">
      <span class="body">{{ placeData.description }}</span>
    </div>
    <div class="read-more">
      <span>Read More</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "plaseCardComponent",
  props: ["placeData"],
};
</script>
<style scoped>
.place-container {
  position: relative;
  width: 300px;
  height: 375px !important;
  text-align: start;
  margin: 5px;
  border-radius: 20px !important;
  overflow: hidden;
  transition: all 0.2s ease-in-out !important;
}
.place-container img {
  width: 300px;
  height: 200px;
  object-fit: cover;
}
.place-container .title {
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 0px 5px;
}
.place-container .place-body {
  height: 100px;
  overflow: hidden;
  overflow-wrap: break-word;
  color: rgb(80, 80, 80);
  padding: 0px 5px;
  text-align: justify;
}
.place-container .read-more {
  position: absolute;
  padding: 6px;
  background: rgb(53, 53, 53);
  text-align: center;
  font-weight: bold;
  color: white;
  cursor: pointer;
  bottom: 0;
  left: 0;
  right: 0;
}
.place-container:hover {
  cursor: pointer;
  top: -5px;
  box-shadow: 0px 0px 10px 0px grey;
}
</style>