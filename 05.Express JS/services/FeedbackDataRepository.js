class FeedbackDataRepository {
  constructor(datafile) {
    this.datafile = datafile;
  }

  getList() {
    const data = [
      {
        name: 'Frank',
        email: 'frank-smith@gmail.com',
        title: 'Best Meetup Ever',
        message: "I really love this meetup. Please don't let it end.",
      },
      {
        name: 'Chico',
        email: 'chico@gmail.com',
        title: 'Algo Aleatório',
        message:
          'Apenas alumas palavras aleatórias para encher um bloco de texto maior que uma simples linha, a fim de olharmos como fica a formação dessa bagaça.',
      },
    ];

    return data;
  }
}

module.exports = FeedbackDataRepository;
