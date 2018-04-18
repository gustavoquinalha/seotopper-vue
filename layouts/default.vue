<template lang="html">
<div>

  <header>
    <div class="header container align-items-end justify-content-center">
      <div class="intro">
        <img src="~/assets/images/logo.svg" alt="" />
        <code>
          <pre>
&lt;title&gt;T&iacute;tulo da minha p&aacute;gina&lt;/title&gt;
&lt;meta name=&quot;description&quot; content=&quot;Descri&ccedil;&atilde;o da minha p&aacute;gina&quot;/&gt;
&lt;meta name=&quot;author&quot; content=&quot;Eu&quot;/&gt;
           </pre>
        </code>
      </div>
    </div>
  </header>

  <div class="seotopper"></div>

  <nuxt/>

  <footerSeo/>

</div>
</template>

<script>
import footerSeo from '@/components/footer';
export default {
  components: {
    footerSeo
  }
}
</script>

<style lang="scss">
.header {
    min-height: 50vh;
    width: 100%;
    background: $color-primary;
    .intro {
        width: 500px;
        max-width: 90%;
        text-align: center;
    }
    img {
        width: 100%;
    }
    code,
    pre {
        text-align: left;
    }
}
.seotopper {
    background: url("~/assets/images/bg.svg");
    background-size: contain;
    background-repeat: repeat-x;
    background-position: bottom center;
    min-height: 50vh;
}
</style>
