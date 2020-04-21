<!--  author: hujinagjun -->
<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-7 img-content">
          <img :src="codeSvg" alt="code" width="50%" />
        </div>
        <div class="desc col-xs-12 col-md-5">
          <h1 class="title">
            技能清单
          </h1>
          <div class="item" v-for="(item, index) in list" :key="index">
            <span class="label"
              >{{ index + 1 }}.<span class="item-title">{{ item.title }}：</span
              ><i
                :class="{ code: option.isActive }"
                v-for="(option, i) in item.attr"
                :key="i + list.length"
                >{{ option.name }}</i
              >{{ item.desc }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import codeSvg from "../assets/code.svg";
let list = [
  {
    title: "基础知识",
    attr: [],
    desc: "HTML、CSS、JavaScript"
  },
  {
    title: "前端框架",
    attr: [{ name: "Vue", isActive: true }, { name: "React" }],
    desc: null
  },
  {
    title: "小程序框架",
    attr: [],
    desc: "Mpvue、Taro"
  },
  {
    title: "UI库",
    attr: [],
    desc: "Vux、Mint-ui、Element-ui、Taro-ui、AntDesign、iview、Vant、Bootstrap"
  },
  {
    title: "Node相关",
    attr: [],
    desc: "Koa2、Express"
  },
  {
    title: "数据库",
    attr: [],
    desc: "MySql、MongoDB、Mongoose"
  },
  {
    title: "图表库",
    attr: [],
    desc: "Echarts、VantV G2、VantV F2"
  },
  {
    title: "地图API",
    attr: [],
    desc: "高德地图、百度地图"
  },
  {
    title: "前端工程",
    attr: [],
    desc: "Git、Webpack、npm、Vue-cli、 Eslint"
  },
  {
    title: "开发工具",
    attr: [],
    desc:
      "VScode、HBuilderX、Android Studio、Xcode、Sublime Text3、微信开发者工具、支付宝开发者工具......"
  }
];
export default {
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
.row {
  height: 520px;
  background: #566351;
  .img-content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
  }
  .desc {
    padding: 55px 25px;
    font-size: 14px;
    color: #fff;
    height: 100%;
    text-align: left;
    box-sizing: border-box;
    .item {
      padding: 8px 0;
      .code {
        color: #fff;
        display: inline;
        padding: 0 10px;
        background-color: #c3ab80;
        border-radius: 2px;
        margin: 0 4px;
      }
    }
  }
}
</style>
