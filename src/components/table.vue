<template>
  <el-table
    :data='tableData'
    stripe
    style='width: 50%; margin: 0 auto'
    @sort-change='onSortChange'
    :default-sort="{ prop: 'date', order: 'ascending' }"
  >
    <el-table-column prop='date' label='日期' width='180' sortable>
      <template slot-scope='{row}'>
        <span>{{row.date}}</span>
      </template>
    </el-table-column>
    <el-table-column prop='name' label='姓名' width='180' sortable></el-table-column>
    <el-table-column prop='address' label='地址'></el-table-column>
    <el-table-column
      prop='sort'
      label='排序'
      sortable='custom'
      :sort-orders="['ascending', 'descending']"
    >
    </el-table-column>
  </el-table>
</template>

<script>
// element-ui中表格自定义排序
// 参考网址： https://www.cnblogs.com/snaillu/p/14150536.html
export default {
  data () {
    return {
      tableData: [
        {
          date: '2019-12-02',
          name: '00',
          address: '南京市秦淮区秦虹路98号',
          sort: 100,
        },
        {
          date: '2016-06-04',
          name: '名字',
          address: '北京市朝阳区东三环北路甲26号',
          sort: 15,
        },
        {
          date: '2012-03-01',
          name: '222.23',
          address: '上海市浦东新区潍坊西路与浦城路交叉路口往西北约50米',
          sort: 8,
        },
        {
          date: '2018-11-03',
          name: '333',
          address: '湖北省武汉市硚口区解放大道586号',
          sort: 1,
        },
      ],
    };
  },
  mounted () {
    this.onSortChange('date', 'ascending');
  },
  methods: {
    /**
     * 表格排序事件处理函数
     * @param {object} {column,prop,order} 列数据|排序字段|排序方式
     */
    onSortChange(prop, order) {
      console.log('fffff', prop,order);
      this.tableData.sort(this.compare(prop, order));
    },

    /**
     * 排序比较
     * @param {string} propertyName 排序的属性名
     * @param {string} sort ascending(升序)/descending(降序)
     * @return {function}
     */
    compare(propertyName, sort) {
      return function (obj1, obj2) {
        var value1 = obj1[propertyName];
        var value2 = obj2[propertyName];
        console.log('value1',value1)
        console.log('value2',value2)
        if (typeof value1 === 'string' && typeof value2 === 'string') {
          const res = value1.localeCompare(value2, 'zh');
          console.log('cfffff',res)
          return sort === 'ascending' ? res : -res;
        } else {
          if (value1 <= value2) {
            return sort === 'ascending' ? -1 : 1;
          } else if (value1 > value2) {
            return sort === 'ascending' ? 1 : -1;
          }
        }
      };
    },
  },
};
</script>


