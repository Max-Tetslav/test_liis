const getEndDate = (startDate: string, days: string) => {
  const date = new Date(startDate);
  const endDate = date.setDate(date.getDate() + Number(days));

  return new Date(endDate).toLocaleDateString().split('.').reverse().join('-');
};

export default getEndDate;
