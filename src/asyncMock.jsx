const products = [
  {
    id: '1',
    name: 'Buzo negro',
    category: 'buzos',
    price: 3000,
    img: 'https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2022/6/7/7488114.jpg',
    stock: 12
  },
  {
    id: '2',
    name: 'Buzo blanco',
    category: 'buzos',
    price: 3200,
    img: 'https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2021/9_29/0/108/65/7094662.jpg',
    stock: 9
  },
  {
    id: '3',
    name: 'Buzo gris',
    category: 'buzos',
    price: 2700,
    img: 'https://www.clicksport.com.ar/26618-thickbox_default/buzo-vans-big-chest-look-lifestyle-hombre.jpg',
    stock: 16
  },
  {
    id: '4',
    name: 'Zapatillas blancas',
    category: 'zapatillas',
    price: 6000,
    img: 'https://media.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/2/0/200010557146001-1_1.jpg',
    stock: 5
  },
  {
    id: '5',
    name: 'Zapatillas negras',
    category: 'zapatillas',
    price: 6500,
    img: 'https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/2/0/200010557144001-1.jpg',
    stock: 8
  },
  {
    id: '6',
    name: 'Remera blanca',
    category: 'remeras',
    price: 2500,
    img: 'https://ferreira.vtexassets.com/arquivos/ids/343135-1600-auto?v=637247208607400000&width=1600&height=auto&aspect=true',
    stock: 15
  },
  {
    id: '7',
    name: 'Remera gris',
    category: 'remeras',
    price: 2500,
    img: 'https://piet.com.ar/wp-content/uploads/piet-remera-pima-basics-gris-00.jpg',
    stock: 15
  },
  {
    id: '8',
    name: 'Remera negra',
    category: 'remeras',
    price: 2500,
    img: 'https://piet.com.ar/wp-content/uploads/piet-remera-pima-basics-negro-00.jpg',
    stock: 15
  },
  {
    id: '9',
    name: 'Buzo rojo',
    category: 'buzos',
    price: 6500,
    img: 'https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/b/u/buzo-con-capucha-adidas-essentials-3-tiras-rojo-100020fm6049001-1.jpg',
    stock: 3
  },
  {
    id: '10',
    name: 'Zapatillas azules',
    category: 'zapatillas',
    price: 6500,
    img: 'https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/2/0/200010166635001-1.jpg',
    stock: 7
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 2000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId))
    }, 2000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === categoryId))
    }, 2000);
  });
};