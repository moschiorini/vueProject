<template>
        <mdb-navbar color="#2BBBAD" light>
            <mdb-navbar-brand href="https://mdbootstrap.com/">
                Pizza
            </mdb-navbar-brand>
            <mdb-navbar-toggler>
                <mdb-navbar-nav>
                    <mdb-nav-item href="#" active>Home</mdb-nav-item>
                    <mdb-dropdown tag="li" class="nav-item">
                        <mdb-dropdown-toggle tag="a" navLink color="warning" slot="toggle" waves-fixed>Dropdown</mdb-dropdown-toggle>
                        <mdb-dropdown-menu>
                            <mdb-dropdown-item>Action</mdb-dropdown-item>
                            <mdb-dropdown-item>Another action</mdb-dropdown-item>
                            <mdb-dropdown-item>Something else here</mdb-dropdown-item>
                        </mdb-dropdown-menu>
                    </mdb-dropdown>
                </mdb-navbar-nav>
                <form>
                    <ShoppingCart/>
                </form>
            </mdb-navbar-toggler>
        </mdb-navbar>
</template>

<script>
    import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbDropdown, mdbDropdownMenu, mdbDropdownToggle, mdbDropdownItem } from 'mdbvue';
    import ShoppingCart from '@/components/ShoppingCart.vue'
    export default {
        name: 'Navbar',
        components: {
            mdbNavbar,
            mdbNavbarBrand,
            mdbNavbarToggler,
            mdbNavbarNav,
            mdbNavItem,
            mdbDropdown,
            mdbDropdownMenu,
            mdbDropdownToggle,
            mdbDropdownItem,
            ShoppingCart
        }
    }
</script>


