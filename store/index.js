import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      configs: {
        showResult: false,
        loading: false
      },
      seo: {
        title: '',
        description: '',
        author: '',
        image: '',
        canonical: '',
        robots: '',
        base: '',
        sitemap: '',
        themecolor: ''
      },
      examples: [{
        id: 0,
        name: 'Exemplo',
        title: 'Título da minha página',
        description: 'Descrição da minha página',
        author: 'Autor da minha página',
        canonical: 'http://meusite.com.br',
        robots: 'index/follow',
        image: 'http://meusite.com.br/image.png',
        fbadmins: 123456789,
        base: 'http://meusite.com.br',
        sitemap: 'http://meusite.com.br/sitemap.xml',
        locale: 'pt_BR',
        type: 'website',
        appid: 111111,
        ttcard: 'summary',
        color: '#FF4455'
      }]
    },
    mutations: {
      showResult (state) {
        this.state.configs.showResult = true
      }
    }
  })
}

export const strict = false
export default createStore
