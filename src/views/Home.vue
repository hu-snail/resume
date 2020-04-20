<template>
  <div class="home">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <introduction-page></introduction-page>
      <div class="section">
        Second section ...
      </div>
      <div class="section">
        Second section ...
      </div>
      <div class="section">
        Second section ...
      </div>
    </full-page>
  </div>
</template>

<script>
import IntroductionPage from "../components/IntroductionPage";
export default {
  name: "Home",
  components: { IntroductionPage },
  data() {
    return {
      options: {
        afterLoad: this.afterLoad,
        navigation: true,
        anchors: ["page1", "page2", "page3"],
        sectionsColor: [
          "#b6e3e3",
          "#ff5f45",
          "#0798ec",
          "#fec401",
          "#1bcee6",
          "#ee1a59",
          "#2c3e4f",
          "#ba5be9",
          "#b4b8ab"
        ]
      }
    };
  },
  methods: {
    afterLoad() {
      console.log("Emitted 'after load' event.");
    }
  }
};
</script>
