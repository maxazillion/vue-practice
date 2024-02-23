<template>
  <li>
    <router-link
      :to="`/${index}`"
      class="nav-link m-2"
      active-class="active"
      aria-current="page"
      :title="`this link goes to ${page.link.text}`"
      >{{ page.link.text }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: ["page", "index"],
};
</script>
