export const LANGUAGES = {
    ESPANOL: 'es',
    INGLES: 'en'
}

export const URLS_PORFOLIO = [];
URLS_PORFOLIO.push({
        title: 'Behance',
        icon: 'fa-brands fa-behance',
        url: 'https://www.behance.net/imperioame'
    }, {
        title: 'Instagram',
        icon: 'fa-brands fa-instagram',
        url: 'https://www.instagram.com/imperioame/'
    }, {
        title: 'Flickr',
        icon: 'fa-brands fa-flickr',
        url: 'https://flickr.com/photos/imperioame/'
    }, {
        title: 'Sketchfab',
        icon: 'fa-brands fa-unity',
        url: 'https://sketchfab.com/imperioame'
    }

);

export const CATEGORIAS_PORFOLIO = {
    DISENO: 1,
    PUBLICITARIO: 2,
    D3: 3,
    FOTOGRAFIA: 4,
    WEBJUEGOS: 5
}


export const TRABAJOS_PORFOLIO = [];
TRABAJOS_PORFOLIO.push({
    id: 1,
    title: 'VoRges',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/095573160433619.Y3JvcCwxMzUwLDEwNTUsMCwxMw.jpg',
    link: 'https://www.behance.net/gallery/160433619/VoRges-VR-app-of-a-JL-Borgess-short-tale',
    description: {
        es: 'Para este proyecto, diseñé y desarrollé una aplicación de realidad virtual que sumerge a los usuarios en el mundo de un cuento de Jorge Luis Borges, combinando literatura con realidad virtual interactiva. El proyecto implicó la creación de un entorno 3D visualmente atractivo inspirado en el estilo narrativo único de Borges. Me encargué del desarrollo y de las interacciones de realidad virtual, en colaboración con un equipo de diseñadores y artistas que desarrollaron la conceptualización, el diseño de la interfaz de usuario y la experiencia de usuario y los recursos 3D, garantizando una experiencia de usuario fluida e inmersiva. Esta aplicación permite a los usuarios explorar el universo literario en un formato innovador e interactivo, añadiendo una nueva dimensión a la narración de historias a través de la tecnología de realidad virtual.',
        en: "For this project, I designed and developed a VR app that immerses users into the world of a Jorge Luis Borges short story, blending literature with interactive virtual reality. The project involved crafting a visually engaging 3D environment inspired by Borges' unique narrative style. I handled the development and VR interactions, teaming up with a team of designers and artists that developed the conceptualization, UI/UX design, and 3D assets, ensuring a seamless and immersive user experience. This app allows users to explore the literary universe in an innovative, interactive format, adding a new dimension to storytelling through virtual reality technology.",
    },
    priority: 1,
    source: 'behance',
    category: CATEGORIAS_PORFOLIO.WEBJUEGOS
}, {
    id: 2,
    title: 'BitBang fest',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/3cd542150708753.Y3JvcCw0MTY4LDMyNjAsMCw0NTM.png',
    link: 'https://www.behance.net/gallery/150708753/BitBang-2020-Desarrollo-de-identidad-visual-y-Campana',
    description: {
        es: 'Con el equipo de Agencia Álterego, desarrollamos una identidad visual completa y lideramos una campaña de marketing destinada a establecer la presencia de la marca en la industria tecnológica. El proceso de desarrollo de la marca incluyó el diseño de un logotipo moderno y llamativo, la creación de una combinación de colores vibrante y la elaboración de diversos materiales digitales e impresos para garantizar una comunicación visual coherente. También participé en la dirección creativa de la campaña, centrándome en la estrategia digital, la participación en las redes sociales y las promociones específicas para aumentar la visibilidad y el reconocimiento de la marca en un mercado competitivo.',
        en: "With the team at Álterego Agency, we developed a complete visual identity and led a marketing campaign aimed at establishing the brand's presence in the tech industry. The branding process included designing a modern, bold logo, creating a vibrant color scheme, and crafting various digital and print materials to ensure cohesive visual communication. I also participated in the campaign’s creative direction, focusing on digital strategy, social media engagement, and targeted promotions to increase visibility and brand recognition in a competitive market.",
    },
    priority: 1,
    source: 'behance',
    category: CATEGORIAS_PORFOLIO.PUBLICITARIO
}, {
    id: 3,
    title: 'Godspeed',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/d38c39152608337.Y3JvcCwyNzI3LDIxMzMsMCwyNw.jpg',
    link: 'https://www.behance.net/gallery/152608337/Godspeed-3D-Gods-creation',
    description: {
        es: 'Este proyecto implicó la creación de una serie de imágenes en 3D que reinventan el concepto de la creación divina, combinando la narración artística con un modelado 3D intrincado. El objetivo era crear figuras celestiales complejas, dinámicas y creativas, utilizando técnicas avanzadas de texturizado e iluminación para evocar una sensación de asombro y misterio. El resultado final es una narrativa visual que explora las posibilidades de los cuerpos divinos a través de un diseño 3D audaz y de alta complejidad.',
        en: "This project involved creating a series of 3D visuals that reimagine the concept of divine creation, blending artistic storytelling with intricate 3D modeling. The focus was on crafting complex, dynamic and creative celestial figures, using advanced texturing and lighting techniques to evoke a sense of awe and mystery. The end result is a visual narrative that explores the possibilities of devine bodies through bold, high-complexity 3D design.",
    },
    priority: 2,
    source: 'behance',
    category: CATEGORIAS_PORFOLIO.D3
}, {
    id: 4,
    title: 'Domingo Granja',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/c9fc1d156358269.Y3JvcCwyMDMwLDE1ODcsMCwyMA.jpg',
    link: 'https://www.behance.net/gallery/156358269/Domingo-Granja-Branding-y-Web',
    description: {
        es: 'Con el equipo de Agencia Álterego hemos desarrollado una identidad visual completa y un sitio web moderno y responsivo que refleja el espíritu innovador de la empresa dedicada a la venta de materiales desde corralón hasta artículos del hogar. El proceso de branding incluyó la creación de un logotipo limpio y dinámico, el establecimiento de una paleta de colores cohesiva, y el diseño de varios recursos digitales para garantizar una experiencia de marca consistente. El sitio web fue construido con Wordpress, con una estructura fácil de usar, enfocándose en la accesibilidad, navegación intuitiva y optimización para móviles, alineándose con los valores de crecimiento y sostenibilidad de la marca.',
        en: "With the team at Álterego Agency, we developed a complete visual identity and a modern, responsive website that reflects the innovative spirit of the company dedicated to the sale of materials from corralón to household items. The branding process included the creation of a clean and dynamic logo, the establishment of a cohesive color palette, and the design of several digital assets to ensure a consistent brand experience. The website was built with Wordpress, with a user-friendly structure, focusing on accessibility, intuitive navigation, and mobile optimization, aligning with the brand's values ​​of growth and sustainability.",
    },
    priority: 1,
    source: 'behance',
    category: CATEGORIAS_PORFOLIO.DISENO
}, {
    id: 5,
    title: "Miko's Story",
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/cb9ab9155963781.Y3JvcCwxODE4LDE0MjIsMCwxOA.jpg',
    link: 'https://www.behance.net/gallery/155963781/Mikos-Story-An-AI-made-graphic-novel',
    description: {
        es: 'Este proyecto de novela gráfica explora la fusión de la inteligencia artificial y la narración visual. Se utilizaron algoritmos de IA en etapa inicial para generar tanto el guion como un conjunto único de ilustraciones que dan vida a la historia de Miko. El elemento humano jugó un papel clave en el refinamiento de los resultados del aprendizaje automático con un sentido creativo de dirección. El proceso implicó seleccionar las obras de arte generadas por IA, pulirlas para que se alinearan con el tono narrativo y garantizar un estilo visual cohesivo a lo largo de la novela. Este enfoque innovador resalta el potencial de la IA para expandir los límites de la narración gráfica tradicional.',
        en: "This graphic novel project explores the fusion of artificial intelligence and visual storytelling. Early-stage AI algorithms were used to generate both the script and a unique set of illustrations that bring the story of Miko to life. The human element played a key role in refining the machine learning outcomes with a creative sense of direction. The process involved curating AI-generated artwork, polishing it to align with the narrative tone, and ensuring a cohesive visual style throughout the novel. This innovative approach highlights the potential of AI in expanding the boundaries of traditional graphic storytelling.",
    },
    priority: 2,
    source: 'behance',
    category: CATEGORIAS_PORFOLIO.DISENO
}, {
    id: 6,
    title: "Uptown",
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9fb975159547247.Y3JvcCwzODY4LDMwMjUsMCwzOA.jpg',
    link: 'https://www.behance.net/gallery/159547247/Uptown-Photography-Session-by-Angie-Perfumo',
    description: {
        es: 'Este proyecto implicó la dirección creativa y la posproducción de una sesión de fotografía profesional con una modelo. El objetivo era mejorar la estética visual trabajando con condiciones de poca luz, ajustando la gradación de color y aplicando retoques y texturas para lograr un aspecto pulido, texturizado y cohesivo. El objetivo era resaltar la esencia de la sesión, resaltando la interacción dinámica de la iluminación, la composición y el tema para crear una serie visualmente atractiva.',
        en: "This project involved the creative direction and post-production for a professional photography session with a model. The focus was on enhancing the visual aesthetics by working with low-light conditions, adjusting color grading, and applying retouching and texturing to achieve a polished, textured, and cohesive look. The goal was to bring out the essence of the session, highlighting the dynamic interplay of lighting, composition, and subject matter to create a visually compelling series.",
    },
    priority: 3,
    source: 'behance',
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 7,
    title: 'BMW S1000XR',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9cddcc149302767.Y3JvcCwxMjc4LDEwMDAsNTMsMA.jpg',
    link: 'https://www.behance.net/gallery/149302767/BMW-S1000-XR-por-Virginia-Guidetti',
    description: {
        es: 'En este proyecto, participé en la sesión de fotos y luego me concentré en la posproducción y la mejora creativa de una sesión de fotos profesional de motocicletas, con la BMW S1000 XR y la modelo profesional y corredora de motocicletas, Virginia Guidetti. El proceso implicó gradación de color, retoque de imágenes y refinamiento de texturas para resaltar el diseño elegante y el rendimiento dinámico de la motocicleta. Se prestó especial atención a mejorar la iluminación y el contraste para enfatizar las líneas audaces del vehículo en contraste con la belleza orgánica del modelo, lo que dio como resultado una serie visualmente impactante y pulida que captura la esencia de las motocicletas de alta clase.',
        en: "In this project, I participated in the photoshoot and then focused on the post-production and creative enhancement of a professional motorcycle photoshoot, featuring the BMW S1000 XR and professional model and bike racer, Virginia Guidetti. The process involved color grading, image retouching, and refining textures to highlight the bike’s sleek design and dynamic performance. Special attention was given to enhancing the lighting and contrast to emphasize the vehicle's bold lines in contrast with the model's organic beauty, resulting in a visually striking and polished series that captures the essence of high-class motorcycles.",
    },
    priority: 1,
    source: 'behance',
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 8,
    title: 'Manual de Marca - Voluntarias del Hospital Gutierrez',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/ebe072152780691.Y3JvcCw1NjgxLDQ0NDMsMCw1Ng.jpg',
    link: 'https://www.behance.net/gallery/152780691/Manual-de-Marca-Voluntarias-del-Hospital-Gutierrez',
    description: {
        es: 'Este proyecto implicó la creación de un manual de marca integral para un servicio de salud voluntario. El manual fue diseñado para garantizar la coherencia en la identidad visual de la organización en todos sus canales de comunicación. El proceso implicó desarrollar pautas detalladas sobre el uso del logotipo, la tipografía, las paletas de colores y los elementos gráficos, estableciendo las mejores prácticas para los materiales impresos y digitales, así como ejemplos de uso y plantillas de contenido para las redes sociales. El objetivo era proporcionar una presencia de marca cohesiva y profesional que se alineara con los valores de la organización de atención y servicio comunitario, al mismo tiempo que ayudaba a los esfuerzos de marketing del equipo de comunicación.',
        en: "This project entailed the creation of a comprehensive brand manual for a volunteer health service. The manual was designed to ensure consistency in the organization’s visual identity across their communications channels. The process involved developing detailed guidelines on logo usage, typography, color palettes, and graphic elements, establishing best practices for print and digital materials as well as examples of use and templates of social media content. The goal was to provide a cohesive and professional brand presence that aligns with the organization's values of care and community service, while aiding to the communication's team marketing efforts.",
    },
    priority: 2,
    source: 'behance',
    category: CATEGORIAS_PORFOLIO.DISENO
}, {
    id: 9,
    title: 'Impervious',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/b5e635156654979.Y3JvcCw5OTksNzgyLDAsOQ.jpg',
    link: 'https://www.behance.net/gallery/156654979/Impervious-3D-Intervention-over-photography',
    description: {
        es: 'Este proyecto combinó mi fotografía con intervenciones en 3D, mezclando imágenes del mundo real con elementos digitales para crear una experiencia visual surrealista e inmersiva. El objetivo era integrar a la perfección modelos 3D en las fotografías, mejorando la profundidad y la complejidad narrativa. Se emplearon técnicas avanzadas de composición y normalización de la iluminación en blanco y negro para garantizar que los elementos 3D parecieran orgánicos dentro del entorno fotográfico. El resultado sigue una narrativa suave y flexible de una invasión extraterrestre, produciendo una serie de imágenes impactantes que desafían los límites entre la realidad y el arte digital, creando una fusión creativa de medios.',
        en: "This project combined my photography with 3D interventions, blending real-world imagery with digital elements to create a surreal and immersive visual experience. The focus was on seamlessly integrating 3D models into the photographs, enhancing depth and narrative complexity. Black-and-white lighting normalization and advanced composition techniques were employed to ensure that the 3D elements felt organic within the photographic environment. The result follows a soft, flexible narrative of an alien invasion, producing a series of striking visuals that challenge the boundaries between reality and digital art, creating a creative fusion of mediums.",
    },
    priority: 2,
    source: 'behance',
    category: CATEGORIAS_PORFOLIO.D3
}, {
    id: 10,
    title: 'Sentimientos Encontrados',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/112162147953565.Y3JvcCw4MDgsNjMyLDAsMzQ.png',
    link: 'https://www.behance.net/gallery/147953565/Sentimientos-encontrados-Serie-fotografica-en-5000km',
    description: {
        es: 'Esta serie fotográfica captura mi viaje en solitario de 5000 kilómetros por el noroeste argentino. Retrata los contrastes emocionales experimentados a lo largo del camino. El proyecto se centra en la interacción entre los paisajes y la introspección personal, los sentimientos. A través de una combinación de momentos espontáneos y retratos compuestos de forma natural, la serie explora temas de anhelo, nostalgia y descubrimiento. La narrativa fotográfica utiliza iluminación natural y texturas crudas, normalizadas en blanco y negro, para evocar una profunda sensación de conexión con los entornos, creando un cuerpo de trabajo visualmente emocional e introspectivo.',
        en: "This photography series captures my solo journey of 5000 kilometers across the Argentinian North West. Portraying the emotional contrasts experienced along the way. The project focuses on the interplay between landscapes and personal introspection, sentiments. Through a combination of candid moments and naturally composed portraits, the series explores themes of longing, nostalgia, and discovery. The photographic narrative uses natural lighting and raw textures, normalized in black & white, to evoke a deep sense of connection with the environments, creating a visually emotional and introspective body of work.",
    },
    priority: 1,
    source: 'behance',
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 11,
    title: 'Volvo - Photography Session by Volvo Arg.',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/a1ca53163258029.Y3JvcCwzNTE3LDI3NTAsMCwzNA.jpg',
    link: 'https://www.behance.net/gallery/163258029/Volvo-Photography-Session-by-Volvo-Arg',
    description: {
        es: 'Este proyecto involucró tanto la sesión fotográfica como el posprocesamiento para Volvo Argentina. El objetivo era resaltar el elegante diseño y la excelencia de ingeniería del vehículo Volvo a través de una interacción humana apasionada, junto con el retoque y la mejora de los contrastes de iluminación. Se prestó especial atención a la interacción entre los vehículos Volvo antiguos y nuevos para enfatizar la longevidad de los productos de la marca y la lealtad de sus clientes. El resultado es una serie de imágenes visualmente pulidas que transmiten el compromiso de Volvo con el lujo, el rendimiento y la innovación.',
        en: "This project involved both the photoshoot and post-processing for Volvo Argentina. The focus was on highlighting the sleek design and engineering excellence of the Volvo vehicle through human, passionate interaction, along with retouching and enhancing lighting contrasts. Special attention was given to the interplay between old and new Volvo cars to emphasize the longevity of the brand’s products and the loyalty of its customers. The result is a series of visually polished images that convey Volvo's commitment to luxury, performance, and innovation.",
    },
    priority: 3,
    source: 'behance',
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 12,
    title: 'Costa y Roca - Wine Imagery',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/808/0d7da6153975233.Y3JvcCwxMjMxLDk2MywzNDQsNTc.png',
    link: 'https://www.behance.net/gallery/153975233/Costa-y-Roca-Wine-Imagery',
    description: {
        es: '',
        en: "",
    },
    priority: 1,
    source: 'behance',
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 13,
    title: 'Casamiento - Colombres & Gomez Pizarro / Sesión Fotogr.',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/6e6697149847251.Y3JvcCw1MDAwLDM5MTAsMCw0OQ.jpg',
    link: 'https://www.behance.net/gallery/149847251/Casamiento-Colombres-Gomez-Pizarro-Sesion-Fotogr',
    description: {
        es: 'Este proyecto se centró en crear imágenes cautivadoras para Costa y Roca, una marca de vinos emergente. El objetivo era representar visualmente la elegancia y la artesanía de la marca a través de fotografías de productos naturales. La iluminación, la textura y la gradación de color fueron clave para resaltar los tonos intensos del vino y la etiqueta de nuevo diseño. El resultado es una serie de imágenes refinadas y de alta gama que reflejan la sofisticación y la calidad de la marca Costa y Roca, con un gaucho argentino como telón de fondo, un campesino típico y el público objetivo de la marca.',
        en: "This project focused on creating captivating imagery for Costa y Roca, an emerging wine brand. The goal was to visually portray the brand's elegance and craftsmanship through natural product photography. Lighting, texture, and color grading were key in highlighting the wine’s rich tones and the newly designed label. The result is a series of high-end, refined images that reflect the sophistication and quality of the Costa y Roca brand, set against the backdrop of an Argentinian Gaucho — a typical countryman and the brand's target audience.",
    },
    priority: 2,
    source: 'behance',
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 14,
    title: 'Meteor 350 por Virginia Guidetti',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/efa3fd149649961.Y3JvcCwxNTAwLDExNzMsMCwxNA.jpg',
    link: 'https://www.behance.net/gallery/149649961/Meteor-350-por-Virginia-Guidetti',
    description: {
        es: '',
        en: "",
    },
    priority: 2,
    source: 'behance',
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 15,
    title: 'World Sighting - 3d world building experimentation',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/04b042151586163.6314b9ddd768e.png',
    link: 'https://www.behance.net/gallery/151586163/World-Sighting-3d-world-building-experimentation',
    description: {
        es: '',
        en: "",
    },
    priority: 2,
    source: 'behance',
    category: CATEGORIAS_PORFOLIO.D3
}, {
    id: 16,
    title: 'ReFaced - 3D interventions over portraits',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/e7c85d150592763.Y3JvcCwxMjAwLDkzOCwwLDEzMA.jpg',
    link: 'https://www.behance.net/gallery/150592763/ReFaced-3D-interventions-over-portraits',
    description: {
        es: '',
        en: "",
    },
    priority: 1,
    source: 'behance',
    category: CATEGORIAS_PORFOLIO.D3
}, {
    id: 17,
    title: 'FRUITHEADS - 3D trip',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/519a9b159129571.Y3JvcCwxMjAwLDkzOCwwLDEx.jpg',
    link: 'https://www.behance.net/gallery/159129571/FRUITHEADS-3D-trip',
    description: {
        es: '',
        en: "",
    },
    priority: 2,
    source: 'behance',
    category: CATEGORIAS_PORFOLIO.D3
}, {
    id: 18,
    title: 'Potrero Digital - Campaña e Identidad de Marca',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f37188140036363.Y3JvcCw4MDgsNjMyLDAsMA.png',
    link: 'https://www.behance.net/gallery/140036363/Potrero-Digital-Campana-e-Identidad-de-Marca',
    description: {
        es: '',
        en: "",
    },
    priority: 2,
    source: 'behance',
    category: CATEGORIAS_PORFOLIO.PUBLICITARIO
}, {
    id: 19,
    title: 'Campaña Publicitaria Netflix - Temporada de Reciclaje',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/a7ce8b157219767.Y3JvcCw5OTksNzgyLDAsOQ.jpg',
    link: 'https://www.behance.net/gallery/157219767/Campana-Publicitaria-Netflix-Temporada-de-Reciclaje',
    description: {
        es: '',
        en: "",
    },
    priority: 2,
    source: 'behance',
    category: CATEGORIAS_PORFOLIO.PUBLICITARIO
}, {
    id: 20,
    title: 'Costa y Roca - Wine Label Design',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/6cf484139617309.Y3JvcCwyNzI3LDIxMzMsMCwyNw.jpg',
    link: 'https://www.behance.net/gallery/139617309/Costa-y-Roca-Wine-Label-Design',
    description: {
        es: '',
        en: "",
    },
    priority: 2,
    source: 'behance',
    category: CATEGORIAS_PORFOLIO.DISENO
}, {
    id: 21,
    title: 'Prime - El juego más seguro (Videojuego)',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/cb2203139619709.Y3JvcCwxMzgwLDEwODAsMjMyLDA.png',
    link: 'https://www.behance.net/gallery/139619709/Prime-El-juego-mas-seguro-%28Videojuego%29',
    description: {
        es: '',
        en: "",
    },
    priority: 2,
    source: 'behance',
    category: CATEGORIAS_PORFOLIO.WEBJUEGOS
}, {
    id: 22,
    title: 'RelaxApp - Research y proceso iterativo UX/UI',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/60e1e6108371457.Y3JvcCw0MjEwLDMyOTIsMCww.png',
    link: 'https://www.behance.net/gallery/108371457/RelaxApp-Research-y-proceso-iterativo-UXUI',
    description: {
        es: '',
        en: "",
    },
    priority: 1,
    source: 'behance',
    category: CATEGORIAS_PORFOLIO.WEBJUEGOS
}, {
    id: 23,
    title: 'MoroArte-GranKan',
    img: 'https://repository-images.githubusercontent.com/531989722/b0845be0-56d2-42e2-a264-a4ba2313c98e',
    link: 'https://imperioame.github.io/MoroArte-GranKan/',
    description: {
        es: '',
        en: "",
    },
    priority: 2,
    source: 'github',
    category: CATEGORIAS_PORFOLIO.WEBJUEGOS
}, {
    id: 24,
    title: 'Screen Colour Engine',
    img: 'https://repository-images.githubusercontent.com/309862473/f320395e-9fb8-4792-a2a2-fcbe81e312c0',
    link: 'https://imperioame.github.io/ScreenColourEngine/',
    description: {
        es: '',
        en: "",
    },
    priority: 1,
    source: 'github',
    category: CATEGORIAS_PORFOLIO.WEBJUEGOS,
    extra_css: 'background-color: black; padding: 3em 0'
}, {
    id: 25,
    title: 'Vecindad',
    img: 'https://repository-images.githubusercontent.com/199515880/3213bff2-7e98-4ae1-86ef-5892675ab247',
    link: 'https://imperioame.github.io/vecindad/',
    description: {
        es: '',
        en: "",
    },
    priority: 2,
    source: 'github',
    category: CATEGORIAS_PORFOLIO.WEBJUEGOS
}, {
    id: 26,
    title: 'Bar assetpack',
    img: 'https://media.sketchfab.com/models/ca27711bd71946a49413e0b743e51572/thumbnails/5eea19ac82cc4636b0bd3ac31316ce39/e97afa4b4e6348e39d3ca6191147757d.jpeg',
    link: 'https://sketchfab.com/3d-models/bar-pub-asset-pack-with-props-for-games-ca27711bd71946a49413e0b743e51572',
    description: {
        es: '',
        en: "",
    },
    priority: 2,
    source: 'Sketchfab',
    category: CATEGORIAS_PORFOLIO.D3
}, {
    id: 27,
    title: 'Seba Gallardo - Photo Session',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/7725ba164262227.Y3JvcCwzOTM4LDMwODAsMCwzOA.jpg',
    link: 'https://www.behance.net/gallery/164262227/Fiverr-content-Photo-Session-for-a-Freelancer',
    description: {
        es: '',
        en: "",
    },
    priority: 2,
    source: 'Behance',
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 28,
    title: 'Sitio Web Agencia Álterego',
    img: 'https://repository-images.githubusercontent.com/320118591/54173200-3d01-11eb-9e3f-c283bb81ad89',
    link: 'https://agenciaalterego.com.ar/',
    description: {
        es: '',
        en: "",
    },
    priority: 2,
    source: 'Web',
    category: CATEGORIAS_PORFOLIO.WEBJUEGOS,
    extra_css: 'background-color: white; padding: 3em 0'
}, {
    id: 29,
    title: 'Staley Martial Arts',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/c85b13139617007.Y3JvcCw4MDgsNjMyLDAsMA.png',
    link: 'https://www.staleymartialarts.com/',
    description: {
        es: '',
        en: "",
    },
    priority: 3,
    source: 'Web',
    category: CATEGORIAS_PORFOLIO.WEBJUEGOS
}, {
    id: 30,
    title: 'Box Office - A mindful office full of productivity',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/532aee165767599.Y3JvcCwxMjAwLDkzOCwwLDEx.jpg',
    link: 'https://www.behance.net/gallery/165767599/Box-Office-A-mindful-office-full-of-productivity?',
    description: {
        es: '',
        en: "",
    },
    priority: 2,
    source: 'Behance',
    category: CATEGORIAS_PORFOLIO.D3
}, {
    id: 31,
    title: 'Early Works: Books covers & Flyers',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/808/55a8c5190355147.Y3JvcCw2MDAwLDQ2OTMsMCwyOTc.jpg',
    link: 'https://www.behance.net/gallery/190355147/Early-Works-Books-covers-Flyers',
    description: {
        es: '',
        en: "",
    },
    priority: 2,
    source: 'Behance',
    category: CATEGORIAS_PORFOLIO.DISENO
}, {
    id: 32,
    title: 'Early Works: Banners, signs and Clothing',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/808/fdd1a6190383341.Y3JvcCw5OTksNzgyLDAsMTQ.jpg',
    link: 'https://www.behance.net/gallery/190383341/Early-Works-Banners-signs-and-Clothing',
    description: {
        es: '',
        en: "",
    },
    priority: 2,
    source: 'Behance',
    category: CATEGORIAS_PORFOLIO.DISENO
}, {
    id: 33,
    title: 'Beer can design - Spika Beer Company',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/808/a14997175796205.Y3JvcCwxNTc1LDEyMzEsMCwyMw.jpg',
    link: 'https://www.behance.net/gallery/175796205/Beer-can-design-Spika-Beer-Company',
    description: {
        es: '',
        en: "",
    },
    priority: 2,
    source: 'Behance',
    category: CATEGORIAS_PORFOLIO.DISENO
}, {
    id: 34,
    title: 'Ruido - A design experience full of noise',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/89714a170483673.Y3JvcCw5OTksNzgyLDAsOQ.jpg',
    link: 'https://www.behance.net/gallery/170483673/Ruido-A-design-experience-full-of-noise',
    description: {
        es: '',
        en: "",
    },
    priority: 1,
    source: 'Behance',
    category: CATEGORIAS_PORFOLIO.DISENO
}, {
    id: 35,
    title: 'Julie - Photographic Sessión at night',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/808/850919171257147.Y3JvcCw0Nzc2LDM3MzUsMCw0Nw.jpg',
    link: 'https://www.behance.net/gallery/171257147/Julie-Photographic-Session-at-night',
    description: {
        es: '',
        en: "",
    },
    priority: 2,
    source: 'Behance',
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 36,
    title: '2023 World Photography Day photo walk in Buenos Aires',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/808/c535eb179057151.Y3JvcCw0OTg4LDM5MDEsMCw3NA.jpg',
    link: 'https://www.behance.net/gallery/179057151/2023-World-Photography-Day-photo-walk-in-Buenos-Aires',
    description: {
        es: '',
        en: "",
    },
    priority: 2,
    source: 'Behance',
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 37,
    title: 'Elal y Nosjteh - Tribal Axe Craft + Photo session',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/808/82d8e3179421987.Y3JvcCw1ODQwLDQ1NjcsMCw1Nw.jpg',
    link: 'https://www.behance.net/gallery/179421987/Elal-y-Nosjteh-Tribal-Axe-Craft-Photo-session',
    description: {
        es: '',
        en: "",
    },
    priority: 1,
    source: 'Behance',
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 38,
    title: 'Anael - Photo Session by Nicolás Ochoa',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/808/1e3147181940685.Y3JvcCwzNDA4LDI2NjYsMCww.jpg',
    link: 'https://www.behance.net/gallery/181940685/Anael-Photo-Session-by-Nicolas-Ochoa',
    description: {
        es: '',
        en: "",
    },
    priority: 2,
    source: 'Behance',
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 39,
    title: 'Little Sina in Auckland City - Photographic Session',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/808/03ec40185616447.Y3JvcCwzOTk5LDMxMjgsMCwxMDE5.jpg',
    link: 'https://www.behance.net/gallery/185616447/Little-Sina-in-Auckland-City-Photographic-Session',
    description: {
        es: '',
        en: "",
    },
    priority: 1,
    source: 'Behance',
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 40,
    title: '3D - Weekly cretive pieces in Blender',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/808/b74896178951577.Y3JvcCw4MTEsNjM1LDMyNyww.jpg',
    link: 'https://www.behance.net/gallery/178951577/3D-Weekly-cretive-pieces-in-Blender',
    description: {
        es: '',
        en: "",
    },
    priority: 1,
    source: 'Behance',
    category: CATEGORIAS_PORFOLIO.D3
}, {
    id: 41,
    title: 'Antrieb Sudamericana Web',
    img: 'https://i0.wp.com/antriebsa.com/wp-content/uploads/2018/10/cropped-logo-antrieb-01.png',
    link: 'https://antriebsa.com/',
    description: {
        es: '',
        en: "",
    },
    priority: 1,
    source: 'Web',
    category: CATEGORIAS_PORFOLIO.WEBJUEGOS,
    extra_css: 'background-color: white; padding: 10vh 0; box-sizing: border-box'
}, {
    id: 42,
    title: 'Imperio Usados Web',
    img: 'https://http2.mlstatic.com/storage/mshops-appearance-api/images/70/66709070/logo-2019050418345411800.png',
    link: 'https://www.imperio-usados.com.ar/',
    description: {
        es: '',
        en: "",
    },
    priority: 2,
    source: 'Web',
    category: CATEGORIAS_PORFOLIO.WEBJUEGOS,
    extra_css: 'background-color: white; padding: 0 6em; box-sizing: border-box;'
}, {
    id: 43,
    title: 'Landrú.org Web design and Coordination',
    img: 'https://www.landru.org/wp-content/uploads/2021/12/11_gato.svg',
    link: 'https://www.landru.org/',
    description: {
        es: '',
        en: "",
    },
    priority: 2,
    source: 'Web',
    category: CATEGORIAS_PORFOLIO.WEBJUEGOS,
    extra_css: 'background-color: white; padding: 2em 0'
}, {
    id: 44,
    title: 'AI Adventure Text Game',
    img: 'https://repository-images.githubusercontent.com/782311160/9a41e863-121d-4080-9017-caa079fd97d9',
    link: 'https://ai-text-game.marioa.me/',
    description: {
        es: '',
        en: "",
    },
    priority: 2,
    source: 'Web',
    category: CATEGORIAS_PORFOLIO.WEBJUEGOS,
});


export const TEXTOS = {
    es: {},
    en: {}
}

TEXTOS.es = {
    TITULO_PAGINA: 'Julián Mario Amé | Diseñador Multimedial',
    SUBTITLE_HERO: 'Diseñador Multimedial | Lic. En Comunicación Digital e Interactiva<br>Director de proyectos digitales | Quality Assurance Lead',
    EXTRACTO_BANNER_MI_PERSONA: "Diseñador Multimedial y líder de proyectos digitales.<br> Emprendedor y apasionado en la organización y organizaciones.<br> Técnico por naturaleza.",
    BOTON_CV_BANNER_MI_PERSONA: 'Ver CV',
    CATEGORIAS_PORFOLIO: {
        DISENO: 'Diseño',
        PUBLICITARIO: 'Publicitario',
        D3: '3D',
        FOTOGRAFIA: 'Fotografía',
        WEBJUEGOS: 'Web & Juegos'
    },
    MODAL_LINK: 'Ver trabajo',
    TITULO_CONTACTO: 'Contacto',
    BLOQUE_CONTACTO_TITULO: 'Escribime aquí 👇',
    BLOQUE_CONTACTO_EXTRA: {
        PLACEHOLDER_INPUT: "Si llegaste hasta acá, te propongo dos cosas:\n1: Contactarme en el próximo formulario\n2: Jugar con este campo, vinculado con GPT2. Escribí acá y tocá el botón 'Generar texto'",
        BOTON_GENERAR_TEXTO: "Generar texto",
        SMALL_INFO: "Aquí una pequeña integración con GPT2 de Hugging Face. Podes divertirte probando diferentes combinaciones. Intentá no romperla 😣",
        SMALL_PD: "PD: Está entrenado en Español. Para mejores resultados en inglés podes cambiar el lenguaje desde el ícono arriba a la derecha de la pantalla ☝"
    },
    CAMPOS_FORMULARIO: {
        NOMBRE: 'Nombre',
        NOMBRE_PLACEHOLDER: 'Juan',
        EMAIL: 'Email',
        EMAIL_PLACEHOLDER: 'juan@correo.com.ar',
        MENSAJE: 'Mensaje',
        MENSAJE_PLACEHOLDER: 'Me gustó mucho tu página web...',
        BOTON_ENVIAR: 'Enviar'
    },
    FOOTER: 'Desarrollado por '

}

TEXTOS.en = {
    TITULO_PAGINA: 'Julián Mario Amé | Multimedia Designer',
    SUBTITLE_HERO: "Multimedia Designer | Degree in Digital and Interactive Communication<br>Digital Project Manager | Quality Assurance Lead",
    EXTRACTO_BANNER_MI_PERSONA: "Multimedia Designer and leader of digital projects.<br>Entrepreneur and passionate about organization and organizations.<br>Technical by nature.",
    BOTON_CV_BANNER_MI_PERSONA: 'See CV',
    CATEGORIAS_PORFOLIO: {
        DISENO: 'Design',
        PUBLICITARIO: 'Advertising',
        D3: '3D',
        FOTOGRAFIA: 'Photography',
        WEBJUEGOS: 'Web & Games'
    },
    MODAL_LINK: 'See work',
    TITULO_CONTACTO: 'Contact form',
    BLOQUE_CONTACTO_TITULO: 'Contact me here 👇',
    BLOQUE_CONTACTO_EXTRA: {
        PLACEHOLDER_INPUT: "If you've arrived here, I propose two things:\n1: Write me through the next form.\n2: Play with this field, linked to GPT2. Write here and click the button 'Generate text'",
        BOTON_GENERAR_TEXTO: "Generate text",
        SMALL_INFO: "Here is a small integration with GPT2 from Hugging Face. You can have fun trying different combinations. Try not to break it 😣",
        SMALL_PD: "PS: It only speaks English. You can change the language from the icon on the top right to the right of the screen ☝"
    },
    CAMPOS_FORMULARIO: {
        NOMBRE: 'Name',
        NOMBRE_PLACEHOLDER: 'Juan',
        EMAIL: 'Email',
        EMAIL_PLACEHOLDER: 'juan@mail.com',
        MENSAJE: 'Mesage',
        MENSAJE_PLACEHOLDER: 'I like your website a lot...',
        BOTON_ENVIAR: 'Send'
    },
    FOOTER: 'Developed by '
}