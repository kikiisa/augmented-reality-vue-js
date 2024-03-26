<script setup>
    import {useRouter} from "vue-router"
    const router = useRouter();
</script>
<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <h3 class="text-center fw-bold">🚀 MAIN MENU 🚀</h3>
            <div class="col-lg-8 col-10  mb-3 mt-3">
                <button @click="router.push('/scan')" class="button text-white w-100 fw-bold">SCAN QR ▶</button>
            </div>
            <div class="col-lg-8 col-10  mb-3">
                <button class="button text-white w-100 fw-bold mt-3">MATERI 📝</button>
            </div>
            <div class="col-lg-8 col-10  mb-3">
                <button class="button text-white w-100 fw-bold mt-3">TENTANG KAMI 🧑</button>
            </div>
           
        </div>  
    </div>
</template>
<style scoped>
    .button {
        background-color: #9E6DF7;
        border-width: 3px;
        border-radius: 20px;
        height: 50px;
    }
</style>