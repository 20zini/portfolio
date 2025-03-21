<script setup>
import { ref } from "vue";

const educationItems = ref([
  {
    id: 1,
    period: "2024.08 - 2025.02",
    title: "현대오토에버 모빌리티 SW 스쿨",
    description: [
      "스마트팩토리 도메인 및 데이터 분석 교육",
      "Python, Java, C# 등 프로그래밍 언어 학습",
      "협업 프로젝트 4회 (SfaaS, CPS/PHM, 머신비전, 디지털트윈) 진행",
      "자료구조, 운영체제, 알고리즘 등 CS 스터디에 참가하여 학습",
    ],
    icons: ["python.png", "java.png", "js.png", "springboot.png"],
  },
  {
    id: 2,
    period: "2023.07 - 2024.01",
    title: "인턴",
    description: [
      "ERP 시스템 개발",
      "API 개발 및 DB 관리",
      "Synergi-Life 툴 사용 - 도메인 제작",
      "S-OIL , GS-Caltex 요구사항 처리",
    ],
    icons: ["c.png", "dotnet.png", "mssql.png",],
  },
]);
</script>

<template>
  <section id="education" class="education-section">
    <h2 class="h2">Education & InternShip</h2>
    <div class="education-grid">
      <div v-for="item in educationItems" :key="item.id" class="education-card">
        <p class="education-period">{{ item.period }}</p>
        <h3 class="education-title">{{ item.title }}</h3>
        <ul class="education-description">
          <li v-for="(desc, index) in item.description" :key="index">{{ desc }}</li>
        </ul>
        <div class="education-icons">
          <img v-for="(icon, index) in item.icons" :key="index" :src="`/assets/${icon}`" :alt="icon" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.h2{
  text-align: center;
}

.education-section {
  padding: 50px 10%;
  color: white;
}

.education-grid {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.education-card {
  background: #22272e;
  padding: 20px;
  border-radius: 10px;
  width: 45%;
  min-width: 350px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.education-period {
  font-size: 14px;
  color: #888;
}

.education-title {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
}

.education-description {
  list-style: none;
  padding: 0;
  font-size: 16px;
}

.education-description li {
  margin-bottom: 5px;
}

.education-icons {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.education-icons img {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #161b22;
  padding: 5px;
}
</style>
