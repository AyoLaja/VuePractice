<template>
    <div class="users">
        <h1>Users</h1>  
        <form v-on:submit="addUser">
            <input type="text" v-model="newUser.name" placeholder="Name">
            <input type="email" v-model="newUser.email" placeholder="Email">
            <button type="submit">Submit</button>
        </form>
        <ul>
            <li v-for="user in users">
                <input type="checkbox" class="toggle" v-model="user.contacted">
                <!-- If user is contacted, give class of contacted-->
                <span :class="{contacted: user.contacted}">
                    {{user.name}}: {{user.email}} <button v-on:click="deleteUser(user)">X</button>
                </span>
            </li>
        </ul>    
    </div>
</template>

<script>
    export default {
        name: 'users',
        data() {
            return {
                newUser: {},
              users: [
                  
              ]  
            }
        },
        methods: {
            addUser(e) {
                this.users.push({
                    name: this.newUser.name,
                    email: this.newUser.email,
                    contacted: false
                });
                e.preventDefault();
            },
            deleteUser(user) {
                this.users.splice(this.users.indexOf(user), 1)
            }
        },
        created() {
            console.log('created ran');
            this.$http.get('https://jsonplaceholder.typicode.com/users/')
                .then((response) => {
                    console.log(response.data);
                    this.users = response.data;
                })
        }
    }
</script>

<style scoped>
    h1 {
        color: #003f64;
    }

    .contacted {
        text-decoration: underline;
    }
</style>