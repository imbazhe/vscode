<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane">
        <!-- 提示：如果你不想用form，你可以换成div等任何一个普通元素 -->
        <div class="layui-form-item">
          <label class="layui-form-label">用户名:</label>
          <ValidationProvider name='email' rules='required|email' v-slot="{ errors }">

            <div class="layui-input-line">
              <input type="text" v-model='email' name="name" placeholder="请输入" autocomplete="off"
                class="layui-input" style="120px;float:left">
            </div>
            <div class="error layui-form-mid" style=""> {{ errors[0] }} </div>
          </ValidationProvider>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密 码:</label>
          <div class="layui-input-block">
            <input type="password" name="" placeholder="请输入" autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input type="text" name="" placeholder="请输入" autocomplete="off" class="layui-input">
          </div>
          <div class="layui-form-mid" v-html='svg' @click="getCaptcha()"></div>
        </div>
        <button type="button" class="layui-btn">点击登录</button>
        <a class="a-link">忘记密码</a>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ValidationProvider, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN'

for (const rule in rules) {
  extend(rule, {
    ...rules[rule],
    message: zh.messages[rule]
  })
}

export default {
  name: 'app',
  data () {
    return {
      svg: '',
      errorMsg: [],
      email: ''
    }
  },
  components: {
    ValidationProvider
  },
  mounted () {
    this.getCaptcha()
  },
  methods: {
    getCaptcha () {
      axios.get('http://localhost:3000/getCaptcha').then(res => {
        if (res && res.status === 200) {
          const obj = res.data
          if (obj.code === 200) {
            this.svg = obj.data
          }
        } else {
          this.svg = '<span>获取失败</span>'
        }
      })
    }
  }
}
</script>

<style lang="scss">
.layui-input {
  width: 190px;
}
.layui-input-line {
  width: 50%;
}
.error {
  color: red;
  float: left;
  margin-left: 20px;
}
.a-link {
  margin-left: 40px;
  &:hover {
    color: #009688;
  }
}
svg {
  position: relative;
  top: -15px;
}
</style>
