<template>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li
        v-for="link in links"
        :key="link.name"
        :class="link.name == currentLinkName ? 'is-active' : ''"
      >
        <router-link :to="{ name: link.name }">{{ link.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["links", "currentLinkName"]
};
</script>
