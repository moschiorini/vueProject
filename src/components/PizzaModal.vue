<template>
    <mdb-container>
        <mdb-btn color="default" @click="product=true" class="mb-3">Product</mdb-btn>
        <mdb-modal :show="product" class="product-modal" @close="product = false" size="lg" info>
            <mdb-modal-body>
                <mdb-row>
                    <mdb-col lg="5">
                        <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg" alt="Card image cap"></mdb-card-image>
                    </mdb-col>
                    <mdb-col lg="7">
                        <h2 class="h2-responsive product-name">
                            <strong>Product Name</strong>
                        </h2>
                        <h4 class="h4-responsive">
              <span class="green-text">
                <strong>$49</strong>
              </span>
                            <span class="grey-text">
                <small>
                  <strong>$89</strong>
                </small>
              </span>
                        </h4>

                        <mdb-accordion :panes="panes" material />

                        <mdb-card-body>
                            <mdb-row>
                                <mdb-col md="6">
                                    <mdb-select :options="colors" />
                                </mdb-col>
                                <mdb-col md="6">
                                    <mdb-select :options="sizes" />
                                </mdb-col>
                            </mdb-row>
                            <div class="text-center">
                                <mdb-btn color="secondary" @click="product=false">Close</mdb-btn>
                                <mdb-btn
                                        color="primary"
                                        icon="cart-plus"
                                        iconClass="ml-2 white-text"
                                        iconRight
                                >Add to cart</mdb-btn>
                            </div>
                        </mdb-card-body>
                    </mdb-col>
                </mdb-row>
            </mdb-modal-body>
        </mdb-modal>
    </mdb-container>
</template>

<script>
    import { mdbRow, mdbCol, mdbBtn, mdbModal, mdbModalBody, mdbAccordion, mdbCardBody, mdbSelect, mdbIcon,} from 'mdbvue';
    export default {
        name: 'ModalExamplesPage',
        components: {
            mdbRow,
            mdbCol,
            mdbBtn,
            mdbIcon,
            mdbModal,
            mdbModalBody,
            mdbAccordion,
            mdbCardBody,
            mdbSelect

        },
        data() {
            return {
                product: false,
                carousel: [
                    {
                        img: true,
                        src:
                            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(23).jpg",
                        thumbnail:
                            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(23).jpg",
                        alt: "First slide"
                    },
                    {
                        img: true,
                        src:
                            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(24).jpg",
                        thumbnail:
                            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(24).jpg",
                        alt: "Second slide"
                    },
                    {
                        img: true,
                        src:
                            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(25).jpg",
                        thumbnail:
                            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(25).jpg",
                        alt: "Third slide"
                    }
                ],
                colors: [
                    { value: 'red', text: 'red'},
                    { value: 'pink', text: 'pink'},
                    { value: 'green', text: 'green'}
                ],
                sizes: [
                    { value: 'small', text: 'small'},
                    { value: 'medium', text: 'medium'},
                    { value: 'large', text: 'large'}
                ]
            }
        }
    }
</script>