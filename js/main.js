function getRandom(a, b){
    const diff = Math.abs(a - b);
    const min = Math.min(a, b);
    const rand = Math.floor(Math.random() * (diff + 1));
    return rand + min;
  };
  
  const isLong = (str, maxLength) => str.length <= maxLength;

  const comments = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  const names = [
    'Артём',
    'Катя',
    'Настя',
    'Петя',
    'Владислав',
    'Лена',
    'Jack'
  ];

  const descriptions = [
    'girl',
    'plane',
    'car',
    'cat',    
  ];

  const getRandomElement = (elements) => elements[getRandom(0, elements.length - 1)];

  const createPhoto = () => {
    return {
      id: getRandom(1, 25),
      url: `photos/avatar-${getRandom(1, 25)}.jpg`,
      description: getRandomElement(descriptions),
      likes: getRandom(15,200),
      comments: ()=> Array.from({length: 4},
        {
        id: getRandomr(1,1000),
        avatar: `img/avatar-${getRandom(1, 6)}.svg`,
        message: getRandomElement(comments),
        name: getRandomElement(names)
        })
    };
  };


  const createPhotos = () => Array.from({length: 4}, createPhoto);