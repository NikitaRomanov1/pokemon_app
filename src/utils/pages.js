export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

//переделать пересчет страниц с хуком useMEmo и кастом хуком usePagination

export const getPagesArray = (totalPages) => {
  let result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }
  return result;
};
