const getContactHref = (name, contact) => {
  let href;

  switch (name) {
    case 'twitter':
      href = `https://www.twitter.com/wshbr13`;
      break;
    case 'instagram':
      href = `https://www.instagram.com/jspr13`;
      break;
    case 'email':
      href = `mailto:szavui.andreas@gmail.com`;
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export default getContactHref;
