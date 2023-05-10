import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const getFormattedContent = (data, format) => {
  switch (format) {
    case 'stylish': {
      return stylish(data);
    }
    case 'plain': {
      return plain(data);
    }
    case 'json': {
      return json(data);
    }
    default:
      throw new Error(`Format ${format} is not supported`);
  }
};

export default getFormattedContent;
