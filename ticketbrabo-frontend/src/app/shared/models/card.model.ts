export interface CardModel {
    id: string,
    title: string,
    quantity: number,
    quantityTotal: number,
    bgColor: CardBackgroundEnum | string,
    colorSpinnerBg:CardSpinnerEnum | string,
}

export enum CardBackgroundEnum {
    AZUL = "#369FFF",
    VERMELHO = "#ff3d36",
    ROXO_ESCURO = "#616587"
}

export enum CardSpinnerEnum {
    AZUL = "#006ED366",
    VERMELHO = "#FF000066",
    VERDE = "#41BC1F66"
}