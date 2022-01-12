<template>
  <div class="about">
    <div class="detail-container">
      <h2>About Us</h2>
      <br />
      <span
        >Pearl of the Indian Ocean is the official institution tasked with
        regularising the tourism industry in the country, while establishing,
        positioning, and developing Sri Lanka as a leading destination for
        international visitors. Pearl of the Indian Ocean is responsible for
        tapping into Sri Lanka's natural potential to expand and enhance its
        tourism offering while benefiting investors and supporting communities,
        in a sustainable manner.</span
      >
    </div>
    <br />
    <div class="detail-container">
      <h2>History</h2>
      <br />
      <span
        >In 1966, the Government of Sri Lanka decided to develop tourism in a
        planned and systematic manner, after identifying the need to set up an
        institutional framework. The Ceylon Tourist Board, (created by the
        Ceylon Tourist Board Act No. 10 of 1966.) and the Ceylon Hotels
        Corporation, (created by Ceylon Hotels Corporation Act of 1966.) were
        set up to enable this.</span
      >
    </div>
    <SocialContainer />
  </div>
</template>

<script>


export default {
  name: "About",
};
</script>

<style scoped>
.about {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about .detail-container {
  width: 50%;
  text-align: justify;
}
</style>
