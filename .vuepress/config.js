module.exports = {
  title: 'Dirección de Cultura',
  description: 'El actual montaje museológico y museográfico del Museo Histórico de la Ciudad de Guayaquil describe la historia de la ciudad desde la prehistoria hasta los primeros 30 años del siglo XX',
  themeConfig: {
      nav: [
        { text: 'Inicio', link: '/' },
        { text: 'Exposición permanente', link: '/main-guide/' },
        { text: 'Arte sacro', link:'/sacro/' },
        { text: 'Sección numismática', link:'/numismatica/'},
        { text: 'Sección historia natural', link:'/historia-natural/'},
      ],
      sidebar: {
        '/main-guide/': [
          '',
          'Prehispanica',
          'Colonia',
          'Emancipacion',
          'Republica',
          'Siglo-xx'
        ],
        '/sacro/': [
          ''
        ],
        '/numismatica/': [
          '',
          'Moneda-ecuatoriana',
          'Resenia'
        ],
        '/historia-natural/': [
           ''
        ]
      }
  }
}
