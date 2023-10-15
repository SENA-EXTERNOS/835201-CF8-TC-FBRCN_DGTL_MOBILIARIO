<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Operación del mecanizado CNC
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-sm-2
        figure
          img(src='@/assets/curso/temas/tema1/img1.svg', alt='')
      .col-lg-10
        p(data-aos="fade-right") Para comprender la operación de una máquina herramienta de control numérico computarizado CNC es necesario, inicialmente, tener una idea de cómo funcionan las máquinas convencionales, es decir las que no tienen los controles automáticos, con el fin de comprender mejor las funciones automáticas con las que se mecanizará la pieza proyectada.
        p(data-aos="fade-right") Igualmente, es de suma importancia conocer algunos aspectos cruciales sobre la máquina herramienta CNC como, por ejemplo: 
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color1t.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img2.svg', alt='')
        h3.text-center ¿Qué tipo de máquina es?
        p
      .col-md.tarjeta.color2t.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img3.svg', alt='')
        h3.text-center ¿Qué tipo de tecnología es?
        p
      .col-md.tarjeta.color1t.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img4.svg', alt='')
        h3.text-center El manual del fabricante
        p  
    .row.justify-content-center.align-items-center
      .col-lg-8
        .cajon.color-acento-botones.p-4.mb-4(data-aos="fade-left")
          p En el manual del fabricante se encuentra toda la información técnica necesaria para poder ponerla en marcha y lograr mecanizar la pieza que se desea obtener, de acuerdo con los requerimientos plasmados en el plano técnico y traducidos al lenguaje CNC de la máquina, mediante el #[em software] de fabricación asistida por computador CAM.
    
    h4(data-aos="zoom-in-left").my-5 Funciones en las máquinas CNC
    
    .row.justify-content-center.align-items-center.mb-5   
      .col-lg-10
        .row.justify-content-center.align-items-center.p-5.mb-5(style="background-color: #F8F5F3;border-radius: 31px;border:solid 3px #CFBDB0")
          .col-lg-8
            p(data-aos="zoom-in") Las funciones en las máquinas de control numérico computarizado CNC se dan, según las herramientas que sea necesario usar. Existen funciones específicas para el torno CNC, la fresadora CNC, el centro de mecanizado y la cortadora por plasma. 
            p(data-aos="zoom-in") A continuación, se exponen las características de un torno de control numérico computarizado CNC:
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img5.svg', alt='')

    h3(data-aos="fade-right") Funciones del torno CNC
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img6.svg', alt='')              
          .tarjeta.p-3(x="25%" y="12%" numero=" ")            
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-7
                figure
                  img(src='@/assets/curso/temas/tema1/img6_1.svg', alt='')
          .tarjeta.p-3(x="8%" y="39%" numero=" ")            
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-7
                figure
                  img(src='@/assets/curso/temas/tema1/img6_2.svg', alt='')
          .tarjeta.p-3(x="8%" y="63%" numero=" ")            
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-7
                figure
                  img(src='@/assets/curso/temas/tema1/img6_3.svg', alt='')
          .tarjeta.p-3(x="22%" y="87%" numero=" ")            
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-7
                figure
                  img(src='@/assets/curso/temas/tema1/img6_4.svg', alt='')
          .tarjeta.p-3(x="50%" y="95%" numero=" ")            
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-7
                figure
                  img(src='@/assets/curso/temas/tema1/img6_5.svg', alt='')
          .tarjeta.p-3(x="78%" y="88%" numero=" ")            
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-7
                figure
                  img(src='@/assets/curso/temas/tema1/img6_6.svg', alt='')
          .tarjeta.p-3(x="92%" y="63%" numero=" ")            
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-7
                figure
                  img(src='@/assets/curso/temas/tema1/img6_7.svg', alt='')
          .tarjeta.p-3(x="92%" y="38%" numero=" ")            
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-7
                figure
                  img(src='@/assets/curso/temas/tema1/img6_8.svg', alt='')
          .tarjeta.p-3(x="75%" y="12%" numero=" ")            
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-7
                figure
                  img(src='@/assets/curso/temas/tema1/img6_9.svg', alt='')
    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-acento-botones.p-4.mb-4(data-aos="fade-left")
          p Las funciones en un torno de control numérico computarizado CNC están destinadas a lograr obtener la pieza generada por la revolución del material, mientras que se va logrando la forma final, a medida que se le arranca viruta al material mediante las herramientas de corte llamadas buriles.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        P(data-aos="fade-right") Las funciones del torno de control numérico computarizado CNC, están relacionadas con sus partes y componentes, los cuales se describen a continuación:
    
    .tarjeta.tarjeta--azul.p-4.mb-5(style="background-color: #E2DEE2")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.mb-5  
          .col-md-6.mb-4.mb-md-0
            h3 Monitor y panel de control 
            p Al igual que en el torno de control numérico computarizado CNC, es la parte de la fresadora con la que más interactúa el operador de la máquina CNC, ya que es allí donde se realizan las funciones de: programación, recepción e intercambio de archivos con los programas, visualización del estado de la máquina, de las funciones y operaciones que se están ejecutando, control de las partes y herramientas, así como los diferentes mensajes que estos envían durante la operación o simulación del mecanizado.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img7.png', alt='')
        .row.justify-content-center.align-items-center.mb-5          
          .col-md-6.mb-4.mb-md-0
            h3 Motores
            p Generalmente no están a la vista del operario. Son los encargados de generar tanto el movimiento del husillo principal donde se transfiere al material de trabajo, así como a los diferentes carros que permiten el avance y movimientos de las herramientas, normalmente son servomotores o motores de alta potencia que se pueden controlar en su velocidad, potencia y sentido de giro, mediante un programa de computador.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img8.png', alt='')
        .row.justify-content-center.align-items-center.mb-5          
          .col-md-6.mb-4.mb-md-0
            h3 Plato de sujeción 
            p Es la parte del torno que tiene la función de sostener el material del trabajo mientras se le realiza el mecanizado. Puede tener tres o cuatro mordazas y ser autocentrante, o no. En los tornos CNC más avanzados, se permite realizar el apriete de manera automática mediante un <i>clamp</i> que funciona con aire o aceite, es decir, neumático o hidráulico, dependiendo de la arquitectura de la máquina CNC. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img9.png', alt='')
        .row.justify-content-center.align-items-center.mb-5          
          .col-md-6.mb-4.mb-md-0
            h3 Porta herramientas
            p Su función en el torno es la de sostener y disponer las herramientas de corte o buriles en el momento indicado en el programa, también permite, ya que está montada sobre los carros de desplazamiento, los movimientos de avance y velocidades necesarios para lograr arrancar la viruta al material y obtener las formas y acabados planeados para la pieza final; pueden tener la capacidad desde 4, 6, hasta 16 herramientas simultáneamente. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img10.png', alt='')
        .row.justify-content-center.align-items-center.mb-5          
          .col-md-6.mb-4.mb-md-0
            h3 Contrapunto
            p Es un elemento del torno con forma cónica ubicado justo al frente del plato de sujeción del material que gira sobre su eje alineado con el eje de giro del material, permite trabajar con materiales de longitud considerable eliminando el juego o movimiento oscilatorio que se genera al ponerlos a girar y aplicarles presión radial con el buril al arrancarle viruta.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img11.png', alt='')
        .row.justify-content-center.align-items-center.mb-5          
          .col-md-6.mb-4.mb-md-0
            h3 Bancada o soporte
            p Es la columna vertebral del torno, tiene como función principal sostener y permitir el movimiento o desplazamiento longitudinal de los carros de avance, también es la parte que define el tamaño o capacidad del torno en cuanto a la longitud máxima del material de trabajo. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img12.png', alt='')
        .row.justify-content-center.align-items-center.mb-5          
          .col-md-6.mb-4.mb-md-0
            h3 Carros de avance
            p Son elementos similares a los rieles de un tren, es decir, permiten que sobre ellos se ubique el portaherramientas para ser movilizados longitudinalmente, transversalmente, y en forma oblicua durante el corte del material, siguiendo el desarrollo del programa en el #[em software] de fabricación asistido por computador.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img13.png', alt='')
        .row.justify-content-center.align-items-center.mb-5          
          .col-md-6.mb-4.mb-md-0
            h3 Puertas
            p Un torno de #[b control numérico computarizado] CNC puede tener de acuerdo con su arquitectura o diseño varias puertas con la función de resguardar elementos limitando su acceso. Las principales son las puertas o guardas de seguridad, que usualmente son translúcidas y deben estar cerradas solamente durante la operación del torno y las puertas o guardas de acceso a motores o a componentes que requieren acceso periódico por ejemplo para el mantenimiento; estas generalmente tienen elementos como llaves que limitan para que solamente sean abiertas por la persona indicada.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img14.png', alt='')
        .row.justify-content-center.align-items-center.mb-5          
          .col-md-6.mb-4.mb-md-0
            h3 Luces indicadoras
            p Generalmente están ubicadas en la parte superior de la máquina donde puedan observarse desde cualquier punto de la empresa, su función es poder identificar el estado de la máquina desde una distancia dentro del taller, es decir, si la máquina está ejecutando un programa, si presenta alguna novedad en su funcionamiento o si está suspendida o parada.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img15.png', alt='')

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        h3(data-aos="fade-right") Funciones de la fresadora CNC
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-right") El siguiente esquema expone las partes características de una #[b fresadora CNC]:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema1/img16.svg', alt='')
    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4(style="background-color:#D4E1F2")(data-aos="fade-left")
          p Las funciones en una fresadora de control numérico computarizado CNC están destinadas a obtener una pieza generada por la revolución de las herramientas de corte llamadas fresas, que arrancan viruta al material fijado en una mesa mientras esta se desplaza de acuerdo a las trayectorias para obtener las formas deseadas. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-right") A continuación, se describen las funciones relacionadas con las partes y componentes de la fresadora de control numérico computarizado CNC:
    
    .tarjeta.tarjeta--verde.p-4.mb-4
      LineaTiempoC.color-primario
        .row.justify-content-center.align-items-center.mb-5(titulo="Paso 1")
          .col-md-6.mb-4.mb-md-0
            h3 Cabezal
            p El cabezal es la parte de la fresadora que se encarga de recibir la transmisión de la fuerza y el movimiento rotacional del motor principal y llevarlos a las herramientas de corte, en este caso, las fresas, las cuales, gracias al material duro y a sus formas o geometrías, pueden arrancar la viruta al material de trabajo y, de esta manera, obtener la forma de la pieza final. Generalmente, el cabezal se encuentra en la parte superior de la máquina.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img17.png', alt='')

        .row.justify-content-center.align-items-center.mb-5(titulo="Paso 2")
          .col-md-6.mb-4.mb-md-0
            h3 Mesa de trabajo 
            p Tiene la función de soportar el elemento de sujeción del material (prensa) y moverlo o desplazarlo de acuerdo a las trayectorias del recorrido para obtener, mediante el arranque de viruta de las herramientas, las formas de la pieza final; estos movimientos se dan gracias a que la mesa está soportada por los carros de avance.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img18.png', alt='')
        .row.justify-content-center.align-items-center.mb-5(titulo="Paso 3")
          .col-md-6.mb-4.mb-md-0
            h3 Carrusel de herramientas
            p Es la parte de fresadora que tiene como función sostener las herramientas de corte, es decir las fresas, y disponerlas en el momento que se requieran de acuerdo con el programa creado en el #[em software] de fabricación asistida por computador CAM. Tiene la capacidad de alojar de 4, 8 o 16 herramientas.  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img19.png', alt='')
        .row.justify-content-center.align-items-center.mb-5(titulo="Paso 4")
          .col-md-6.mb-4.mb-md-0
            h3 Monitor y Panel de control
            p Al igual que en el torno de control numérico computarizado CNC, es la parte de la fresadora con la que más interactúa el operador de la máquina CNC, ya que es allí donde se realizan las funciones de: programación, recepción e intercambio de archivos con los programas, visualización del estado de la máquina, de las funciones y operaciones que se están ejecutando, control de las partes y herramientas, así como los diferentes mensajes que estos envían durante la operación o simulación del mecanizado.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img20.png', alt='')
        .row.justify-content-center.align-items-center.mb-5(titulo="Paso 5")
          .col-md-6.mb-4.mb-md-0
            h3 Carros de avance 
            p Permiten que la mesa que sujeta el material de trabajo tenga desplazamiento en 3 sentidos, longitudinal, transversal y de altura, gracias a que la sostienen de manera semejante a un riel de ferrocarril, esto con el fin de generar las ranuras con trayectorias que se dan por el programa creado en el #[em software] de fabricación asistida por computador CAM, mientras que la herramienta gira a grandes velocidades arrancando viruta al material de trabajo.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img21.png', alt='')
        
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        h3(data-aos="fade-right") Funciones del centro de mecanizado
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-right") El centro de mecanizado de control numérico computarizado CNC es muy parecido a una fresadora de control numérico computarizado CNC, sus principales diferencias son: 

    .row.justify-content-center.align-items-center.mb-5      
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.color1t(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img22.jpg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3 Velocidad de giro del cabezal
              p En el centro de mecanizado está por encima de 8000 rpm, mientras que en la fresadora CNC llegan de 4000 rpm a 8000 rpm.
              br
      
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.color2t(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img23.jpg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3 Cambio de herramientas
              p El cambio de herramientas en el centro de mecanizado es automático de acuerdo con el programa, mientras que en la fresadora hay que cambiarlo manualmente.

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.color1t(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img24.jpg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3 Ejes o grados de libertad
              p La fresadora CNC tiene 4 ejes o grados de libertad y el centro de mecanizado, más de 4, las funciones de sus componentes son semejantes.
              br
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        h3(data-aos="fade-right") Funciones de la cortadora por plasma
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-right") Las funciones y características de la cortadora por plasma son:

    TabsC.color-primario
      .py-3.py-md-4(titulo="Mesa de corte")
        .row
          .col-md-6.mb-4.mb-md-0            
            p Aparte de sostener el material de trabajo, que son las láminas o platinas que se quieren cortar, la mesa de corte cumple con otras funciones como el soporte de los carros de desplazamiento y en el momento que la antorcha corta el material, el flujo de aire del plasma hace que las partículas generadas por el corte se dirijan hacia una película de agua que contiene una tina ubicada en la parte inferior de la mesa, con el objetivo de retenerlas y de enfriarlas evitando así que se presenten accidentes.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img25.png', alt='')
              
      .py-3.py-md-4(titulo="Sistema de corte por plasma ")
        .row
          .col-md-6.mb-4.mb-md-0            
            p Se encarga de que, a través de la antorcha, fluya el plasma con las condiciones necesarias para que éste corte las láminas del material de trabajo. Este puede ser #[em Plasma Arc Cutting] o PAC convencional, PAC por oxígeno o PAC de alta definición.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img26.png', alt='')

      .py-3.py-md-4(titulo="Control de la altura de la antorcha")
        .row
          .col-md-6.mb-4.mb-md-0            
            p Se lleva a cabo en la parte superior del sistema de pórtico, la tarea la ejecuta al aumentar o reducir el flujo de gas o de electrones, según lo requieran el espesor y las características del material de trabajo.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img27.png', alt='')
      
      .py-3.py-md-4(titulo="Sistema de CNC")
        .row
          .col-md-6.mb-4.mb-md-0            
            p Se encarga de controlar los movimientos de la antorcha de acuerdo con las trayectorias en el programa creado en el #[em software] de fabricación asistida por computador CAM, estos movimientos se logran gracias al sistema de pórtico sobre el cual está ubicada la antorcha. 
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img27.svg', alt='')

    h4(data-aos="zoom-in-left").my-5 Ejes y movimientos de las máquinas CNC

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(style="background-color:#138AF8")(data-aos="zoom-in-left")
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img29.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p(data-aos="fade-down").mb-0 Tanto para la creación del programa CNC, como para la comprensión del funcionamiento de la máquina de control numérico computarizado CNC, es necesario entender muy bien cómo son los movimientos de los componentes de cada una de las máquinas CNC, los cuales se realizan teniendo en cuenta como referencia los ejes de un sistema cartesiano.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-right") Comprendamos el funcionamiento de los ejes y sus movimientos, mediante las siguientes demostraciones:

    .tarjeta.tarjeta--azul.p-4.mb-5(style="background-color: #E2DEE2")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.mb-5  
          .col-md-6.mb-4.mb-md-0
            h3 Ejes en el torno CNC
            p Para comprender los ejes en los que se desarrollan los movimientos en un torno de control numérico computarizado CNC, es necesario imaginar que el observador se encuentra ubicado de frente al plato de sujeción y, por tanto, los ejes de referencia serán el eje X hacia la derecha, el eje X hacia la izquierda, el eje Z sería el eje de rotación del plato de sujeción positivo hacia el observador y negativo hacia el frente de él.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img30.png', alt='')
        .row.justify-content-center.align-items-center.mb-5          
          .col-md-6.mb-4.mb-md-0
            h3 Ejes en la fresadora CNC 
            p Están definidos por los movimientos generados por los carros, longitudinal, transversal y de alturas de la mesa de trabajo; el eje X es el movimiento del carro longitudinal, el eje Y el movimiento del carro transversal, y el eje Z el movimiento del carro de las alturas. En este caso el operador se encuentra ubicado en el frente de la fresadora.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img31.png', alt='')
        .row.justify-content-center.align-items-center.mb-5          
          .col-md-6.mb-4.mb-md-0
            h3 Ejes en el centro de mecanizado CNC 
            p Son semejantes a los de la fresadora de control numérico computarizado CNC, solo que le aumentan los ejes del elemento de sujeción del material (semejante a un plato de sujeción), para el caso de un centro de mecanizado de 5 ejes.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img32.png', alt='')
        .row.justify-content-center.align-items-center.mb-5          
          .col-md-6.mb-4.mb-md-0
            h3 Ejes en la mesa de corte por plasma CNC
            p En la mesa de corte por plasma CNC los ejes X y Y están definidos por los movimientos del sistema de pórtico “#[em Gantry]” y el eje Z por el control de altura de la antorcha, generando un sistema de coordenadas cartesiano 3D.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img33.png', alt='')
        

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
