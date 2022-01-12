<template>
  <div class="places-container">
    <div class="search-container">
      <input
        type="text"
        name="search_txt"
        id="search_txt"
        placeholder="Search..."
        @keyup="find"
        v-model="searchTxt"
      />
      <font-awesome-icon class="icon" :icon="['fas', 'search']" />
    </div>
    <br />
    <br />
    <div class="body">
      <PlaceCard
        :placeData="item"
        v-for="item in tempDataList"
        :key="item.id"
      />
    </div>
  </div>
</template>

<script>
import PlaceCard from "@/components/Place_Card.vue";

export default {
  name: "Places",
  components: {
    PlaceCard,
  },
  created() {
    this.tempDataList = this.placeDataList;
  },
  data() {
    return {
      searchTxt: null,
      tempDataList: [],
      placeDataList: [
        {
          id: 1,
          plaseTitle: "Yala National Park",
          description:
            "Yala National Park is the most visited and second largest national park in Sri Lanka, bordering the Indian Ocean. The park consists of five blocks, two of which are now open to the public, and also adjoining parks. The blocks have individual names such as, Ruhuna National Park, and Kumana National Park or 'Yala East' for the adjoining area. It is situated in the southeast region of the country, and lies in Southern Province and Uva Province. The park covers 979 square kilometres and is located about 300 kilometres from Colombo.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2dgCcel-z_bS6m9n-oHTKiWmfKPXLKRBHhu2YyIZKoC-nWEADFnztUcoqIuig20gDAw_yHV1Q9g-VDU-2Fm1pA",
        },
        {
          id: 2,
          plaseTitle: "Galle Dutch Fort",
          description:
            "Galle Fort, in the Bay of Galle on the southwest coast of Sri Lanka, was built first in 1588 by the Portuguese, then extensively fortified by the Dutch during the 17th century from 1649 onwards. It is a historical, archaeological and architectural heritage monument, which even after more than 432 years maintains a polished appearance, due to extensive reconstruction work done by Archaeological Department of Sri Lanka. The fort has a colourful history, and today has a multi-ethnic and multi-religious population.",
          img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT0UPfZ9ykdMS0OkIcw3OzY5oyEGX4Ls2WHk--BwWtXov5cHmtnl9mhp57qlaz4At0-tdued6U6KOoyAEkpUeWBaQ",
        },
        {
          id: 3,
          plaseTitle: "Udawalawe National Park",
          description:
            "Udawalawe National Park is a national park on the boundary of Sabaragamuwa and Uva Provinces in Sri Lanka. The park was created to provide a sanctuary for wild animals displaced by the construction of the Udawalawe Reservoir on the Walawe River, as well as to protect the catchment of the reservoir. The reserve covers 30,821 hectares of land area and was established on 30 June 1972. Before the designation of the national park, the area was used for shifting cultivation.",
          img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSLPRuISQ11sLvai4AP5AX0b7yPob_MylrKDNL933NxVEH7YpCe1Tnr1d2zdbP_ciydol0PZU3I9ukvXeiBhUxrLw",
        },
        {
          id: 4,
          plaseTitle: "Horton Plains National Park",
          description:
            "Horton Plains National Park is a national park in the central highlands of Sri Lanka that was designated in 1988. It is located at an elevation of 2,100–2,300 m and encompasses montane grassland and cloud forest. It is rich in biodiversity and many species found here are endemic to the region. It is also a popular tourist destination and is situated 8 kilometres from Ohiya, 6 kilometres from the world-famous Ohiya Gap/Dondra Watch and 32 kilometres from Nuwara Eliya.",
          img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSmeFJyiKj-9I-3RWU4sFbAMXaBP1ds5RU1m6H9DJRdunwqTPa0N0s3hqyxuzpB3kqDzebNRB3PsTzEhOBOsSbg9Q",
        },
        {
          id: 5,
          plaseTitle: "Arugam Bay Beach",
          description:
            "Arugam Bay, known locally as 'Arugam Kudah', is situated on the Indian Ocean in the dry zone of Sri Lanka's southeast coast, and a historic settlement of the ancient Batticaloa Territory. The bay is located 117 kilometres south of Batticaloa, 320 kilometres due east of Colombo, and approximately 4 kilometres south of the market town of Pottuvil. The main settlement in the area, known locally as Ullae, is predominantly Muslim, however there is a significant Sri Lankan Tamil and Sinhala population to the south of the village, as well as a number of international expatriates, largely from Europe and Australia.",
          img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTqFy-JFqTGDDPG2b4GbyvEh6AmlBajaHB3cyvRcAaoZs5MZJoJuDjeBeEVPFnhrnxpTxi3TwP0jPmsaJ3hYU6-CQ",
        },
        {
          id: 6,
          plaseTitle: "Gangaramaya Temple",
          description:
            "Gangaramaya Temple is one of the most important temples in Colombo, Sri Lanka, being a mix of modern architecture and cultural essence. Located on the Beira Lake, it was completed in the late 19th century.",
          img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSyDYVjKlo_jOIFZeKpTEeIqqIVzA9zhTGIuRQ6B3_tuX6xURBoskg_xzANasTm1vLTlERsuCtvGCZSKUSj21pDHg",
        },
        {
          id: 7,
          plaseTitle: "Galle Face Green",
          description:
            "Galle Face is a 5 ha ocean-side urban park, which stretches for 500 m along the coast, in the heart of Colombo, the financial and business capital of Sri Lanka. The promenade was initially laid out in 1859 by Governor Sir Henry George Ward, although the original Galle Face Green extended over a much larger area than is seen today. The Galle Face Green was initially used for horse racing and as a golf course, but was also used for cricket, polo, football, tennis and rugby.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7WOE__L2E896bHzBbvMXXijr6k7VTXJNYkHojQYVc4sIV-9Sy6ohF0-CRZOv7ITYfcPZ6ZUr6-rIX9J0CeXm4aQ",
        },
        {
          id: 8,
          plaseTitle: "Nine Arches Bridge",
          description:
            "The Nine Arch Bridge also called the Bridge in the Sky, is a viaduct bridge in Sri Lanka. It is one of the best examples of colonial-era railway construction in the country. The construction of the bridge is generally attributed to a local Ceylonese builder, P. K. Appuhami, in consultation with British engineers. The chief designer and project manager of the 'upcountry railway line of Ceylon' project was D. J. Wimalasurendra, a distinguished Ceylonese engineer and inventor. The designer of the viaduct was Harold Cuthbert Marwood of Railway Construction Department of Ceylon Government Railway. The 1923 report titled 'Construction of a Concrete Railway Viaduct in Ceylon' published by the Engineering Association of Ceylon has details of all the records including the plans and drawings. It is located in Demodara, between Ella and Demodara railway stations.",
          img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ7BIapaoFlASYQX_dc72qg8iEq1PA8cdUZdAU-mQKM3EvPzDE-Gce-OqHQjoFDT3ZNooX17frwUFaE9EXAgJ1KEQ",
        },
      ],
    };
  },
  methods: {
    find() {
      try {
        if (this.searchTxt != null && this.searchTxt != "") {
          this.tempDataList = this.placeDataList.filter((item) => {
            return item.plaseTitle
              .toLowerCase()
              .includes(this.searchTxt.toLowerCase());
          });
        } else {
          this.tempDataList = this.placeDataList;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.places-container {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
input:focus {
  outline: none;
  border: none;
}
.places-container .search-container {
  padding-inline: 10px;
  border-radius: 10px;
  border: 2px solid green;
  color: green;
}
.places-container .search-container #search_txt {
  height: 30px;
  width: 500px;
  border: none;
  font-size: 15px;
}
.places-container .body {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
}
</style>