<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -5 205 150">
    <defs />
    <g id="p-e">
      <line class="cls-6" x1="104" y1="28" x2="104" y2="59">
        <animate
          attributeName="stroke-dashoffset"
          values="50;0"
          dur="2s"
          repeatCount="indefinite"
        />
      </line>
    </g>
    <g id="e-s">
      <line class="cls-8" x1="104" y1="82" x2="104" y2="106">
        <animate
          attributeName="stroke-dashoffset"
          values="50;0"
          dur="2s"
          repeatCount="indefinite"
        />
      </line>
    </g>
    <g id="c-p">
      <line class="cls-6" x1="27" y1="25" x2="69" y2="25">
        <animate
          attributeName="stroke-dashoffset"
          values="50;0"
          dur="2s"
          repeatCount="indefinite"
        />
      </line>
    </g>
    <g id="r-p">
      <line class="cls-8" x1="132" y1="25" x2="177" y2="25">
        <animate
          attributeName="stroke-dashoffset"
          values="0;50"
          dur="2s"
          repeatCount="indefinite"
        />
      </line>
    </g>
    <g id="s-r">
      <line class="cls-6" x1="180" y1="112" x2="137" y2="112">
        <animate
          attributeName="stroke-dashoffset"
          values="0;50"
          dur="2s"
          repeatCount="indefinite"
        />
      </line>
    </g>
    <g id="s-c">
      <line class="cls-8" x1="71" y1="112" x2="28" y2="112">
        <animate
          attributeName="stroke-dashoffset"
          values="50;0"
          dur="2s"
          repeatCount="indefinite"
        />
      </line>
    </g>
    <rect class="cls-1" x="60" y="50" width="86" height="38.13" rx="8" />
    <text class="cls-2" transform="translate(85 74)">Stream</text>
    <rect class="cls-4" x="60" y="9" width="86" height="32.07" />
    <rect class="cls-5" x="60" y="96" width="86" height="32.07" />

    <text class="cls-2" transform="translate(79 30)">Publisher</text>
    <text class="cls-2" transform="translate(78 116)">Subsciber</text>
    <rect class="cls-3" x="50" y="1" width="106" height="135"></rect>
    <rect class="cls-16" x="172" y="9" width="32" height="47.18" />
    <rect class="cls-16" x="172" y="80" width="32" height="47.18" />
    <text
      class="cls-17"
      transform="matrix(0.47, 0.88, -0.88, 0.47, 174.38, 12.72)"
    >
      remote server
    </text>
    <text
      class="cls-17"
      transform="matrix(0.47, 0.88, -0.88, 0.47, 174.38, 84.94)"
    >
      remote server
    </text>
    <rect class="cls-22" x="1" y="9" width="32" height="47.18" />
    <rect class="cls-22" x="1" y="81" width="32" height="47.18" />
    <text
      class="cls-17"
      transform="matrix(0.47, 0.88, -0.88, 0.47, 9.68, 24.12)"
    >
      client
    </text>
    <text
      class="cls-17"
      transform="matrix(0.47, 0.88, -0.88, 0.47, 9.68, 95.91)"
    >
      client
    </text>

    <circle id="ring2" cx="83" cy="69" r="12">
      <animate
        attributeName="stroke-dashoffset"
        values="40;0"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
    <circle id="ring1" cx="125" cy="69" r="12">
      <animate
        attributeName="stroke-dashoffset"
        values="0;40"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
</template>
<style scoped>
line {
  animation: linena 2s linear infinite;
  stroke-dasharray: 10, 10, 5;
}
circle {
  fill: none;
  stroke: #fff;
  stroke-dasharray: 2, 2, 2;
}
.cls-1 {
  fill: #e86024;
}
.cls-1,
.cls-16,
.cls-22,
.cls-4,
.cls-5 {
  stroke: none;
}
.cls-2 {
  font-size: 12px;
  fill: white;
}
.cls-4,
.cls-5 {
  fill: #5824e8;
}
.cls-3,
.cls-11,
.cls-12,
.cls-13,
.cls-14,
.cls-15,
.cls-24,
.cls-25,
.cls-26,
.cls-6,
.cls-7,
.cls-8 {
  fill: none;
}
.cls-24,
.cls-25,
.cls-6,
.cls-7 {
  stroke: aqua;
}
.cls-24,
.cls-25,
.cls-26,
.cls-6,
.cls-7,
.cls-8 {
  stroke-width: 1px;
}

.cls-26,
.cls-8 {
  stroke: #fbb03b;
}
.cls-3 {
  stroke-dasharray: 5, 5, 5;
  stroke: #b3b3b3;
}
.cls-16,
.cls-22 {
  fill: #e8b424;
}
.cls-17 {
  font-size: 8px;
  fill: #fff;
}
</style>
