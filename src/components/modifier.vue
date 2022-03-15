<template>
  <div>
    <div>
      <strong>.capture</strong>
      是改变js默认的事件机制,默认是冒泡,capture功能是将冒泡改为倾听模式(捕获模式)。
    </div>
    <div>
      <strong>.once</strong>是将事件设置为只执行一次,如 .click.prevent.once
      代表只阻止事件的默认行为一次,当第二次触发的时候事件本身的行为会执行。
    </div>
    <div>
      <strong>.native</strong>
      就是在父组件中给子组件绑定一个原生的事件, 就将子组件变成了普通的HTML标签, 不加'.
      native'事件是无法触发的。
      主要是给自定义的组件添加原生事件, 可以理解为该修饰符的作用就是把一个vue组件转化为一个普通的HTML标签, 并且该修饰符对普通HTML标签是没有任何作用的。
    </div>
    <div>
      <strong>.prevent</strong> 是阻止事件本身行为,如阻止超链接的点击跳转,form表单的点击提交。
      某些标签拥有自身的默认事件, 如a[href="#"], button[type="submit"]
      这种标签在冒泡结束后会开始执行默认事件。注意默认事件虽然是冒泡后开始, 但不会因为stop阻止事件传递而停止。
    </div>
    <div>
      <strong>.passive</strong> 滚动事件的默认行为 (即滚动行为) 将会立即触发, 而不会等待 onScroll
      完成。 这个 .passive
      修饰符尤其能够提升移动端的性能。每次滚动都会有一个默认事件触发, 加了这个就是告诉浏览器, 不需要查询, 不需要触发这个默认事件。
    </div>
    <div>
      <strong>.stop</strong> 是阻止自身冒泡行为,不让当前元素的事件继续往外触发。
      只有当前的元素会触发,其他向上冒泡的元素全部不会触发,从自身开始不向外部发射冒泡信号。
    </div>
    <div>
      <strong>.self</strong>
      是只有是自己触发的自己才会执行,如果接受到内部的冒泡事件传递信号,会忽略掉这个信号。
      内部元素冒泡上来的事件将不会触发。只响应当前元素自身触发的事件, 不会响应经过冒泡触发的事件, 并不会阻止冒泡继续向外部触发。
    </div>
    <div><strong>.passive</strong> 和 <strong>.prevent</strong> 不能一起使用: .prevent 将会被忽略</div>
    <!-- 参考网址: https://www.cnblogs.com/yeminglong/p/15165686.html -->
    <div @click.capture="handleCatch('最外层')">
      最外层
      <div @click.capture="handleCatch('抓到了爷爷')">
        抓到了爷爷
        <div @click.capture="handleCatch('抓到了父亲')">
          抓到了父亲
          <div @click="handleCatch('抓到了儿子')">抓到了儿子</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    /**
     * 总结：
     1. 冒泡是从里往外冒, 捕获是从外往里捕。
     1. 当捕获存在时, 先从外到里的捕获, 剩下的从里到外的冒泡输出
    */

    handleCatch(msg) {
      console.log(msg);
    },
  },
};
</script>
<style scoped>
div {
  text-align: left;
  margin-bottom: 10px;
  text-indent: 20px;
}
</style>