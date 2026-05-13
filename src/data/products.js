// agregar detalle a product
export const products = [
    // --- CATEGORÍA: PROCESADORES ---
    {
        id: 1,
        name: "AMD Ryzen 5 5600X",
        price: 180000,
        category: "Procesadores",
        description: "6 núcleos y 12 hilos, ideal para gaming competitivo y multitarea eficiente.",
        image: "https://www.notebookcheck.org/fileadmin/Notebooks/AMD/ryzen5_badge.jpg",
        stock: 10,
    },
    {
        id: 2,
        name: "Intel Core i5-13600K",
        price: 320000,
        category: "Procesadores",
        description: "Arquitectura híbrida con 14 núcleos. Potencia bruta para creadores y jugadores entusiastas.",
        image: "https://m.media-amazon.com/images/I/61DvPvlMACL._AC_UF350,350_QL80_DpWeblab_.jpg",
        stock: 6,
    },
    {
        id: 3,
        name: "AMD Ryzen 7 5800X3D",
        price: 350000,
        category: "Procesadores",
        description: "El rey del gaming en AM4 gracias a su tecnología 3D V-Cache que maximiza los FPS.",
        image: "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2505503-ryzen-7-5800x3d.jpg",
        stock: 4,
    },
    {
        id: 4,
        name: "Intel Core i9-14900K",
        price: 680000,
        category: "Procesadores",
        description: "La cima del rendimiento de Intel. 24 núcleos para dominar cualquier carga de trabajo pesada.",
        image: "https://dinobyte.ar/wp-content/uploads/CPU143.jpg",
        stock: 3,
    },
    {
        id: 5,
        name: "AMD Ryzen 9 7950X",
        price: 620000,
        category: "Procesadores",
        description: "16 núcleos de alto rendimiento en plataforma AM5. Rendimiento extremo para renderizado.",
        image: "https://statics.qloud.ar/m-y-m-computacion-06-2020/0000000000000730143314534_1.jpg",
        stock: 5,
    },
    {
        id: 6,
        name: "Intel Core i3-12100F",
        price: 95000,
        category: "Procesadores",
        description: "El mejor procesador calidad-precio para entrada al gaming moderno en 1080p.",
        image: "https://www.comeros.com.ar/wp-content/uploads/2022/05/BX8071512100-1.webp",
        stock: 20,
    },
    {
        id: 7,
        name: "AMD Ryzen 5 7600",
        price: 240000,
        category: "Procesadores",
        description: "Entrada a la plataforma DDR5. Eficiente, fresco y potente para setups modernos.",
        image: "https://http2.mlstatic.com/D_NQ_NP_991998-MLA99505490896_112025-O.webp",
        stock: 12,
    },
    {
        id: 8,
        name: "Intel Core i7-12700K",
        price: 410000,
        category: "Procesadores",
        description: "Equilibrio perfecto entre precio y rendimiento profesional con 12 núcleos.",
        image: "https://fullh4rd.com.ar/img/productos/1/micro-intel-core-i7-12700k-scooler-s1700--barato-q-12700kf-oferta-0.jpg",
        stock: 7,
    },
    {
        id: 9,
        name: "AMD Ryzen 3 4100",
        price: 75000,
        category: "Procesadores",
        description: "Solución económica para equipos de oficina o gaming ligero con GPU dedicada.",
        image: "https://http2.mlstatic.com/D_NQ_NP_991998-MLA99505490896_112025-O.webp",
        stock: 15,
    },
    {
        id: 10,
        name: "Intel Core i5-11400F",
        price: 130000,
        category: "Procesadores",
        description: "Un clásico confiable de 6 núcleos para presupuestos ajustados.",
        image: "https://fullh4rd.com.ar/img/productos/1/micro-intel-core-i5-14400f-svideo-ccooler-s1700-0.jpg",
        stock: 9,
    },

    // --- CATEGORÍA: TARJETAS DE VIDEO ---
    {
        id: 11,
        name: "NVIDIA RTX 4060 8GB",
        price: 420000,
        category: "Tarjetas de Video",
        description: "Arquitectura Ada Lovelace con DLSS 3. Bajo consumo y gran potencia para 1080p.",
        image: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4060-4060ti/geforce-rtx-4060-ti-og-1200x630.jpg",
        stock: 5,
    },
    {
        id: 12,
        name: "NVIDIA RTX 4070 Super",
        price: 780000,
        category: "Tarjetas de Video",
        description: "El punto dulce para jugar a 1440p en ultra con trazado de rayos avanzado.",
        image: "https://spacegamer.com.ar/img/Public/1058/96490-producto-1.jpg",
        stock: 4,
    },
    {
        id: 13,
        name: "AMD Radeon RX 7800 XT",
        price: 650000,
        category: "Tarjetas de Video",
        description: "16GB de VRAM para asegurar longevidad en juegos exigentes. Excelente rendimiento nativo.",
        image: "https://www.invidcomputers.com/images/000000000041573739725415737--1-.png",
        stock: 6,
    },
    {
        id: 14,
        name: "NVIDIA RTX 4090 24GB",
        price: 2100000,
        category: "Tarjetas de Video",
        description: "La tarjeta más potente del mundo. Diseñada para 4K nativo y renderizado profesional.",
        image: "https://turtech.com.ar/Pics_Prod/VGA305.jpg",
        stock: 2,
    },
    {
        id: 15,
        name: "AMD Radeon RX 6600",
        price: 280000,
        category: "Tarjetas de Video",
        description: "La reina de la eficiencia para jugar a todo en 1080p con un presupuesto medido.",
        image: "https://pg.asrock.com/Graphics-Card/photo/Radeon%20RX%206600%20XT%20Phantom%20Gaming%20D%208GB%20OC(L1).png",
        stock: 14,
    },
    {
        id: 16,
        name: "NVIDIA RTX 3060 12GB",
        price: 360000,
        category: "Tarjetas de Video",
        description: "Favorita por su gran cantidad de memoria VRAM, ideal para edición y juegos modernos.",
        image: "https://www.mastecnologia.com.ar/images/productos/12712.png",
        stock: 11,
    },
    {
        id: 17,
        name: "AMD Radeon RX 7900 XTX",
        price: 1300000,
        category: "Tarjetas de Video",
        description: "El buque insignia de AMD con 24GB de memoria. Potencia masiva para entusiastas.",
        image: "https://pg.asrock.com/Graphics-Card/photo/Radeon%20RX%207900%20XTX%20Phantom%20Gaming%2024GB%20OC(L1).png",
        stock: 3,
    },
    {
        id: 18,
        name: "NVIDIA RTX 4080 Super",
        price: 1450000,
        category: "Tarjetas de Video",
        description: "Rendimiento premium para 4K y Ray Tracing de alta fidelidad.",
        image: "https://www.invidcomputers.com/images/000000000041597548734415975--1-.png",
        stock: 4,
    },
    {
        id: 19,
        name: "AMD Radeon RX 7600",
        price: 340000,
        category: "Tarjetas de Video",
        description: "Arquitectura RDNA 3 para una experiencia fluida y moderna en alta definición.",
        image: "https://pg.asrock.com/Graphics-Card/photo/Radeon%20RX%207600%20Phantom%20Gaming%208GB%20OC(L1).png",
        stock: 8,
    },
    {
        id: 20,
        name: "NVIDIA GTX 1650 4GB",
        price: 190000,
        category: "Tarjetas de Video",
        description: "Entrada económica para equipos compactos y juegos tipo eSports.",
        image: "https://storage-asset.msi.com/global/picture/product/product_8_20190423112417_5cbe8561731bf.webp",
        stock: 10,
    },

    // --- CATEGORÍA: MONITORES ---
    {
        id: 21,
        name: "Samsung 24\" Curvo",
        price: 150000,
        category: "Monitores",
        description: "Curvatura 1800R para una inmersión total y panel VA para mejores contrastes.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFYWY7sSRtrPFNpBbIhUDeaDeU0vcKYfKx-Q&s",
        stock: 8,
    },
    {
        id: 22,
        name: "LG UltraGear 27\" IPS",
        price: 290000,
        category: "Monitores",
        description: "144Hz y 1ms de respuesta. Colores vibrantes gracias a su tecnología IPS.",
        image: "https://www.xt-pc.com.ar/img/productos/18/MON853.jpg",
        stock: 6,
    },
    {
        id: 23,
        name: "ASUS TUF 24\" 165Hz",
        price: 240000,
        category: "Monitores",
        description: "Diseñado para profesionales de eSports con Extreme Low Motion Blur.",
        image: "https://dlcdnwebimgs.asus.com/gain/0f372e3e-f38e-4a9b-824a-978bc7689a99/w800",
        stock: 10,
    },
    {
        id: 24,
        name: "Gigabyte 34\" UltraWide",
        price: 580000,
        category: "Monitores",
        description: "Resolución WQHD en formato 21:9. Ideal para productividad y juegos envolventes.",
        image: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1530/innergigabyteimages/bg1.png",
        stock: 3,
    },
    {
        id: 25,
        name: "Dell UltraSharp 27\" 4K",
        price: 490000,
        category: "Monitores",
        description: "Precisión de color profesional (sRGB 99%) para diseñadores y editores de video.",
        image: "https://pardohogar.vtexassets.com/arquivos/ids/734587/image-ea14e9ca20ca459382e40b7a1550449e.jpg?v=638948388549400000",
        stock: 5,
    },
    {
        id: 26,
        name: "MSI Optix 27\" Curvo 165Hz",
        price: 310000,
        category: "Monitores",
        description: "Panel VA curvo con una tasa de refresco ultra rápida para una ventaja competitiva.",
        image: "https://http2.mlstatic.com/D_NQ_NP_986929-MLA44375327078_122020-O.webp",
        stock: 7,
    },
    {
        id: 27,
        name: "Samsung Odyssey G7 32\"",
        price: 720000,
        category: "Monitores",
        description: "Resolución QHD, 240Hz y tecnología QLED. El monitor curvo definitivo.",
        image: "https://http2.mlstatic.com/D_NQ_NP_862124-CBT103385879764_012026-O.webp",
        stock: 2,
    },
    {
        id: 28,
        name: "BenQ ZOWIE XL2411K",
        price: 275000,
        category: "Monitores",
        description: "El estándar de los torneos de CS:GO. Claridad de movimiento incomparable.",
        image: "https://www.infinitonline.com.ar/images/000000000000177325747000000000000177389631nb-MONITOR-GAMER-BENQ-LED-24-ZOWIE-XL2411K-R-DARK-GREY-ver-a8d007aabf63b301b238e151dfc12876--1-.jpg",
        stock: 12,
    },
    {
        id: 29,
        name: "ViewSonic 22\" Office",
        price: 98000,
        category: "Monitores",
        description: "FHD con conectividad HDMI y VGA. Perfecto para estaciones de trabajo simples.",
        image: "https://www.viewsonic.com/vsAssetFile/uk/img/slides/0lcd/VA2261H-9/VA2261H-9_Front.jpg",
        stock: 25,
    },
    {
        id: 30,
        name: "AOC 27\" 75Hz IPS",
        price: 185000,
        category: "Monitores",
        description: "Diseño sin marcos en 3 lados. Excelente para configuraciones de doble monitor.",
        image: "https://images3.kabum.com.br/produtos/fotos/131523/monitor-gamer-aoc-27-w-led-antirreflexivo-hdmi-1-4-1-ms-27g2he5_1605538537_gg.jpg",
        stock: 15,
    }
];

// pasar funcion getproducts a aca

export const getProducts = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (category) {
                const filteredProducts = products.filter(
                    (prod) => prod.category === category
                );

                resolve(filteredProducts);
            } else {
                resolve(products);
            }
        }, 1500);
    });
};

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            // Buscar el producto por id
            const productFound = products.find(
                (prod) => prod.id === Number(id)
            );

            if (productFound) {
                resolve(productFound);
            } else {
                reject("Producto no encontrado");
            }

        }, 1500);
    });
};