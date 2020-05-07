<template>
    <div>
        <nav>
            <Navbar/>
        </nav>

        <div id="app" class="container my-5">
            <div class="row mb-3">
                <div class="col-md-9">
                    <h1>Pizza</h1>
                </div>
                <div class="col-md-3">
                    <button>Shop</button>
                </div>
            </div>

            <div class="row">
                <Cards
                v-for="item in content"
                :key="item.id"
                :id="item.id"
                :name="item.name"
                :price="item.cost"
                :img="item.img"
                :options="option"
                />
            </div>
        </div>

    </div>
</template>


<!--            <ShoppingCart/>-->
<script>

    import Navbar from "../components/Navbar";
    import Cards from "../components/Cards";
    // import ShoppingCart from "../components/ShoppingCart";

    export default {
        name: 'home',
        components: {
            Navbar,
            Cards
            // ShoppingCart
        },

        computed: {
            content() {
                return this.$store.getters.content;
            },
            option() {
                return this.$store.getters.options;
            }
        },

        mounted() {
            this.$store.dispatch('loadContent');
            this.$store.dispatch('loadOptions');
        }
    }
</script>