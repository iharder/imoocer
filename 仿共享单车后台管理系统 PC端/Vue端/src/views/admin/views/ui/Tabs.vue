<template>
  <div>
    <a-card title="Tab页签">
      <a-tabs defaultActiveKey="1" @change="callback">
        <a-tab-pane key="1">
          <span slot="tab">
            <a-icon type="apple" />
            Tab 1
          </span>
          欢迎学习Vue
        </a-tab-pane>
        <a-tab-pane key="2">
          <span slot="tab">
            <a-icon type="android" />
            Tab 1
          </span>
          欢迎学习Vue
        </a-tab-pane>
        <a-tab-pane tab="Tab 3" key="3">Vue是一门非常受欢迎的前端框架</a-tab-pane>
      </a-tabs>   
    </a-card>
    <a-card title="可删减的标签">
      <a-tabs
        v-model="activeKey"
        type="editable-card"
        @edit="onEdit"
      >
        <a-tab-pane v-for="pane in panes" :tab="pane.title" :key="pane.key" :closable="pane.closable">
          {{pane.content}}
        </a-tab-pane>
      </a-tabs>
    </a-card>
  </div>
</template>
<script>
export default {
  name: "Tabs",
  data() {
    const panes = [
      {
        title: "Tab 1",
        content: "欢迎学习Vue",
        key: "1",
        closable: false
      },
      { title: "Tab 2", content: "欢迎学习Vue", key: "2" }
    ];
    return {
      activeKey: panes[0].key,
      panes,
      newTabIndex: 0
    };
  },
  methods: {
    callback(key) {
      this.$message.info("Hi,您选择了页签:" + key);
    },
    onEdit(targetKey, action) {
      this[action](targetKey);
    },
    add() {
      const panes = this.panes;
      const activeKey = `newTab${this.newTabIndex++}`;
      panes.push({
        title: "New Tab",
        content: "Content of new Tab",
        key: activeKey
      });
      this.panes = panes;
      this.activeKey = activeKey;
    },
    remove(targetKey) {
      let activeKey = this.activeKey;
      let lastIndex;
      this.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      const panes = this.panes.filter(pane => pane.key !== targetKey);
      if (lastIndex >= 0 && activeKey === targetKey) {
        activeKey = panes[lastIndex].key;
      }
      this.panes = panes;
      this.activeKey = activeKey;
    }
  }
};
</script>
<style lang="stylus" scoped>
</style>
