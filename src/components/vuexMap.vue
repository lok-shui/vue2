<template>
  <div class='vuexReponse'>
    <!-- 网址：https://www.jb51.net/article/216910.htm -->
    使用辅助函数：
    <button @click="changeVal">点击</button>
    <div>展示stateVal的值: {{stateVal}}</div>
    <div>展示gettersVal的值: {{gettersVal}}</div>
    <div>展示gettersHelloVal的值 {{gettersHelloVal}}</div>
  </div>
</template>
 
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'vuexReponse',
  watch: {
    gettersHello (newVal, oldVal) {
      console.log('gettersHello newVal', newVal)
      console.log('gettersHello oldVal', oldVal)
    }
  },
  computed: {
    stateVal () {
      return this.$store.state.vuexTest.stateHello
    },
    ...mapGetters(['vuexTest/gettersHello']), // 数组形式
    ...mapGetters('vuexTest', {   // 对象形式 
      gettersVal: 'gettersHello'
    }),
    ...mapGetters('vuexTest', {
      gettersHelloVal: 'gettersHello' // 对象形式下 改变映射
    }),
  },
  methods: {
    changeVal () {
      this.$store.commit('vuexTest/mutationsHello', 2)
    }
  }
}
</script>