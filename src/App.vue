<template>
  <div>
  <main-comp/>
  </div>
  <div class="footer">
  	<a href="https://github.com/zainab7681051/FreeYouTube" target="_blank">
  		<i class="fa-brands fa-github"></i>
  	</a>
	  <p>{{ new Date().getFullYear() }}<br>&copy <a href="https://zainab-portfolio.web.app" target="_blank">Zainab</a> </p>
  </div>
</template>

<script setup>
import mainComp from './components/main.vue'
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 18px;
  position: relative;
  left: 0;
  bottom: 0;
}


.footer a{
	font-size: 2rem;
	color: #fff;
	transition: color 0.4s ease;
}

.footer a:hover{
	color: #0080ff
}

.footer p{
	font-size: 15px;
}

.footer p a{
	font-size: 15px;
	text-decoration: none;
	transition: all .3s ease-in-out;
}
.footer p a:hover{
	color: #FC1555
}

</style>
