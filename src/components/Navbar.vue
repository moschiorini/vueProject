<template>
        <mdb-navbar dark color="stylish">
            <mdb-navbar-brand href="https://mdbootstrap.com/">
                Pizza
            </mdb-navbar-brand>
            <mdb-navbar-toggler>
                <mdb-navbar-nav>
                    <mdb-nav-item href="#" active>Home</mdb-nav-item>
                    <mdb-dropdown tag="li" class="nav-item">
                    </mdb-dropdown>
                </mdb-navbar-nav>
                <form>
                    <ShoppingCart/>
                </form>
            </mdb-navbar-toggler>
        </mdb-navbar>
</template>

<script>
    import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbDropdown} from 'mdbvue';
    import ShoppingCart from "./ShoppingCart";
    export default {
        name: 'Navbar',
        components: {
            mdbNavbar,
            mdbNavbarBrand,
            mdbNavbarToggler,
            mdbNavbarNav,
            mdbNavItem,
            mdbDropdown,
           //dbDropdownToggle,
            ShoppingCart
        }
    }
</script>


