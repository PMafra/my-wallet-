import * as financialService from "../services/financialService.js";

async function addFinancial (req, res) {
    try {
      const { user } = res.locals;
      const { value, type } = req.body;
  
      if (!value || !type) {
        return res.sendStatus(400);
      }
  
      if (!['INCOME', 'OUTCOME'].includes(type)) {
        return res.sendStatus(400);
      }
  
      if (value < 0) {
        return res.sendStatus(400);
      }
  
      await financialService.createFinancial({ userId: user.id, value, type });
  
      return res.sendStatus(201);
    } catch (err) {
      console.error(err);
      return res.sendStatus(500);
    }
  }

async function getFinancials (req, res) {
    try {
      const { user } = res.locals;

      const events = await financialService.requireFinancials({ userId: user.id });
  
      return res.send(events.rows);
    } catch (err) {
      console.error(err);
      return res.sendStatus(500);
    }
  }

  async function getFinancialsSum (req, res) {
    try {
      const { user } = res.locals;

      const sum = await financialService.sumFinancials({ userId: user.id });
      
      res.send({ sum });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }

export {
    addFinancial,
    getFinancials,
    getFinancialsSum,
}
