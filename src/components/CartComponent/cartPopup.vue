<template>
    <div id="cart">
        <q-dialog :seamless="true" :modelValue="dialogVisibility" position="right">
            <q-card id="cart_card">

                <q-card-section>
                    <div>
                        <h4 class="text-weight-bold">Recently Added Items</h4>
                    </div>
                    <q-space />
                    <div v-for="product in cartStore.cart" id="cart_products">
                        <div id="cart_product">
                            <div id="lhs"><img :src="product.imageUrl" alt="product.title"></div>
                            <div id="rhs">
                                <p>{{ product.title }}</p>
                                <p>{{ product.price }}</p>
                                <q-icon @click="removeFromCart(product.id)" name="delete" />
                            </div>
                        </div>
                    </div>

                    <div id="cart_total">
                        <p>Cart Total : {{ cartStore.cartTotal }}</p>
                    </div>

                    <div id="place_order">
                        <router-link to="/order">
                            <q-btn color="secondary" label="Proceed" /></router-link>
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script setup>
import { useCartStore } from '../../store';

defineProps(['dialogVisibility'])

const cartStore = useCartStore()

const removeFromCart = (id) => {
    cartStore.removeFromCart(id)
}

</script>

<style lang="scss" scoped>
#place_order {
  margin-top: 5%;
}
#cart_total p {
  margin-top: 4%;
  font-size: 130%;
}
#cart_card {
    height: 900px;
    width: 400px;
    margin-top: 10%;
}

#cart_product {
    display: flex;
    margin-top: 4px;
}

#cart_product div {
    border: 1px solid black;
}

#lhs {
    display: flex;
    flex: 6;
}

#rhs {
    display: flex;
    flex: 4;
    flex-direction: column;
}

#lhs img {
    width: 90%;
}
</style>