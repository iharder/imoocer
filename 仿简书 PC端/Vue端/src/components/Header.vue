<template>
  <div>
    <div class="headerWrapper">
      <img src='../assets/logo.png' alt="" class="logo">
      <div class="nav">
        <div class="nav-item left active">首页</div>
        <div class="nav-item left">下载App</div>
        <div class="nav-item right">登录</div>
        <div class="nav-item right">
          <span class="iconfont icon-Aa"></span>
        </div>
        <div class="searchWrapper">
          <input type="text" :class="focused ? 'search focused':'search'" placeholder="搜索" @focus="handleInputFocus" @blur="handleInputBlur">
          <span :class="focused ? 'iconfont icon-fangdajing iconFocused':'iconfont icon-fangdajing'" ></span>
        </div>       
      </div>
      <div class="addition">
        <div class="button reg">注册</div>
        <div class="button writting">
          <span class="iconfont icon-pencil"></span>写文章
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  name: "Header",
  methods: {
    handleInputFocus() {
      this.focused = true;
    },
    handleInputBlur() {
      this.focused = false;
    }
  },
  data() {
    return {
      focused: false
    };
  }
};
</script>
<style lang="stylus" scoped>
.headerWrapper {
  height: 58px;
  border-bottom: 1px solid #f0f0f0;

  .logo {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 56px;
    width: 100px;
  }

  .nav {
    height: 100%;
    width: 960px;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;

    .searchWrapper {
      float: left;
      position: relative;

      .icon-fangdajing {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        height: 30px;
        border-radius: 15px;
        text-align: center;
      }

      .search {
        box-sizing: border-box;
        width: 160px;
        height: 38px;
        padding: 0 20px;
        border: none;
        outline: none;
        border-radius: 19px;
        background: #eee;
        margin-top: 9px;
        margin-left: 20px;
        font-size: 14px;
        transition: all 0.3s ease-in;

        &::placeholder {
          color: #999;
        }
      }

      .focused {
        width: 240px;
      }

      .iconFocused {
        background: #777;
        color: #fff;
      }
    }

    &-item {
      line-height: 56px;
      padding: 0 15px;
      font-size: 17px;
      color: #333;
    }

    .right {
      float: right;
    }

    .left {
      float: left;
    }

    .active {
      color: #ea6f5a;
    }
  }

  .addition {
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;

    .button {
      float: right;
      margin-top: 9px;
      line-height: 38px;
      border-radius: 19px;
      border: 1px solid #ec6149;
      margin-right: 20px;
      padding: 0 20px;
      font-size: 14px;
    }

    .reg {
      color: #ec6149;
    }

    .writting {
      color: #fff;
      background: #ec6149;
    }
  }
}
</style>
