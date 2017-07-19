<template>
  <div class="hello">
    <div class="container size margin">
      <div class="content">
        <div class="esp">
          <div class="title">
            <h2>Recommended Minimum</h2>
          </div>

          <div class="form-group container wrap">

            <div class="form-content flex1 basis5">
              <label for="">Title</label>
              <input type="text" name="" id="" v-model="title" placeholder="Document Title" class="input">
            </div>

            <div class="form-content flex1 basis5">
              <label for="">description</label>
              <input type="text" name="" id="" v-model="description" placeholder="Document description" class="input">
            </div>

            <div class="form-content flex1 basis5">
              <label for="">Author</label>
              <input type="text" name="" id="" v-model="author" placeholder="Author" class="input">
            </div>

            <div class="form-content flex1 basis5">
              <label for="">Image</label>
              <input type="text" name="" id="" v-model="image" placeholder="Image" class="input">
            </div>

            <div class="form-content flex1 basis5">
              <label for="">Canonical</label>
              <input type="text" name="" id="" v-model="canonical" placeholder="Canonical" class="input">
            </div>

            <div class="form-content flex1 basis5">
              <label for="">Robots</label>
              <input type="text" name="" id="" v-model="robots" placeholder="Robots" class="input">
            </div>

            <div class="form-content flex1 basis5">
              <label for="">Base</label>
              <input type="text" name="" id="" v-model="base" placeholder="Base" class="input">
            </div>

            <div class="form-content flex1 basis5">
              <label for="">Site Map</label>
              <input type="text" name="" id="" v-model="sitemap" placeholder="Site Map" class="input">
            </div>

            <div class="form-content flex1 basis5">
              <label for="">Theme Color</label>
              <input type="text" name="" id="" v-model="themecolor" placeholder="Theme Color" class="input">
            </div>

          </div>

        </div>
      </div>
    </div>

    <div class="container size margin">
      <div class="seo">
        <div class="title">
          <h2>SEO</h2>
        </div>

        <div class="seo-full ">
<pre >
<span class="ff">&lt;title&gt;</span>{{title}}<span class="ff">&lt;/title&gt;</span><br />
<span class="ff">&lt;meta</span> name="<span class="resul">description</span>" content="<span class="resul">{{description}}</span>"<span class="ff">/&gt;</span><br />
<span class="ff">&lt;meta</span> name="<span class="resul">author</span>" content="<span class="resul">{{author}}</span>"<span class="ff">/&gt;</span><br />
<span class="ff">&lt;link</span> rel="<span class="resul">base</span>" href="<span class="resul">{{base}}</span>"<span class="ff">/&gt;</span><br />
<span class="ff">&lt;link</span> rel="<span class="resul">canonical</span>" href="<span class="resul">{{canonical}}</span>"<span class="ff">/&gt;</span><br />
<span class="ff">&lt;meta</span> rel="<span class="resul">sitemap</span>" type="<span class="resul">application/xml</span>" content="<span class="resul">{{sitemap}}</span>"<span class="ff">/&gt;</span><br />
<span class="ff">&lt;meta</span> name="<span class="resul">robots</span>" content="<span class="resul">{{robots}}</span>"<span class="ff">/&gt;</span><br />
<span class="ff">&lt;meta</span> name="<span class="resul">theme-color</span>" content="<span class="resul">{{themecolor}}</span>"<span class="ff">/&gt;</span><br />
<span class="ff">&lt;meta</span> itemprop="<span class="resul">image</span>" content="<span class="resul">{{image}}</span>"<span class="ff">/&gt;</span><br />
</pre>
        </div>
      </div>

    </div>
  </div>


</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        // recommended items
        title: '',
        description: '',
        author: '',
        image: '',
        canonical: '',
        robots: '',
        base: '',
        sitemap: '',
        themecolor: '',
        // recommended items

        seos: [{
          id: 0,
          name: "Exemplo",
          title: "Título da minha página",
          description: "Descrição da minha página",
          author: "Autor da minha página",
          canonical: "http://meusite.com.br",
          robots: "index/follow",
          image: "http://meusite.com.br/image.png",
          fbadmins: 123456789,
          base: "http://meusite.com.br",
          sitemap: "http://meusite.com.br/sitemap.xml",
          locale: "pt_BR",
          type: "website",
          appid: 111111,
          ttcard: "summary",
          color: "#FF4455"
        }],
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .pre,
  code {
    word-wrap: break-word!important;
  }

  .esp {
    width: 90%;
    margin: 0 auto
  }

  .seo {
    background: #fff;
    width: 100%;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.09);
    margin-bottom: 50px;
    .title {
      margin: 10px;
      padding-top: 20px;
    }
  }

  .content {
    background: #fff;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.09);
    // padding: 20px;
    .title {
      margin: 10px;
      padding-top: 50px;
    }
  }

  .form-group {
    padding-bottom: 50px;
    .form-content {
      display: flex;
      flex-direction: column;
      margin: 10px;
      .input {
        height: 40px;
        padding-left: 10px;
        width: calc(100% - 10px);
        border-radius: 4px;
        border: none;
        background: #eeeeee;
        outline: none
      }
      .input:focus {
        background: #dddddd
      }
    }
  }

</style>
