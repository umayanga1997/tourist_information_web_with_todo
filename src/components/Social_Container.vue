<template>
  <div class="social-container">
    <h3>Follow Us</h3>
    <br />
    <div class="social-subcontainer">
      <font-awesome-icon
        class="icon"
        v-for="network in networks"
        :key="network.network"
        :icon="[network.prefix, network.icon]"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "social_container",
  data: () => ({
    networks: [
      {
        network: "email",
        name: "Email",
        icon: "envelope",
        prefix: "fa",
        color: "#398677",
      },

      {
        network: "facebook",
        name: "Facebook",
        icon: "facebook-f",
        prefix: "fab",
        color: "#1877f2",
      },

      {
        network: "line",
        name: "Line",
        icon: "line",
        prefix: "fab",
        color: "#00c300",
      },
      {
        network: "messenger",
        name: "Messenger",
        icon: "facebook-messenger",
        prefix: "fab",
        color: "#0084ff",
      },

      {
        network: "twitter",
        name: "Twitter",
        icon: "twitter",
        prefix: "fab",
        color: "#1da1f2",
      },
      {
        network: "viber",
        name: "Viber",
        icon: "viber",
        prefix: "fab",
        color: "#59267c",
      },

      {
        network: "whatsapp",
        name: "Whatsapp",
        icon: "whatsapp",
        prefix: "fab",
        color: "#25d366",
      },
    ],
  }),
};
</script>

<style scoped>
.social-container {
  width: 100%;
  padding-top: 100px;
  padding-bottom: 50px;
}
.social-subcontainer {
  display: flex;
  justify-content: center;
  font-size: 40px;
  gap: 20px;
}
.icon {
  cursor: pointer;
}
</style>