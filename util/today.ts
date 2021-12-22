export const isToday = async (dateParameter: any): Promise<boolean> => {
  const today = new Date();
  return (
    dateParameter.getDate() === today.getDate() &&
    dateParameter.getMonth() === today.getMonth()
  );
};
