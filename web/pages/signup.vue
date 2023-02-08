<template>
    <div class="mt-40 container mx-auto flex justify-center my-auto">
        <div>
            <h1 class="text-center text-6xl font-bold text-[#35495e]">my<span class="text-[#41b883]">Book</span>Shelf</h1>
            <form @submit.prevent="login" class="flex flex-col justify-center mt-16">
                <input style="border-width: 3px;" class=" my-2 border text-xl focus: border-4 rounded-2xl border-[#41b883] py-2 px-3 transition duration-300 ease-in-out focus:scale-110 focus:my-3" type="email" v-model="email" placeholder="Adresse e-mail" />
                <input style="border-width: 3px;" class=" my-2 border text-xl focus: border-4 rounded-2xl border-[#41b883] py-2 px-3 transition duration-300 ease-in-out focus:scale-110 focus:my-3" type="text" v-model="username" placeholder="Nom d'utilisateur" />
                <input style="border-width: 3px;" class=" my-2 border text-xl focus: border-4 rounded-2xl border-[#41b883] py-2 px-3 transition duration-300 ease-in-out focus:scale-110 focus:my-3" type="password" v-model="password" placeholder="Password" />
                <button class="mt-8 mx-auto text-xl px-4 py-2 bg-[#41b883] text-white rounded-md transition duration-300 ease-in-out hover:scale-105 w-1/2" type="submit">Inscription</button>
                <p class="text-center my-4 text-sm opacity-50">ou bien</p>
                <NuxtLink class="mx-auto text-center text-xl px-4 py-2 bg-[#41b883] text-white rounded-md transition duration-300 ease-in-out hover:scale-105 w-1/2" type="button" to="/login">Connexion</NuxtLink>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { onMounted } from 'vue';

export default {
    data() {
        return {
            email: '',
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            axios.post('http://localhost:8080/api/user/signup', {
                email: this.email,
                username: this.username,
                password: this.password
            }).then(res => {
                location.href = '/login'
            })
        }
    }
}
</script>