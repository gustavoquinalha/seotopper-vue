<template lang="html">
  <div class="">
    <footer>
      <div class="footer">
        <div class="size margin container align-center">
          <span>Copyright © 2018 SeoTopper</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
    background: darken($color-primary, 10);
    color: $color-white;
    margin-top: 50px;
    font-size: 16px;
    .size {
        padding: 50px 0;
    }
    span {
        font-weight: bold;
    }
}
</style>
