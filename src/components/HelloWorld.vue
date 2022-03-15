<template>
  <div class='hello'>
     
    
    <!-- <form-item
      size='medium'
      labelWidth='60px'
      :searchData='searchData'
      :searchForm='searchForm'
      :searchHandle='searchHandle'
      ref='formModel'
      :model='formObj'
      :rules='editRules'
    >
    </form-item> -->

    <!-- <base-item></base-item> -->
    <!-- <button @click='exportExl'>导出excel</button>
    <el-button type='primary' @click='getPdf()'>下载PDF</el-button> -->
  </div>
</template>

<script>
import formItem from './form.vue'
import baseItem from './base.vue'
// import exportExcel from '@/utils/exportJsonToExcel'
// import htmlToPdf from '@/utils/exportPDF';

let sexs = [
  { label: '男', value: 'M' },
  { label: '女', value: 'F' },
];
let sexProps = { label: 'label', value: 'value' };
let intersts = [
  { label: '羽毛球', value: 'badminton' },
  { label: '篮球', value: 'basketball' },
  { label: '足球', value: 'football' },
  { label: '兵乓球', value: 'pong' },
];
let interstProps = { label: 'label', value: 'value' };
const students = [
  {
    'name': '小明1',
    'age': '6',
    'sex': '男',
    'height': '60'
  }, 
  {
    'name': '小明2',
    'age': '7',
    'sex': '男',
    'height': '70'
  }, 
  {
    'name': '小明3',
    'age': '8',
    'sex': '男',
    'height': '80'
  }
];

export default {
  name: 'HelloWorld',
  components: { formItem, baseItem },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      formObj: () => this.searchHandleForm(),
      searchData: {
        name: null,
        age: null,
        sex: null,
        date: '',
        interst: [],
      },

      searchForm: [
        {
          type: 'Input',
          label: '姓名：',
          prop: 'name',
          width: '180px',
          placeholder: '请输入姓名',
        },
        {
          type: 'Input',
          label: '年龄',
          prop: 'age',
          width: '180px',
          placeholder: '请输入年龄',
        },
        {
          type: 'Date',
          label: '日期',
          prop: 'date',
          width: '180px',
          placeholder: '请选择日期',
        },
        {
          type: 'Select',
          label: '性别',
          prop: 'sex',
          width: '120px',
          options: sexs,
          props: sexProps,
          change: (row) => '',
          placeholder: '请选择性别',
        },
        {
          type: 'Checkbox',
          label: '爱好',
          prop: 'interst',
          checkboxs: intersts,
          props: interstProps,
        },
      ],
      searchHandle: [
        {
          label: '查询',
          type: 'primary',
          handle: () => this.searchHandleForm(),
        },
        { label: '重置', type: 'primary', handle: () => this.resetForm() },
      ],

      // 表单验证
      editRules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        age: [{ required: true, message: '请输入年龄', trigger: 'blur' }],
        date: [{ required: true, message: '请选择日期', trigger: 'blur' }],
        
      },
      value:'',
    };
  },
  mounted(){
    var time = new Date().getTime();
    console.log(this.getCurrentMonthFirst());
    console.log(this.getCurrentMonthLast());
  },
  methods: {
    exportExl(){
      exportExcel.downloadExl(students)
    },
    getPdf () {
      let title = '现金宝';
      htmlToPdf.htmlToPdf(title,'','','');
    },
    // 获取当前月的第一天
    getCurrentMonthFirst(){
      var date=new Date();
      date.setDate(1);
      return date;
    },
    // 获取当前月的最后一天
    getCurrentMonthLast(){
      var date=new Date();
      var currentMonth=date.getMonth();
      var nextMonth=++currentMonth;
      var nextMonthFirstDay=new Date(date.getFullYear(),nextMonth,1);
      var oneDay=1000*60*60*24;
      var a = new Date(nextMonthFirstDay-oneDay).getTime()
      console.log('aaa',a)
      return a;
    },

    onSubmit () {
      console.log('submit!');
    },
    searchHandleForm () {
      console.log('form表单1', this.$refs['formModel'] );
       this.$refs['formModel'].$children[0].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      });
    },

    submitForm(formName) {
      console.log('form表单', this.$refs['formModel']);
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     alert('submit!')
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // });
    },
    resetForm () {
      console.log('form表单', this.searchData);
      this.searchData = {
        name: null,
        age: null,
        sex: null,
        date: '',
        interst: [],
      };
      // this.$refs['formModel'].$children[0].resetFields()
      // this.searchData = {}
    },
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
