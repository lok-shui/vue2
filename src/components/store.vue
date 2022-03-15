<template>
  <div>
    <!-- 调用映射根部store中的getter -->
    <!-- 网址：https://www.jb51.net/article/216910.htm -->
    <button @click="changeVal">点击</button>
    <div>"展示state的值": {{stateVal}}</div>
    <div>"展示getters的值": {{gettersVal}}</div>
  </div>
</template>
<script>
export default {
  computed: {
    stateVal () {
      return this.$store.state.stateHello
    },
    gettersVal () {
      return this.$store.getters.gettersHello
    }
  },
  methods: {
    changeVal (){
      this.$store.commit('mutationsHello', 2)
    }
  }
}
</script>