<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Mantenimiento de la máquina de control numérico computarizado CNC

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="zoom-in-left")
          .bloque-texto-g__img(:style="{'background-image':`url(${require('@/assets/curso/temas/tema5/img0.png')})`}")
          .bloque-texto-g__texto.p-4
            p(data-aos="fade-down").mb-0 Aunque al momento de adquirir una máquina de control numérico computarizado CNC generalmente se incluye el paquete de mantenimiento periódico preventivo, existen una serie de actividades y recomendaciones de los fabricantes con el fin de evitar que las máquinas CNC presenten fallas o averías en su funcionamiento. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p(data-aos="fade-down").mb-0 Se debe tener en cuenta para una media de trabajo de 40 horas semanales, lo descrito a continuación:
    
    .tarjeta.tarjeta--verde.p-4.mb-4
      LineaTiempoC.color-primario(text-small)
        .row.justify-content-center.align-items-center.mb-5(titulo="Paso 1")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img1.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h3 Aseo y limpieza a diario
            p Se pueden eliminar las partículas mediante aplicación de aire a presión, teniendo en cuenta las recomendaciones del fabricante de seguridad y de lubricación de componentes.
        .row.justify-content-center.align-items-center.mb-5(titulo="Paso 2")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img2.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h3 Limpieza a fondo semanal 
            p Se deben retirar todas las virutas que han quedado en los carros móviles, también se debe aspirar el filtro de la caja de control, revisar y aplicar, si es necesario aceite y refrigerante para mantener los niveles, siguiendo siempre las indicaciones del fabricante.
        .row.justify-content-center.align-items-center.mb-5(titulo="Paso 3")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img3.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h3 Limpieza de husillos
            p Mensualmente los husillos y rieles se deben limpiar con un cepillo y desengrasante, luego para volver a lubricar, seguir las recomendaciones de los fabricantes para cada carro, eje o riel.        
        .row.justify-content-center.align-items-center.mb-5(titulo="Paso 4")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema5/img4.png', alt='')
            .col-md-6.mb-4.mb-md-0
              h3 Revisión de partes
              p Aparte de estas rutinas, se debe siempre revisar el estado de los cables y conductores eléctricos y electrónicos, del buen funcionamiento de las paradas de emergencia, ventiladores, tomas a tierra, ruidos o vibraciones ajenos a los generados en el normal funcionamiento, etc. 

    .row.justify-content-center.align-items-center
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="fade-left")
          p Se deben explorar los demás recursos que se encuentran disponibles en este componente formativo, para hacerlo diríjase al menú principal en donde encontrará la síntesis, una actividad didáctica, material complementario, entre otros.


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
