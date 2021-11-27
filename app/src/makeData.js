import namor from 'namor';

const range = (len) => Array.from(Array(len).keys());

const newPerson = () => {
  return {
    name: namor.generate({ words: 2 }),
    pancakeSwap: Math.floor(Math.random() * 100),
    uniSwap: Math.floor(Math.random() * 100),
    bakerySwap: Math.floor(Math.random() * 100),
    dex4: Math.floor(Math.random() * 100),
    dex5: Math.floor(Math.random() * 100),
    dex6: Math.floor(Math.random() * 100),
    dex7: Math.floor(Math.random() * 100),
    dex8: Math.floor(Math.random() * 100),
  };
};

export default function makeData(len) {
  const makeDataLevel = () => {
    return range(len).map(() => newPerson());
  };

  return makeDataLevel();
}
