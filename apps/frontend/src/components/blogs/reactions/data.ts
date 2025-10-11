import type { Reactions } from "./types"

export const generateReactionMap = (reactions: Reactions): {
    name: 'heart' | 'unicorn' | 'confetti' | 'fireworks' | 'party'
    icon: string
    count: number
}[] => {
    return [
        {
            name: 'heart',
            icon: '/heart.svg',
            count: reactions.heart,
        },

        {
            name: 'unicorn',
            icon: '/unicorn.svg',
            count: reactions.unicorn,
        },
        {
            name: 'confetti',
            icon: '/confetti.svg',
            count: reactions.confetti,
        },
        {
            name: 'fireworks',
            icon: '/fireworks.webp',
            count: reactions.fireworks,
        },
        {
            name: 'party',
            icon: '/party.jpg',
            count: reactions.party,
        },
    ]
}