<template>
 <div>
   <nav>
     <Navbar/>
       <ShoppingCart/>
   </nav>
     <Cards/>
 </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Cards from '@/components/Cards.vue'
//import ShoppingCart from '@/components/ShoppingCart.vue'

export default {
  name: 'home',
  components: {
    Navbar,
      Cards,
     // ShoppingCart

  }
}
</script>
