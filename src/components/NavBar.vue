<template>
  <nav :class="isScroll ? 'style-nav' : ''">
    <!-- <div class="col"> -->
    <div class="row">
      <img v-if="isScroll" src="" alt="logo" />
      <h4 v-if="isScroll" style="padding-left: 5px; color: white">
        Pearl of the Indian Ocean
      </h4>
    </div>
    <div class="row">
      <ul>
        <router-link to="/"><li>Home</li></router-link>
        <router-link to="/about"><li>About Us</li></router-link>
        <router-link to="/Places"><li>Places</li></router-link>
        <router-link to="/todo"><li>Your ToDo</li></router-link>
        <router-link to="/sign_in_up"><li>Sign In/Up</li></router-link>
        <router-link to="/contact_us"> <li>Contact Us</li></router-link>
      </ul>
    </div>
    <!-- </div> -->
  </nav>
</template>

<script>
export default {
  data: () => ({
    scrollingValue: 0,
    isScroll: false,
  }),
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      var currentScroll = window.top.scrollY;

      if (currentScroll > this.scrollingValue) {
        this.isScroll = true;
      } else if (currentScroll == 0) {
        this.isScroll = false;
      }
      this.scrollingValue = window.scrollY;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
nav {
    z-index: 2;
  width: 100% !important;
  position: fixed;
  /* height: 60px; */
  /* background: rgb(97, 97, 97); */
  background: transparent;
  /* opacity: 0.4; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  font-weight: bold;
  transition: all 0.2s ease-in-out;
}
.style-nav {
  opacity: 1;
  background: green;
}
.style-nav a {
  color: white !important;
}
nav .row {
  display: flex;
  padding: 20px 25px;
}
nav .row ul {
  display: flex;
  gap: 30px;
  text-decoration: none;
  list-style: none;
}
nav .row ul li {
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.style-nav .row ul li:hover {
  /* display: block; */
  color: rgb(62, 226, 255);
  margin-top: 5px !important;
}
nav .row ul li:hover {
  /* display: block; */
  color: rgb(0, 4, 255);
  margin-top: 5px !important;
}
</style>