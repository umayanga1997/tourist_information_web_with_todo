<template>
  <div class="signinup-container">
    <div class="sign-btn">
      <img src="@/assets/google_icon.png" alt="" />
      <h3>Sign Up/In with Google</h3>
    </div>
    <SocialContainer />
  </div>
</template>

<script>
export default {
  name: "SignInUp",
};
</script>

<style scoped>
.signinup-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.signinup-container .sign-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(7, 0, 102);
  padding: 10px 30px;
  border-radius: 20px;
  color: white;
}
.signinup-container .sign-btn img {
  width: 50px;
  height: 50px;
  padding-right: 10px;
}
</style>