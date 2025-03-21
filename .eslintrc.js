module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',  // ✅ Vue 3 추천 규칙 적용
        'prettier'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        parser: '@babel/eslint-parser',
        requireConfigFile: false
    },
    rules: {
        'vue/multi-word-component-names': 'off',  // Vue 파일명 관련 경고 끄기
        'no-unused-vars': 'warn' // 사용하지 않는 변수 경고만 표시
    }
};
