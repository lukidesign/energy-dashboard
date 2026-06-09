<template>
  <div class="metrics">
    <div class="m"><div class="lab">日发电量</div>
      <div class="val">📈 6 <small>MWh</small></div></div>
    <div class="divider"></div>
    <div class="m"><div class="lab">总发电量</div>
      <div class="val">4.40 <small>GWh</small></div></div>
  </div>
</template>
<style scoped>
.metrics { display: flex; align-items: stretch; gap: 30px; }
.lab { font-size: 22px; color: var(--c-text-mute); }
.val { font-size: 34px; font-weight: 700; margin-top: 8px; }
.val small { font-size: 16px; font-weight: 400; color: var(--c-text-mute); }
.divider { width: 1px; background: #d6d8ea; }
</style>
