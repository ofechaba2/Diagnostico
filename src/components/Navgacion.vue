<template>
  <v-navigation-drawer app bottom permanent clipped expand-on-hover>
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <!-- <v-icon>mdi-domain</v-icon>
           -->
          <div class="my-2">
            <v-btn color="deep-purple accent-2" fab x-large dark>
              <v-icon>mdi-domain</v-icon>
            </v-btn>
          </div>
          <!-- <v-img src="https://randomuser.me/api/portraits/women/1.jpg"></v-img> -->
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="title">{{$store.state.usuario.nombre}}</v-list-item-title>
          <v-list-item-subtitle>{{$store.state.usuario.email}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav dense>
      <v-list-item link to="/categoria">
        <v-list-item-icon>
          <v-icon>mdi-folder</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Categorias</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/articulo">
        <v-list-item-icon>
          <v-icon>mdi-folder</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Articulos</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/compra">
        <v-list-item-icon>
          <v-icon>mdi-folder</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Compras</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/usuario">
        <v-list-item-icon>
          <v-icon>mdi-folder</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Usuarios</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/ventas">
        <v-list-item-icon>
          <v-icon>mdi-folder</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Ventas</v-list-item-title>
      </v-list-item>

      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-account-multiple</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Shared with me</v-list-item-title>
      </v-list-item>
      <v-list-item @click="d">
        <v-list-item-icon>
          <v-icon >mdi-close</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Cerrar sesion</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>