<template>
  <div>
    <!-- 递归去重   -->
    the folder currently open doesn't have a git repository. you can initialize a repository
    which will enable source control features powered by git 
  </div>
</template>
<script>
export default {
  data () {
    return {
      arr: [
        1,
        1,
        'true',
        'true',
        true,
        true,
        15,
        15,
        false,
        false,
        undefined,
        undefined,
        null,
        null,
        NaN,
        NaN,
        'NaN',
        0,
        0,
        'a',
        'a',
        {},
        {},
      ],
    };
  },
  mounted () {
    const a = this.unique(this.arr);
    console.log('新数组', a);
    const c = ['1', '2', '3'];
    const d = c.splice(3, 0, '4');
    console.log('d的值', c);
    console.log('原数组', this.arr);
  },
  methods: {
    unique(array) {
      let len = array.length
      array.sort((a, b) => {
        return a - b
      })
      function loop(index) {
        if (index >= 1) {
          if (array[index] === array[index -1]) {
            array.splice(index, 1)
          }
          loop(index - 1)
        }
      }
      loop(len - 1)
      return array
    },
  },
};
</script>