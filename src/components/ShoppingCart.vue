<template>
    <div>
        <!-- Side Modal Top Right -->
        <mdb-btn color="primary" @click.native="modal = true">Full height right</mdb-btn>
        <mdb-modal side position="right" fullHeight direction="right" :show="modal" @close="modal = false">
            <mdb-modal-header>
                <mdb-modal-title>Modal title</mdb-modal-title>
            </mdb-modal-header>
            <mdb-modal-body>
                <table class="table">
                    <tbody>
                    <tr v-for="(item, index) in cart" :key="index">
                        <td>{{ item.name }}</td>
                        <td>{{ item.cost}}</td>
                        <td>
                            <button class="btn btn-sm btn-danger" @click="removeFromCart(index, item.invId)">&times;
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th></th>
                        <th>{{ total}}</th>
                        <th></th>
                    </tr>
                    </tbody>
                </table>
            </mdb-modal-body>
            <mdb-modal-footer>
                <mdb-btn color="secondary" @click.native="modal = false">Close</mdb-btn>
                <mdb-btn color="primary">Save changes</mdb-btn>
            </mdb-modal-footer>
        </mdb-modal>
    </div>
</template>

<script>
    import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn } from 'mdbvue';
    export default {
        components: {
            mdbModal,
            mdbModalHeader,
            mdbModalTitle,
            // eslint-disable-next-line vue/no-unused-components
            mdbModalBody,
            mdbModalFooter,
            mdbBtn
        },
        data() {
            return {
                modal: false
            };
        },

        computed: {
            cart() {
                return this.$store.getters.onCart.map((cartItem) => {
                    return this.$store.getters.content.find((forSaleItem) => {
                        return cartItem === forSaleItem.id;
                    });
                });
            },

            total() {
                return this.cart.reduce((acc, cur) => acc + cur.cost, 0);
            }
        },

        methods: {
            removeFromCart(index) { this.$store.dispatch('removeFromCart', index); },
        },

        mounted() {
            this.$store.dispatch('loadCart');
        }
    };
</script>