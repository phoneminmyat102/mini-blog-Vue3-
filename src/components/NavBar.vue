<template>
  <header>
    <h3>BLOG</h3>
    <div>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'create' }">Create</router-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}

header h3{
    color: blueviolet;
    letter-spacing: 3px;
    font-size: 38px;
}

header a{
    color: #9a9393;
    text-decoration: none;
    margin-left: 20px;
    font-size: 20px;
}

header a.router-link-active {
    color: #444;
    font-weight: bold;
}
</style>
