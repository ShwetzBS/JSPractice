const menu = {
  mainmenu: ["Bread", "Cakes", "Sweets"],
};

const new_menu = {
  mainmenu: ["Samosa", "Pattice"],
};

//Join 2 arrays

const menu_array = [...menu.mainmenu];
const new_menu_array = [...new_menu.mainmenu];

console.log(menu_array);
console.log(new_menu_array);

//Joning the arrays
const joined_arrays_seperated = [menu_array, new_menu_array];
console.log(joined_arrays_seperated);
//[ [ 'Bread', 'Cakes', 'Sweets' ], [ 'Samosa', 'Pattice' ] ]

const joined_arrays = [...menu.mainmenu, ...new_menu.mainmenu];
console.log(joined_arrays);
//[ 'Bread', 'Cakes', 'Sweets', 'Samosa', 'Pattice' ]
