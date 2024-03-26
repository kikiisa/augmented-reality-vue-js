
<script setup>
    
</script>
<template>
  <div class="scan">
    <h2 class="text-center">This is Scan</h2>
    <hr />
    <div class="row">
        <a-scene embedded arjs>
        <a-marker preset="hiro">
            <!-- we use cors proxy to avoid cross-origin problems ATTENTION! you need to set up your server -->
            <a-entity
            position="0 0 0"
            scale="0.05 0.05 0.05"
            gltf-model="your-server/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
            ></a-entity>
        </a-marker>
        <a-entity camera></a-entity>
        </a-scene>
    </div>
  </div>
</template>
