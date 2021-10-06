export interface Cards {
    item1: CardItem[];
    item2: CardItem[];
}

export interface CardItem {
    source: string;
    alt: string;
    title: string;
    desc: string;
}

export const cards: Cards = {
    item1: [
        {
            source: '../../assets/img/icons/icon-card-claim.svg',
            alt: 'claim img',
            title: 'Claim',
            desc: 'Deposits are spread across unique, individual-dedicated smart contracts. This removes all the vulnerabilities that have caused shared pools to be exploited.'
        },
        {
            source: '../../assets/img/icons/icon-card-delegate.svg',
            alt: 'delegate img',
            title: 'Delegate',
            desc: 'Real-time price monitoring through distributed oracles makes sure a stop-loss is triggered.'
        },
        {
            source: '../../assets/img/icons/icon-card-validate.svg',
            alt: 'validate img',
            title: 'Validate',
            desc: 'Built-in codebase assessment tools to recognize and avoid rugpulls, and quality assessment parameters.'
        },
    ],

    item2: [
        {
            source: '../../assets/img/icons/icon-card-transparency.svg',
            alt: 'Transparency img',
            title: 'Transparency',
            desc: 'The Defi staking development platform should be more transparent, where the workflow should be visible in order to ensure privacy and build quality.'
        },
        {
            source: '../../assets/img/icons/icon-card-liquidity.svg',
            alt: 'Liquidity img',
            title: 'Liquidity',
            desc: 'The DeFi staking platform should be able to offer very high liquidity to the users.'
        },
        {
            source: '../../assets/img/icons/icon-card-security.svg',
            alt: 'Security img',
            title: 'Security',
            desc: 'The security of the DeFi staking platform should be more strong and they should be able to defend the attacks in the existing with the exclusive defense script like Anti-DDos, Anti-SSL, and more on '
        },
    ]
}