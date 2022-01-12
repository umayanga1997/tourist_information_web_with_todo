<template>
    <div class="contactUs-container">
        <div class="contact_us">
      <h3>Contact Us</h3>
      <br />
      <br />
      <div class="col">
        <h4>Address</h4>
        <br>
        <span>Mihirigama Mawatha,</span>
        <span> Nittabuwa,</span>
        <span> Colombo 01.</span>
      </div>
      <br />
      <div class="col">
        <h4>Phone No</h4>
        <br>
        <span>+9437848759</span>
        <!-- <span> Nittabuwa,</span>
        <span> Colombo 01.</span> -->
      </div>
    </div>
        <SocialContainer />
    </div>
</template>

<script>
export default {
    name:'ContactUs'
}
</script>

<style scoped>
.contactUs-container{
    padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>