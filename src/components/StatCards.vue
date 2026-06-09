<template>
  <div class="card">
    <div class="item">
      <span class="bar pink"></span>
      <div>
        <div class="lab">装机容量</div>
        <div class="val">980 <small>kW</small></div>
      </div>
    </div>
    <div class="item">
      <span class="bar purple"></span>
      <div>
        <div class="lab">等效小时数</div>
        <div class="val">6 <small>H</small></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  background: rgba(255,255,255,0.6); border-radius: 18px;
  padding: 28px 26px; width: 240px;
  box-shadow: 0 8px 24px rgba(120,110,200,0.08);
  display: flex; flex-direction: column; gap: 40px;
}
.item { display: flex; gap: 14px; }
.bar { width: 6px; height: 26px; border-radius: 3px; display: inline-block; }
.bar.pink { background: var(--c-pink); }
.bar.purple { background: var(--c-purple); }
.lab { font-size: 20px; color: var(--c-text-dark); }
.val { font-size: 30px; font-weight: 700; margin-top: 6px; }
.val small { font-size: 16px; font-weight: 400; color: var(--c-text-mute); }
</style>
