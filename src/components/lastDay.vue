<template>
  <div>
    <!-- js获取每个月最后一天的三种方法 -->
    <!-- 参考网址：https://juejin.cn/post/6955001050860355591 -->
    <div>
      <el-date-picker
        v-model="value1"
        type="date"
        format="yyyy-MM-dd"
        value-format="yyyyMMdd"
        @change="changeDate"
        placeholder="选择日期"
      >
      </el-date-picker>
    </div>
    <!-- <input type='text' v-model.lazy='message'>
    <input type='text' v-model.number='number'> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      lastday: '',
      message: 'vue模板',
      number: 1111,
      value1: ''
    }
  },
  mounted () {
    this.lastday = this.getLastDay('2022', '2')
  },
  methods: {
    // 不兼容IE
    getLastDay (year, month) {
      return new Date(
        new Date(
          `${month < 12 ? year : ++year}-${month === 12 ? 1 : ++month} 00:00`
        ).getTime() - 1
      ).getDate()
    },
    changeDate (val) {
      const year = val.substring(0, 4)
      const month = val.substring(4, 6)

      const a = this.getMonthLastDayFn(year, month)
      this.value1 = `${year}${month}${a}`
    },
    getMonthLastDayFn1 (date) {
      let dateObj = new Date(date)
      let nextMonth = dateObj.getMonth() + 1 // 0-11,下一个月

      dateObj.setMonth(nextMonth)
      dateObj.setDate(1) // 1-31

      let nextMonthFristDayTime = dateObj.getTime() // 下个月1号对应毫秒
      let theMonthLastDayTime = nextMonthFristDayTime - 24 * 60 * 60 * 1000
      let theMonthDay = new Date(theMonthLastDayTime).getDate()
      return theMonthDay
    },
    getMonthLastDayFn (year, month) {
      let dateObj = new Date(year, month, 0)
      let theMonthDay = dateObj.getDate()
      return theMonthDay
    }
  }
}
</script>
