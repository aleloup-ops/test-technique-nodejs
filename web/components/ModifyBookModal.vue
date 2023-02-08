<template>
    <div class="modal-overlay">
        <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header text-center text-3xl font-bold text-[#41b883]">
                <slot name="header">
                  Modifier un livre
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body mt-24">
                    <input style="border-width: 3px;" class=" my-2 border text-lg focus: border-2 rounded-2xl border-[#41b883] py-2 px-3 transition duration-300 ease-in-out focus:scale-110 focus:my-3" type="text" v-model="book.title" placeholder="Titre" />
                    <input style="border-width: 3px;" class=" my-2 border text-lg focus: border-2 rounded-2xl border-[#41b883] py-2 px-3 transition duration-300 ease-in-out focus:scale-110 focus:my-3" type="text" v-model="book.description" placeholder="Description"/>
                    <input style="border-width: 3px;" class=" my-2 border text-lg focus: border-2 rounded-2xl border-[#41b883] py-2 px-3 transition duration-300 ease-in-out focus:scale-110 focus:my-3" type="text" v-model="book.author" placeholder="Auteur" />
                    <div class="text-center mt-3 text-lg">
                        <div>Disponible</div>
                        <div class="flex flex-row justify-evenly mt-4">
                            <div>
                                <input type="radio" id="one" value="true" v-model="book.published" />
                                <label for="one">Oui</label>
                            </div>

                            <div>
                                <input type="radio" id="two" value="false" v-model="book.published" />
                                <label for="two">Non</label>
                            </div>
                        </div>
                    </div>

                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                    <button class=" mx-auto text-xl px-4 py-2 bg-[#41b883] text-white rounded-md transition duration-300 ease-in-out hover:scale-105" type="button" @click="customBook()">Ajouter</button>
                  <button class="modal-default-button mx-auto text-xl px-4 py-2 bg-[#f55858] text-white rounded-md transition duration-300 ease-in-out hover:scale-105" @click="$emit('close')">
                    Annuler
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
<script>
import axios from 'axios';
    export default {
        props: ['book'],
        data() {
            return {
                title: '',
                description: '',
                author: '',
                published: false
            }
        },
        methods: {
            customBook() {
                axios.put('http://localhost:8080/api/books/' + this.book._id, {
                    title: this.book.title,
                    description: this.book.description,
                    author: this.book.author,
                    published: this.book.published
                }).then(res => {
                    console.log(res)
                    window.location.reload();
                }).catch(err => {
                    console.log(err)
                })
            }
        }
  }
</script>