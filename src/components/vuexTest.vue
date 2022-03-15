<template>
  <div>
    <!-- 调用映射modules模块store中的getter -->
    <!-- 网址：https://www.jb51.net/article/216910.htm -->
    <button @click="changeVal">点击</button>
    <div>展示state的值 {{stateVal}}</div>
    <div>展示getter的值 {{gettersVal}}</div>
  </div>
</template>
<script>
export default {
  watch: {
    gettersHello(newVal, oldVal) {
      console.log('gettersHello newVal', newVal);
      console.log('gettersHello oldVal', oldVal);
    }
  },
  computed: {
    stateVal () {
      return this.$store.state.vuexTest.stateHello
    },
    gettersVal () {
      return this.$store.getters['vuexTest/gettersHello']
    }
  },
  methods: {
    changeVal () {
      this.$store.commit('vuexTest/mutationsHello', 2)
    }
  }
}
</script>