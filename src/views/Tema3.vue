<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Montaje y compensación de herramientas en la máquina CNC
    
    .row.justify-content-center.align-items-center.mb-5   
      .col-lg-10
        .row.justify-content-center.align-items-center.p-5.mb-5(style="background-color: #F1FCF3;border-radius: 31px;border:solid 3px #A2E6B0")
          .col-lg-8
            p(data-aos="zoom-in") Una actividad importante, previa a la ejecución del programa en las máquinas herramientas controladas numéricamente por el computador, es el montaje de las herramientas y posteriormente su compensación que es indicarle a la máquina la posición del extremo de la herramienta y, además, indicarle el radio de la punta de la herramienta; esto con el fin de tener en cuenta que aparte de la trayectoria que recorre la herramienta cortando el material, también se desbastará todo su diámetro como lo vemos en la imagen siguiente.            
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema3/img1.svg', alt='')(data-aos="zoom-in")
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 2
          br
          span #[em Trayectoria de mecanizado]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
              img(src='@/assets/curso/temas/tema3/img2.svg', alt='')(data-aos="zoom-in")
      .col-lg-4
        figure
              img(src='@/assets/curso/temas/tema3/img3.svg', alt='')(data-aos="zoom-in")
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-right") Continuemos con este tema, analizando la compensación en las diferentes herramientas:
    
    .tarjeta.tarjeta--azul.p-4.mb-5(style="background-color: #e8e8e8")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center  
          .col-md-6.mb-4.mb-md-0
            h3 Montaje y compensación de herramientas en el torno CNC 
            p En el torno de control numérico computarizado CNC el montaje de las herramientas se hace en la torreta portaherramientas y para compensar los radios se utiliza: el código G 40 para compensar el radio de la herramienta a la izquierda, y el código G42 a la derecha. Es importante tener en cuenta que las herramientas que se montan deben ser estandarizadas y las encontramos en la norma ISO 1832.
            p Para la compensación de herramientas en el torno de control numérico computarizado CNC, se puede realizar “manualmente” es decir con la función “#[em hand jog]”, que traen todas las máquinas de control numérico CNC; primero una operación de refrentado o careado, que es desbastar el material de trabajo mientras que gira, por una de sus caras hasta que quede plana, para luego indicarle sin haber desplazado la herramienta, que en ese momento la herramienta se encuentra en el cero la coordenada Z de la máquina, ósea que queda indicado el cero de trabajo en Z.            
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema3/img4.png', alt='')
        .row.justify-content-center.align-items-center          
          .col-md-6.mb-4.mb-md-0
            h3 Montaje y compensación de herramientas en el torno CNC 
            p Ahora para el eje X se realiza una operación de cilindrado; es decir, arrancarle viruta al material de trabajo mientras esta gira, para reducir el diámetro a lo largo de toda su longitud, ahora se debe tomar la medida exacta del diámetro con el que quedó el material de trabajo (con una herramienta de precisión y suspender la marcha de la máquina), para luego indicarle a la máquina que la punta de la herramienta con la que se ejecutó el cilindrado se encuentra en el punto (se introduce el valor de la dimensión del diámetro del material de trabajo) de la coordenada X.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema3/img8.png', alt='')
        .row.justify-content-center.align-items-center          
          .col-md-6.mb-4.mb-md-0
            h3 Montaje y compensación de herramientas en la fresadora CNC
            p En la fresadora de control numérico computarizado CNC las herramientas se montan en el carrusel, tal como lo indique el fabricante, generalmente es mediante el sistema de cono ISO, para la compensación de las herramientas al igual que en el torno, se indican los radios de cada una de ellas con los códigos G40, G41 y G42, como se observa en la figura.
            p Para compensar las herramientas de la fresadora de control numérico CNC, se puede realizar un fresado frontal (el arranque de viruta se hace con la parte de frente o dirección al eje de la fresa) a la parte más alta del material de trabajo, colocando, puede ser, una hoja de papel con el fin de que se detecte rápidamente el punto cero (en el momento que la herramienta toque el papel) y se le indica a la máquina la posición cero del eje Z, para los demás ejes X y Y, se puede señalar, dependiendo la forma del mecanizado, el lugar que el operador considere más conveniente.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema3/img5.png', alt='')
        .row.justify-content-center.align-items-center          
          .col-md-6.mb-4.mb-md-0
            h3 Montaje y compensación de herramientas en el centro de mecanizado CNC 
            p En el centro de mecanizado de control numérico computarizado CNC el montaje de las herramientas se hace de la misma manera que en una fresadora CNC mediante el cono ISO y en el carrusel de herramientas, igualmente para la compensación radial se procede con los códigos G40, G41 y G42.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema3/1.png', alt='')
        .row.justify-content-center.align-items-center          
          .col-md-6.mb-4.mb-md-0
            h3 Montaje y compensación de herramientas en la mesa de corte con plasma CNC
            p En la mesa de corte con plasma de control numérico computarizado CNC, la herramienta es la antorcha que se monta generalmente sobre el sistema de pórtico (#[em Gantry]) y no hay compensación de herramientas, pero si se ajusta la altura de la antorcha dependiendo del espesor del material a trabajar, su composición y la velocidad de avance del corte que se desea. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema3/img7.png', alt='')        

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
