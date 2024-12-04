<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";

const authStore = useAuthStore();
const router = useRouter();
const logout = async () => {
  await authStore.signout();
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> Logo KinoTower</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <template v-if="!authStore.authData">
        <button @click="$router.push('/signup')" class="btn btn-outline-success me-2" type="submit" >signUp</button>
        <button @click="$router.push('/signin')" type="button" class="btn btn-outline-info">SignIn</button>
        </template>
        <template v-else>
          <nuxt-link to="/" class="navbar-link">Profile</nuxt-link>
          <button @click="logout" type="button" class="btn btn-outline-danger ms-2">SignButton</button>
        </template>
      </div>
    </div>
  </nav>
  <div class="container">
    <slot />
  </div>
</template>
