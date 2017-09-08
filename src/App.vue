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
        <!-- <input id="input" type="text" v-model="newName">
        <md-button class="md-raised md-primary" v-on:click="addName()">Add Client Information</md-button> -->
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
              <md-table-cell>{{contact.proposalNumber}}</md-table-cell>
              <md-table-cell>{{contact.client}}</md-table-cell>
            </md-table-row>
          </md-table-body>
        </md-table>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
    name: 'app',
    data: function () {
      return {
        newName: '',
        contacts: []
      }
    },
    methods: {
      fillTable: function() {
        this.contacts.push({firstname: 'Sebastian', lastname: 'Eschweiler', email: 's.eschweiler@mail.com', proposalNumber: '170802', client: 'Cooper Aerial'});
        this.contacts.push({firstname: 'Bill', lastname: 'Smith', email: 'b.smith@mail.com', proposalNumber: '170804', client: 'Cooper Aerial'});
        this.contacts.push({firstname: 'Ann', lastname: 'Parker', email: 'a.parker@mail.com', proposalNumber: '170803', client: 'Cooper Aerial'});
      },
      clearTable: function() {
        this.contacts.splice(0, this.contacts.length);
      },
      addName() {
        this.contacts.push(this.newName);
        this.newName = '';
      }
    }
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
