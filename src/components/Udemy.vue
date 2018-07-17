<template>
    <div class="udemy">
        <h1 v-once>{{title}}</h1>
        <header>{{sayHello()}} - <a v-bind:href="link">Google</a></header>
        <p v-html="finishedLink"></p>
        <hr/>
        <button v-on:click="increment(5, $event)">
            Increment
        </button>
        <p>{{counter}}</p>
        <p v-on:mousemove="updateCoords">
            Coordinates: {{x}} {{y}} - 
            <span v-on:mousemove.stop="">DEAD SPOT</span>
        </p>
        <input type="text" v-on:keyup.enter.space="alertMe"/>
        <hr/>
        <p>My name is: {{name}}</p>
        <input type="text" v-model="name"/>
        <hr/>
        <button v-on:click="counter++">Increase</button>
        <button v-on:click="counter--">Decrease</button>
        <button v-on:click="secondCounter++">Increase Second</button>
        <p>Counter: {{counter}} | Second Counter: {{secondCounter}}</p>
        <p>Result: {{result()}} | Output: {{output}}</p>
        <hr/>
        <button @click="changeLink">Change Link</button>
        <a :href="link">Link</a>
        <hr/>
        <h1>CLASS BINDING</h1>
        <div class="demo" @click="attachRed = !attachRed" :class="divClasses"></div>
        <div class="demo" :class="{red: attachRed}"></div>
        <div class="demo" :class="[color, {red: attachRed}]"></div>
        <br>
        <input type="text" v-model="color"/>
        <hr/>
        <h1>STYLE BINDING</h1>
        <div class="demo" :style="{backgroundColor: secondColor}"></div>
        <div class="demo" :style="myStyle"></div>
        <div class="demo" :style="[myStyle, {height: width + 'px'}]"></div>
        <br>
        <input type="text" v-model="secondColor"/>
        <input type="text" v-model="width"/>
        <hr/>
        <h1>CONDITIONALS (IF, ELSE, V-SHOW)</h1>
        <div>
            <p v-if="show">You can see me</p>
            <p v-else>You can't see me</p>
            <p>Do you also see me?</p>
            <button @click="show = !show">Toggle</button>
        </div>
        <template v-if="show">
            <h2>Heading</h2>
            <p>Inside a template</p>
        </template>
        <p v-show="show">Do you also see me?</p>
        <button @click="show = !show">Switch</button>
        <hr/>
        <h1>LISTS (v-for)</h1>
        <div>
            <ul>
                <li v-for="(ingre, i) in ingredients" :key="ingre">{{ingre}} ({{i}})</li>
            </ul>
            <template v-for="(ingre, i) in ingredients">
                <h2>{{ingre}}</h2>
                <p>{{i}}</p>
            </template>
            <button @click="ingredients.push('spices')">Push</button>
            <ul>
                <li v-for="person in people">
                    <div v-for="(value, key, index) in person">{{key}}: {{value}} ({{index}})</div>
                </li>
            </ul>
            <span v-for="n in 10">{{n}} </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'udemy',
        data() {
            return {
                title: "Jintus",
                link: "https://google.com",
                finishedLink: '<a href="https://facebook.com">Facebook</a>',
                counter: 0,
                secondCounter: 0,
                //result: "",
                x: 0,
                y: 0,
                name: "Ayomide Onalaja",
                attachRed: false,
                color: "green",
                secondColor: "orange",
                width: 100, 
                show: true,
                ingredients: ['meant', 'fish', 'cookies'],
                people: [
                    {
                        name: 'Max', age: 27, color: 'red'
                    },
                    {
                        name: 'Gon', age: 'unknown', color: 'green'
                    }
                ]
            }
        },
        methods: {
            sayHello() {
                this.title = "Hello";
                return this.title;
            },
            increment(num, event) {
                this.counter += num;
                //this.result = this.counter > 5 ? 'Greater than 5' : 'Less than 5';
            },
            result() {
                return this.counter > 5 ? 'Greater than 5' : 'Less than 5';
            },
            updateCoords(e) {
                this.x = e.clientX;
                this.y = e.clientY;
            },
            alertMe() {
                alert('You clicked enter');
            },
            changeLink() {
                this.link = "https://facebook.com";
            }
            // dummy(e) {
            //     e.stopPropagation();
            // }
        },
        //Computed properties overwrites data properties
        computed: {
            output() {
                return this.counter > 5 ? 'Greater than 5' : 'Less than 5';
            },
            divClasses() {
                return {
                    red: this.attachRed, 
                    blue: !this.attachRed
                }
            },
            myStyle() {
                return {
                    backgroundColor: this.color,
                    width: this.width + 'px'
                }
            }
        },
        watch: {
            //Set property name you want to watch
            //This code runs whenebver property 'counter' changes
            counter: function(value) {
                var vm = this;
                setTimeout(() => {
                    vm.counter = 0;
                }, 2000)
            }
        },
        filters: {
            
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
        height: auto;
        border: none;
        border-bottom: 4px solid #154f00; 
        border-radius: 15px;
        text-transform: uppercase;
        color: #fff;
        background-color: #207c00;
        cursor: pointer;
        font-size: 12px;
        padding: 10px;
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

    .demo {
        background-color: grey;
        height: 100px;
        width: 100px;
        display: inline-block;
        margin: 20px;
        cursor: pointer;
    }

    .red {
        background-color: red;
    }

    .green {
        background-color: green;
    }

    .blue {
        background-color: blue;
    }

    .orange {
        background-color: orange;
    }
</style>