<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Transferencia de archivos a la máquina CNC
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-sm-2
        figure
          img(src='@/assets/curso/temas/tema4/img1.svg', alt='')
      .col-lg-10
        p(data-aos="fade-right") Los archivos que contienen el programa con las instrucciones para ejecutar el mecanizado en las máquinas herramientas CNC se pueden transferir a estas de diferentes maneras, la más común es mediante un dispositivo de almacenamiento o USB, pero no es como pasar un archivo cualquiera. 
        p(data-aos="fade-right") Dependiendo de la máquina, algunas marcas tienen requerimientos para:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color1t.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/img2.svg', alt='')
        h3.text-center Nombrar los archivos
        p
      .col-md.tarjeta.color2t.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/img3.svg', alt='')
        h3.text-center Las extensiones de archivo
        p
      .col-md.tarjeta.color1t.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/img4.svg', alt='')
        h3.text-center Compatibilidad de los archivos que pueden recibir
        p  
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5(data-aos="zoom-in-left")
          .bloque-texto-g__img(:style="{'background-image':`url(${require('@/assets/curso/temas/tema4/img5.png')})`}")
          .bloque-texto-g__texto.p-4
            p(data-aos="fade-down").mb-0 La mayoría de las máquinas permiten abrir los archivos creados en #[em softwares] de fabricación asistida por computador o CAM, estos generalmente son convertidos en #[b extensión *.NC] utilizados para maquinaria con control numérico. Se debe consultar siempre el manual de usuario de cada máquina.

    separador

    .row.justify-content-center.align-items-center
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2.my-5 4.1	 Simulación en la máquina CNC
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .row.justify-content-center.mb-5
          .col-lg-12
            p(data-aos="fade-left") La mayoría de las máquinas CNC permiten realizar una simulación de las instrucciones y códigos del programa que se desea correr antes de ser ejecutado, de ser necesario se puede modificar. Cada marca puede diferir en la forma de hacerlo. 
            p(data-aos="fade-left") Por ejemplo, en el centro de mecanizado vertical CNC HAAS VF2, se pueden ejecutar las siguientes acciones:
        .row.justify-content-center.mb-5          
          .col-lg-12
            .row.justify-content-center.align-items-center.p-3.mb-5(style="background-color: #F1FCF3;border-radius: 31px;border:solid 3px #A2E6B0")
              .col-lg-12.cuadroverde
                ul.lista-ul
                  li
                    i.fas.fa-circle(style="font-size: x-small")
                    p Luego de compensar las herramientas y de abrir el archivo del programa, admite modificarlo de ser necesario.
                  li
                    i.fas.fa-circle(style="font-size: x-small")
                    p Realiza la simulación de cada una de las operaciones, así como del mecanizado general con todas las operaciones contenidas en el programa, para esto en el panel de control de la máquina se selecciona la herramienta de “#[em operations manager]”. 
                  li
                    i.fas.fa-circle(style="font-size: x-small")
                    p En #[em operations manager], seleccionar de la lista de las operaciones las que se quieran simular, también si se quiere simular todas las operaciones se selecciona el botón “#[em select all]”, se activa el comando “#[i verify]”.
                  li
                    i.fas.fa-circle(style="font-size: x-small")
                    p Se puede cambiar la vista en la que se hará la simulación, normalmente a la vista isométrica ya que se aproxima más a la realidad.
                  li
                    i.fas.fa-circle(style="font-size: x-small")
                    p Al dar, la máquina muestra una secuencia de las operaciones de mecanizado programadas en el archivo.
                      
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema4/img6.png', alt='')

    .row.justify-content-center
      .col-lg-10
        .tarjeta.p-3.mb-5.color-primario.bg-gradient
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema4/img7.svg")
            .col
              .row.justify-content-between.align-items-center
                .col-9.mb-3.mb-sm-0
                  p Se puede ver un ejemplo del tema simulación en la máquina CNC en el siguiente enlace
                .col.mb-3.mb-sm-0
                  .row.justify-content-center.mb-1
                    .col
                      a.boton.boton--b(:href="('https://www.youtube.com/watch?v=0FJmpbvFWkg')" target="_blank")
                        span(style="color:#000000")  Enlace web
                        i.fas.fa-link(style="color:#000000")                                     
    separador

    .row.justify-content-center.align-items-center
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2.my-5 4.2	 Operación de la máquina CNC
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-left") El siguiente video muestra el procedimiento que se debe realizar para la operación de las máquinas CNC.

    row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

    
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
