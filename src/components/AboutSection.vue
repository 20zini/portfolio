<template>
  <section id="hero" class="hero" :style="{ backgroundImage: `url('/assets/Background.jpg')` }">
    <h1>백엔드 개발자, 이영진입니다. 👋</h1>
    <h2>사용자를 생각하는 역지사지 마인드,
      포기하지 않고 책임감 있게 일하는 개발자입니다.</h2>
    <p> </p>
  </section>
</template>

<style>
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
}
</style>
