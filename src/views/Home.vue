<template>
  <div class="row">
    <div
      v-for="item in meta"
      style="margin-top: 10px"
      :key="item.id"
    >
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">
            <a :href="item.link" target="_blank">
              <p v-if="item.name">{{ item.name }}</p>
              <div v-else class="skeleton-line skeleton-line-full"></div>
            </a>
          </h3>
        </div>
      </div>
    </div>
  </div>
  <div class="btn-list justify-content-center" style="margin-top: 20px;">
    <a href="#" @click="init()" class="btn btn-pill btn-blue btn-lg">刷新</a>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
export default {
  setup() {
    const meta = ref(['','','','','','','','','','','',''])
    const init = () => {
      meta.value = ['','','','','','','','','','','',''];
      axios.get('https://zhutian.vercel.app/api?count=12')
        .then(response => (meta.value = response.data))
        .catch(error => {
          console.log(error)
        });
    }
    init()
    return { meta, init }
  }
}
</script>

<style>
.zoom {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
p {
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>