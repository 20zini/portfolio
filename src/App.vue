<script setup>
import AboutSection from '@/components/AboutSection.vue';
import InterviewSection from '@/components/InterviewSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import EducationSection from '@/components/EducationSection.vue';
</script>

<template>
  <div id="app">
    <AboutSection />
    <InterviewSection />
    <SkillsSection />
    <ProjectsSection />
    <EducationSection />
  </div>
</template>

<style>
/* ✅ 전체 배경을 검은색으로 변경 */
#app {
  background-color: #0d1117; /* 다크 모드 */
  color: #ffffff; /* 텍스트 흰색 */
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
  padding: 20px;
}

/* ✅ 모든 글씨 색상을 흰색으로 설정 */
h1, h2, h3, h4, h5, h6, p, span {
  color: #ffffff !important;
}

/* ✅ 섹션 간격 추가 */
div > * {
  padding: 20px 0;
}
</style>
