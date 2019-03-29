<template>
  <div class="app">
    <div class="title">
      <h1>
        <u>Markdown Previewer</u>
      </h1>
    </div>
    <button type="button" id="download-button" @click="triggerDownload()">
      Download file
      <img
        src="https://img.icons8.com/ios/1600/download-from-cloud.png"
        id="button-image"
      >
    </button>
    <div class="container">
      <div class="text-container">
        <div class="subtitle">
          <h2>markdown</h2>
        </div>
        <!-- <div id="markdown">
        </div>-->
        <textarea v-model="markdown" ref="markdown"></textarea>
      </div>

      <div class="text-container">
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
  mounted: function() {
    document.body.style.margin = 0;
    document.body.style.overflow = "hidden";
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
body {
  margin: 0;
  background: blue;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.app {
  overflow: hidden;
  height: 100vh;
  background: #757f9a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #d7dde8,
    #757f9a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #d7dde8,
    #757f9a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.title {
  font-size: 1.5rem;
  margin: 10px 0 50px 0;
  text-align: center;
  letter-spacing: 0.2em;
}

.subtitle {
  font-size: 1.2em;
  text-align: center;
  text-transform: capitalize;
}

.container {
  overflow: hidden;
  /* height: 100%; */
  display: grid;
  /* justify-content: space-between; */
  /* align-items: center; */
  /* grid-gap: 50px; */
  grid-template-columns: 1fr 1fr;
}

.text-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
}

textarea {
  resize: none;
  /* outline: none; */
  flex: 1;
  min-height: 500px;
  padding-left: 2px;
  width: 40vw;
  font-size: 1.3em;
  border: 1px solid black;
  border-radius: 5px;
  overflow-y: auto;
  max-height: fit-content;
}

#preview {
  flex: 1;
  max-height: 500px;
  padding-left: 2px;
  width: 40vw;
  font-size: 1.4em;
  border: 1px solid black;
  background: white;
  border-radius: 5px;
  overflow-y: auto;
  border-left: 1px solid #0000000d;
}

#download-button {
  position: absolute;
  display: flex;
  align-items: center;
  top: 20px;
  right: 20px;
  height: auto;
  width: auto;
  font-size: 1em;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
  background: #2c3e50; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #3498db,
    #2c3e50
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #3498db,
    #2c3e50
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

#button-image {
  height: 30px;
  width: 30px;
  margin-left: 10px;
}

button:focus {
  outline: none;
}

@media screen and (max-width: 1200px) {
  textarea {
    min-width: 50vw;
  }

  #preview {
    min-width: 50vw;
  }
}
</style>
