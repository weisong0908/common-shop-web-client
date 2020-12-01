<template>
  <div class="sliding-banners">
    <section class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Medium title
          </h1>
          <h2 class="subtitle">
            Medium subtitle
          </h2>
        </div>
      </div>
    </section>
    <section class="hero is-info is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Medium title
          </h1>
          <h2 class="subtitle">
            Medium subtitle
          </h2>
        </div>
      </div>
    </section>
    <section class="hero is-dark is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Medium title
          </h1>
          <h2 class="subtitle">
            Medium subtitle
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
@import url("//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css");
</style>

<script>
import "../assets/slick.js";

export default {
  mounted() {
    window.$(document).ready(function() {
      window.$(".sliding-banners").slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
      });
    });
  }
};
</script>
