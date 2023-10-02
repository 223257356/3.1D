<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: -37.83088302612305, lng: 144.9971466064453 };

    return { center };
  },
});

</script>


<template>
    <div class = "text">
        <h3>Visit our showroom</h3>
        <p>Furny Showroom - Church Street, Richmond, 3121 VIC Australia</p>
    </div>

    <GoogleMap api-key="AIzaSyBIiFGX0QYmEQ_AFFbr7t27RHbIopC391A" style="width: 100%; height: 600px" :center="center" :zoom="15">
        <Marker :options="{ position: center }" />
    </GoogleMap>

</template>

<style scoped>
.text {
  background-color: rgba(248, 248, 248, 0.7);
  padding: 20px;
  text-align: center;
}
</style>
