<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Transferencia de archivos a la máquina CNC
    
    separador

    .row.justify-content-center.align-items-center
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2.my-5 4.1	 Simulación en la máquina CNC
    
    separador

    .row.justify-content-center.align-items-center
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2.my-5 4.2	 Operación de la máquina CNC

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
