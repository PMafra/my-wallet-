import * as financialRepository from "../repositories/financialRepository.js";

async function createFinancial ({ userId, value, type }) {

    await financialRepository.createFinancial({ userId, value, type});

    return true;
}

async function requireFinancials ({ userId }) {

    const events = await financialRepository.selectFinancials({ userId });

    return events;
}

export {
    createFinancial,
    requireFinancials,
}