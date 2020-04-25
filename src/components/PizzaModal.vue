<template>
    <mdb-container>
        <mdb-btn color="default" @click="product=true" class="mb-3">Product</mdb-btn>
        <mdb-modal :show="product" class="product-modal" @close="product = false" size="lg" info>
            <mdb-modal-body>
                <mdb-row>
                    <mdb-col lg="5">
                        <mdb-carousel :items="carousel" controlls indicators thumbnails :thumbnailWidth="90"/>
                    </mdb-col>
                    <mdb-col lg="7">
                        <h2 class="h2-responsive product-name">
                            <strong>{{name}}</strong>
                        </h2>
                        <h4 class="h4-responsive">
              <span class="green-text">
                <strong>${{price}}</strong>
              </span>
                        </h4>

                        <mdb-accordion material/>

                        <mdb-card-body>
                            <mdb-row>
                                <center>
                                    <mdb-col md="6">
                                        <select class="browser-default custom-select">
                                            <option v-for="item in options[0].corj" :key="item">{{item}}</option>
                                        </select>

                                        <select class="browser-default custom-select">
                                            <option v-for="item in options[0].form" :key="item">{{item}}</option>
                                        </select>

                                        <select class="browser-default custom-select">
                                            <option v-for="item in options[0].size" :key="item">{{item}}</option>
                                        </select>
                                    </mdb-col>
                                </center>
                            </mdb-row>
                            <div class="text-center">
                                <mdb-btn color="secondary" @click="product=false">Close</mdb-btn>
                                <mdb-btn
                                        color="primary"
                                        icon="cart-plus"
                                        iconClass="ml-2 white-text"
                                        iconRight
                                >Add to cart
                                </mdb-btn>
                            </div>
                        </mdb-card-body>
                    </mdb-col>
                </mdb-row>
            </mdb-modal-body>
        </mdb-modal>
    </mdb-container>
</template>

<script>
    import {
        mdbRow,
        mdbCol,
        mdbBtn,
        mdbIcon,
        mdbModal,
        mdbModalBody,
        mdbAccordion,
        mdbCardBody,
        mdbCarousel,
        mdbContainer
    } from 'mdbvue';

    export default {
        name: 'ModalExamplesPage',
        props: ['price', 'name', 'options'],
        components: {
            mdbRow,
            mdbCol,
            mdbBtn,
            // eslint-disable-next-line vue/no-unused-components
            mdbIcon,
            mdbModal,
            mdbModalBody,
            mdbAccordion,
            mdbCardBody,
            mdbCarousel,
            mdbContainer,
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
                ]
            }
        }
    }
</script>