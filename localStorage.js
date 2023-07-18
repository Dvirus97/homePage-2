export const ls = (() => {
  const storageName = "HomePageLinks";
  const save = (data) => {
    localStorage.setItem(storageName, JSON.stringify(data));
  };
  const load = () => {
    const json = localStorage.getItem(storageName);
    return JSON.parse(json);
  };
  const remove = (name) => {
    const data = load();
    const links = data.filter((l) => l.name !== name);
    save(links);
  };

  return { save, load, remove };
})();
