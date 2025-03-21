<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({ show: Boolean });
const emit = defineEmits(["close"]);
</script>

<template>
  <div v-if="show" class="modal-overlay" @click.self="emit('close')">
    <div class="modal-content">
      <button class="close-button" @click="emit('close')">✖</button>

      <!-- ✅ 모달 헤더 -->
      <div class="modal-header">
        <h1 class="modal-title">통합 생산 모니터링 시스템</h1>
        <p class="modal-duration">2024.12 - 2024.01 웹 개발</p>
      </div>

      <!-- ✅ 본문 -->
      <div class="modal-body">

        <!-- ✅ 이미지 중앙 정렬 (완전히 하얀 배경 안으로 이동) -->
        <div class="image-wrapper">
          <img src="/assets/project3.png" alt="ERP System" class="project-image" />
        </div>

        <p class="description">통합 생산 모니터링 시스템을 통해 실시간 데이터 모니터링을 통해 공정 가시성을 확보하고, 데이터 기반 의사 결정을 지원하는 시스템입니다. 생산 및 설비 데이터를 시각화하여 엔지니어들이 공정 상태를 쉽게 파악할 수 있도록 설계되었습니다.</p>

        <hr class="thin-divider">

        <div class="section">
          <h2 class="section-title">📌 주요 기능</h2>
          <ul>
            <li>- 생산과 설비 페이지를 통해 실시간 공정상태 파악 가능</li>
            <li>- 각 공정별로 실적과 계획수량 파악가능</li>
            <li>- 고장 카테고리 확인을 통해 빠르게 예지보전팀이 상태 파악가능</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <hr class="thin-divider">

        <div class="section">
          <h2 class="section-title">✨ 내 역할</h2>
          <ul>
            <li>DB구축 - 22개테이블</li>
            <li>필요한 쿼리와 테이블 문서화를 통해 백엔드팀원에게 제공</li>
            <li>Junit으로 단위테스트 수헹</li>
          </ul>
        </div>

        <hr class="thin-divider">

        <!-- ✅ 작업 화면 (2개씩 배치) -->
        <div class="section">
          <h2 class="section-title">📸 작업 화면</h2>
          <div class="image-grid">

            <div class="image-wrapper">
              <div class="image-card">
                <img src="/assets/tm1.png" alt="로그인 화면" />
              </div>
              <p class="p">Architecture</p> <!-- ✅ 이제 글씨가 이미지 바깥쪽에 위치 -->
            </div>

            <div class="image-wrapper">
              <div class="image-card">
                <img src="/assets/tm2.png" alt="메인 메뉴 화면" />
              </div>
              <p class="p">설비현황</p>
            </div>

            <div class="image-wrapper">
              <div class="image-card">
                <img src="/assets/tm3.png" alt="캡슐 생성 화면" />
              </div>
              <p class="p">알람조치내역</p>
            </div>

            <div class="image-wrapper">
              <div class="image-card">
                <img src="/assets/tm4.png" alt="진척도 화면" />
              </div>
              <p class="p">단위테스트</p>
            </div>

            <div class="image-wrapper">
              <div class="image-card">
                <img src="/assets/tm5.png" alt="진척도 화면" />
              </div>
              <p class="p">사용자관리</p>
            </div>

            <div class="image-wrapper">
              <div class="image-card">
                <img src="/assets/tm6.png" alt="진척도 화면" />
              </div>
              <p class="p">ERD</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-title,
.modal-duration,
.description,
.section-title,
ul li,
.p{
  color : black !important;
}
.image-card p {
  color: black !important;
}
/* ✅ 모달 오버레이 */
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

/* ✅ 모달 콘텐츠 (스크롤 가능) */
.modal-content {
  width: 80%;
  max-width: 900px;
  max-height: 90vh;
  background: white;
  border-radius: 15px;
  overflow-y: auto;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  color: #333;
}

/* ✅ 닫기 버튼 */
.close-button {
  position: absolute;
  top: 5px; /* 살짝 위로 조정 */
//right: -2px; /* 바깥쪽으로 이동 */
  border: none;
  background: transparent;
  font-size: 24px; /* 크기 조정 */
  cursor: pointer;
  color: black; /* 버튼이 보이도록 색상 변경 */
}

/* ✅ 모달 헤더 */
.modal-header {
  background: #ff6f61;
  color: white;
  padding: 50px 20px;
  border-radius: 15px 15px 0 0;
  position: relative;
}

/* ✅ 제목 스타일 (글씨 크기 키움) */
.modal-title {
  font-size: 28px;
  font-weight: bold;
}

.modal-duration {
  font-size: 16px;
  margin-top: 5px;
}

/* ✅ 이미지 중앙 정렬 (하얀 배경 안으로 이동) */
.image-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center; /* 가운데 정렬 */
  text-align: center;
}

.project-image {
  display: block;
  margin: 0 auto; /* 중앙 정렬 */
  width: 60%;
  max-width: 550px;
  border-radius: 10px;
}

/* ✅ 본문 */
.modal-body {
  padding: 30px 20px;
  text-align: center;
}

/* ✅ 설명 텍스트 */
.description {
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

/* ✅ 초얇은 구분선 */
.thin-divider {
  border: 0;
  height: 0.2px;
  background: rgba(0, 0, 0, 0.15);
  margin: 15px auto;
  width: 80%;
  opacity: 0.2;
}

/* ✅ 섹션 스타일 */
.section {
  margin-top: 30px;
}

/* ✅ 섹션 제목 */
.section-title {
  font-size: 22px;
  font-weight: bold;
  color: #333;
  display: block;
}

/* ✅ 리스트 스타일 */
ul {
  list-style: none;
  padding: 0;
}

ul li {
  padding: 8px 0;
  font-size: 16px;
  color: #333;
}

/* ✅ 작업 화면 (2개씩 배치) */
.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 두 개씩 배치 */
  gap: 20px;
  justify-content: center;
}

/* ✅ 작업 화면 카드 스타일 */
.image-card {
  background: #f7f7f7;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  justify-content: center; /* 내부 요소 중앙 정렬 */
  width: 100%;
  max-width: 280px; /* 카드 크기 조정 */
  height: auto; /* 높이 자동 조절 */
}


.image-card img {
  width: 100%;
  height: 100%; /* 이미지가 영역을 꽉 채우도록 설정 */
  object-fit: cover; /* 비율을 유지하면서 꽉 채우기 */
  border-radius: 5px;
}

.image-card p {
  font-size: 14px;
  font-weight: 500;
  color: black;
  margin-top: 10px; /* 이미지와 간격 */
  text-align: center;
}

/* ✅ 반응형 (작업 화면을 한 줄 1개씩 표시) */
@media (max-width: 768px) {
  .image-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
