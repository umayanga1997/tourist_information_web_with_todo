<template>
  <footer>
    <div class="logo">
      <img src="" alt="logo" />
      <h4 style="padding-top: 10px; color: white">Pearl of the Indian Ocean</h4>
    </div>
    <div class="site-map">
      <h3>Site Map</h3>
      <br />
     <ul>
        <router-link to="/"><li>Home</li></router-link>
        <router-link to="/about"><li>About Us</li></router-link>
        <router-link to="/Places"><li>Places</li></router-link>
        <router-link to="/todo"><li>Your ToDo</li></router-link>
        <router-link to="/sign_in_up"><li>Sign In/Up</li></router-link>
        <router-link to="/contact_us"> <li>Contact Us</li></router-link>
      </ul>
    </div>
    <div class="contact_us">
      <h3>Contact Us</h3>
      <br />
      <div class="col">
        <p>Address</p>
        <span>Mihirigama Mawatha,</span>
        <span> Nittabuwa,</span>
        <span> Colombo 01.</span>
      </div>
      <br />
      <div class="col">
        <p>Phone No</p>
        <span>+9437848759</span>
        <!-- <span> Nittabuwa,</span>
        <span> Colombo 01.</span> -->
      </div>
    </div>
  </footer>
</template>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
footer {
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  height: 190px;
  background: green;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 20px;
  color: white;
}
footer .site-map ul {
  list-style: none;
  /* display: flex; */
  text-align: start;
}
footer .site-map ul li {
  cursor: pointer;
  margin-bottom: 10px;
}
footer .contact_us,
.col {
  display: flex;
  flex-direction: column;
  text-align: start;
}
footer .contact_us .col p {
  margin-bottom: 5px;
  font-size: 17px;
  font-weight: 550;
  /* color: rgb(110, 245, 255); */
}
footer .contact_us .col span {
  padding-left: 10px;
}
</style>