function parseAndSortCashflows(data) {
  return data.cashflows
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .map((item) => ({
      ...item,
      type:
        item.type === "income"
          ? "수입"
          : item.type === "expense"
          ? "지출"
          : item.type || "지출",
      date: item.date || "-",
      category: item.category || "-",
    }));
}

export default parseAndSortCashflows;
