<template>
    <div class="test">
        <h1>{{title}}</h1>
        <input type="text" v-model="title"/>
        <p v-if="showName">{{user.first}}</p>
        <p v-else="showName">none</p>
        <ul>
            <li v-for="item in items">{{item.title}}</li>
        </ul>
        <button v-on:click="greet('Jello world')">Click me</button>
        <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterAction">
        <hr/>
        <label>First name:</label><input type="text" v-model="user.first">
        <br/>
        <label>Last name:</label><input type="text" v-model="user.last">
        <h3>{{this.fullName}}</h3>
        <br/>
        <h2>{{message}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'test',
        props: {
            message: {
                default: 'FooBar',
                type: String
            }
        },
        data() {
            return {
                title: 'Vue with Ayomide Onalaja',
                user: {
                    first: 'John',
                    last: 'Doe'
                },
                showName: true,
                items: [
                    {
                        title: 'Item 1'
                    },
                    {
                        title: 'Item 2'
                    },
                    {
                        title: 'Item 3'
                    }
                ]
            }
        },
        methods: {
            greet(greeting) {
                alert(greeting);
            },
            pressKey(e) {
                console.log(e.target.value);
            },
            enterAction() {
                console.log('You hit enter')
            }
        },
        computed: {
            fullName() {
                return (
                    this.user.first + ' ' + this.user.last
                );
            }
        }
    }
</script>

<style scoped>
    h1 {
        color: #003f64;
    }
</style>