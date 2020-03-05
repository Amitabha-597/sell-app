<template>
  <div id="home">
    <header>
      <div class="header-main">
        <Header />
      </div>
      <nav>
        <router-link to="/goods">商品</router-link>
        <router-link to="/business">商家</router-link>
        <router-link to="/assess">评价</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Header from "../views/components/Homecomponent/Header";
export default {
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
$concolor: #42b983;
#home {
  width: 100%;
  height: 100%;
  header {
    padding-top: 5px;
    width: 100%;
    height: 22%;
    .header-main {
      width: 100%;
      height: 80%;
    }
    nav {
      width: 100%;
      height: 20%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-bottom: 1px solid #a8a1a1;
      
      a {
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;
        &.router-link-exact-active {
          color: $concolor;
        }
      }
    }
  }
  main {
    height: 70%;
    width: 100%;
  }
  footer {
    height: 8%;
    width: 100%;
    background: $concolor;
  }
}
</style>