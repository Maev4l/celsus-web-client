const bookLanguages = [
  {
    id: 'fr',
    value: 'French',
  },
  {
    id: 'gb',
    value: 'English',
  },
];

export default () => ({
  getBooksLanguages: () => bookLanguages,
  getLanguageDescription: (id) => {
    const result = bookLanguages.filter((l) => l.id === id);
    if (result.length === 0) {
      return null;
    }

    return result[0].value;
  },
});
