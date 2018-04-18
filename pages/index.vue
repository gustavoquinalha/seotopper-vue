<template>
<div class="">
  <formSeo/>
</div>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex'

import formSeo from '@/components/form';

export default {
  components: {
    formSeo
  },
  computed: {
    ...mapState(['seo']),
  },
  methods: {},
  data () {
    return {
    }
  }
}
</script>
