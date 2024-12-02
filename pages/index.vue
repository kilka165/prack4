<script setup lang="ts">

</script>

<template>
  <div class="row mt-2">
    <div class="col-md-4">
      <select class="form-select" aria-label="Default select example">
        <option selected>Выбор жанра</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
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
  <div class="row row-cols-1 row-cols-md-3 g-4 mt-2">
    <div class="col">
      <div class="card">
        <img src="https://avatars.mds.yandex.net/get-ott/1652588/2a000001867933df86991a0a7ae0ed78ee98/orig" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">мaтрица</h5>
          <p class="card-text">4.5</p>
          <p class="card-text">150 min</p>
          <p class="card-text">action, fantastic</p>
          <button type="button" class="btn btn-success">Success</button>
        </div>
      </div>
      <div class="card">
        <img src="https://i.pinimg.com/736x/14/85/b5/1485b5a78274180bcce4a0fce0ef3c4a.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">железный человек</h5>
          <p class="card-text">4.8</p>
          <p class="card-text">170 min</p>
          <p class="card-text">action, fantastic</p>
          <button type="button" class="btn btn-success">Success</button>
        </div>
      </div>
    </div>
  </div>
  <nav class="md-4 d-flex justify-content-center" aria-label="Page navigation example">
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