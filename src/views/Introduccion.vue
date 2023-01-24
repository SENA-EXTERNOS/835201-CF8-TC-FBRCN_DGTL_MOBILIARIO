<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.p-3.mb-5(style="background-color: #F6F6F6;border-radius: 31px;")              
      .col-lg-1.col-sm-1
        figure
          img(src='@/assets/curso/temas/adorno1.png', alt='')
      .col-lg-6(style="display: flex;align-content: center;flex-wrap: wrap;")
        p(data-aos="fade-left") Apreciado aprendiz, bienvenido a este componente formativo, donde aprenderá sobre las diferentes funciones, los ejes y movimientos de los componentes de las máquinas CNC y sobre el montaje del material de trabajo. Podrá cualificarse y fortalecer sus competencias en lo relacionado con el concepto e importancia de “cero de trabajo” y “cero de máquina”. Adquiera experticia en montaje de las herramientas y su compensación, transferencia de archivos con los programas y su simulación, operación de la máquina en la ejecución de los programas y mantenimiento de las máquinas CNC.
        p(data-aos="fade-left") En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/img0.png', alt='')

    
    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
