<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">

    <el-form-item label="账号">
      <el-input v-model="ruleForm2.username" :disabled="true"></el-input>
    </el-form-item>

    <el-form-item label="新密码" prop="pass">
      <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" clearable></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
      <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>

  </el-form>
</template>

<script>
    import api from '../../api'
    export default {
      name: "changePass",
      data() {
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.ruleForm2.checkPass !== '') {
              this.$refs.ruleForm2.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.ruleForm2.pass) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        return {
          ruleForm2: {
            id:'',
            pass: '',
            oldPassword:'',
            checkPass: '',
            username: this.$store.state.userInfo.username
          },
          rules2: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        submitForm(formName) {
          // 验证通过返回布尔值
          console.log(1111);
          this.$refs[formName].validate((valid) => {
            if(valid){
              var params={
                id:this.$store.state.userInfo.id,
                oldPassword:"123456",
                newPassword:this.ruleForm2.checkPass
              }
              api.password(params).then(res=>{
                console.log(res);
              }).catch(err=>{
                console.log(err);
                this.$message(err.description)
              })
              this.$emit('handleClose')
            }
          });

        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>

</style>
