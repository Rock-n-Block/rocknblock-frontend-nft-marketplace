interface Card {
  title: string;
  titleRed: string;
  description: string;
  imgUrl: string;
}

export const cardData: Card[] = [
  {
    title: 'ERC 721 ',
    titleRed: 'Single',
    description: 'if you want your collectible to be one of a kind',
    imgUrl: '../../assets/img/marketplacePage/721.svg',

  },
  {
    title: 'TRC 721 ',
    titleRed: 'Single',
    description: 'if you want your collectible to be one of a kind',
    imgUrl: '../../assets/img/marketplacePage/721.svg',
  },
  {
    title: 'ERC 1155 ',
    titleRed: 'Multiple',
    description: 'if you want to sell one collectible multiple times',
    imgUrl: '../../assets/img/marketplacePage/1155.svg',
  },
]