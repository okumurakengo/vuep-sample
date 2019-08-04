<template>
    <vuep :value="value" :scope="scope" />
</template>

<script>
import Vue from 'vue'
import Features from "@/components/Features"

export default {
    data() {
        return {
            scope: { Features },
            value: `
<template>
  <div>
    <features :features="features"></features>
  </div>
</template>

<script>
  module.exports = {
    components: {
      Features
    },
    data () {
      return {
        features: [
          'Single File Component',
          'Babel for ES6/JSX/UMD/CommonJS',
          'Scoped style',
          'Customizable JavaScript scope'
        ]
      }
    }
  }<\/script>`
        }
    }
}
</script>
