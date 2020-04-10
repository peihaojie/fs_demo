<!--
 * @Date         : 2020-04-07 19:40:23
 * @LastEditors  : HaoJie
 * @LastEditTime : 2020-04-10 14:21:17
 * @FilePath     : \src\App.vue
 -->
<template>
  <div id="app">
    <editor v-model="value" :init="init" apiKey="5iypueuughpdebgpka5hltjaxi51zcxq1u0dgxl4yh58sjl5"/>
    <button @click="click">点击保存</button>
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
// import dir from './add.js';
export default {
  name: "app",
  components: {
    editor: Editor
  },
  data() {
    return {
      value: '',
      init: {
        language: 'zh_CN',
        height: 500,
        toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons',
        plugins: [
          'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
          'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
          'table emoticons template paste help'
        ],
        menu: {
          favs: {title: '常用', items: 'code visualaid | searchreplace | spellchecker | emoticons'}
        },
        menubar: 'favs file edit view insert format tools table help',
        // branding: false,
        // menubar: false
      }
    }
  },
  mounted () {
    // tinymce.init({});
  },
  methods: {
    click() {
      console.log(this.value);
      // dir.adds(this.value)
      let xhr = new XMLHttpRequest()
      xhr.open("post", "http://localhost:3000/html")
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xhr.send(JSON.stringify({name: this.value}))
    }
  },
};
</script>

<style>
.tox-notifications-container {
  /* display: none; */
}
</style>