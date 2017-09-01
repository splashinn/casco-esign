<template>
  <div id="app">
    <md-card>
      <md-card-header>
        <img src="./assets/casco.png" width="150" heigth="150">
        <div class="md-title">CASCO E-sign</div>
      </md-card-header>
      <md-card-content>

        <md-button class="md-raised md-primary" v-on:click="fillTable()">Filter Signed Proposals</md-button>
        <md-button class="md-raised md-primary" v-on:click="clearTable()">Filter Unsigned Proposals</md-button>
        <br />
         <md-table>
          <md-table-header>
            <md-table-row>
              <md-table-head>First name</md-table-head>
              <md-table-head>Last name</md-table-head>
              <md-table-head>Email</md-table-head>
              <md-table-head>Proposal #</md-table-head>
              <md-table-head>Client</md-table-head>
            </md-table-row>
          </md-table-header>
          <md-table-body>
            <md-table-row v-for="contact in contacts">
              <md-table-cell>{{contact.firstname}}</md-table-cell>
              <md-table-cell>{{contact.lastname}}</md-table-cell>
              <md-table-cell>{{contact.email}}</md-table-cell>
            </md-table-row>
          </md-table-body>
        </md-table>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
