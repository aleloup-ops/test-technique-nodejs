<template>
    <div>
        <div class="mt-10 container mx-auto flex flex-col justify-center my-auto">
            <div class="flex flex-col-reverse sm:flex-row">
                <div class="mx-auto sm:mx-0">
                    <button class=" mx-auto text-xl px-4 py-3 bg-[#41b883] text-white rounded-md transition duration-300 ease-in-out hover:scale-105" type="button" @click="showModal = true">Ajouter un nouveau livre</button>
                </div>
                <div class="mx-auto my-8 sm:my-0">
                    <h1 class="text-center text-6xl font-bold text-[#35495e]">my<span class="text-[#41b883]">Book</span>Shelf</h1>
                </div>
                <div class="flex justify-right">
                    <button class="mx-auto text-xl px-4 py-3 bg-[#41b883] text-white rounded-md transition duration-300 ease-in-out hover:scale-105" type="button" @click="signout()">Déconnexion</button>
                </div>
            </div>
            <div class="sm:mt-40 mt-8">
                <div class="books">
                    <div class="grid grid-cols-2 gap-3 grid-rows-3 md:grid-cols-4 md:gap-3 md:grid-rows-3">
                        <div class="text-center border border-2 rounded-lg border-[#41b883] py-4"  v-for="book in books" :key="book.id">
                            <div>
                                <p class="font-bold text-xl text-[#35495e]">{{ book.title }}</p>
                                <div class="mt-8">
                                    <p class="font-bold text-md text-[#35495e]">Description :</p>
                                    <p>{{ book.description }}</p>
    $                            </div>
                                <div class="mt-4">
                                    <p class="font-bold text-md text-[#35495e]">Disponibilité :</p>
                                    <p v-if="book.published">Ce livre est disponible</p>
                                    <p v-if="!book.published">Ce livre n'est disponible</p>
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <button class="mt-4 mx-auto text-md py-2 px-8 bg-[#f55858] text-white rounded-md transition duration-300 ease-in-out hover:scale-105" type="button" @click="deleteBook(book._id)">Supprimer</button>
                                <button class="mt-4 mx-auto text-md py-2 px-8 bg-[#41b883] text-white rounded-md transition duration-300 ease-in-out hover:scale-105" type="button" @click="customBook(book._id)">Modifier</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <CreateBookModal v-show="showModal" @close="showModal = false"/>
        <ModifyBookModal v-show="showModify" @close="showModify = false" :book="bookId"/>
    </div>
</template>

<script>
import axios from 'axios'
import CreateBookModal from '../components/CreateBookModal.vue';
const axiosInstance = axios.create({
  withCredentials: true, // this allows the cookies to be sent with the request
});

let showModal = false;
let showModify = false;

export default {
  components: { CreateBookModal },
    data() {
        return {
        books: [],
        showModal: showModal,
        showModify: showModify,
        bookId: '',
        }
    },
  methods: {
    async getBooks() {
        try {
            const id= this.$cookies.get('user_id')
            const response = await axiosInstance.get('http://localhost:8080/api/books/' + id);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    async signout() {
        try {
            const response = await axiosInstance.post('http://localhost:8080/api/user/signout/');
            this.$cookies.remove('session'),
            location.href = '/login';
        } catch (error) {
            throw error;
        }
    },
    async deleteBook(id) {
        try {
            const response = await axiosInstance.delete('http://localhost:8080/api/books/' + id);
            window.location.reload();
        } catch (error) {
            throw error;
        }
    },
    customBook(id) {
        this.bookId = this.books.find(book => book._id === id);
        this.showModify = true;
    }
  },
  mounted() {
    if (!this.$cookies.get('session')) {
        location.href = '/login'
    } else {
        this.getBooks().then((books) => {
            this.books = books;
        });
    }
  },
}
</script>