export type FeeOptions = IOtherFeeOptions | IGasFeeOptions;

export interface IGasFeeOptions {
    gasPrice: number;
    gasLimit: number;
}

export interface IOtherFeeOptions {
    // This is just to test multiple interfaces, should be removed
    lol: number;
}
