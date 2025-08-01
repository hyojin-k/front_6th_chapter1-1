export const getQueryParams = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    search: params.get("search") || "",
    limit: parseInt(params.get("limit")) || 20,
    sort: params.get("sort") || "price_asc",
    category1: params.get("category1") || "",
    category2: params.get("category2") || "",
  };
};

export const updateQueryParams = (newParams) => {
  const params = new URLSearchParams(window.location.search);
  Object.entries(newParams).forEach(([key, value]) => {
    if (!value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
  });
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.pushState({}, "", newUrl);
};
