import * as financialRepository from "../repositories/financialRepository.js";

async function createFinancial ({ userId, value, type }) {

    await financialRepository.createFinancial({ userId, value, type});

    return true;
}

async function requireFinancials ({ userId }) {

    const events = await financialRepository.selectFinancials({ userId });

    return events;
}

async function sumFinancials ({ userId }) {

    const events = await financialRepository.selectFinancials({ userId });
  
    const sum = events.rows.reduce((total, event) => event.type === 'INCOME' ? total + event.value : total - event.value, 0);
    return sum;
}

export {
    createFinancial,
    requireFinancials,
    sumFinancials,
}