<template>
  <div class="spinner"></div>
</template>

<script>
export default {

}
</script>

<style>
.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid transparent;
    border-radius: 40px;
    border-top-color: red;
    margin: 20px auto;
    animation: spin 1s infinite
    ;
}

@keyframes spin{
    to{transform:  rotate(360deg);}
}
</style>