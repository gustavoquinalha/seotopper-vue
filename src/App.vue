<template>
<div id="app">
  <header>
    <div class="header container center">
      <div class="intro">
        <img src="./assets/images/logo.svg" alt="">
        <!-- <pre>
  <code class="javacript">
    $(document).ready(function() {
      $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
      });
    });

</code>
</pre> -->
<pre>
<!--span class="lolo">
____           _____
/ ___|  ___  __|_   _|__  _ __  _ __   ___ _ __
\___ \ / _ \/ _ \| |/ _ \| '_ \| '_ \ / _ \ '__|
___) |  __/ (_) | | (_) | |_) | |_) |  __/ |
|____/ \___|\___/|_|\___/| .__/| .__/ \___|_|
                        |_|   |_|
</span-->
<span class="ff">&lt;title&gt;</span>Título da minha página<span class="ff">&lt;/title&gt;</span><br />
<span class="ff">&lt;meta</span> name="<span class="resul">description</span>" content="<span class="resul">Descrição da minha página</span>"<span class="ff">/&gt;</span><br />
<span class="ff">&lt;meta</span> name="<span class="resul">author</span>" content="<span class="resul">Eu</span>"<span class="ff">/&gt;</span><br />
         </pre>

        <!-- <div class="btn-git">
          <a class="github-button" href="https://github.com/gustavoquinalha/seotopper" data-style="mega" data-count-href="/gustavoquinalha/seotopper/stargazers" data-count-api="/repos/gustavoquinalha/seotopper#stargazers_count" data-count-aria-label="# stargazers on GitHub"
          aria-label="Star gustavoquinalha/seotopper on GitHub">Star</a>
          <a class="github-button" href="https://github.com/gustavoquinalha/seotopper/fork" data-style="mega" data-count-href="/gustavoquinalha/seotopper/network" data-count-api="/repos/gustavoquinalha/seotopper#forks_count" data-count-aria-label="# forks on GitHub"
          aria-label="Fork gustavoquinalha/seotopper on GitHub">Fork</a>
        </div> -->
      </div>
    </div>
  </header>


  <!-- <router-link to="/">home</router-link>
    <router-link to="/teste">teste</router-link>
    <router-link to="/fdsfsdfdsfsdf">404</router-link> -->


  <router-view></router-view>
</div>
</template>

<script>
  import highlight from "./assets/highlight.min.js";
  hljs.initHighlightingOnLoad();
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import './src/assets/css/main.scss';
  .header {
    height: 90vh;
    width: 100%;
    background: #396afc;
    background: url(./assets/images/bg.svg), linear-gradient(120deg, #396afc, #2575fc);
    background-position: center bottom;
    background-repeat: repeat-x;
    background-size: 70%, 100%;
    // animacao
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    // animation-name: teste;
    animation-duration: 8s;
    animation-timing-function: linear;
    // animacao
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
    pre,
    code {
      text-align: left;
    }
    .btn-git {
      margin-top: 10px;
    }
  }
</style>
