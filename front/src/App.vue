<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane">
        <!-- 提示：如果你不想用form，你可以换成div等任何一个普通元素 -->
        <div class="layui-form-item">
          <label class="layui-form-label">用户名:</label>
          <div class="layui-input-block">
            <input type="text" name="" placeholder="请输入" autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密 码:</label>
          <div class="layui-input-block">
            <input type="password" name="" placeholder="请输入" autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-block">
            <input type="text" name="" placeholder="请输入" autocomplete="off" class="layui-input">
          </div>
        </div>
        <button type="button" class="layui-btn">点击登录</button>
        <a class="a-link">忘记密码</a>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.layui-input {
  width: 190px;
}
.a-link{
  margin-left: 40px;
  &:hover{
    color: #009688;
  }
}
</style>
