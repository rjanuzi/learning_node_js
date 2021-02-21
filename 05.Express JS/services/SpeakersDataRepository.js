class SpeakersDataRepository {
  constructor(datafile) {
    this.datafile = datafile;
  }

  getList() {
    const data = {
      speakers: [
        {
          title: 'Art in Full bloom',
          name: 'Lorenzo Garcia',
          shortname: 'Lorenzo_Garcia',
          summary: 'Drawing and painting flowers...',
          photo: 'Speaker_1_Photo.png',
          description: '<p>Lorenzo was born in Mexico, but...</p>',
          artwork: [
            'Lorenzo_Garcia_01_tn.jpg',
            'Lorenzo_Garcia_02_tn.jpg',
            'Lorenzo_Garcia_03_tn.jpg',
            'Lorenzo_Garcia_04_tn.jpg',
          ]
        },
        {
          title: 'Bla bla bla',
          name: 'Fulano de Tal',
          shortname: 'Fulano_de_Tal',
          summary: 'Bla bla bla sobre fulano de tal...',
          photo: 'Speaker_2_Photo.png',
          description: '<p>Descrição sobre fulano de tal</p>',
          artwork: [
            'Fulano_de_Tal_01_tn.jpg',
            'Fulano_de_Tal_02_tn.jpg',
            'Fulano_de_Tal_03_tn.jpg',
            'Fulano_de_Tal_04_tn.jpg',
          ],
        },
        {
          title: 'Bla bla bla',
          name: 'Fulano de Tal 2',
          shortname: 'Fulano_de_Tal',
          summary: 'Bla bla bla sobre fulano de tal...',
          photo: 'Speaker_3_Photo.png',
          description: '<p>Descrição sobre fulano de tal</p>',
          artwork: [
            'Fulano_de_Tal_01_tn.jpg',
            'Fulano_de_Tal_02_tn.jpg',
            'Fulano_de_Tal_03_tn.jpg',
            'Fulano_de_Tal_04_tn.jpg',
          ],
        }
      ]
    };
    return data;
  }

  getNames() {
    const data = [
      { name: 'Rafael B. Januzi', shortname: 'Rafael_Januzi' },
      { name: 'Paula C. Cardoso', shortname: 'Paula_Cardoso' },
      { name: 'Ramona C. Januzi', shortname: 'Ramona_Januzi' },
      { name: 'Ravena C. Januzi', shortname: 'Ravena_Januzi' },
    ];
    return data;
  }
}

module.exports = SpeakersDataRepository;
