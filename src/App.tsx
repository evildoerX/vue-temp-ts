import { Component, Vue, Watch } from "vue-property-decorator";
import "./App.less";
// import FsUtil from "./farmwork/utils/fs.util";
@Component({})
export default class App extends Vue {
  // public fsUtil: FsUtil = new FsUtil();
  async created() {
    // this.fsUtil.init();
  }

  private render() {
    return (
      <div id="app">
        <router-view />
      </div>
    );
  }
}
