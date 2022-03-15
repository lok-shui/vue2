<template>
  <div>
    日期：
    <!-- <el-date-picker
      v-model="createDate"
      type="datetime"
      value-format="yyyy-MM-dd HH:mm:ss"
      placeholder="选择日期时间"
      @change="startTimeStatus"
      :picker-options="pickerOptionsStart"
      style="margin-right: 10px;">
    </el-date-picker> -->
      至
    <!-- <el-date-picker
      v-model="overDate"
      type="datetime"
      value-format="yyyy-MM-dd HH:mm:ss"
      placeholder="选择日期时间"
      @change="endTimeStatus"
      :picker-options="pickerOptionsEnd">
    </el-date-picker> -->
    <el-date-picker
      v-model="createDate"
      type="date"
      placeholder="选择开始日期"
      format="yyyy/MM/dd"
      value-format="timestamp"
      :picker-options="pickerOptionsStart"
      @change="changeStart">
    </el-date-picker>

    <el-date-picker
      v-model="overDate"
      type="date"
      placeholder="选择结束日期"
      format="yyyy/MM/dd"
      value-format="timestamp"
      :picker-options="pickerOptionsEnd"
      @change="changeEnd">
    </el-date-picker>
  <!-- <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="活动名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" prop="region">
      <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动时间" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="ruleForm.date1"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-time-picker
            placeholder="选择时间"
            v-model="ruleForm.date2"
            style="width: 100%"
          ></el-time-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="即时配送" prop="delivery">
      <el-switch v-model="ruleForm.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="活动性质" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="特殊资源" prop="resource">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="线上品牌商赞助"></el-radio>
        <el-radio label="线下场地免费"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="活动形式" prop="desc">
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')"
        >立即创建</el-button
      >
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form> -->
  </div>
</template>
<script>

export default {
  data () {
    return {
      createDate: '',
      overDate: '',
      pickerOptionsStart: {},
      pickerOptionsEnd: {},
      // pickerOptionsStart: {
      //   disabledDate: time => {
      //     let endDateVal = this.overDate
      //     if (endDateVal) {
      //       return time.getTime() > new Date(endDateVal).getTime()
      //     }
      //   }
      // },
      // pickerOptionsEnd: {
      //   disabledDate: time => {
      //     let beginDateVal = this.createDate
      //     if (beginDateVal) {
      //       return (
      //         time.getTime() <
      //         new Date(beginDateVal).getTime()
      //       )
      //     }
      //   },
      // },
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 时间开始选择器
    // startTimeStatus(value){
    //   this.createDate = value
    // },
    // 时间结束选择器
    // endTimeStatus(value){
    //     this.overDate = value
    // },
    changeStart () {
      this.pickerOptionsEnd = Object.assign({}, this.pickerOptionsEnd, {
        disabledDate: (time) => {
          if (this.createDate) {
            return time.getTime() < this.createDate
          }
        }
      })
    },
    changeEnd () { // 限制结束时间
      this.pickerOptionsStart = Object.assign({}, this.pickerOptionsStart, {
        disabledDate: (time) => {
          if (this.overDate) {
            // 如果没有后面的-8.64e7就是不可以选择今天的
            // 减去一天的时间代表可以选择同一天: 1*24*60*60*1000
            return time.getTime() > this.overDate - 8.64e7 // -8.64e7可以让开始时间和结束时间选同一天
          }
        }
      })
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!', this.$refs[formName].resetFields())
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
