<template>
    <div class="container mx-auto mt-8">
    <h1 class="text-3xl font-semibold mb-4">Login</h1>
    <form @submit.prevent="login">
        <div class="mb-4">
            <label for="username" class="block font-medium">Username</label>
            <input type="text" id="username" v-model="username" class="mt-1 p-2 rounded border w-60" required>
        </div>
        <div class="mb-4">
        <label for="password" class="block font-medium">Password</label>
        <input type="password" id="password" v-model="password" class="mt-1 p-2 rounded border w-60" required>
        </div>
        <div>
            <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" >Login</button>
        </div>
    </form>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import { users } from '@/assets/user.js'
 
export default {
    data() {
        return {
            username: '',
            password: '',
            isLoggedIn: 'true'
        };
    },
    methods: {
        login() {
            const foundUser = users.find(user =>
                user.username == this.username &&
                user.password == this.password &&
                user.isLoggedIn == true);
            console.log(foundUser);
            if (foundUser) {
                alert('Login Berhasil!');
                this.$router.push('/produk');
            } else {
                alert('Username atau password salah!');
            }
        },
    },
    setup(props, context) {
        onMounted(() => {
            context.emit("id-menu", 6)
        });
    },
}
</script>