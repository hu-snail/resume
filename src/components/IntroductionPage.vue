<!--  author: hujinagjun -->
<template>
  <div class="section">
    <div class="section-content container">
      <div class="row">
        <div class="desc col-xs-12 col-md-5">
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
        <div class="section-img col-xs-12 col-md-7">
          <img :src="resumeSvg" width="60%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import resumeSvg from "../assets/resume.svg";
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
    value: "重庆大学 / 本科 / 软件工程",
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
    value: "上海市浦东区",
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
      resumeSvg,
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
  background: #fff;
  .row {
    height: 520px;
  }
  .desc {
    padding: 55px 35px;
    background: #2d5a55;
    color: #fff;
    height: 100%;
    text-align: left;
    box-sizing: border-box;
    .peron-desc {
      font-size: 14px;
      padding: 15px 0;
    }
    .item {
      padding: 10px 0;
      display: flex;
      font-size: 14px;
      .title {
        text-justify: auto;
        display: inline-block;
        width: 120px;
      }
    }
  }
}
.section-img {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-sizing: border-box;
}
</style>
