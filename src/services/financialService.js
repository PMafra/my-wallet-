import * as financialRepository from "../repositories/financialRepository.js";

async function createFinancial ({ userId, value, type }) {

    await financialRepository.createFinancial({ userId, value, type});

    return true;
}

export {
    createFinancial,
}