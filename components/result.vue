<template>
<div class="">
  <div class="content margin-bottom-50">
    <div class="esp">
      <pre>
&lt;title&gt;{{seo.title}}&lt;/title&gt;
&lt;meta name=&quot;description&quot; content=&quot;{{seo.description}}&quot;/&gt;
&lt;meta name=&quot;author&quot; content=&quot;{{seo.author}}&quot;/&gt;
&lt;link rel=&quot;canonical&quot; href=&quot;{{seo.canonical}}&quot;/&gt;
&lt;meta name=&quot;robots&quot; content=&quot;{{seo.robots}}&quot;/&gt;
&lt;link rel=&quot;base&quot; href=&quot;{{seo.base}}&quot;/&gt;
&lt;meta rel=&quot;sitemap&quot; type=&quot;application/xml&quot; content=&quot;{{seo.sitemap}}&quot;/&gt;
&lt;meta name=&quot;theme-color&quot; content=&quot;{{seo.themecolor}}&quot;/&gt;
         </pre>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex'

export default {
  components: {},
  computed: {
    ...mapState(['seo']),
  },
  methods: {},
  data() {
    return {}
  }
}
</script>
