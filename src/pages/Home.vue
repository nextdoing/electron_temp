<template>
  <div style="text-align: center;">
    <div>
      <img src="~@/assets/img/logo.png" />
    </div>
    <div style="font-size: 21px; padding: 20px;">
      {{ $t("welcome") }}
    </div>
    <p>
        <span v-for="(l, i) in lang" :key="l.id" :style="langStyle(i)" :class="$i18n.locale === l.id ? 'active': 'pointer'" @click="changeLang(l.id)">{{l.label}}</span>
    </p>
    <div style="display: flex; justify-content: center;">
      <div class="home-button app-action-button" @click="openDialogByRemote">{{ $t("Click Me!") }}</div>
      <div class="home-button app-action-button" @click="openDialogByIpc">Click Me!!!</div>
    </div>
  </div>
</template>

<script>
const ipc = require("electron").ipcRenderer;
export default {
  data() {
    return {
        lang: [{
            id: 'zh',
            label: '中文'
        }, {
            id: 'en',
            label: 'English'
        }]
    };
  },
  methods: {
    openDialogByRemote() {
      const { dialog } = require("electron").remote;
      dialog.showMessageBox({
        title: "你好",
        message: "来自主进程的消息：",
        detail: "我是来自主进程的dialog，使用remote过来的！",
        type: "info"
      });
    },
    openDialogByIpc() {
      ipc.send("showDialog", `<${this.$t("a message")}>`);
    },
    langStyle(i) {
        return {paddingLeft: i ? '20px' : 0}
    },
    changeLang(id) {
        this.$i18n.locale = id
        ipc.send('appLanguageChange', id)
    }
  }
};
</script>

<style>
.home-button {
  background-color: #1fa9ee;
  opacity: 1;
  border-radius: 4px;
  cursor: pointer;
  height: 45px;
  width: 150px;
  margin: 10px 10px;
  text-align: center;
  line-height: 45px;
}
.pointer {
    cursor: pointer;
}
.active {
    color: cadetblue;
}
</style>
