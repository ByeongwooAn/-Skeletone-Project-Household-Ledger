<template>
    <div class="screen">
      <button @click="handleClick"class="circle-button">
        <svg class="plus-icon" viewBox="0 0 24 24" fill="white"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M5 12H19" stroke="white" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter()

const handleClick = () => {
  router.push('/cashflow') 
}
  </script>
  
  <style scoped>

  .circle-button {
    width: 100px;
    height: 100px;
    background-color: #F99810;
    border: none;
    border-radius: 50%;
    position: relative;
    /* display: flex; */
    position: fixed;
      bottom: 50px;
      right: 50px;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  }
  
  .plus-icon {
    
    width: 23px;
    height: 23px;
  }
  @media (max-width: 393px) {
    .circle-button {
      width: 75px;
      height: 75px;
      position: fixed;
      bottom: 35px;
      right: 35px;
    }

  }
  </style>
  