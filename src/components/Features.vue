<template>
  <div class="features">
    <h3>Features</h3>
    <ul>
      <li v-for="(feature, i) in features" :key="i">
        {{ feature }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        features: Array
    },
}
</script>
