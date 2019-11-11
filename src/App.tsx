import { Component, Vue, Watch } from "vue-property-decorator";
import "./App.less";
@Component({})
export default class App extends Vue {
  async created() {}

  private render() {
    return (
      <div id="app">
        <router-view />
      </div>
    );
  }
}
