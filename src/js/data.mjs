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
    keywords: [''],
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
    keywords: [''],
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
    keywords: [''],
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
    keywords: [''],
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
    keywords: [''],
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
    keywords: [''],
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
    keywords: [''],
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
    keywords: [''],
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
    keywords: [''],
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
    keywords: [''],
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
    keywords: [''],
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 12,
    title: 'Costa y Roca - Wine Imagery',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/808/0d7da6153975233.Y3JvcCwxMjMxLDk2MywzNDQsNTc.png',
    link: 'https://www.behance.net/gallery/153975233/Costa-y-Roca-Wine-Imagery',
    description: {
        es: 'Este proyecto se centró en crear imágenes cautivadoras para Costa y Roca, una marca de vinos emergente. El objetivo era representar visualmente la elegancia y la artesanía de la marca a través de fotografías de productos naturales. La iluminación, la textura y la gradación de color fueron clave para resaltar los tonos intensos del vino y la etiqueta de nuevo diseño. El resultado es una serie de imágenes refinadas y de alta gama que reflejan la sofisticación y la calidad de la marca Costa y Roca, con un gaucho argentino como telón de fondo, un campesino típico y el público objetivo de la marca.',
        en: "This project focused on creating captivating imagery for Costa y Roca, an emerging wine brand. The goal was to visually portray the brand's elegance and craftsmanship through natural product photography. Lighting, texture, and color grading were key in highlighting the wine’s rich tones and the newly designed label. The result is a series of high-end, refined images that reflect the sophistication and quality of the Costa y Roca brand, set against the backdrop of an Argentinian Gaucho — a typical countryman and the brand's target audience.",
    },
    priority: 1,
    source: 'behance',
    keywords: [''],
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
    keywords: [''],
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 14,
    title: 'Meteor 350 por Virginia Guidetti',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/efa3fd149649961.Y3JvcCwxNTAwLDExNzMsMCwxNA.jpg',
    link: 'https://www.behance.net/gallery/149649961/Meteor-350-por-Virginia-Guidetti',
    description: {
        es: 'Para este proyecto, fui la segunda cámara en una sesión de fotos con Virginia Guidetti, modelo y corredora de motos, en la que aparecía la Meteor 350 de Royal Enfield. Las fotos y la edición que se muestran aquí son mías. El objetivo era destacar el diseño de inspiración vintage y el rendimiento robusto de la moto a través de imágenes dinámicas capturadas en las vibrantes calles de Buenos Aires. Se prestó especial atención a la gradación de color, el retoque y la textura para realzar tanto la motocicleta como la modelo, lo que dio como resultado una serie equilibrada y visualmente impactante que captura la esencia del motociclismo clásico y la aventura.',
        en: "For this project, I served as the second camera for a photoshoot with Virginia Guidetti, model and bike racer, featuring the Meteor 350 by Royal Enfield. The photos and editing showcased here are my own. The focus was on highlighting the bike’s vintage-inspired design and rugged performance through dynamic imagery captured in the vibrant streets of Buenos Aires. Careful attention was given to color grading, retouching, and texturing to enhance both the motorcycle and the model, resulting in a balanced and visually striking series that captures the essence of classic motorcycling and adventure.",
    },
    priority: 2,
    source: 'behance',
    keywords: [''],
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 15,
    title: 'World Sighting - 3d world building experimentation',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/04b042151586163.6314b9ddd768e.png',
    link: 'https://www.behance.net/gallery/151586163/World-Sighting-3d-world-building-experimentation',
    description: {
        es: 'Este proyecto explora las posibilidades creativas de la creación de mundos en 3D a través de una serie de entornos experimentales. El objetivo era ampliar los límites de la narración visual mediante el diseño de planetas inmersivos, raros pero posibles, que invitan al espectador a interactuar con detalles intrincados y composiciones dinámicas. Se emplearon modelos simples con técnicas avanzadas de texturizado e iluminación para crear estos mundos ficticios, lo que dio como resultado una serie visualmente rica e imaginativa que muestra el potencial infinito del diseño en 3D en el arte digital.',
        en: "This project explores the creative possibilities of 3D world-building through a series of experimental environments. The focus was on pushing the boundaries of visual storytelling by designing immersive, rare but possible planets that invite the viewer to engage with intricate details and dynamic compositions. Simple modeling with advanced texturing and lighting techniques were employed to craft these fictional worlds, resulting in a visually rich and imaginative series that showcases the endless potential of 3D design in digital art.",
    },
    priority: 2,
    source: 'behance',
    keywords: [''],
    category: CATEGORIAS_PORFOLIO.D3
}, {
    id: 16,
    title: 'ReFaced - 3D interventions over portraits',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/e7c85d150592763.Y3JvcCwxMjAwLDkzOCwwLDEzMA.jpg',
    link: 'https://www.behance.net/gallery/150592763/ReFaced-3D-interventions-over-portraits',
    description: {
        es: 'Este proyecto combina la fotografía de retratos tradicional con <strong>intervenciones 3D</strong>, creando una fusión entre la expresión humana y el realce digital. El enfoque estuvo en <em>reimaginar rostros humanos</em> mediante la aplicación de un personaje 3D absorbente, que añade una capa abstracta y conceptual a los retratos. Utilizando <strong>técnicas de iluminación</strong> y edición en Photoshop, los elementos 3D se integran de manera fluida con las fotografías, resultando en una serie que desafía el retrato convencional mientras explora temas de identidad y transformación.',
        en: "This project blends traditional portrait photography with <strong>3D interventions</strong>, creating a fusion of human expression and digital enhancement. The focus was on <em>reimagining human faces</em> through the application of an absorbing 3D character, which adds an abstract and conceptual layer to the portraits. Using <strong>lighting techniques</strong> and post-production editing in Photoshop, the 3D elements seamlessly integrate with the photographs, resulting in a series that challenges conventional portraiture while exploring themes of identity and transformation.",
    },
    priority: 1,
    source: 'behance',
    keywords: [''],
    category: CATEGORIAS_PORFOLIO.D3
}, {
    id: 17,
    title: 'FRUITHEADS - 3D trip',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/519a9b159129571.Y3JvcCwxMjAwLDkzOCwwLDEx.jpg',
    link: 'https://www.behance.net/gallery/159129571/FRUITHEADS-3D-trip',
    description: {
        es: 'Este proyecto lleva a los espectadores a un viaje surrealista y alucinante a través de un <strong>mundo 3D</strong> de personajes frutales antropomórficos. El enfoque estuvo en crear una experiencia visual vibrante y lúdica, fusionando <strong>diseño abstracto</strong> y <strong>audiovisuales coloridos</strong> con un desarrollo de personajes peculiar. Cada elemento, desde las <em>texturas coloridas</em> hasta la <strong>iluminación dinámica</strong>, fue diseñado para evocar una sensación de fantasía e imaginación. El resultado es una serie inmersiva que desafía los límites del diseño tradicional de personajes, invitando a los espectadores a explorar un mundo donde las frutas cobran vida propia.',
        en: "This project takes viewers on a surreal, tripping journey through a <strong>3D world</strong> of anthropomorphic fruit characters. The focus was on creating a vibrant and playful visual experience by blending <strong>abstract design</strong>, <strong>colorful audiovisuals</strong>, with quirky character development. Each element, from the <em>colorful textures</em> to the <strong>dynamic lighting</strong>, was crafted to evoke a sense of whimsy and imagination. The result is an immersive series that challenges the boundaries of traditional character design, inviting viewers to explore a world where fruit takes on a life of its own.",
    },
    priority: 2,
    source: 'behance',
    keywords: [''],
    category: CATEGORIAS_PORFOLIO.D3
}, {
    id: 18,
    title: 'Potrero Digital - Campaña e Identidad de Marca',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f37188140036363.Y3JvcCw4MDgsNjMyLDAsMA.png',
    link: 'https://www.behance.net/gallery/140036363/Potrero-Digital-Campana-e-Identidad-de-Marca',
    description: {
        es: 'Este proyecto consistió en la creación de una <strong>identidad de marca</strong> y campaña integral para Potrero Digital, una iniciativa social enfocada en la formación de habilidades digitales. El objetivo fue comunicar visualmente la misión de la organización de empoderar a las comunidades a través de la educación y la tecnología. La campaña incluyó un lenguaje de diseño cohesivo, integrando <em>tipografía audaz</em>, <strong>paletas de colores vibrantes</strong> y <strong>visuales dinámicos</strong> para transmitir una sensación de innovación y accesibilidad. El resultado es una identidad visual poderosa que refleja los valores fundamentales de Potrero Digital mientras atrae a una audiencia amplia.',
        en: "This project involved the creation of a comprehensive <strong>brand identity</strong> and campaign for Potrero Digital, a social initiative focused on digital skills training. The objective was to visually communicate the organization’s mission of empowering communities through education and technology. The campaign included a cohesive design language, integrating <em>bold typography</em>, <strong>vibrant color schemes</strong>, and <strong>dynamic visuals</strong> to convey a sense of innovation and accessibility. The result is a powerful visual identity that reflects the core values of Potrero Digital while engaging a broad audience.",
    },
    priority: 2,
    source: 'behance',
    keywords: [''],
    category: CATEGORIAS_PORFOLIO.PUBLICITARIO
}, {
    id: 19,
    title: 'Campaña Publicitaria Netflix - Temporada de Reciclaje',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/a7ce8b157219767.Y3JvcCw5OTksNzgyLDAsOQ.jpg',
    link: 'https://www.behance.net/gallery/157219767/Campana-Publicitaria-Netflix-Temporada-de-Reciclaje',
    description: {
        es: 'Este proyecto academico consistió en el desarrollo de una campaña publicitaria creativa para la <strong>Temporada de Reciclaje</strong> de Netflix. La campaña tuvo como objetivo promover la conciencia ambiental al integrar <em>temas de reciclaje</em> en la identidad de marca de Netflix. Utilizando <strong>visuales audaces</strong> y <strong>mensajes lúdicos</strong>, el enfoque estuvo en captar la atención de los espectadores a través de una combinación de entretenimiento y sostenibilidad. Los elementos de diseño, incluidos <em>colores vivos</em> y <strong>gráficos llamativos</strong>, fueron creados para inspirar a la acción, manteniendo el estilo reconocible de Netflix. El resultado es una campaña dinámica que crea conciencia sobre el reciclaje de una manera divertida y memorable.',
        en: "This academic project involved the development of a creative advertising campaign for Netflix's <strong>Recycling Season</strong>. The campaign aimed to promote environmental awareness by integrating <em>recycling themes</em> into Netflix’s branding. Using <strong>bold visuals</strong> and <strong>playful messaging</strong>, the focus was on engaging viewers through a blend of entertainment and sustainability. The design elements, including <em>vivid colors</em> and <strong>eye-catching graphics</strong>, were crafted to inspire action while maintaining Netflix’s recognizable style. The result is a dynamic campaign that raises awareness of recycling in a fun and memorable way.",
    },
    priority: 2,
    source: 'behance',
    keywords: [''],
    category: CATEGORIAS_PORFOLIO.PUBLICITARIO
}, {
    id: 20,
    title: 'Costa y Roca - Wine Label Design',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/6cf484139617309.Y3JvcCwyNzI3LDIxMzMsMCwyNw.jpg',
    link: 'https://www.behance.net/gallery/139617309/Costa-y-Roca-Wine-Label-Design',
    description: {
        es: 'Este proyecto se centró en el diseño de una <strong>etiqueta de vino</strong> sofisticada para Costa y Roca, una marca dedicada a la producción de vinos de alta calidad. El diseño tenía como objetivo reflejar la <em>elegancia</em> y el <strong>trabajo artesanal</strong> de la marca a través de un enfoque visual minimalista pero impactante. Se prestó especial atención al uso del color y la <em>textura</em> para crear una etiqueta que destaque en las estanterías y que, al mismo tiempo, encarne la esencia del legado del vino. El resultado es una etiqueta refinada y visualmente atractiva que realza la identidad de marca de Costa y Roca.',
        en: "This project focused on the design of a sophisticated <strong>wine label</strong> for Costa y Roca, a brand dedicated to producing high-quality wines. The design aimed to reflect the brand’s <em>elegance</em> and <strong>artisanal craftsmanship</strong> through a minimalist yet striking visual approach. Careful attention was given to the use of color, and <em>texture</em> to create a label that stands out on shelves while embodying the essence of the wine’s heritage. The result is a refined and aesthetically appealing label that enhances the overall brand identity of Costa y Roca.",
    },
    priority: 2,
    source: 'behance',
    keywords: [''],
    category: CATEGORIAS_PORFOLIO.DISENO
}, {
    id: 21,
    title: 'Prime - El juego más seguro (Videojuego)',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/cb2203139619709.Y3JvcCwxMzgwLDEwODAsMjMyLDA.png',
    link: 'https://www.behance.net/gallery/139619709/Prime-El-juego-mas-seguro-%28Videojuego%29',
    description: {
        es: 'Este proyecto consistió en el desarrollo de un <strong>videojuego publicitario</strong> dirigido a promover el <em>sexo seguro</em> entre una audiencia joven. El enfoque estuvo en crear una experiencia educativa y atractiva mediante la adopción de una jugabilidad simple pero <strong>adictiva</strong>. A través de un vibrante <em>entorno 2D</em> y una dinámica rápida, los jugadores son incentivados a mantener seguras a las parejas. La combinación de <strong>elementos de UI</strong>, <strong>diseño de sonido</strong> y contexto educativo resultó en un proyecto que equilibra eficazmente el entretenimiento con el aprendizaje en el mundo real.',
        en: "This project involved the development of a <strong>advertising video game</strong> aimed at promoting <em>safe sex</em> for a younger audience. The focus was on creating an engaging and educational experience by adopting a simple but <strong>addictive</strong> gameplay. Through a vibrant <em>2D environment</em> and fast-paced dynamics, players are encouraged to keep couples safe. The combination of <strong>UI elements</strong>, <strong>sound design</strong>, and educational context resulted in a project that effectively balances entertainment with real-world learning.",
    },
    priority: 2,
    source: 'behance',
    keywords: [''],
    category: CATEGORIAS_PORFOLIO.WEBJUEGOS
}, {
    id: 22,
    title: 'RelaxApp - Research y proceso iterativo UX/UI',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/60e1e6108371457.Y3JvcCw0MjEwLDMyOTIsMCww.png',
    link: 'https://www.behance.net/gallery/108371457/RelaxApp-Research-y-proceso-iterativo-UXUI',
    description: {
        es: 'Este proyecto es un <strong>caso de estudio</strong> detallado que se centra en la <strong>investigación</strong>, <em>diseño UX/UI</em>, creación de prototipos y pruebas de usuario de RelaxApp, una aplicación de música para meditación diseñada para ayudar a los usuarios a gestionar sus niveles de estrés. El objetivo del proyecto fue crear una experiencia de usuario fluida a través de una interfaz intuitiva, además de realizar una investigación exhaustiva sobre las necesidades de alivio del estrés del público objetivo. Se utilizaron procesos de diseño iterativo, incluidos wireframes y prototipos, para garantizar la usabilidad y efectividad de la aplicación en proporcionar una experiencia calmante y relajante.',
        en: "This project is a detailed <strong>case study</strong> focusing on the <strong>research</strong>, <em>UX/UI design</em>, prototyping, and user testing of RelaxApp, a meditation music application designed to help users manage their stress levels. The project aimed to create a seamless user experience through an intuitive interface, while also conducting thorough <strong>user research</strong> to understand the stress-relief needs of the target audience. Iterative design processes, including wireframes and prototypes, were tested to ensure the app’s usability and effectiveness in providing a calming, stress-relieving experience.",
    },
    priority: 1,
    source: 'behance',
    keywords: [''],
    category: CATEGORIAS_PORFOLIO.WEBJUEGOS
}, {
    id: 23,
    title: 'MoroArte-GranKan',
    img: 'https://repository-images.githubusercontent.com/531989722/b0845be0-56d2-42e2-a264-a4ba2313c98e',
    link: 'https://imperioame.github.io/MoroArte-GranKan/',
    description: {
        es: 'Este proyecto muestra la creación de un <strong>juego de mesa digital</strong>. En colaboración con un diseñador de juegos, el enfoque estuvo en desarrollar un <strong>juego web</strong> basado en una <strong>rejilla hexagonal</strong> que permite a los usuarios colocar piezas digitales a través de su <em>interfaz de usuario</em>. Utilizando gráficos simples, este complejo juego de mesa para dos jugadores presenta un desafío para la mente.',
        en: "This project showcases the creation of a <strong>digital board game</strong>. Paired with a game designer, the focus was on developing a <strong>web game</strong> based on a <strong>hexagonal grid</strong> that allows users to place digital pieces through its <em>user interface</em>. Utilizing simple graphics, this complex two-player board game presents a challenge to the mind.",
    },
    priority: 2,
    source: 'github',
    keywords: [''],
    category: CATEGORIAS_PORFOLIO.WEBJUEGOS
}, {
    id: 24,
    title: 'Screen Colour Engine',
    img: 'https://repository-images.githubusercontent.com/309862473/f320395e-9fb8-4792-a2a2-fcbe81e312c0',
    link: 'https://imperioame.github.io/ScreenColourEngine/',
    description: {
        es: 'Este proyecto destaca el desarrollo de un <strong>Screen Colour Engine</strong>, diseñado como una herramienta para aleatorizar arte pixelado procedural. El enfoque estuvo en crear un <strong>algoritmo en JS</strong> para manipular la detección y determinación de color para cada píxel en tiempo real. Utilizando una <em>interfaz de usuario simple</em>, los usuarios pueden alternar entre algoritmos de blanco y negro a color y tipos de bucle. Aunque actualmente no está mantenido, las versiones futuras incluirán <strong>algoritmos de IA más avanzados</strong> para crear estructuras de color complejas.',
        en: "This project highlights the development of a <strong>Screen Colour Engine</strong>, designed as a tool to randomize procedural pixel art. The focus was on creating an <strong>algorithm in JS</strong> to manipulate color detection and determination for each pixel in real-time. Utilizing a <em>simple user interface</em>, users can change between black and white to color algorithms and loop types. Although it's currently not maintained, future versions will include <strong>more advanced AI algorithms</strong> to create complex color structures.",
    },
    priority: 1,
    source: 'github',
    keywords: [''],
    category: CATEGORIAS_PORFOLIO.WEBJUEGOS,
    extra_css: 'background-color: black; padding: 3em 0'
}, {
    id: 25,
    title: 'Vecindad',
    img: 'https://repository-images.githubusercontent.com/199515880/3213bff2-7e98-4ae1-86ef-5892675ab247',
    link: 'https://imperioame.github.io/vecindad/',
    description: {
        es: 'Este proyecto muestra el desarrollo de un <strong>juego web</strong>, un <strong>juego de mesa digital</strong> por turnos. El enfoque estuvo en desarrollar una <strong>IA competitiva</strong> que pueda desafiar al jugador, lo cual se logró completamente en JavaScript y jQuery. Utilizando una <em>interfaz de usuario tradicional</em>, la aplicación permite a los usuarios generar recursos y construir sus ejércitos. Las características clave incluyen la IA, un mapa generado proceduralmente con baldosas transitables y no transitables, una pantalla de selección de personajes, un sistema de búsqueda de caminos para la IA y un sistema de combate simple. El resultado es un complejo juego desarrollado en solitario.',
        en: "This project showcases the development of a <strong>web game</strong>, a turn-based <strong>digital board game</strong>. The focus was on developing a <strong>competitive AI</strong> that can challenge the player, accomplished entirely in JavaScript and jQuery. Utilizing a <em>traditional user interface</em>, the application allows users to generate resources and build their armies. Key features include the AI, a procedurally generated map with traversable and non-traversable tiles, a character selection screen, and an enemy pathfinding system for the AI, along with a simple combat system. The result is a complex solo-developed game.",
    },
    priority: 2,
    source: 'github',
    keywords: [''],
    category: CATEGORIAS_PORFOLIO.WEBJUEGOS
}, {
    id: 26,
    title: 'Bar assetpack',
    img: 'https://media.sketchfab.com/models/ca27711bd71946a49413e0b743e51572/thumbnails/5eea19ac82cc4636b0bd3ac31316ce39/e97afa4b4e6348e39d3ca6191147757d.jpeg',
    link: 'https://sketchfab.com/3d-models/bar-pub-asset-pack-with-props-for-games-ca27711bd71946a49413e0b743e51572',
    description: {
        es: 'Este proyecto presenta un <strong>paquete de assets 3D</strong> creado en colaboración con el equipo de la Agencia Álterego, diseñado tanto para uso interno como para distribución comercial. El paquete incluye un bar completo con <em>assets de bajo poligonaje</em>, inspirado en la estética de <strong>GTA 4</strong> y adaptado para plataformas de desarrollo de videojuegos como Unity. Los assets incluyen varios accesorios y muebles, optimizados para entornos de juego. El objetivo fue crear un conjunto versátil y visualmente atractivo de assets que los desarrolladores puedan integrar fácilmente en sus mundos de juego.',
        en: "This project features a <strong>3D asset pack</strong> created in collaboration with the Álterego Agency's team, designed for both internal use and commercial distribution. The pack includes a full bar with detailed <em>low-poly assets</em> inspired by the aesthetic of <strong>GTA 4</strong>, tailored for game development platforms like Unity. The assets include various props and furniture, optimized for game environments. The goal was to create a versatile and visually appealing set of assets that developers can easily integrate into their game worlds.",
    },
    priority: 2,
    source: 'Sketchfab',
    keywords: [''],
    category: CATEGORIAS_PORFOLIO.D3
}, {
    id: 27,
    title: 'Seba Gallardo - Photo Session',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/7725ba164262227.Y3JvcCwzOTM4LDMwODAsMCwzOA.jpg',
    link: 'https://www.behance.net/gallery/164262227/Fiverr-content-Photo-Session-for-a-Freelancer',
    description: {
        es: 'Este proyecto consistió en una <strong>sesión fotográfica</strong> para un músico freelance, con el objetivo de mejorar su perfil en <strong>Fiverr</strong> para aumentar su visibilidad y atraer a posibles clientes. El enfoque estuvo en capturar imágenes profesionales pero accesibles que reflejen la personalidad creativa del músico. Prestando especial atención a la <em>iluminación</em> y la <em>composición</em>, las fotos resultantes fueron diseñadas para destacar en un mercado freelance competitivo, mostrando tanto personalidad como profesionalismo.',
        en: "This project involved a <strong>photographic session</strong> for a freelancer musician, aimed at enhancing his <strong>Fiverr profile</strong> to improve visibility and attract potential clients. The focus was on capturing professional yet approachable images that reflect the musician’s creative persona. Through careful attention to <em>lighting</em> and <em>composition</em>, the resulting photos were designed to stand out in a competitive freelance marketplace, showcasing both personality and professionalism.",
    },
    priority: 2,
    source: 'Behance',
    keywords: [''],
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 28,
    title: 'Sitio Web Agencia Álterego',
    img: 'https://repository-images.githubusercontent.com/320118591/54173200-3d01-11eb-9e3f-c283bb81ad89',
    link: 'https://agenciaalterego.com.ar/',
    description: {
        es: 'Este proyecto consistió en el desarrollo de la página web oficial de <strong>Álterego Agency</strong>, una pequeña agencia digital y productora donde fui el <strong>diseñador principal</strong>, especializado en proyectos de TI. El sitio web fue construido utilizando <em>HTML5</em>, <em>CSS3</em> y <em>JavaScript vanilla</em>, y presenta una amplia gama de trabajos realizados por la agencia. Los proyectos están cuidadosamente categorizados para ofrecer una experiencia de usuario amigable, permitiendo a los visitantes explorar el portafolio de la agencia en diversas disciplinas digitales.',
        en: "This project involved the development of the official webpage for <strong>Álterego Agency</strong>, a small digital agency and producer where I served as the <strong>lead designer</strong>, specializing in IT projects. The website was built using <em>HTML5</em>, <em>CSS3</em>, and <em>vanilla JavaScript</em>, and it showcases the diverse range of work completed by the agency. Projects are carefully categorized to provide a user-friendly experience, allowing visitors to explore the agency’s portfolio across multiple digital disciplines.",
    },
    priority: 2,
    source: 'Web',
    keywords: [''],
    category: CATEGORIAS_PORFOLIO.WEBJUEGOS,
    extra_css: 'background-color: white; padding: 3em 0'
}, {
    id: 29,
    title: 'Staley Martial Arts',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/c85b13139617007.Y3JvcCw4MDgsNjMyLDAsMA.png',
    link: 'https://www.staleymartialarts.com/',
    description: {
        es: '',
        en: "This project involved the development of a <strong>WordPress website</strong> for <strong>Staley Martial Arts</strong>, a gym based in Chicago, USA. Collaborating with the team at <em>Álterego Agency</em>, the focus was on creating a <strong>user-friendly</strong> and clean interface to provide visitors with essential information about the gym, including class schedules and other relevant details. The website was designed to ensure ease of navigation, offering a streamlined experience for both potential clients and current members.",
    },
    priority: 3,
    source: 'Web',
    keywords: [''],
    category: CATEGORIAS_PORFOLIO.WEBJUEGOS
}, {
    id: 30,
    title: 'Box Office - A mindful office full of productivity',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/532aee165767599.Y3JvcCwxMjAwLDkzOCwwLDEx.jpg',
    link: 'https://www.behance.net/gallery/165767599/Box-Office-A-mindful-office-full-of-productivity',
    description: {
        es: 'Este proyecto es una exploración personal en el <strong>diseño de animación 3D</strong>, con una serie titulada <strong>Box Office</strong>. La serie consta de cuatro piezas distintas, cada una representando un <em>escenario metafórico</em> que refleja la monotonía y tristeza comúnmente asociadas a los trabajos burocráticos de oficina. A través de visuales abstractos y simbólicos, el proyecto profundiza en el impacto emocional y mental de estos entornos, culminando en una pieza final que cierra el concepto.',
        en: "This project is a personal exploration into <strong>3D animation design</strong>, featuring a series titled <strong>Box Office</strong>. The series consists of four distinct pieces, each representing a <em>metaphorical setting</em> that reflects the monotony and sadness often associated with bureaucratic office jobs. Through abstract and symbolic visuals, the project delves into the emotional and mental toll of such environments, culminating in a final piece that ties the concept together.",
    },
    priority: 2,
    source: 'Behance',
    keywords: [''],
    category: CATEGORIAS_PORFOLIO.D3
}, {
    id: 31,
    title: 'Early Works: Books covers & Flyers',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/808/55a8c5190355147.Y3JvcCw2MDAwLDQ2OTMsMCwyOTc.jpg',
    link: 'https://www.behance.net/gallery/190355147/Early-Works-Books-covers-Flyers',
    description: {
        es: '<strong>Early Works</strong> muestra los aspectos destacados de mis primeros años como <strong>diseñador gráfico freelance</strong>. Incluye una variedad de trabajos gráficos creados para diversos clientes, presentando <em>banners</em>, <em>cubiertas de libros</em>, <em>volantes</em> y más. Cada pieza refleja mi crecimiento y desarrollo en el campo, demostrando mi capacidad para adaptarme a diferentes estilos y necesidades del cliente mientras construyo una sólida identidad visual.',
        en: "<strong>Early Works</strong> showcases the highlights of my initial years as a <strong>freelance graphic designer</strong>. It includes a diverse range of graphical works created for various clients, featuring <em>banners</em>, <em>book covers</em>, <em>flyers</em>, and more. Each piece reflects my growth and development in the field, demonstrating my ability to adapt to different styles and client needs while building a strong visual identity.",
    },
    priority: 2,
    source: 'Behance',
    keywords: [''],
    category: CATEGORIAS_PORFOLIO.DISENO
}, {
    id: 32,
    title: 'Early Works: Banners, signs and Clothing',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/808/fdd1a6190383341.Y3JvcCw5OTksNzgyLDAsMTQ.jpg',
    link: 'https://www.behance.net/gallery/190383341/Early-Works-Banners-signs-and-Clothing',
    description: {
        es: '<strong>Early Works</strong>, destaca mi trayectoria creativa como <strong>diseñador gráfico freelance</strong> a través de un conjunto diferente de productos. Presenta una variada gama de diseños, incluyendo <em>banners</em>, <em>letreros</em> y <em>ropa</em>. Cada pieza muestra mi estilo en evolución y versatilidad, ilustrando mi compromiso de ofrecer diseños visualmente atractivos que satisfacen una amplia gama de necesidades de los clientes.',
        en: "<strong>Early Works</strong> highlights my creative journey as a <strong>freelance graphic designer</strong> through a different set of products. It features a diverse array of designs, including <em>banners</em>, <em>signs</em>, and <em>clothing</em>. Each piece showcases my evolving style and versatility, illustrating my commitment to delivering visually engaging designs that cater to a wide range of client needs.",
    },
    priority: 2,
    source: 'Behance',
    keywords: [''],
    category: CATEGORIAS_PORFOLIO.DISENO
}, {
    id: 33,
    title: 'Beer can design - Spika Beer Company',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/808/a14997175796205.Y3JvcCwxNTc1LDEyMzEsMCwyMw.jpg',
    link: 'https://www.behance.net/gallery/175796205/Beer-can-design-Spika-Beer-Company',
    description: {
        es: 'Este proyecto muestra uno de mis trabajos como freelancer para la <strong>Spika Beer Company</strong>, donde fui contratado para diseñar una distintiva <strong>lata de cerveza</strong>. El enfoque estuvo en crear un diseño visualmente impactante que refleje la identidad y los valores de la cerveza propuesta. A través de un desarrollo personalizado de <em>elementos gráficos</em>, el diseño final de la lata no solo destaca en las estanterías, sino que también resuena con el público objetivo, encarnando el espíritu de la cerveza que contiene.',
        en: "This project showcases one of my work as a freelancer for the <strong>Spika Beer Company</strong>, where I was hired to design a distinctive <strong>beer can</strong>. The focus was on creating a visually striking design that reflects the proposed beer's identity and values. Through a custom development of <em>graphic elements</em>, the final can design not only stands out on the shelves but also resonates with the target audience, embodying the spirit of the beer it contains.",
    },
    priority: 2,
    source: 'Behance',
    keywords: [''],
    category: CATEGORIAS_PORFOLIO.DISENO
}, {
    id: 34,
    title: 'Ruido - A design experience full of noise',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/89714a170483673.Y3JvcCw5OTksNzgyLDAsOQ.jpg',
    link: 'https://www.behance.net/gallery/170483673/Ruido-A-design-experience-full-of-noise',
    description: {
        es: 'Este proyecto presenta una serie de <strong>piezas gráficas</strong> audaces, <strong>coloridas</strong> y <strong>rugosas</strong> desarrolladas como una experiencia de diseño titulada <em>"Ruido"</em>. Inspirándome en otros artistas visuales y diseñadores, exploré un estilo distintivo caracterizado por <strong>vibrantes degradados</strong> y <strong>ambientes oscuros</strong>. Algunas piezas incorporan <strong>elementos en 3D</strong>, mientras que otras integran <strong>componentes fotográficos</strong>, todo realzado con <strong>texturas rugosas</strong> y <strong>colores impactantes</strong>. El resultado es una colección dinámica que empuja los límites del diseño gráfico, invitando a los espectadores a experimentar el <strong>ruido</strong> de la expresión visual.',
        en: "This project presents a series of <strong>bold</strong>, <strong>colorful</strong>, and <strong>gritty</strong> graphic pieces developed as a design experience titled <em>'Ruido'</em> (meaning noise in Spanish). Drawing inspiration from other visual artists and designers, I explored a distinctive style characterized by <strong>vibrant gradients</strong> and <strong>dark settings</strong>. Some pieces incorporate <strong>3D elements</strong>, while others integrate <strong>photographic components</strong>, all enhanced with <strong>gritty textures</strong> and <strong>striking colors</strong>. The result is a dynamic collection that pushes the boundaries of graphic design, inviting viewers to experience the <strong>noise</strong> of visual expression.",
    },
    priority: 1,
    source: 'Behance',
    keywords: [''],
    category: CATEGORIAS_PORFOLIO.DISENO
}, {
    id: 35,
    title: 'Julie - Photographic Sessión at night',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/808/850919171257147.Y3JvcCw0Nzc2LDM3MzUsMCw0Nw.jpg',
    link: 'https://www.behance.net/gallery/171257147/Julie-Photographic-Session-at-night',
    description: {
        es: 'Este proyecto captura una <strong>noche en las calles vibrantes</strong> de <strong>Buenos Aires</strong>, presentando una sesión fotográfica con una modelo. Armado con mi cámara, buscamos una hermosa <strong>luz artificial</strong> y efectos de <strong>bokeh</strong> mientras paseábamos por la ciudad. Cada fotografía refleja la dinámica atmósfera de la noche, destacando la interacción de luz y sombra en un entorno urbano.',
        en: "This project captures a <strong>night out</strong> in the vibrant streets of <strong>Buenos Aires</strong>, featuring a photographic session with a model. Armed with my camera, we sought out beautiful <strong>artificial light</strong> and <strong>bokeh</strong> effects as we wandered the city. Each photograph reflects the dynamic atmosphere of the night, highlighting the interplay of light and shadow in an urban setting.",
    },
    priority: 2,
    source: 'Behance',
    keywords: [''],
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
    keywords: [''],
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
    keywords: [''],
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
    keywords: [''],
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
    keywords: [''],
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
    keywords: [''],
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
    keywords: [''],
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
    keywords: [''],
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
    keywords: [''],
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
    keywords: [''],
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