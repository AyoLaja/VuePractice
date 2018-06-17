<template>
    <div class="card">
        <header>{{title}}</header>
        <div class="content" v-html="content"></div>
        <br/>
        <div class="input-stuff">
            <input type="text" id="itemForm" v-on:keypress.enter="addSomeone()" placeholder="Enter name"/>
            <button v-on:click="addSomeone()">Add Someone</button>
        </div>
        <ul>
            <li v-for="(item, someone) in items">
            <button class="remove" v-on:click="removeSomeone(someone)">X</button>
                {{item.text | capitalize()}}
            </li>
        </ul>
        <br>
        <ul>
            <li v-for="item in items">
                <h4>{{item.text | capitalize()}}</h4>
                <p>{{item.text | undercase()}} weighs {{item.weight}}.</p>
            </li>
        </ul>
        <br/>
        <form v-on:submit="addItem"></form>
        <ul>
            <li>Total Family Members: {{totalFam}}</li>
            <li>Total something else: {{totalMen}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'card',
        data() {
            return {
                title: "MY FAMILY",
                input: "",
                totalFam: 0,
                totalMen: 0,
                content: `<strong>Ayomide Onalaja </strong>is a front-end developer with a bachelor’s 
                    degree in Information Science and Technology and a minor in Management 
                    Information Systems from Temple University. He is skilled in HTML, CSS, 
                    Javascript, Jquery, Bootstrap and currently learning new technologies 
                    such as Vuejs and ReactJS. The experience and knowledge I have gained 
                    in the past years has fueled my interest for front-end web development and 
                    the new and exciting technologies that come with it.`,
                items: [
                    {
                        text: "omowunmi",
                        weight: "400 lbs",
                        quantity: 5
                    },
                    {
                        text: "Rosey",
                        weight: "500 lbs",
                        quantity: 8
                    },
                    {
                        text: "demo",
                        weight: "350 lbs",
                        quantity: 2
                    },
                    {
                        text: "Lalass",
                        weight: "180 lbs",
                        quantity: 15
                    }
                ]
            }
        },
        methods: {
            addSomeone() {
                let input = document.getElementById('itemForm');

                if (input.value !== '') {
                    this.items.push({
                        text: input.value
                    });
                    input.value = "";
                }
            },
            removeSomeone(someone) {
                this.items.splice(someone, 1);
            }
        },
        //Computed properties overwrites data properties
        computed: {
            totalFam: function() {
                let sum, item;
                sum = 0;
                items = this.items

                for(let i in items) {
                    sum += items[i].quantity;
                }
                return sum;
            }
        },
        filters: {
            capitalize(value) {
                if (!value) return "";
                value = value.toString();
                return value.charAt(0).toUpperCase() + value.slice(1);
            },
            undercase(value) {
                if (!value) return "";
                value = value.toString();
                return value.toLowerCase();
            }
        }
    }
</script>

<style scoped>
    .card {
        height: auto;
        width: 600px;
        margin: auto;
        text-align: left;
        padding: 20px;
        border: 2px solid #ddd;
        border-radius: 50px;
    }

    header {
        background-color: #ccc;
        padding: 15px;
        text-align: center; 
        border-radius: 50px;
        letter-spacing: 1px;
        font-size: 20px;
    }

    .content {
        line-height: 30px;
        margin-top: 15px;
        letter-spacing: 1px;
    }

    button {
        width: auto;
        border: none;
        border-bottom: 4px solid #154f00; 
        border-radius: 15px;
        text-transform: uppercase;
        color: #fff;
        background-color: #207c00;
        cursor: pointer;
        font-size: 13px;
        padding: 15px 15px 15px 15px;
        font-weight: 500;
    }

    .remove {
        height: 30px;
        width: 30px;
        background-color: #b00931;
        border-bottom: 4px solid #7c0621;
        font-size: 15px;
        font-weight: bold;
        padding: 5px 5px 5px 5px;
        border-radius: 50%;
    }

    input[type="text"] {
        border-radius: 10px;
        border: 1px solid #ccc;
        height: 42px;
        padding-left: 15px;
        font-size: 13px;
    }

    .input-stuff {
        text-align: center;
    }

    li {
        margin-bottom: 10px;
        list-style: none;
    }
</style>