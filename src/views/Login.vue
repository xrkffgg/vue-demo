<template>
  <div id="login">
    <div class="login-box">
      <div class="login-box-title">
        登录
      </div>
      <el-card shadow="hover">
        <el-form 
          ref="refLogin"
          :model="login"
          :rules="rules"
          label-width="100px"
          @keyup.enter.native="doLogin">
          <el-row>
            <el-col :span="10">
              <el-form-item
                prop="loginip"
                label="IP">
                <el-input 
                  type="text"
                  v-model="login.loginip">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item
                prop="port"
                label="端口">
                <el-input 
                  type="text"
                  v-model="login.port">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item
                prop="username"
                label="用户名">
                <el-input 
                  type="text"
                  v-model="login.username">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item
                prop="password"
                label="密码">
                <el-input 
                  type="text"
                  v-model="login.password">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item
                prop="deviceport"
                label="设备端口">
                <el-input 
                  type="text"
                  v-model="login.deviceport">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item
                prop="rtspport"
                label="RTSP端口">
                <el-input 
                  type="text"
                  v-model="login.rtspport">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          
          <el-button class="login-box-btn" type="primary" @click="doLogin">登 录</el-button>
          
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        loginip: '',
        port: '',
        username: '',
        password: '',
        deviceport: '',
        rtspport: '',
      },

      rules: {
        loginip: [{ required: true, message: '请填写~', trigger: 'blur'}],
        port: [{ required: true, message: '请填写~', trigger: 'blur'}],
        username: [{ required: true, message: '请填写~', trigger: 'blur'}],
        password: [{ required: true, message: '请填写~', trigger: 'blur'}],
      },
    }
  },

  methods: {
    doLogin() {
      this.$refs.refLogin.validate((valid) =>{
        if(valid){
          
        }
      })
    },
  },
}
</script>

<style lang="scss">
  #login .el-card {
    border-radius: 8px;
  }
</style>

<style lang="scss" scoped>
  #login {
    width: 100vw;
    height: 100vh;
    background-color: #77aa77;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%2377aa77'/%3E%3Cstop offset='1' stop-color='%234fd'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login-box {
    width: 800px;
    &-title {
      margin-left: 20px;
      margin-bottom: -16px;
      color: #434446;
      position: relative;
      letter-spacing: 10px;
      font-size: 30px;
      text-shadow: #bbb 0 1px 0, #b5b5b5 0 2px 0, #acacac 0 3px 0, #a0a0a0 -1px 3px 0, #919191 -1px 4px 0, #7f7f7f -1px 5px 0, rgba(0,0,0,.2) -1px 6px 1px, rgba(0,0,0,.3) -2px 9px 6px;
      cursor: default;
    }

    &-btn {
      width: calc(100% - 200px);
      margin: 0 100px;
    }
  }
</style>