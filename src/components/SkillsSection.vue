<template>
  <section id="skills">
    <h2 class="skills">Skill & Tools</h2>
    <div class="skills-container">
      <!-- Front-End Skills (왼쪽 정렬) -->
      <div class="skill-category frontend">
        <h3>Back-End</h3>
        <div class="icons">
          <img v-for="skill in backEndSkills" :key="skill.name" :src="skill.icon" :alt="skill.name" />
        </div>
      </div>

      <!-- Tools (오른쪽 정렬) -->
      <div class="skill-category tools">
        <h3>Tools</h3>
        <div class="icons">
          <img v-for="tool in tools" :key="tool.name" :src="tool.icon" :alt="tool.name" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Front-End 기술 리스트
const backEndSkills = ref([
  { name: 'Java', icon: '/assets/java.png' },
  { name: 'c#', icon: '/assets/c.png' },
  { name: '.NET', icon: '/assets/dotnet.png' },
  { name: 'SpringBoot', icon: '/assets/springboot.png' },
  { name: 'Vue.js', icon: '/assets/vue.png' },
  { name: 'MySQL', icon: '/assets/mysql.png' },
  { name: 'MSSQL', icon: '/assets/mssql.png' },
]);

// 사용 툴 리스트
const tools = ref([
  { name: 'Confluence', icon: '/assets/confluence.png' },
  { name: 'Jira', icon: '/assets/jira.png' },
  { name: 'GitHub', icon: '/assets/git.png' },
  { name: 'Notion', icon: '/assets/notion.png' },
  { name: 'Slack', icon: '/assets/slack.png' },
]);
</script>


<style scoped>


.skills {
  font-size: 28px;
  text-align: center;
  padding: 40px;
  color: white;
}

.skills-container {
  display: flex;
  justify-content: center; /* 가운데 정렬 */
  gap: 100px; /* 두 그룹 간 간격 */
  align-items: flex-start;
}

.category {
  text-align: center;
}

.icons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.icons img {
  width: 60px; /* 아이콘 크기 */
  height: 60px;
  padding: 10px;
  background-color: #1c1c1c;
  border-radius: 12px;
}
</style>