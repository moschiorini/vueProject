<template>
    <div class="col-md-3">
        <div class="card" :id="id">
            <img :src="img" alt="//placehold.it/200" class="card-img-top">
            <div class="card-body">
                <h4 class="card-title">{{name}}</h4>
                <div class="card-text">${{price}}</div>
                <div class="row justify-content-end">
                    <div class="row">
                        <div class="col-sm">
                            <button class="btn btn-primary" @click="addToCart(id)">Add to cart</button>
                        </div>
                        <div class="col-sm">
                            <PizzaModal
                            :name="name"
                            :price="price"
                            :options="options"
                            :img="img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PizzaModal from "./PizzaModal";
    export default {
        name: 'CardPage',
        props: ['id', 'name', 'price', 'img', 'options'],
        components: {
            PizzaModal
        },
        methods: {
            addToCart(id) {
                this.$store.dispatch('addToCart', id)
            }
        }
    }
</script>

<style>
    .col-md-3 {
        margin-bottom: 50px;
    }
</style>