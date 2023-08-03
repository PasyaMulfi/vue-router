<template>
    <div v-if="data.length == 0">
        <h1>Produk Tidak Tersedia</h1>
    </div>
    <div v-else>
        <h1>Daftar Produk {{ categoryName }}</h1>
    <h1>Kategori {{ detail.nama }}</h1>
    <div class="flex-container">
        <div v-for="produk in data" :key="produk.id" class="card">
                 <img class="img" :src="getImgSrc(produk.img)" alt="Categry image">   
            <router-link class="container" :to="{ name: 'Detail', params: { id_produk: produk.id } }">
                <h4>{{ produk.nama }}</h4>
            </router-link>
        </div>
     </div>
    </div>
</template>
<script>
import { produk } from '../assets/produk';
import { kategori } from '../assets/kategori';


export default {
    props: [
        "id_kategori",
    ],
    setup(props) {
        const detail = kategori["kategori"].find(function (item) {
            return item.id == props.id_kategori

        });
        const getImgSrc = (imgFileName) => {
            return '../src/assets/img/' + imgFileName + '';
        }

        const data = produk["produk"].filter(function (a) {
            return detail.id == a.id_kategori

        });


        return {
            detail,
            data,
            getImgSrc


        }
    }
}
</script>

<style scoped>
.flex-container {
    display: flex;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    margin: 10px;
    min-width: 250px;
    cursor: pointer;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
    padding: 2px 16px;
}

.img {
    width: 200px;
}
h1{
    text-align: center;
}
</style>