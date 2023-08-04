export default {
  global: {
    componenteFormativo:
      'Operación de máquinas CNC para la fabricación de piezas',
    descripcionCurso:
      'El presente componente instruye sobre la operación de las máquinas CNC, para la fabricación de gran variedad de piezas; diferentes funciones, ejes y movimientos de los componentes de las máquinas CNC, la simulación de los programas transferidos o creados en la máquina y, finalmente, el mantenimiento que se requiere para un óptimo funcionamiento y vida útil de la maquinaria.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Operación del mecanizado CNC',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Montaje de material y “cero de trabajo” en máquinas CNC',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Montaje y compensación de herramientas en la máquina CNC',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Transferencia de archivos a la máquina CNC',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          'Mantenimiento de la máquina de control numérico computarizado CNC',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Operación del mecanizado CNC',
      referencia:
        'Serrano, D. Mejía,. Rodríguez, F. (2012).  <em>Comprobación y optimización del programa CNC para el mecanizado por arranque de viruta</em>',
      tipo: 'E-Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/42599',
    },
    {
      tema: 'Operación del mecanizado CNC',
      referencia:
        'Giraldo, A. (2019). <em>Seguridad Industrial. Ecoe Ediciones</em>.',
      tipo: 'E-Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_elibroELB126454 ',
    },
    {
      tema: 'Montaje y compensación de herramientas en la máquina CNC',
      referencia:
        'Alarcón, M. (2018). <em>Herramientas de corte, código ISO 1832 para insertos de corte</em>.',
      tipo: 'Norma',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/9538/mod_resource/content/1/presentaci%C3%B3n2.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Buril',
      significado: 'herramienta de corte con la que trabaja un torno.',
    },
    {
      termino: 'CAD',
      significado:
        'del inglés <em>Computer Aided Design</em>, o diseño asistido por el computador.',
    },
    {
      termino: 'CAE',
      significado:
        'del inglés <em>Computer Aided Enginnering</em>, o ingeniería asistida por computador.',
    },
    {
      termino: 'CAM',
      significado:
        'del inglés <em>Computer Aided Manufacture</em>, o fabricación asistida por computador.',
    },
    {
      termino: 'CNC',
      significado: 'control numérico computarizado.',
    },
    {
      termino: 'Compensar herramienta',
      significado:
        'indicar a la máquina la posición del extremo, su radio y otras características.',
    },
    {
      termino: 'Eje',
      significado: 'línea imaginaria alrededor de la cual gira un elemento.',
    },
    {
      termino: 'Fresa',
      significado:
        'herramienta de corte con la que trabaja una fresadora o un centro de mecanizado.',
    },
    {
      termino: 'Máquina NC',
      significado: 'se refiere a una máquina con control numérico.',
    },
    {
      termino: 'PLM',
      significado:
        'del inglés <em>Product Life Cycle</em>, o gestión del ciclo de vida del producto.',
    },
    {
      termino: 'Viruta',
      significado: 'residuo del material que surge del corte o mecanizado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alarcón, M. (2018) <em>Herramientas de corte, código ISO 1832 para insertos de corte</em>.',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/9538/mod_resource/content/1/presentaci%C3%B3n2.pdf',
    },
    {
      referencia:
        'Autycom (2020). ¿<em>Qué es el control numérico computarizado o CNC</em>?',
      link:
        'https://www.autycom.com/que-es-el-control-numerico-computarizado-o-cnc/ ',
    },
    {
      referencia:
        'Inoxform (2022). <em>Descubre lo diferentes tipos de máquinas CNC</em>.',
      link: 'https://inoxform.eu/es/tipos-de-maquinas-cnc/',
    },
    {
      referencia:
        'Serrano, D. Mejías, F. Rodríguez, F. (2012). <em>Comprobación y optimización del programa CNC para el mecanizado por arranque de viruta</em>. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/42599',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
