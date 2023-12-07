<template>
  <div id="products">
      <q-card class="my-card" v-for="element in products" :key="element.id">
        <div @click="showProduct(element.id)" id="individual_product">
          <div class="product-item">
            <img :src="element.imageUrl" :alt="element.title" class="product-image" />
            <q-card-section>
              <div class="text-h6">{{ element.title }}</div>
              <div class="text-subtitle2">{{ element.price }}</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
            {{ truncateDescription(element.description) }}
          </q-card-section>
          </div>
        </div>
      </q-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import { db, collection, getDocs } from '../../firebase';

const products = ref([])
const router = useRouter()

const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "vuepro"));
    querySnapshot.forEach((doc) => {
        let product = doc.data()
        product.id = doc.id
        products.value.push(product)
    });
}

onMounted(async () => {
    await getData()
})

const showProduct = (id) => {
    router.push(`productdetails/${id}`)
}

const truncateDescription = (description) => {
  const words = description.split(' ');
  if (words.length > 10) {
    return `${words.slice(0, 10).join(' ')}...`;
  }
  return description;
}

</script>

<style scoped>
#products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 3%;
  gap: 3%;
}
.product-image {
  width: 100%;
  height: 200px; /* Set the desired height */
  object-fit: cover; /* Maintain aspect ratio and cover the area */
}

.product-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>


