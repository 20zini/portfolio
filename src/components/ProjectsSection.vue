<script setup>
import { ref, shallowRef, defineAsyncComponent } from 'vue';

// ✅ 프로젝트 데이터
const projects = ref([
  { id: 1, title: '전자작업허가서 ERP 시스템', image: '/assets/project1.png', component: defineAsyncComponent(() => import('@/components/ProjectDetails/ErpSystem.vue')) },
  { id: 2, title: '스마트팩토리 DT F/W 구축', image: '/assets/project2.png', component: defineAsyncComponent(() => import('@/components/ProjectDetails/FrameWork.vue')) },
  { id: 3, title: '통합생산 모니터링 시스템', image: '/assets/project3.png', component: defineAsyncComponent(() => import('@/components/ProjectDetails/TotalMornitoring.vue')) },
  { id: 4, title: '스마트 공장 제품 품질 상태 분류 AI 온라인 해커톤', image: '/assets/project4.png', component: defineAsyncComponent(() => import('@/components/ProjectDetails/AiHaker.vue')) },
  { id: 5, title: '도장 공장 결함 탐지', image: '/assets/project5.png', component: defineAsyncComponent(() => import('@/components/ProjectDetails/StampFactory.vue')) },
]);

// ✅ 모달 상태 관리
const showModal = ref(false);
const selectedProject = shallowRef(null);

const openProject = (project) => {
  selectedProject.value = project;
  showModal.value = true;
};

const closeProject = () => {
  showModal.value = false;
  selectedProject.value = null;
};
</script>

<template>
  <section id="projects">
    <h2 class="section-title">🚀 프로젝트 목록</h2>
    <div class="projects-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <div class="project-image-container">
          <img :src="project.image" :alt="project.title" class="project-image" />
          <div class="overlay">
            <h3 class="overlay-title">{{ project.title }}</h3>
            <button class="view-details" @click="openProject(project)">자세히 보기</button>
          </div>
        </div>
        <h3 class="project-title">{{ project.title }}</h3>
      </div>
    </div>

    <!-- ✅ 프로젝트 상세 모달 -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeProject">
      <component :is="selectedProject?.component" :show="showModal" @close="closeProject" />
    </div>
  </section>
</template>

<style scoped>
/* ✅ 프로젝트 카드 레이아웃 (한 줄로 정렬) */
.projects-grid {
  display: flex;
  flex-wrap: nowrap; /* 한 줄 유지 */
  gap: 20px;
  justify-content: flex-start; /* 왼쪽 정렬 */
  overflow-x: auto; /* 가로 스크롤 허용 */
  padding-bottom: 10px;
}
.project-card {
  width: 280px;
  background: #161b22;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ✅ 이미지 컨테이너 */
.project-image-container {
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;
}

/* ✅ 프로젝트 이미지 */
.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

/* ✅ 오버레이 */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.project-image-container:hover .overlay {
  opacity: 1;
}

/* ✅ 자세히 보기 버튼 */
.view-details {
  background: transparent;
  color: white;
  border: 1px solid white;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}
.view-details:hover {
  background: white;
  color: black;
}

/* ✅ 모달 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
</style>
