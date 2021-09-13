import { useMemo } from "react";
//ТАК БЫЛО РАНЬШЕ:
//хук useMemo нужен для кэширования чтобы постоянно не производить сортировку
//колбек отработает только после изменения одного из параметров массива во втором аргументе
//либо меняется сортировка, либо добавляются посты
//функция sort не возвращает новый массив, а мутирует уже существующий
//разворачиваем массив и мутируем его копию
// const sortedPosts = useMemo(() => {
//   if (filter.sort) {
//     return [...posts].sort((a, b) =>
//       a[filter.sort].localeCompare(b[filter.sort])
//     );
//   }
//   return posts;
// }, [filter.sort, posts]);

// ТЕПЕРЬ ВОТ ТАК:

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort === "title" || sort === "body") {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    } else if (sort === "id") {
      return [...posts].sort((prev, next) => prev.id - next.id);
    }
    return posts;
  }, [sort, posts]);
  return sortedPosts;
};

// ТАК БЫЛО РАНЬШЕ :

//поиск сработает только если изменится состояние в строке поиска
//или отсортированный массив
//   const sortedAndFilteredPosts = useMemo(() => {
//     return sortedPosts.filter((post) =>
//       post.title.toLowerCase().includes(filter.query)
//     );
//   }, [filter.query, sortedPosts]);
//ТАК СЕЙЧАС:
export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndFilteredPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query)
    );
  }, [query, sortedPosts]);
  return sortedAndFilteredPosts;
};
