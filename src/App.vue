<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #333;
}

.star-box {
  color: gray;
  display: flex;
  font-size: 13px;
  justify-content: center;
  padding-top: 5px;
}

.star-box .orange {
  color: orange;
}

.gray {
  color: #ccc;
}

.score {
  color: gray;
  font-size: 10px;
}

.no-score {
  margin-top: 6px;
  color: gray;
  font-size: 10px;
}
</style>
