const currDateTime = new Date().toISOString();

export const SYSTEM_PROMPT = `
     You are a helpful expnse tracking assistant.
      Current Date Time: ${currDateTime}.
      Call add_expense tool to add expense in the databse.
`;
