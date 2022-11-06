<template>
  <div class="col-list">
    <template v-for="(item, index) in allList" >
      <div :ref="`col${index}`" :style="`width: ${(100 / colNumber)}%;`" :key="index" class="col-item">
        <div v-for="(it, i) in item" :key="i">
          <slot :item="it" name="item"/>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Waterfall',
  props: {
    colNumber: {
      type: Number,
      default: 4
    },
    list: {
      type: Array,
      default: () => []
    },
    status: {
      type: String,
      default: 'push'
    }
  },
  data() {
    return {
      allList: [],
      colLists: [],
      colHeight: []
    }
  },
  watch: {
    'list': {
      handler(val) {
        this.optionsList(val)
      },
      immediate: true
    },
    'window.scrollY': {
      handler(val) {
        console.log(val, 111)
      }
    }
  },
  methods: {
    // 配置瀑布流
    optionsList: function(list) {
      // allList 第一列为暂存数据
      this.allList[0] = list

      // colLists colHeight
      const allList = []
      let colLists = []
      let colHeight = []
      allList[0] = list

      console.log(this.status, 'status')
      if (this.status === 'push') {
        // push 为添加  colLists 和 colHeight将被保留
        colLists = this.colLists
        colHeight = this.colHeight
      }
      // 若为空 生成colNumber 个空的列表数组
      !colLists.length && (colLists = Array.apply(null, Array(this.colNumber)).map(() => []))
      // 生成colNumber 个为 0 的高
      !colHeight.length && (colHeight = Array.apply(null, Array(this.colNumber)).map(() => 0))

      // 暂存组件挂载后 执行$nextTick获取dom元素
      this.$nextTick(function() {
        // 获取列表的dom
        var domList = this.$refs.col0.children
        domList = Array.prototype.slice.call(domList)
        domList.map((it, i) => {
          const min = Math.min.apply(Math, colHeight)
          const index = colHeight.indexOf(min)
          colLists[index].push(list[i])
          colHeight[index] += Number(it.offsetHeight)
        })
        allList.push(...colLists)
        this.allList = allList
        this.colLists = colLists
        this.colHeight = colHeight
      })
    }
  }
}
</script>

<style>
.col-list{
    width: 100%;
    height: auto;
    display: flex;
    position: relative;
}
.col-list > .col-item{
    display: inline-block;
}
.col-list > .col-item:nth-child(1){
    position: absolute;
    z-index: -1;
    opacity: 0;
}
.col-list > .col-item:nth-child(1) > div{
    position: absolute;
    width: 100%;
}
</style>
