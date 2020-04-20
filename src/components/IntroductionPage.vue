<!--  author: hujinagjun -->
<template>
  <div class="section">
    <div class="section-content">
      <div class="desc">
        <h1>胡将军个人简历</h1>
        <p class="peron-desc">
          三年前端开发经验，熟练掌握前端工程化开发流程，参与公司前端规范制定和组件开发维护，有较强的的自学能力和团队协作能力。
        </p>
        <div class="item" v-for="(item, index) in list" :key="index">
          <span class="title">
            <i :class="'iconfont icon-' + item.icon"></i>
            {{ item.title }}
          </span>
          <a :href="item | linkToVal">{{ item.value }}</a>
        </div>
      </div>
      <div class="section-img">
        <img :src="codeSvg" width="60%" />
      </div>
    </div>
  </div>
</template>

<script>
import codeSvg from "../assets/code.svg";
const list = [
  {
    title: "职 业",
    value: "前端研发工程师",
    isLink: false,
    icon: "occupation"
  },
  {
    title: "年 限",
    value: "3年",
    isLink: false,
    icon: "work"
  },
  {
    title: "GitHub",
    value: "https://github.com/hu-snail",
    isLink: true,
    icon: "github"
  },
  {
    title: "毕业院校",
    value: "重庆电子工程职业技术学院",
    isLink: false,
    icon: "xueli"
  },
  {
    title: "联系电话",
    value: "18286603411",
    isLink: true,
    type: "tel",
    icon: "phone"
  },
  {
    title: "邮 箱",
    value: "217437592@qq.com",
    isLink: true,
    type: "email",
    icon: "email"
  },
  {
    title: "现居地",
    value: "贵阳观山湖区",
    isLink: false,
    icon: "address"
  }
];
export default {
  filters: {
    linkToVal(item) {
      switch (item.type) {
        case "tel":
          return "tel:" + item.value;
        case "email":
          return "mailto:" + item.value;
        default:
          if (item.isLink) return item.value;
          return "javascript:;";
      }
    }
  },
  data() {
    return {
      codeSvg,
      list
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang="less" scoped>
.section-content {
  display: flex;
  width: 80%;
  background: #fff;
  margin: 0 auto;
  .desc {
    width: 40%;
    padding: 55px 25px;
    background: #9fd6d3;
    color: #fff;
    text-align: left;
    box-sizing: border-box;
    .peron-desc {
      font-size: 14px;
      padding: 15px 0;
    }
    .item {
      padding: 10px 0;
      .title {
        text-justify: auto;
        padding-right: 15px;
      }
    }
  }
}
.section-img {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
