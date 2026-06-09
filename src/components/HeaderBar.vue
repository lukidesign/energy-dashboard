<template>
  <header class="header">
    <span class="tag">粤采集</span>
    <div class="logo">
      <svg width="34" height="34" viewBox="0 0 24 24">
        <polygon points="12,3 21,8 12,13 3,8" fill="#7b3cff"/>
        <polygon points="12,11 21,16 12,21 3,16" fill="#e83e8c" opacity="0.9"/>
      </svg>
      <span class="title gradient-text">爱士惟数字能源平台</span>
    </div>
  </header>
</template>
<style scoped>
.header { position: absolute; top: 40px; left: 40px; display: flex; align-items: center; }
.tag {
  position: absolute; top: -28px; left: 0;
  background: var(--c-pink); color: #fff; font-size: 13px;
  padding: 3px 10px; border-radius: 4px 12px 12px 4px;
}
.logo { display: flex; align-items: center; gap: 12px; }
.title { font-size: 30px; font-weight: 700; letter-spacing: 1px; }
</style>
