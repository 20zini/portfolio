<template>
  <section class="interview-section">
    <h2 class="section-title">Interview</h2>
    <div class="interview-container">
      <div v-for="(item, index) in interviews" :key="index" class="interview-card">
        <h3 class="question">{{ item.question }}</h3>
        <p class="answer" v-html="item.answer"></p>
      </div>
    </div>
  </section>
</template>

<script setup>
const interviews = [
  {
    question: "Q. 스마트팩토리를 도메인으로 선택한 이유?",
    answer:
        "처음 스마트팩토리에 대해 접했을 때, 단순한 자동화 시스템이 아니라 <b>데이터를 기반으로 공정을 최적화하고 실시간으로 모니터링하는 구조</b>에 흥미를 느꼈습니다. 특히, <b>디지털 트윈 및 데이터 시각화</b> 기술이 제조업의 효율성을 극대화하는 데 핵심적인 역할을 한다는 점이 인상적이었습니다. 이러한 기술이 단순히 정보를 나열하는 것이 아니라, 공장 내 데이터를 직관적으로 표현하여 실제 의사결정에 영향을 줄 수 있다는 점이 매력적이었고, <b>스마트팩토리의 데이터를 더 활용 가치</b>를 높이는 개발자가 되고 싶다는 목표를 가지게 되었습니다."
  },
  {
    question: "Q. 백엔드를 선택한 이유?",
    answer:
        "백엔드를 선택한 이유는 데이터를 효율적으로 처리하고, 논리적인 문제 해결을 통해 안정적인 시스템을 구축하는 과정에 흥미를 느꼈기 때문입니다. <b>API 설계, 데이터베이스 최적화, 대규모 트래픽 처리 및 보안 강화 같은 핵심 기능을 설계하는 데 관심이 많았습니다.</b><br>또한, AI, 빅데이터, 클라우드와의 연계 가능성이 높아 지속적인 확장이 가능하다는 점에서 매력을 느꼈고, 사용자에게 안정적이고 신뢰할 수 있는 서비스를 제공하는 것이 중요한 목표이기에 백엔드를 선택하게 되었습니다.</br>"
  },
  {
    question: "Q. 개발에서 중요하게 생각하는 것은?",
    answer:
        "개발에서 가장 중요한 것은 사용자의 경험을 최우선으로 고려하는 것입니다. <b>단순히 기능을 구현하는 것이 아니라, 직관적이고 편리한 서비스를 제공하기 위해 끊임없이 고민해야 합니다. </b><b>문제 해결 능력과 끈기, 그리고 새로운 기술을 지속적으로 학습하려는 태도 역시 개발자로서 성장하는 데 필수적인 요소라고 생각합니다.</b>"
  }
];
</script>

<style scoped>
.interview-section {
  padding: 50px;
  color: white;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.interview-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.interview-card {
  background-color: #2c2c2c;
  padding: 20px;
  border-radius: 12px;
  max-width: 800px;
  text-align: left;
}

.question {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.answer {
  font-size: 1rem;
  line-height: 1.6;
}
</style>
