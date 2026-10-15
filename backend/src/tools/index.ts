import type { DatabaseSync } from "node:sqlite";
import { tool } from "@langchain/core/tools";
import { z } from "zod/v4";

export const toolsWithdb = (db: DatabaseSync) => {
  const getExpenseTool = tool(
    ({ from, to }) => {
      try {
        const statment = db.prepare(
          `SELECT * FROM expenses WHERE date >= ? AND date <= ?`,
        );

        const rows = statment.all(from, to);

        return JSON.stringify(rows);
      } catch (error) {
        console.log(
          "Something went wrong while fetching expense to database",
          error,
        );

        return JSON.stringify([{ status: "failed", row: [] }]);
      }
    },
    {
      name: "get_expense",
      description: "get the expense from database for given range",
      schema: z.object({
        from: z.string().describe("Start Date in YYYY-MM-DD"),
        to: z.string().describe("End Date in YYYY-MM-DD"),
      }),
    },
  );

  const addExpenseTool = tool(
    ({ amount, title }) => {
      try {
        const date = new Date().toISOString().split("T")[0] ?? "";

        const statment = db.prepare(
          `INSERT INTO expenses (title,amount,date) VALUES (?,?,?)`,
        );

        statment.run(title, amount, date);

        return JSON.stringify([{ status: "success¡" }]);
      } catch (error) {
        console.log(
          "Something went wrong while adding expense to database",
          error,
        );

        return JSON.stringify([{ status: "failed" }]);
      }
    },
    {
      name: "add_expense",
      description: "add the given expense to database",
      schema: z.object({
        title: z.string().describe("The expense title"),
        amount: z.number().describe("The Amount spent"),
      }),
    },
  );

  const genChartTool = tool(
    ({ from, to }) => {
      try {
        const query = `
          SELECT strftime('%Y-%m', date) as period, SUM(amount) as total
          FROM expenses WHERE date >= ? AND date <= ?
          GROUP BY period
          ORDER BY period
        `;

        const statment = db.prepare(query);

        const rows = statment.all(from, to);

        console.log({ rows });

        return JSON.stringify(rows);
      } catch (error) {
        console.log(
          "Something went wrong while generating expense to database",
          error,
        );

        return JSON.stringify([{ status: "failed", row: [] }]);
      }
    },
    {
      name: "generate_expense_chart",
      description:
        "Generate Expense charts by querying the database and grouping expenses by month, week or date",
      schema: z.object({
        from: z.string().describe("Start Date in YYYY-MM-DD"),
        to: z.string().describe("End Date in YYYY-MM-DD"),
        groupBy: z
          .enum(["month", "week", "date"])
          .describe("How to group data by month, week and date"),
      }),
    },
  );

  return [getExpenseTool, genChartTool, addExpenseTool];
};
