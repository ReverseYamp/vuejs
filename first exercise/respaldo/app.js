const app = Vue.createApp({
    // template: `<h1>hola mundo</h1>
    //            <p>{{1+1}}</p>
    //            `
data() {
    return {
        quote: 'Yo soy batman',
        author: 'Bruce Wayne'
    }
},
methods: {
    changeQoute(){
        console.log('oprimir boton')
        this.author = 'El JP'

        this.capitalice()
    },
    capitalice(){
        this.quote = this.quote.toUpperCase()
    }
},
})

app.mount('#myApp')
