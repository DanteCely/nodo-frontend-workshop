import global from './global.json';

export let language = 'en';

const i18n = (key, replace) => {
  let meaning = global[key] || key;

  // TODO: Optimizar
  for (const [key, value] of Object.entries(global)) {
    const theKey = `$${key}`;
    if (meaning.includes(theKey)) {
      meaning = meaning.replace(theKey, value);
    }
  }

  if (typeof replace === 'object' && Object.keys(replace).length > 0) {
    for (const [key, value] of Object.entries(replace)) {
      if (meaning.includes(key)) {
        meaning = meaning.replace(key, value);
      }
    }
  }

  return meaning;
};

export default i18n;
