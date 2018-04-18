<template>
<div class="size margin">
  <div class="content">
    <div class="esp">
      <div class="title">
        <h2>Recommended Minimum</h2>
      </div>

      <div class="form-group container wrap">

        <div class="form-content flex-grow-1 flex-basis-400">
          <label for="">Title</label>
          <input type="text" name="" id="" v-model="seo.title" placeholder="Document Title" class="input" />
        </div>

        <div class="form-content flex-grow-1 flex-basis-400">
          <label for="">description</label>
          <input type="text" name="" id="" v-model="seo.description" placeholder="Document description" class="input" />
        </div>

        <div class="form-content flex-grow-1 flex-basis-400">
          <label for="">Author</label>
          <input type="text" name="" id="" v-model="seo.author" placeholder="Author" class="input" />
        </div>

        <div class="form-content flex-grow-1 flex-basis-400">
          <label for="">Image</label>
          <input type="text" name="" id="" v-model="seo.image" placeholder="Image" class="input" />
        </div>

        <div class="form-content flex-grow-1 flex-basis-400">
          <label for="">Canonical</label>
          <input type="text" name="" id="" v-model="seo.canonical" placeholder="Canonical" class="input" />
        </div>

        <div class="form-content flex-grow-1 flex-basis-400">
          <label for="">Robots</label>
          <input type="text" name="" id="" v-model="seo.robots" placeholder="Robots" class="input" />
        </div>

        <div class="form-content flex-grow-1 flex-basis-400">
          <label for="">Base</label>
          <input type="text" name="" id="" v-model="seo.base" placeholder="Base" class="input" />
        </div>

        <div class="form-content flex-grow-1 flex-basis-400">
          <label for="">Site Map</label>
          <input type="text" name="" id="" v-model="seo.sitemap" placeholder="Site Map" class="input" />
        </div>

        <div class="form-content flex-grow-1 flex-basis-400">
          <label for="">Theme Color</label>
          <input type="text" name="" id="" v-model="seo.themecolor" placeholder="Theme Color" class="input" />
        </div>

      </div>

    </div>
  </div>

  <resultSeo/>

</div>
</template>

<script>
import { mapState } from 'vuex'
import resultSeo from '@/components/result';

export default {
  name: 'formSEO',
  computed: {
    ...mapState(['seo']),
  },
  components: {
    resultSeo
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.pre,
code {
    word-wrap: break-word!important;
}

.content {
    width: 100%;
    margin-top: 50px;
    .title {
        margin: 10px;
    }
}
</style>
