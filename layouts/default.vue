<template lang="html">
<div>

  <header>
    <div class="header container align-center">
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

  <nuxt/>

</div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.header {
    height: 90vh;
    width: 100%;
    background: #396afc;
    background: url(~/assets/images/bg.svg), linear-gradient(120deg, #396afc, #2575fc);
    background-position: center bottom;
    background-repeat: repeat-x;
    background-size: 70%, 100%;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-duration: 8s;
    animation-timing-function: linear;
    @keyframes teste {
        from {
            background-position: bottom right;
        }
        to {
            background-position: bottom left;
        }
    }
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
</style>
