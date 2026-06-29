const villageModules = import.meta.glob("../data/villages/*.js");

export async function loadVillages(tehsilId) {
  const path = `../data/villages/${tehsilId}.js`;

  if (!villageModules[path]) {
    return [];
  }

  const module = await villageModules[path]();

  return module.default;
}