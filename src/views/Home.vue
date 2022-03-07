<template>
  <div class="row">
    <div
      v-for="item in meta"
      class="col-md-4 col-lg-3 col-sm-6"
      style="margin-top: 10px"
      :key="item"
    >
      <div class="card">
        <img v-if="item.name" class="zoom" :src="image(item.cover)" alt />
        <div v-else class="skeleton-image zoom"></div>
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
</template>

<script>
import axios from 'axios'
import Icon from "../tabler/Icon";
export default {
  components: { Icon },
  data() {
    return {
      meta: undefined,
    }
  },
  methods: {
    image(cover) {
      if (cover == 'https://some.image') return 'https://pic.rmb.bdstatic.com/bjh/1bc4fa1225de983ad61b287ca11b328d.png'
      return cover
    }
  },
  created() {
    const data = []
    for (let i = 1; i <= 12; i++) {
      data.push({ "": "", });
    }
    this.meta = data
    axios.get('https://backend-delta-five.vercel.app/api?count=12')
      .then(response => (this.meta = response.data))
      .catch(error => {
        console.log(error)
      });
  },
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