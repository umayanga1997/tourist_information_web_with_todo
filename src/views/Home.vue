<template>
  <div class="home">
    <div class="main-img">
      <img src="@/assets/g_image_01.jpg" alt="" />
    </div>
    <br />
    <br />
    <div class="body">
      <h3>Our Best Services</h3>
      <br />
      <br />
      <!-- <br /> -->
      <div class="wrap-row">
        <ServiceCard :dataSet="item" v-for="item in cardItems" :key="item.id">
          <template v-slot:img-slot>
            <img
              v-if="item.id == 1"
              src="@/assets/visa_img.jpg"
              alt="card-img"
            />
            <img
              v-else-if="item.id == 2"
              src="@/assets/flight_img.jpg"
              alt="card-img"
            />
            <img
              v-else-if="item.id == 3"
              src="@/assets/hotel_img.jpg"
              alt="card-img"
            />
            <img
              v-else-if="item.id == 4"
              src="@/assets/wild_img.jpg"
              alt="card-img"
            />
          </template>
        </ServiceCard>
      </div>
      <br />
      <SocialContainer />
    </div>
  </div>
</template>

<script>
import ServiceCard from "@/components/Service_Card.vue";
export default {
  name: "Home",
  data: () => ({
    cardItems: [
      {
        id: 1,
        // img: "@/assets/visa_img.jpg",
        title: "Apply Visa Online",
      },
      {
        id: 2,
        // img: "@/assets/visa_img.jpg",
        title: "Book a Flight",
      },
      {
        id: 3,
        // img: "@/assets/visa_img.jpg",
        title: "Reserve a Hotel",
      },
      {
        id: 4,
        // img: "@/assets/visa_img.jpg",
        title: "Reserve a Wild Park",
      },
    ],
  }),
  components: {
    ServiceCard,
  },
};
</script>

<style scoped>
.main-img img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.body {
  width: 100%;
}
.body .wrap-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px;
  gap: 10px;
}
</style>
