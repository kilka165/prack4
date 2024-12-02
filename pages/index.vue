<script setup lang="ts">
import {useFilmStore} from "~/stores/film";
import {useCategoryStore} from "~/stores/category";

const categoryStory = useCategoryStore();
const filmStore = useFilmStore();
</script>

<template>
  <div class="row mt-5">
    <div class="col-md-4">
      <select class="form-select" aria-label="Default select example">
        <option :value="null" selected>Select country</option>
        <option
            v-for="category in categoryStory.categories"
            :key="category.id"
            :value="category.id">{{ category.name }} ({{category.filmCount}}) </option>
      </select>
    </div>
    <div class="col-md-4">
      <select class="form-select" aria-label="Default select example">
        <option selected>Select country</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="col-md-2">
      <select class="form-select" aria-label="Default select example">
        <option value="1">Name</option>
        <option value="2">Year</option>
        <option value="3">Rating</option>
      </select>
    </div>
    <div class="col-md-2">   <button type="button" class="btn btn-outline-info">Reset</button></div>
  </div>
  <div v-if="!filmStore.isLoading" class="row row-cols-1 row-cols-md-3 g-4 mt-2">
    <div class="col" v-for="film in filmStore.films" :key="film.id">
      <div class="card h-100">
        <img v-if="film.link_img" :src="film.link_img" class="card-img-top" alt="...">
        <img v-else="film.link_img" src="https://img.icity.life/upload/no_poster.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"> {{ film.name}}</h5>
          <p class="card-text"> {{ film.raringAvg}}</p>
          <p class="card-text"> {{ film.duration }} min.</p>
          <p class="card-text">{{ film.category }} </p>
          <template v-for="(category, index) in film.categories" :key="category.id">
            {{ category.name + (index + 1 < film.categories.lenght ? "," : "") }}
          </template>
        </div>
        <button type="button" class="btn btn-success">Success</button>
      </div>
    </div>
  </div>
  <div v-else class="d-flex justify-content-center mt-4">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <nav class="mt-4 d-flex justify-content-center" aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>