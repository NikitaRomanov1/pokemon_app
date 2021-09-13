import { useEffect, useRef } from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
  //обсервер для динамической пагинации
  //следит за последним элементом, невидимым дивом под списком
  const observer = useRef();
  useEffect(() => {
    if (isLoading) return; //если грузится то не создатся новый обзервер
    if (observer.current) observer.current.disconnect();
    var cb = function (entries, observer) {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, [isLoading]);
};
