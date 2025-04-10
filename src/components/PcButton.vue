<template>
    <div class="screen">
      <button class="circle-button">
        <svg class="plus-icon" viewBox="0 0 24 24" fill="white"
             xmlns="http://www.w3.org/2000/svg"
             style="position: absolute; top: 2px; left: 4px;">
          <path d="M12 5V19M5 12H19" stroke="white" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  html, body {
    margin: 0;
    padding: 0;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .screen {
    width: 1680px;
    height: 1027px;
    background-color: white;
    display: grid;
    grid-template-rows: 889px auto 35px;
    grid-template-columns: 1fr auto 35px;
  }
  
  .circle-button {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    width: 100px;
    height: 100px;
    background-color: #F99810;
    border: none;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  }
  
  .plus-icon {
    width: 23px;
    height: 23px;
  }
  </style>
  