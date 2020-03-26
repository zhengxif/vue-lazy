<template>
    <div class="box">
        <li v-for="(img, index) in imgs" :key="index">
            <img v-lazy="img" />
        </li>
    </div>
</template>
<script>
import axios from "axios";
import images from "./assets/images.jpeg";
import images1 from "./assets/images (1).jpeg";
import images2 from "./assets/images (2).jpeg";
import images3 from "./assets/images (3).jpeg";
import images4 from "./assets/images (4).jpeg";

export default {
    data() {
        return {
            imgs: [images, images1, images2, images3, images4]
        };
    },
    created() {
        setTimeout(() => {
            let  imgs = [];
            for (let i = 0; i < 500; i++) {
              imgs = imgs.concat(this.imgs);
            }
            this.imgs = imgs;
        }, 1000)
    }
};
</script>
<style>
.box {
    height: 300px;
    overflow: scroll;
    width: 200px;
}
img {
    width: 100px;
    height: 100px;
}
</style>