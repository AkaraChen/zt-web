<template>
  <div class="row">
    <div v-for="item in meta" class="col-md-6" style="margin-top: 10px" :key="item.id">
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">
            <a :href="item.link" target="_blank">{{ item.name }}</a>
          </h3>
          <p class="text-muted">{{ item.description }}</p>
          <span class="badge bg-blue-lt">{{ item.category }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="btn-list justify-content-center" style="margin-top: 20px;">
    <a href="#" @click="init()" class="btn btn-ghost-primary">查看更多</a>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
export default {
  setup() {
    const meta = ref(0)
    const init = () => {
      axios.get('https://zhutian.vercel.app/api?count=12')
        .then(response => meta.value = response.data)
        .catch(error => console.log(error));
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

.card-title {
  margin-bottom: 0.5rem;
}

.badge {
  margin-top: 0.5rem;
}
</style>