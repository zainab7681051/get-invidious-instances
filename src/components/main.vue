<template>
  <div class="head">
      <h1>Invidious Instances</h1>
      <button class="icon-btn" @click="showDialog = true">
      <i class="fas fa-question-circle"></i>
      </button>
  </div>
    <div v-if="showDialog" class="dialog show">
    <dialog-box/>
    <button @click="showDialog = false">X</button>
    </div>

    <ul>
      <li v-for="(ins ,i) in instances" :key="i">
        <a :href="ins" target="_blank">{{ins}}</a>
      </li>
    </ul>
</template>

<script>
import {getCurrentInstances} from '../controllers/api/invidious.api.js'
import dialogBox from "./dialogBoxContent.vue"
export default{
  data(){
    return{
      instances:{},
      showDialog:false,
    }
  },
  components: {
    dialogBox
  },
  async mounted(){
    try {
      this.instances = await getCurrentInstances(); 
    } catch (e) {
      console.log({
        get_fetch_error: e
      })
    }
  }

}

</script>


<style scoped>
.head{
  display: flex;
  justify-content: center;
  align-items: center;
}
  h1 {
    text-align: center;
    margin-top: 50px;
    font-size: 36px;
  }
  ul {
  list-style: none;
  margin-top: 50px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

ul li {
  margin: 10px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease-in-out;
}

ul li:hover {
  background-color: #0080ff;
  cursor: pointer;
}

ul li a {
  color: #333;
  font-size: 18px;
  text-decoration: none;
}

.icon-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 28px;
  color: #fff;
  transition: color .3s ease;
}

.icon-btn:hover,:focus {
  color: #f9ff0f
}

.dialog {
  position: fixed;
  top: -100%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: 90%;
  background-color: rgba(0, 0, 0);
  z-index: 9999;
  opacity: 0;
  transition: top 0.3s ease, opacity 0.3s ease;

}

.dialog.show {
  opacity: 1;
  top: 50%;
  pointer-events: auto;
}

.dialog p {
  color: #fff;
  font-size: 24px;
  margin-bottom: 20px;
}

.dialog button {
  background-color: #fff;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 4px;
  padding: 8px 18px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
}
.dialog button:hover {
  background-color: #0080ff ;
}

</style>
