<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Montaje de material y definición de cero de trabajo en las máquinas CNC
  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="zoom-in-left")
          .bloque-texto-g__img(:style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img1.png')})`}")
          .bloque-texto-g__texto.p-4
            p(data-aos="fade-down").mb-0 Tanto para la creación del programa CNC, como para la comprensión del funcionamiento de la máquina de control numérico computarizado CNC, es necesario entender muy bien cómo son los movimientos de los componentes de cada una de las máquinas CNC, los cuales se realizan teniendo en cuenta como referencia los ejes de un sistema cartesiano.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        .titulo-sexto.color-acento-contenido
          h5(data-aos="fade-down") Figura 1
          br
          span #[em Cero de trabajo]
        figure
              img(src='@/assets/curso/temas/tema2/img2.png', alt='')
    
    h3(data-aos="fade-right") Funciones del torno CNC
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-right") El montaje y las características del cero de trabajo en el torno de control numérico computarizado CNC se analizan a continuación.
    
    .bg--img_03.mb-4
      .row.justify-content-center
        .col-lg-8
          AcordionA.mb-2(tipo="a" clase-tarjeta="tarjeta ca-ab")
            .row.justify-content-center.mb-4(titulo="Montaje")
              .col-10
                p.mb-0 En el torno de control numérico computarizado CNC el montaje del material de trabajo se realiza con el plato de sujeción.
            .row.justify-content-center.mb-4(titulo="Relación entre diámetro y material")
              .col-10
                p.mb-0 Hay que tener en cuenta la relación entre el diámetro del material y la longitud de “volado” que queda disponible para ser mecanizada, esto con el fin de determinar si es necesario utilizar el contrapunto.
            .row.justify-content-center.mb-4(titulo="Cero de trabajo")
              .col-10
                p.mb-0 Luego pasa a definir el cero de trabajo, este es, como si fuera el origen del plano cartesiano, para que la máquina pueda tener una referencia en las trayectorias de los movimientos para mecanizar las diferentes operaciones.
            .row.justify-content-center.mb-4(titulo="Intersección del eje Z")
              .col-10
                p.mb-0 En el torno se tiene en cuenta el punto de intersección del eje Z (de rotación del material) con la cara plana expuesta del material.
            .row.justify-content-center.mb-4(titulo="Trayectoria")
              .col-10
                p.mb-0 A partir de ahí se tiene el cero de trabajo y cualquier trayectoria se indicará mediante el sistema de coordenadas X y Z.
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/img3.png", alt="alt").img400.m-auto
      
    h3(data-aos="fade-right") Montaje del material y definición del cero de trabajo en la fresadora CNC
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-right") Algunas consideraciones a tener en cuenta para el montaje del material y la definición del cero de trabajo en la fresadora de control numérico computarizado CNC son:
    
    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/tema2/img4.png", alt="alt", style="width:450px;").m-auto 
      .col-lg-8
        TabsA.color-acento-botones.mb-5
          .tarjeta.clr-paleYellow.p-4(titulo="Montaje")            
            p En la fresadora de control numérico computarizado CNC el montaje del material de trabajo se realiza mediante la prensa soportada en la mesa longitudinal.              

          .tarjeta.clr-paleYellow.p-4(titulo="Dimensiones del material")
            h5 Dimensiones del material
            p Es importante tener en cuenta el espesor o la altura del material para que, a la hora de mecanizar, las herramientas o fresas no vayan a cortar ni la prensa ni la mesa. 

          .tarjeta.clr-paleYellow.p-4(titulo="Cero de trabajo")            
            p Para definir el cero de trabajo en la fresadora CNC se debe tener cuenta la forma de la pieza.

          .tarjeta.clr-paleYellow.p-4(titulo="Operaciones con las que se va a mecanizar")
            h5 Operaciones con las que se va a mecanizar
            p Se deben tener en cuenta las operaciones con las que se planea mecanizar, ya que el cero de trabajo en esta lo puede ubicar el operador en cualquier parte del material de trabajo, eso sí, desde el momento de crear el programa.

    h3(data-aos="fade-right") Montaje del material y definición del cero de trabajo en el centro de mecanizado CNC
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-right") El procedimiento para el montaje del material y la definición del cero de trabajo en el centro de mecanizado CNC es el siguiente.
    
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img5.png", alt="alt")
          .crd_hover_txt--body
            h3 Montaje
            br
            p.mb-0 En el centro de mecanizado CNC el montaje del material es semejante al montaje en la fresadora CNC, la diferencia está en si se va a montar en un plato de sujeción, en este caso se tendría en cuenta las recomendaciones de montaje en un torno. 
            br
            br
            br
            br

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img6.png", alt="alt")
          .crd_hover_txt--body
            h3 Cero de trabajo
            br
            p.mb-0 Para determinar el cero de trabajo, igualmente si se usa la prensa sobre la mesa longitudinal, el cero de trabajo será determinado como en la fresadora CNC.
            br
            br
            br
            br
            br
            br
      
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img7.png", alt="alt")
          .crd_hover_txt--body
            h3 Cero de trabajo
            br
            p.mb-0 Si se va a utilizar el plato de sujeción, el cero de trabajo se determina tal como en un torno CNC.
            br
            br
            br
            br
            br
            br
            br
            br

    h3(data-aos="fade-right") Montaje del material y definición del cero de trabajo en la mesa de corte por plasma CNC
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-right") A continuación, la manera en que se hace el montaje y la definición del cero de trabajo en la mesa de corte por plasma CNC.
    
    TabsB.color-primario
      .py-4.py-md-5(titulo="Montaje" :icono="require('@/assets/curso/temas/tema2/img8.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p En la mesa de corte por plasma CNC el material se ubica sobre la mesa en la posición que el operario considere que es la mejor.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img9.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Cero de trabajo" :icono="require('@/assets/curso/temas/tema2/img8.svg')")
        .row
          .col-md-6
            p Para determinar el cero de trabajo en la mesa de corte por plasma CNC, se procede de manera semejante al proceso en la fresadora CNC, es decir, depende de las formas a cortar y para optimizar el material.
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img10.png', alt='Texto que describa la imagen')          
      
      .py-4.py-md-5(titulo="Automatización" :icono="require('@/assets/curso/temas/tema2/img8.svg')")
        .row
          .col-md-6
            p En algunas marcas y modelos, la máquina generalmente distribuye los cortes y el operario, a su consideración, los puede modificar o no.
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img11.png', alt='Texto que describa la imagen')          

    
</template>

<script>
export default {
  name: 'Tema2',
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
