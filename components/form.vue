<template>
<div class="size margin">
  <div class="content">
    <div class="esp">
      <div class="title text-align-center">
        <h2>Basic meta tags</h2>
      </div>

      <form class="form-group container wrap" @submit.prevent="validateBeforeSubmit">

        <div class="form-content col-12 col-sm-12 col-md-6 col-lg-6">
          <label for="">Title</label>
          <input type="text" name="title" id="" v-model="seo.title" placeholder="Document Title" class="input" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('title') }" />
          <span v-show="errors.has('title')" class="help is-danger">- The title field is required.</span>
          <span v-show="errors.has('title')" class="help is-danger">- Must be greater than 57 characters</span>
        </div>

        <div class="form-content col-12 col-sm-12 col-md-6 col-lg-6">
          <label for="">Description</label>
          <input type="text" name="description" id="" v-model="seo.description" placeholder="Document description" class="input" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('description') }" />
          <span v-show="errors.has('description')" class="help is-danger">{{ errors.first('description') }}</span>
        </div>

        <div class="form-content col-12 col-sm-12 col-md-6 col-lg-6">
          <label for="">Author</label>
          <input type="text" name="author" id="" v-model="seo.author" placeholder="Author" class="input" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('author') }" />
          <span v-show="errors.has('author')" class="help is-danger">{{ errors.first('author') }}</span>
        </div>

        <div class="form-content col-12 col-sm-12 col-md-6 col-lg-6">
          <label for="">Image</label>
          <input type="text" name="image" id="" v-model="seo.image" placeholder="Image" class="input" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('image') }" />
          <span v-show="errors.has('image')" class="help is-danger">{{ errors.first('image') }}</span>
        </div>

        <div class="form-content col-12 col-sm-12 col-md-6 col-lg-6">
          <label for="">Canonical</label>
          <input type="text" name="canonical" id="" v-model="seo.canonical" placeholder="Canonical" class="input" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('canonical') }" />
          <span v-show="errors.has('canonical')" class="help is-danger">{{ errors.first('canonical') }}</span>
        </div>

        <div class="form-content col-12 col-sm-12 col-md-6 col-lg-6">
          <label for="">Robots</label>
          <input type="text" name="robots" id="" v-model="seo.robots" placeholder="Robots" class="input" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('robots') }" />
          <span v-show="errors.has('robots')" class="help is-danger">{{ errors.first('robots') }}</span>
        </div>

        <div class="form-content col-12 col-sm-12 col-md-6 col-lg-6">
          <label for="">Base</label>
          <input type="text" name="base" id="" v-model="seo.base" placeholder="Base" class="input" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('base') }" />
          <span v-show="errors.has('base')" class="help is-danger">{{ errors.first('base') }}</span>
        </div>

        <div class="form-content col-12 col-sm-12 col-md-6 col-lg-6">
          <label for="">Site Map</label>
          <input type="text" name="sitemap" id="" v-model="seo.sitemap" placeholder="Site Map" class="input" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('sitemap') }" />
          <span v-show="errors.has('sitemap')" class="help is-danger">{{ errors.first('sitemap') }}</span>
        </div>

        <div class="form-content col-12 col-sm-12 col-md-6 col-lg-6">
          <label for="">Theme Color</label>
          <input type="text" name="themecolor" id="" v-model="seo.themecolor" placeholder="Theme Color" class="input" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('themecolor') }" />
          <span v-show="errors.has('themecolor')" class="help is-danger">{{ errors.first('themecolor') }}</span>
        </div>

        <div class="form-content flex-grow-1 flex-basis-1200">
          <div class="container align-center margin-top-20 margin-bottom-20">
            <button type="button" name="button" class="btn btn-rounded btn-round btn-outline" @click="validateBeforeSubmit()">
            <img src="~/assets/images/icon.svg" width="100%" alt="">
            <span>GENERATE SEO</span>
          </button>
          </div>
        </div>
      </form>

    </div>
  </div>

  <resultSeo v-show="configs.showResult" />

</div>
</template>

<script>
import { mapState } from 'vuex'
import resultSeo from '@/components/result';

import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

export default {
  name: 'formSEO',
  computed: {
    ...mapState(['seo', 'configs']),
  },
  components: {
    resultSeo
  },
  data() {
    return {}
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$store.commit('showResult')
          console.log("Form Submitted")
          return;
        }
        console.log("Correct them errors!")
      });
    }
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
