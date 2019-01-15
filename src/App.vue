<template>
  <div class="app">
    <div class="title">
      <h1>Markdown Previewer</h1>
    </div>
    <button type="button" id="download-button" @click="triggerDownload()">
      Download file
      <img
        src="https://img.icons8.com/ios/1600/download-from-cloud.png"
        id="button-image"
      >
    </button>
    <div class="container">
      <div>
        <div class="subtitle">
          <h2>markdown</h2>
        </div>
        <!-- <div id="markdown">
        </div>-->
        <textarea v-model="markdown" ref="markdown"></textarea>
      </div>

      <div>
        <div class="subtitle">
          <h2>preview</h2>
        </div>
        <div id="preview" :key="markdown" v-markdown>{{markdown}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      markdown: ""
    };
  },
  methods: {
    download: function(filename, text) {
      let element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(text)
      );
      element.setAttribute("download", filename);

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    },
    triggerDownload: function() {
      let markdown = this.$refs.markdown;
      if (markdown.value != "") {
        let text = markdown.value;
        let filename = "newfile.md";

        this.download(filename, text);
      } else {
        window.alert("You can't download an empty file");
      }
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.app {
  overflow: hidden;
}
.title {
  font-size: calc(24px + 0.5vw);
  margin: 10px 0 50px 0;
  text-align: center;
}

.subtitle {
  font-size: calc(18px + 0.5vw);
  text-align: center;
}

.container {
  overflow: hidden;
  height: 100%;
  display: grid;
  justify-content: space-between;
  /* align-items: center; */
  /* grid-gap: 50px; */
  grid-template-columns: 1fr 1fr;
}

textarea {
  resize: none;
  /* outline: none; */
  height: 600px;
  padding-left: 2px;
  width: 48vw;
  font-size: calc(14px + 0.5vw);
  border: 1px solid black;
  border-radius: 5px;
  overflow-y: auto;
}

#preview {
  height: 600px;
  padding-left: 2px;
  width: 48vw;
  font-size: calc(16px + 0.5vw);
  border: 1px solid black;
  border-radius: 5px;
  overflow-y: auto;
}

#download-button {
  position: fixed;
  display: flex;
  align-items: center;
  top: 20px;
  right: 20px;
  height: auto;
  width: auto;
  padding: 5px;
  border-radius: 5px;
  background-color: blue;
  border: 1px solid black;
}

#button-image {
  height: 30px;
  width: 30px;
  margin-left: 10px;
}

button:focus {
  outline: none;
}
</style>
