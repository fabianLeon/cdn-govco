const MAX_CHARACTERS = 15;
utils.countCharacter("input_con_contador", MAX_CHARACTERS);

const configTable = {
  idSelector: "DataTables_Table_0",
  pageLength: 5,
  pagingType: "full_numbers",
  responsive: true,
  info: false,
  lengthChange: true,
  language: {
    emptyTable: "No se encontraron registros coincidentes",
    search: "Resultados",
    searchPlaceholder: "Busqueda",
  },
};

console.log(configTable);
utils.setConfigTable(configTable);
