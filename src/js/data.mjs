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
        es: 'Diseñé y desarrollé una <strong>aplicación de realidad virtual (VR)</strong> que sumerge a los usuarios en el mundo de un <strong>cuento corto de Jorge Luis Borges</strong>, combinando <em>literatura</em> con <strong>realidad virtual interactiva</strong>. El proyecto implicó la creación de un <strong>entorno 3D</strong> visualmente atractivo, inspirado en el estilo narrativo único de Borges. Me encargué del desarrollo y de las <strong>interacciones en VR</strong>, colaborando con un equipo de <em>diseñadores</em> y <em>artistas</em> que desarrollaron la <strong>conceptualización</strong>, el <strong>diseño UI/UX</strong>, y los <strong>activos 3D</strong>, asegurando una experiencia de usuario fluida e inmersiva. Esta aplicación permite a los usuarios explorar el universo literario en un <strong>formato interactivo</strong> innovador, añadiendo una nueva dimensión a la narración de historias a través de la <em>tecnología de realidad virtual</em>.',
        en: "I designed and developed a <strong>VR app</strong> that immerses users into the world of a <strong>Jorge Luis Borges short story</strong>, blending <em>literature</em> with <strong>interactive virtual reality</strong>. The project involved crafting a visually engaging <strong>3D environment</strong> inspired by Borges' unique narrative style. I handled the development and <strong>VR interactions</strong>, teaming up with a team of <em>designers</em> and <em>artists</em> that developed the <strong>conceptualization</strong>, <strong>UI/UX design</strong>, and <strong>3D assets</strong>, ensuring a seamless and immersive user experience. This app allows users to explore the literary universe in an innovative, <strong>interactive format</strong>, adding a new dimension to storytelling through <em>virtual reality technology</em>.",
    },
    priority: 1,
    source: 'behance',
    keywords: {
        en: [
            "VR development",
            "Interactive virtual reality",
            "3D environment design",
            "Virtual reality interactions",
            "Literature adaptation",
            "Narrative design",
            "UI/UX design",
            "Conceptualization",
            "Immersive user experience",
            "Interactive storytelling",
            "Virtual reality technology",
            "Team collaboration",
            "Project management"
        ],
        es: [
            "Desarrollo de VR",
            "Realidad virtual interactiva",
            "Diseño de entornos 3D",
            "Interacciones de realidad virtual",
            "Adaptación literaria",
            "Diseño narrativo",
            "Diseño UI/UX",
            "Conceptualización",
            "Experiencia de usuario inmersiva",
            "Narración interactiva",
            "Tecnología de realidad virtual",
            "Colaboración en equipo",
            "Gestión de proyectos"
        ]        
    },
    tools: [
        "Unity",
        "Vuforia",
        "C#",
        "Blender",
        "Illustrator",
        "Photoshop"
    ],
    category: CATEGORIAS_PORFOLIO.WEBJUEGOS
}, {
    id: 2,
    title: 'BitBang fest',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/3cd542150708753.Y3JvcCw0MTY4LDMyNjAsMCw0NTM.png',
    link: 'https://www.behance.net/gallery/150708753/BitBang-2020-Desarrollo-de-identidad-visual-y-Campana',
    description: {
        es: 'Con el equipo de <strong>Agencia Álterego</strong>, desarrollamos una <strong>identidad visual completa</strong> y lideramos una <strong>campaña de marketing</strong> destinada a establecer la presencia de la marca en la <em>industria tecnológica</em>. El proceso de desarrollo de la marca incluyó el diseño de un <strong>logotipo moderno y llamativo</strong>, la creación de una <em>combinación de colores vibrante</em> y la elaboración de diversos <strong>materiales digitales e impresos</strong> para garantizar una comunicación visual coherente. También participé en la <strong>dirección creativa</strong> de la campaña, centrándome en la <em>estrategia digital</em>, la <strong>participación en redes sociales</strong> y las promociones específicas para aumentar la visibilidad y el reconocimiento de la marca en un mercado competitivo.',
        en: "With the team at <strong>Álterego Agency</strong>, we developed a <strong>complete visual identity</strong> and led a <strong>marketing campaign</strong> aimed at establishing the brand's presence in the <em>technology industry</em>. The brand development process included the design of a <strong>modern and eye-catching logo</strong>, the creation of a <em>vibrant color palette</em>, and the production of various <strong>digital and print materials</strong> to ensure consistent visual communication. I also participated in the <strong>creative direction</strong> of the campaign, focusing on <em>digital strategy</em>, <strong>social media engagement</strong>, and targeted promotions to increase brand visibility and recognition in a competitive market.",
    },
    priority: 1,
    source: 'behance',
    keywords: {
        en: [
            "Audiovisual design",
            "Graphic Design",
            "Video Editing",
            "Social media campaigns",
            "Visual identity development",
            "Marketing campaign leadership",
            "Brand development",
            "Logo design",
            "Digital materials",
            "Creative direction",
            "Digital strategy",
            "Social media engagement",
            "Brand visibility",
            "Brand recognition"
        ],
        es: [
            "Diseño audiovisual",
            "Diseño gráfico",
            "Edición de video",
            "Campañas en redes sociales",
            "Desarrollo de identidad visual",
            "Liderazgo en campañas de marketing",
            "Desarrollo de marca",
            "Diseño de logotipos",
            "Materiales digitales",
            "Dirección creativa",
            "Estrategia digital",
            "Compromiso en redes sociales",
            "Visibilidad de marca",
            "Reconocimiento de marca"
        ]        
    },
    tools: ['Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro'],
    category: CATEGORIAS_PORFOLIO.PUBLICITARIO
}, {
    id: 3,
    title: 'Godspeed',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/d38c39152608337.Y3JvcCwyNzI3LDIxMzMsMCwyNw.jpg',
    link: 'https://www.behance.net/gallery/152608337/Godspeed-3D-Gods-creation',
    description: {
        es: 'Este proyecto implicó la creación de una serie de <strong>imágenes en 3D</strong> que reinventan el concepto de la creación divina, combinando la <strong>narración artística</strong> con un <strong>modelado 3D</strong> intrincado. El objetivo era crear <strong>figuras celestiales</strong> complejas, dinámicas y creativas, utilizando técnicas avanzadas de <em>texturizado</em> e <em>iluminación</em> para evocar una sensación de asombro y misterio. El resultado final es una <strong>narrativa visual</strong> que explora las posibilidades de los cuerpos divinos a través de un audaz y complejo <strong>diseño 3D</strong>.',
        en: "This project involved the creation of a series of <strong>3D images</strong> that reinvent the concept of divine creation, blending artistic storytelling with intricate <strong>3D modeling</strong>. The goal was to create complex, dynamic, and creative <strong>celestial figures</strong> using advanced <em>texturing</em> and <em>lighting techniques</em> to evoke a sense of awe and mystery. The final result is a <strong>visual narrative</strong> that explores the possibilities of divine bodies through bold and highly complex <strong>3D design</strong>.",
    },
    priority: 2,
    source: 'behance',
    keywords: {
        en: [
            "3D Modeling",
            "Artistic Storytelling",
            "Advanced Texturing Techniques",
            "Lighting Techniques",
            "Character Design",
            "3D Design",
            "Visual Narrative",
            "3D Modeling",
            "Creative Visual Concepts",
            "Dynamic 3D Art",
            "Bold 3D Design",
            "Creative Direction"
        ],
        es: [
            "Modelado 3D",
            "Narración artística",
            "Técnicas de texturización avanzadas",
            "Técnicas de iluminación",
            "Diseño de personajes",
            "Diseño 3D",
            "Narrativa visual",
            "Modelado 3D",
            "Conceptos visuales creativos",
            "Arte 3D dinámico",
            "Diseño 3D audaz",
            "Dirección creativa"
        ]        
    },
    tools: ['Blender', 'After Effects', 'Premiere Pro'],
    category: CATEGORIAS_PORFOLIO.D3
}, {
    id: 4,
    title: 'Domingo Granja',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/c9fc1d156358269.Y3JvcCwyMDMwLDE1ODcsMCwyMA.jpg',
    link: 'https://www.behance.net/gallery/156358269/Domingo-Granja-Branding-y-Web',
    description: {
        es: 'Con el equipo de <strong>Agencia Álterego</strong>, desarrollamos una <strong>identidad visual</strong> completa y un <strong>sitio web moderno y responsive</strong> que refleja el espíritu innovador de la empresa dedicada a la venta de materiales de corralón hasta artículos para el hogar. El <strong>proceso de branding</strong> incluyó la creación de un <strong>logotipo</strong> limpio y dinámico, el establecimiento de una <em>paleta de colores</em> coherente, y el diseño de varios <strong>activos digitales</strong> para garantizar una experiencia de marca consistente. El sitio web fue desarrollado en <strong>Wordpress</strong>, con una estructura amigable para el usuario, enfocada en la <em>accesibilidad</em>, navegación intuitiva y <em>optimización móvil</em>, alineándose con los valores de crecimiento y sostenibilidad de la marca.',
        en: "With the team at <strong>Álterego Agency</strong>, we developed a complete <strong>visual identity</strong> and a modern, responsive <strong>website</strong> that reflects the innovative spirit of the company dedicated to the sale of materials from corralón to household items. The <strong>branding process</strong> included the creation of a clean and dynamic <strong>logo</strong>, the establishment of a cohesive <em>color palette</em>, and the design of several <strong>digital assets</strong> to ensure a consistent <strong>brand experience</strong>. The website was built with <strong>Wordpress</strong>, with a user-friendly structure, focusing on <em>accessibility</em>, intuitive navigation, and <em>mobile optimization</em>, aligning with the brand's values ​​of growth and sustainability.",
    },
    priority: 1,
    source: 'behance',
    keywords: {
        es: [
            "Desarrollo de identidad visual",
            "Diseño de sitios web responsivos",
            "Proceso de branding",
            "Diseño de logotipos",
            "Diseño de activos digitales",
            "Desarrollo en WordPress",
            "Accesibilidad",
            "Optimización para móviles",
            "Consistencia de marca",
            "Gestión de proyectos",
            "Gestión de cuentas"
        ],
        en: [
            "Visual Identity Development",
            "Responsive Website Design",
            "Branding Process",
            "Logo Design",
            "Digital Assets Design",
            "WordPress Development",
            "Accessibility",
            "Mobile Optimization",
            "Brand Consistency",
            "Project Management",
            "Account management"
        ]
    },
    tools: ['Photoshop', 'Illustrator', 'Agile Methodologies', 'Wordpress'],
    category: CATEGORIAS_PORFOLIO.DISENO
}, {
    id: 5,
    title: "Miko's Story",
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/cb9ab9155963781.Y3JvcCwxODE4LDE0MjIsMCwxOA.jpg',
    link: 'https://www.behance.net/gallery/155963781/Mikos-Story-An-AI-made-graphic-novel',
    description: {
        es: 'Este <strong>proyecto de novela gráfica</strong> explora la fusión de la <strong>inteligencia artificial</strong> y la <em>narrativa visual</em>. Se utilizaron algoritmos de IA en una etapa temprana para generar tanto el <strong>guion</strong> como un conjunto único de <strong>ilustraciones</strong> que dan vida a la historia de Miko. El <strong>elemento humano</strong> desempeñó un papel clave en refinar los resultados del aprendizaje automático con un sentido creativo de dirección. El proceso involucró la curaduría del <em>arte generado por IA</em>, puliéndolo para alinearlo con el tono narrativo y garantizando un estilo visual cohesivo en toda la novela. Este enfoque innovador resalta el potencial de la <strong>IA</strong> para expandir los límites de la narración gráfica tradicional.',
        en: "This <strong>graphic novel project</strong> explores the fusion of <strong>artificial intelligence</strong> and <em>visual storytelling</em>. Early-stage AI algorithms were used to generate both the <strong>script</strong> and a unique set of <strong>illustrations</strong> that bring the story of Miko to life. The <strong>human element</strong> played a key role in refining the machine learning outcomes with a creative sense of direction. The process involved curating <em>AI-generated artwork</em>, polishing it to align with the narrative tone, and ensuring a cohesive visual style throughout the novel. This innovative approach highlights the potential of <strong>AI</strong> in expanding the boundaries of traditional graphic storytelling.",
    },
    priority: 2,
    source: 'behance',
    keywords: {
        es: [
            "Desarrollo de novelas gráficas",
            "Integración de inteligencia artificial",
            "Narración visual",
            "Generación de guiones",
            "Curaduría de ilustraciones",
            "Arte generado por IA",
            "Dirección creativa",
            "Alineación narrativa",
            "Estilo visual cohesivo",
            "Perfeccionamiento de aprendizaje automático",
            "Narración gráfica innovadora"
        ],
        en: [
            "Graphic Novel Development",
            "Artificial Intelligence Integration",
            "Visual Storytelling",
            "Script Generation",
            "Illustration Curation",
            "AI-Generated Artwork",
            "Creative Direction",
            "Narrative Alignment",
            "Cohesive Visual Style",
            "Machine Learning Refinement",
            "Innovative Graphic Storytelling"
        ]
    },
    tools: ['Midjourney', 'Photoshop', 'After Effects', 'Premiere Pro'],
    category: CATEGORIAS_PORFOLIO.DISENO
}, {
    id: 6,
    title: "Uptown",
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9fb975159547247.Y3JvcCwzODY4LDMwMjUsMCwzOA.jpg',
    link: 'https://www.behance.net/gallery/159547247/Uptown-Photography-Session-by-Angie-Perfumo',
    description: {
        es: 'Este proyecto implicó la <strong>dirección creativa</strong> y la <em>postproducción</em> de una <strong>sesión fotográfica profesional</strong> con una modelo. El enfoque estuvo en mejorar la <strong>estética visual</strong> trabajando con <em>condiciones de poca luz</em>, ajustando la <strong>gradación de color</strong> y aplicando <strong>retoques</strong> y <em>texturización</em> para lograr un aspecto pulido, texturizado y cohesivo. El objetivo era resaltar la esencia de la sesión, destacando la interacción dinámica entre la <strong>iluminación</strong>, la <strong>composición</strong> y el <strong>tema</strong> para crear una serie visualmente impactante.',
        en: "This project involved the <strong>creative direction</strong> and <em>post-production</em> for a professional <strong>photography session</strong> with a model. The focus was on enhancing the <strong>visual aesthetics</strong> by working with <em>low-light conditions</em>, adjusting <strong>color grading</strong>, and applying <strong>retouching</strong> and <em>texturing</em> to achieve a polished, textured, and cohesive look. The goal was to bring out the essence of the session, highlighting the dynamic interplay of <strong>lighting</strong>, <strong>composition</strong>, and <strong>subject matter</strong> to create a visually compelling series.",
    },
    priority: 3,
    source: 'behance',
    keywords: {
        es: [
            "Dirección creativa",
            "Sesión fotográfica",
            "Fotografía profesional",
            "Postproducción",
            "Edición",
            "Fotografía en condiciones de poca luz",
            "Mejora de la estética visual",
            "Corrección de color",
            "Retoque",
            "Texturización",
            "Composición de iluminación",
            "Iluminación dinámica",
            "Narración visual"
        ],
        en: [
            "Creative Direction",
            "Photography Session",
            "Professional Photography",
            "Post-Production",
            "Editing",
            "Low-Light Photography",
            "Visual Aesthetics Enhancement",
            "Color Grading",
            "Retouching",
            "Texturing",
            "Lighting Composition",
            "Dynamic Lighting",
            "Visual Storytelling"
        ]
    },
    tools: ['Photoshop', 'TopazLabs', 'Camera Raw'],
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 7,
    title: 'BMW S1000XR',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9cddcc149302767.Y3JvcCwxMjc4LDEwMDAsNTMsMA.jpg',
    link: 'https://www.behance.net/gallery/149302767/BMW-S1000-XR-por-Virginia-Guidetti',
    description: {
        es: 'En este proyecto, participé en la <strong>sesión fotográfica</strong> y luego me centré en la <strong>postproducción</strong> y <em>mejora creativa</em> de una <strong>sesión profesional de motocicletas</strong>, con la BMW S1000 XR y la modelo profesional y piloto de motos, <strong>Virginia Guidetti</strong>. El proceso implicó la <strong>gradación de color</strong>, el <strong>retoque de imágenes</strong> y la refinación de <em>texturas</em> para resaltar el diseño elegante y el rendimiento dinámico de la moto. Se prestó especial atención a mejorar la <strong>iluminación</strong> y el contraste para destacar las líneas audaces del vehículo en contraste con la belleza orgánica de la modelo, resultando en una serie visualmente impactante y pulida que captura la esencia de las motocicletas de alta gama.',
        en: "In this project, I participated in the <strong>photoshoot</strong> and then focused on the <strong>post-production</strong> and <em>creative enhancement</em> of a professional <strong>motorcycle photoshoot</strong>, featuring the BMW S1000 XR and professional model and bike racer, <strong>Virginia Guidetti</strong>. The process involved <strong>color grading</strong>, <strong>image retouching</strong>, and refining <em>textures</em> to highlight the bike’s sleek design and dynamic performance. Special attention was given to enhancing the <strong>lighting</strong> and contrast to emphasize the vehicle's bold lines in contrast with the model's organic beauty, resulting in a visually striking and polished series that captures the essence of high-class motorcycles.",
    },
    priority: 1,
    source: 'behance',
    keywords: {
        es: [
            "Participación en sesiones fotográficas",
            "Postproducción",
            "Mejora creativa",
            "Fotografía de motocicletas",
            "Corrección de color",
            "Retoque de imágenes",
            "Refinamiento de texturas",
            "Mejora de iluminación",
            "Ajuste de contraste",
            "Composición visual",
            "Destacar actuaciones dinámicas"
        ]
        ,
        en: [
            "Photoshoot Participation",
            "Post-Production",
            "Creative Enhancement",
            "Motorcycle Photography",
            "Color Grading",
            "Image Retouching",
            "Texture Refinement",
            "Lighting Enhancement",
            "Contrast Adjustment",
            "Visual Composition",
            "Dynamic Performance Highlighting"
        ]
    },
    tools: ['Photoshop', 'Camera Raw'],
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 8,
    title: 'Manual de Marca - Voluntarias del Hospital Gutierrez',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/ebe072152780691.Y3JvcCw1NjgxLDQ0NDMsMCw1Ng.jpg',
    link: 'https://www.behance.net/gallery/152780691/Manual-de-Marca-Voluntarias-del-Hospital-Gutierrez',
    description: {
        es: 'Este proyecto implicó la creación de un <strong>manual de marca</strong> integral para un servicio de <em>salud voluntario</em>. El manual fue diseñado para asegurar la consistencia en la <strong>identidad visual</strong> de la organización a través de sus canales de comunicación. El proceso incluyó el desarrollo de directrices detalladas sobre el <strong>uso del logotipo</strong>, la <strong>tipografía</strong>, las <strong>paletas de colores</strong> y los <strong>elementos gráficos</strong>, estableciendo mejores prácticas para los materiales impresos y digitales, así como ejemplos de uso y plantillas para contenido en redes sociales. El objetivo era proporcionar una presencia de marca cohesiva y profesional que esté alineada con los valores de cuidado y servicio comunitario de la organización, al tiempo que apoyaba los <em>esfuerzos de marketing</em> del equipo de comunicaciones.',
        en: "This project entailed the creation of a comprehensive <strong>brand manual</strong> for a volunteer <em>health service</em>. The manual was designed to ensure consistency in the organization’s <strong>visual identity</strong> across their communication channels. The process involved developing detailed guidelines on <strong>logo usage</strong>, <strong>typography</strong>, <strong>color palettes</strong>, and <strong>graphic elements</strong>, establishing best practices for print and digital materials as well as examples of use and templates of social media content. The goal was to provide a cohesive and professional brand presence that aligns with the organization's values of care and community service, while aiding the communications team’s <em>marketing efforts</em>.",
    },
    priority: 2,
    source: 'behance',
    keywords: {
        es: [
            "Desarrollo de Manual de Marca",
            "Servicio de Salud Voluntario",
            "Identidad Visual",
            "Directrices de Uso de Logotipo",
            "Directrices de Tipografía",
            "Directrices de Paletas de Colores",
            "Elementos Gráficos",
            "Materiales Digitales",
            "Plantillas para Redes Sociales",
            "Presencia de Marca Cohesiva",
            "Servicio Comunitario",
            "Soporte de Marketing"
        ],
        en: [
            "Brand Manual Development",
            "Volunteer Health Service",
            "Visual Identity",
            "Logo Usage Guidelines",
            "Typography Guidelines",
            "Color Palette Guidelines",
            "Graphic Elements",
            "Digital Materials",
            "Social Media Templates",
            "Cohesive Brand Presence",
            "Community Service",
            "Marketing Support"
        ]
    },
    tools: ['Illustrator', "Photoshop"],
    category: CATEGORIAS_PORFOLIO.DISENO
}, {
    id: 9,
    title: 'Impervious',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/b5e635156654979.Y3JvcCw5OTksNzgyLDAsOQ.jpg',
    link: 'https://www.behance.net/gallery/156654979/Impervious-3D-Intervention-over-photography',
    description: {
        es: 'Este proyecto combinó mi <strong>fotografía</strong> con <strong>intervenciones en 3D</strong>, fusionando imágenes del mundo real con elementos digitales para crear una <em>experiencia visual surrealista</em> e <em>inmersiva</em>. El enfoque estuvo en integrar de manera fluida <strong>modelos 3D</strong> en las fotografías, mejorando la <strong>profundidad</strong> y la <strong>complejidad narrativa</strong>. Se emplearon técnicas avanzadas de normalización de iluminación en blanco y negro y composición para garantizar que los <strong>elementos 3D</strong> se sintieran orgánicos dentro del entorno fotográfico. El resultado sigue una narrativa suave y flexible de una <em>invasión alienígena</em>, produciendo una serie de visuales impactantes que desafían los límites entre la realidad y el arte digital, creando una fusión creativa de medios.',
        en: "This project combined my <strong>photography</strong> with <strong>3D interventions</strong>, blending real-world imagery with digital elements to create a <em>surreal</em> and <em>immersive visual experience</em>. The focus was on seamlessly integrating <strong>3D models</strong> into the photographs, enhancing <strong>depth</strong> and <strong>narrative complexity</strong>. Black-and-white lighting normalization and advanced composition techniques were employed to ensure that the <strong>3D elements</strong> felt organic within the photographic environment. The result follows a soft, flexible narrative of an <em>alien invasion</em>, producing a series of striking visuals that challenge the boundaries between reality and digital art, creating a creative fusion of mediums.",
    },
    priority: 2,
    source: 'behance',
    keywords: {
        es: [
            "Fotografía",
            "Diseño 3D",
            "Arte 3D",
            "Experiencia Visual Surrealista",
            "Experiencia Visual Inmersiva",
            "Integración de Modelos 3D",
            "Mejora de la Profundidad",
            "Complejidad Narrativa",
            "Normalización de Iluminación",
            "Técnicas de Composición",
            "Fusión de Realidad y Arte Digital"
        ],
        en: [
            "Photography",
            "3D design",
            "3D Art",
            "Surreal Visual Experience",
            "Immersive Visual Experience",
            "3D Models Integration",
            "Depth Enhancement",
            "Narrative Complexity",
            "Lighting Normalization",
            "Composition Techniques",
            "Reality and Digital Art Fusion"
        ]
    },
    tools: ['Blender', 'Camera Raw', 'Photoshop'],
    category: CATEGORIAS_PORFOLIO.D3
}, {
    id: 10,
    title: 'Sentimientos Encontrados',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/112162147953565.Y3JvcCw4MDgsNjMyLDAsMzQ.png',
    link: 'https://www.behance.net/gallery/147953565/Sentimientos-encontrados-Serie-fotografica-en-5000km',
    description: {
        es: 'Esta serie fotográfica captura mi viaje en solitario de <strong>5000 kilómetros</strong> por el <strong>Noroeste Argentino</strong>, retratando los <em>contrastes emocionales</em> experimentados a lo largo del camino. El proyecto se centra en la interacción entre <strong>paisajes</strong> y la <strong>introspección personal</strong>, y los sentimientos. A través de una combinación de <strong>momentos espontáneos</strong> y retratos naturalmente compuestos, la serie explora temas de <em>anhelo</em>, <em>nostalgia</em> y <em>descubrimiento</em>. La narrativa fotográfica utiliza <strong>iluminación natural</strong> y <strong>texturas crudas</strong>, normalizadas en <strong>blanco y negro</strong>, para evocar un profundo sentido de conexión con los entornos, creando un <strong>cuerpo de trabajo visualmente emocional</strong> e <strong>introspectivo</strong>.',
        en: "This photography series captures my solo journey of <strong>5000 kilometers</strong> across the <strong>Argentinian North West</strong>, portraying the <em>emotional contrasts</em> experienced along the way. The project focuses on the interplay between <strong>landscapes</strong> and <strong>personal introspection</strong>, sentiments. Through a combination of <strong>candid moments</strong> and naturally composed portraits, the series explores themes of <em>longing</em>, <em>nostalgia</em>, and <em>discovery</em>. The photographic narrative uses <strong>natural lighting</strong> and <strong>raw textures</strong>, normalized in <strong>black & white</strong>, to evoke a deep sense of connection with the environments, creating a <strong>visually emotional</strong> and <strong>introspective body of work</strong>.",
    },
    priority: 1,
    source: 'behance',
    keywords: {
        es: [
            "Serie Fotográfica",
            "Diseño Emocional",
            "Contrastes Emocionales",
            "Retratos",
            "Momentos Espontáneos",
            "Retratos Naturalmente Compuestos",
            "Temas de Anhelo",
            "Temas de Nostalgia",
            "Temas de Descubrimiento",
            "Iluminación Natural",
            "Blanco y Negro",
            "Visualmente Emocional",
        ],
        en: [
            "Photography Series",
            "Emotional design",
            "Emotional Contrasts",
            "Portraits",
            "Naturally Composed Portraits",
            "Themes of Longing",
            "Themes of Nostalgia",
            "Themes of Discovery",
            "Natural Lighting",
            "Black & White",
            "Visually Emotional",
        ]
    },
    tools: ['Photoshop', 'Camera Raw', 'Lightroom mobile'],
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 11,
    title: 'Volvo - Photography Session by Volvo Arg.',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/a1ca53163258029.Y3JvcCwzNTE3LDI3NTAsMCwzNA.jpg',
    link: 'https://www.behance.net/gallery/163258029/Volvo-Photography-Session-by-Volvo-Arg',
    description: {
        es: 'Este proyecto involucró tanto el <strong>fotoshoot</strong> como el <strong>post-procesamiento</strong> para <strong>Volvo Argentina</strong>. El enfoque fue resaltar el <strong>diseño elegante</strong> y la <strong>excelencia en ingeniería</strong> del vehículo Volvo a través de <em>interacciones humanas</em> y <em>apasionadas</em>, junto con <strong>retocando</strong> y mejorando los <strong>contrastes de iluminación</strong>. Se prestó especial atención a la interacción entre los <strong>autos Volvo antiguos</strong> y <strong>nuevos</strong> para enfatizar la longevidad de los productos de la marca y la lealtad de sus clientes. El resultado es una serie de <strong>imágenes visualmente pulidas</strong> que transmiten el compromiso de Volvo con el <strong>lujo</strong>, el <strong>rendimiento</strong> y la <strong>innovación</strong>.',
        en: "This project involved both the <strong>photoshoot</strong> and <strong>post-processing</strong> for <strong>Volvo Argentina</strong>. The focus was on highlighting the <strong>sleek design</strong> and <strong>engineering excellence</strong> of the Volvo vehicle through <em>human</em>, <em>passionate interaction</em>, along with <strong>retouching</strong> and enhancing <strong>lighting contrasts</strong>. Special attention was given to the interplay between <strong>old</strong> and <strong>new Volvo cars</strong> to emphasize the longevity of the brand’s products and the loyalty of its customers. The result is a series of <strong>visually polished images</strong> that convey Volvo's commitment to <strong>luxury</strong>, <strong>performance</strong>, and <strong>innovation</strong>.",
    },
    priority: 3,
    source: 'behance',
    keywords: {
        es: [
            "Fotoshoot",
            "Post-Procesamiento",
            "Diseño Elegante",
            "Interacciones Humanas",
            "Interacciones Apasionadas",
            "Retocando",
            "Autos Volvo Antiguos",
            "Autos Volvo Nuevos",
            "Valores de Marca",
            "Lujo"
        ],
        en: [
            "Photoshoot",
            "Post-Processing",
            "Sleek Design",
            "Engineering Excellence",
            "Human Interaction",
            "Passionate Interaction",
            "Retouching",
            "Lighting Contrasts",
            "Old and New Volvo Cars",
            "Brand Values",
            "Luxury"
        ]
    },
    tools: ['Photoshop', 'Camera Raw'],
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 12,
    title: 'Costa y Roca - Wine Imagery',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/808/0d7da6153975233.Y3JvcCwxMjMxLDk2MywzNDQsNTc.png',
    link: 'https://www.behance.net/gallery/153975233/Costa-y-Roca-Wine-Imagery',
    description: {
        es: 'Este proyecto se centró en crear <strong>imágenes cautivadoras</strong> para <strong>Costa y Roca</strong>, una emergente <strong>marca de vino</strong>. El objetivo era retratar visualmente la <strong>elegancia</strong> y la <strong>artesanía</strong> de la marca a través de <strong>fotografía de productos naturales</strong>. La <strong>iluminación</strong>, la <strong>textura</strong> y el <strong>ajuste de color</strong> fueron clave para resaltar los tonos ricos del vino y la etiqueta recién diseñada. El resultado es una serie de <strong>imágenes de alta gama</strong> y <strong>refinadas</strong> que reflejan la <strong>sophistication</strong> y la <strong>calidad</strong> de la marca Costa y Roca, ambientadas en el contexto de un <strong>Gaucho Argentino</strong> — un campesino típico y el público objetivo de la marca.',
        en: "This project focused on creating <strong>captivating imagery</strong> for <strong>Costa y Roca</strong>, an emerging <strong>wine brand</strong>. The goal was to visually portray the brand's <strong>elegance</strong> and <strong>craftsmanship</strong> through <strong>natural product photography</strong>. <strong>Lighting</strong>, <strong>texture</strong>, and <strong>color grading</strong> were key in highlighting the wine’s rich tones and the newly designed label. The result is a series of <strong>high-end</strong>, <strong>refined images</strong> that reflect the <strong>sophistication</strong> and <strong>quality</strong> of the Costa y Roca brand, set against the backdrop of an <strong>Argentinian Gaucho</strong> — a typical countryman and the brand's target audience.",
    },
    priority: 1,
    source: 'behance',
    keywords: {
        es: [
            "Imágenes Cautivadoras",
            "Marca de Vino",
            "Elegancia",
            "Artesanía",
            "Fotografía de Productos",
            "Iluminación",
            "Textura",
            "Ajuste de Color",
            "Tonos Ricos",
            "Diseño de Etiqueta",
            "Sofisticación",
            "Sesión fotográfica"
        ],
        en: [
            "Captivating Imagery",
            "Wine Brand",
            "Elegance",
            "Craftsmanship",
            "Product Photography",
            "Lighting",
            "Texture",
            "Color Grading",
            "Rich Tones",
            "Label Design",
            "Sophistication",
            "Photoshoot"
        ]
    },
    tools: ['Photoshop', 'Camera Raw'],
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 13,
    title: 'Casamiento - Colombres & Gomez Pizarro / Sesión Fotogr.',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/6e6697149847251.Y3JvcCw1MDAwLDM5MTAsMCw0OQ.jpg',
    link: 'https://www.behance.net/gallery/149847251/Casamiento-Colombres-Gomez-Pizarro-Sesion-Fotogr',
    description: {
        es: 'He realizado la <strong>fotógrafo de bodas no oficial</strong> para un amigo. Aunque fui contratado como fotógrafo, tuve la libertad de explorar mi <strong>ojo creativo</strong> sin las limitaciones de ser el fotógrafo principal. Esto me permitió centrarme en capturar <strong>posiciones</strong>, <strong>rostros</strong> y <strong>moods</strong>, lo que resultó en una <strong>sesión de fotos de bodas poco ortodoxa</strong> llena de <strong>color</strong>, <strong>emoción</strong> y <strong>diversión</strong>.',
        en: "I was involved as an <strong>unofficial wedding photographer</strong> for a friend. While I was hired as the photographer, I had the freedom to explore my <strong>creative eye</strong> without the constraints of being the main, official photographer. This allowed me to focus on capturing <strong>poses</strong>, <strong>faces</strong>, and <strong>moods</strong>, resulting in an <strong>unorthodox wedding photoshoot</strong> that was full of <strong>color</strong>, <strong>emotion</strong>, and <strong>fun</strong>.",
    },
    priority: 2,
    source: 'behance',
    keywords: {
        es: [
            "Fotógrafía de Bodas",
            "Creativo",
            "Sesión Fotográfica",
            "Sesión de Fotos de Bodas",
            "Color",
            "Emoción"
        ],
        en: [
            "Wedding Photographer",
            "Creative",
            "Photoshoot",
            "Wedding Photoshoot",
            "Color",
            "Emotion"
        ]
    },
    tools: ['Photoshop', 'Camera Raw'],
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 14,
    title: 'Meteor 350 por Virginia Guidetti',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/efa3fd149649961.Y3JvcCwxNTAwLDExNzMsMCwxNA.jpg',
    link: 'https://www.behance.net/gallery/149649961/Meteor-350-por-Virginia-Guidetti',
    description: {
        es: 'Para este proyecto, fui la segunda cámara en una sesión de fotos con Virginia Guidetti, modelo y corredora de motos, en la que aparecía la Meteor 350 de Royal Enfield. Las fotos y la edición que se muestran aquí son mías. El objetivo era destacar el diseño de inspiración vintage y el rendimiento robusto de la moto a través de imágenes dinámicas capturadas en las vibrantes calles de Buenos Aires. Se prestó especial atención a la gradación de color, el retoque y la textura para realzar tanto la motocicleta como la modelo, lo que dio como resultado una serie equilibrada y visualmente impactante que captura la esencia del motociclismo clásico y la aventura.',
        en: "For this project, I served as the <strong>second camera</strong> for a photoshoot with <strong>Virginia Guidetti</strong>, model and bike racer, featuring the <strong>Meteor 350</strong> by <strong>Royal Enfield</strong>. The photos and editing showcased here are my own. The focus was on highlighting the bike’s <strong>vintage-inspired design</strong> and <strong>rugged performance</strong> through dynamic imagery captured in the <strong>vibrant streets of Buenos Aires</strong>. Careful attention was given to <strong>color grading</strong>, <strong>retouching</strong>, and <strong>texturing</strong> to enhance both the motorcycle and the model, resulting in a balanced and visually striking series that captures the essence of <strong>classic motorcycling</strong> and <strong>adventure</strong>.",
    },
    priority: 2,
    source: 'behance',
    keywords: {
        es: [
            "Fotógrafo",
            "Royal Enfield",
            "Fotografía Callejera",
            "Corrección de Color",
            "Retoque",
            "Texturizado"
        ],
        en: [
            "Phothographer",
            "Photoshoot",
            "Royal Enfield",
            "Street Photography",
            "Color Grading",
            "Retouching",
            "Texturing",
        ]
    },
    tools: ['Photoshop', 'Camera Raw'],
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 15,
    title: 'World Sighting - 3d world building experimentation',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/04b042151586163.6314b9ddd768e.png',
    link: 'https://www.behance.net/gallery/151586163/World-Sighting-3d-world-building-experimentation',
    description: {
        es: "Este proyecto explora las posibilidades creativas de <strong>la construcción de mundos en 3D</strong> a través de una serie de <strong>entornos experimentales</strong>. El enfoque estuvo en ampliar los límites de <strong>la narración visual</strong> diseñando planetas inmersivos, raros pero posibles, que invitan al espectador a interactuar con <strong>detalles intrincados</strong> y <strong>composiciones dinámicas</strong>. Se utilizaron técnicas simples de modelado junto con <strong>texturización avanzada</strong> y <strong>iluminación</strong> para crear estos mundos ficticios, resultando en una serie visualmente rica e imaginativa que muestra el potencial infinito del <strong>diseño en 3D</strong> en el <em>arte digital</em>.",
        en: "This project explores the creative possibilities of <strong>3D world-building</strong> through a series of <strong>experimental environments</strong>. The focus was on pushing the boundaries of <strong>visual storytelling</strong> by designing immersive, rare but possible planets that invite the viewer to engage with <strong>intricate details</strong> and <strong>dynamic compositions</strong>. Simple modeling with advanced <strong>texturing</strong> and <strong>lighting techniques</strong> were employed to craft these fictional worlds, resulting in a visually rich and imaginative series that showcases the endless potential of <strong>3D design</strong> in <em>digital art</em>.",
    },
    priority: 2,
    source: 'behance',
    keywords: {
        es: ["Construcción de Mundos en 3D",
            "Entornos Experimentales",
            "Narración Visual",
            "Diseño Inmersivo",
            "Composiciones Dinámicas",
            "Texturización Avanzada",
            "Técnicas de Iluminación",
            "Arte Digital",
            "Desarrollo de Conceptos Creativos",
            "Visualización Conceptual"
        ],
        en: ["3D World-Building",
            "Experimental Environments",
            "Visual Storytelling",
            "Immersive Design",
            "Dynamic Compositions",
            "Advanced Texturing",
            "Lighting Techniques",
            "Digital Art",
            "Creative Concept Development",
            "Conceptual Visualization"
        ]
    },
    tools: ['Blender', 'After Effects'],
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
    keywords: {
        es: [
            "Intervenciones en 3D",
            "Fotografía de Retratos",
            "Mejora Digital",
            "Diseño de Personajes",
            "Diseño Abstracto y Conceptual",
            "Técnicas de Iluminación",
            "Edición en Postproducción",
            "Photoshop",
            "Exploración de la Identidad",
            "Temas de Transformación"
        ],
        en: [
            "3D Interventions",
            "Portrait Photography",
            "Digital Enhancement",
            "Character design",
            "Abstract and Conceptual Design",
            "Lighting Techniques",
            "Post-Production Editing",
            "Identity Exploration",
            "Transformation Themes"
        ]
    },
    tools: ['Blender', 'Photoshop'],
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
    keywords: {
        es: ["Diseño 3D",
            "Diseño de personajes",
            "Diseño abstracto",
            "Audiovisuales coloridos",
            "Experiencia visual lúdica",
            "Iluminación dinámica",
            "Texturas coloridas",
            "Serie visual inmersiva",
            "Diseño de personajes experimental"
        ],
        en: ["3D Design",
            "Character Design",
            "Abstract Design",
            "Colorful Audiovisuals",
            "Playful Visual Experience",
            "Dynamic Lighting",
            "Colorful Textures",
            "Immersive Visual Series",
            "Experimental Character Design"
        ]
    },
    tools: ['Blender','After Effects'],
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
    keywords: {
        es: [
            "Identidad de marca",
            "Campaña Publicitaria",
            "Iniciativa social",
            "Campaña en redes sociales",
            "Comunicación visual",
            "Empoderamiento de comunidades",
            "Educación y tecnología",
            "Lenguaje de diseño",
            "Tipografía audaz",
            "Esquemas de colores vibrantes",
            "Visuales dinámicos",
            "Innovación",
            "Accesibilidad",
            "Desarrollo de identidad visual",
            "Impacto Social"
        ],
        en: [
            "Brand Identity",
            "Advertising Campaign",
            "Social Initiative",
            "Social Media Campaign",
            "Visual Communication",
            "Empowering Communities",
            "Education and Technology",
            "Design Language",
            "Bold Typography",
            "Vibrant Color Schemes",
            "Dynamic Visuals",
            "Innovation",
            "Accessibility",
            "Visual Identity Development",
            "Social Impact"
        ]

    },
    tools: ['Photoshop','Illustrator', 'After Effects', 'Camera Raw', 'Premiere Pro'],
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
    keywords: {
        es: [
            "Campaña publicitaria creativa",
            "Conciencia ambiental",
            "Reciclaje",
            "Impacto Social",
            "Integración de marca",
            "Mensajes lúdicos",
            "Entretenimiento y sostenibilidad",
            "Colores vivos",
            "Gráficos llamativos",
            "Campaña de sostenibilidad",
            "Inspirar acción"
        ],
        en: [
            "Creative Advertising Campaign",
            "Environmental Awareness",
            "Recycling",
            "Social Impact",
            "Brand Integration",
            "Bold Visuals",
            "Playful Messaging",
            "Entertainment and Sustainability",
            "Vivid Colors",
            "Eye-catching Graphics",
            "Sustainability Campaign",
            "Inspiring Action"
        ]

    },
    tools: ['Illustrator', 'Photoshop'],
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
    keywords: {
        es: [
            "Diseño de etiqueta de vino",
            "Identidad de marca",
            "Elegancia",
            "Diseño minimalista",
            "Uso del color",
            "Diseño de texturas",
            "Atractivo visual",
            "Atractivo estético"
        ],
        en: [
            "Wine Label Design",
            "Brand Identity",
            "Elegance",
            "Artisanal Craftsmanship",
            "Minimalist Design",
            "Color Use",
            "Texture Design",
            "Visual Appeal",
            "Aesthetic Appeal"
        ]

    },
    tools: ['Photoshop','Illustrator'],
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
    keywords: {
        en: [
            "Advertising Video Game Development",
            'Advertising game',
            "Videogame Development",
            "Safe Sex Promotion",
            "Engaging Gameplay",
            "Addictive Game Design",
            "2D Environment Creation",
            "Fast-Paced Game Dynamics",
            "UI Design",
            "Sound Design",
            "Educational Game Development",
            "Entertainment and Learning Balance"
        ],
        es: [
            "Videojuego publicitario",
            "Desarrollo de juegos publicitarios",
            "Desarrollo de videojuegos",
            "Educación sobre sexo seguro",
            "Experiencia atractiva",
            "Jugabilidad educativa",
            "Jugabilidad adictiva",
            "Entorno 2D",
            "Dinámicas rápidas",
            "Diseño de UI",
            "Diseño de sonido",
            "Equilibrio entre entretenimiento y aprendizaje"
        ]

    },
    tools: ['Construct', 'Photoshop','Illustrator', 'Audition','HTML5', 'CSS3'],
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
    keywords: {
        es: [
            "Estudio de caso",
            "Investigación",
            "Diseño UX/UI",
            "Diseño centrado en usuarios",
            "Prototipos",
            "Pruebas de usuario",
            "Aplicación de meditación",
            "Impacto Social",
            "Interfaz intuitiva",
            "Investigación de usuarios",
            "Diseño iterativo",
            "Wireframes",
            "Pruebas de usabilidad"
        ],
        en: [
            "Case Study",
            "Research",
            "UX/UI Design",
            "User centered Design",
            "Prototyping",
            "User Testing",
            "Meditation App",
            "Social Impact",
            "Intuitive Interface",
            "User Research",
            "Iterative Design",
            "Wireframes",
            "Usability Testing"
        ]

    },
    tools: ['Figma', 'Adobe XD', 'Optimal Workshop', 'Photoshop', 'Illustrator'],
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
    keywords: {
        es: [
            "Juego de mesa digital",
            "Juego web",
            "Cuadrícula hexagonal",
            "Interfaz de usuario",
            "Diseño de juegos",
            "Juego para dos jugadores",
            "Gráficos simples",
            "Juego estratégico",
            "Diseño interactivo",
            "Desarrollo web"
        ],
        en: [
            "Digital Board Game",
            "Web Game",
            "Hexagonal Grid",
            "User Interface",
            "Game Design",
            "Two-Player Game",
            "Simple Graphics",
            "Strategic Gameplay",
            "Interactive Design",
            "Web Development"
        ]
    },
    tools: ['Javascript', 'HTML5', 'CSS3'],
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
    keywords: {
        es: [
            "Desarrollo web",
            "Programación",
            "Arte pixelado procedural",
            "Algoritmo en JS",
            "Procesamiento en tiempo real",
            "Interfaz de usuario",
            "Algoritmos",
            "Algoritmos de IA",
            "Estructuras de color"
        ],
        en: [
            "Web development",
            "Programming",
            "Procedural Pixel Art",
            "Algorithm in JS",
            "Real-Time Processing",
            "User Interface",
            "Algorithms",
            "AI Algorithms",
            "Color Structures"
        ]

    },
    tools: ['Javascript', 'HTML5', 'CSS3'],
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
    keywords: {
        es: [
            "Juego web",
            "Juego de mesa digital",
            "Juego por turnos",
            "IA competitiva",
            "Interfaz de usuario tradicional",
            "Mapa generado proceduralmente",
            "Sistema de pathfinding para IA",
        ],
        en: [
            "Web Game",
            "Digital Board Game",
            "Turn-Based Gameplay",
            "Competitive AI",
            "Traditional User Interface",
            "Game design",
            "Procedurally Generated Map",
            "AI Pathfinding System",
        ]

    },
    tools: ["JavaScript", "jQuery", "HTML5", "CSS3"
    ],
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
    keywords: {
        es: [
            "Paquete de assets 3D",
            "Diseño 3D",
            "Modelado 3D",
            "Diseño de ambientes 3D",
            "Assets de bajo poligonaje",
            "Desarrollo de juegos",
            "Assets optimizados",
            "Entornos de juego",
            "Atractivo visual"
        ],
        en: [
            "3D Asset Pack",
            "3D Design",
            "3D Modeling",
            "3D Environments",
            "Low-Poly Assets",
            "Game Development",
            "Props",
            "Optimized Assets",
            "Game Environments",
            "Visual Appeal"
        ]

    },
    tools: ['Blender', 'Sketchfab', 'Photoshop', 'Rizom UV'],
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
    keywords: {
        es: [
            "Sesión Fotográfica",
            "Mejora de Visibilidad",
            "Atracción de Clientes",
            "Imágenes Profesionales",
            "Técnicas de Iluminación",
            "Composición",
            "Mercado Freelance",
            "Exhibición de Personalidad"
        ],
        en: [
            "Photographic Session",
            "Visibility Improvement",
            "Client Attraction",
            "Professional Images",
            "Lighting Techniques",
            "Composition",
            "Freelance Marketplace",
            "Personality Showcase"
        ]
    },
    tools: ['Photoshop', 'Camera Raw', 'Premiere Pro'],
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
    keywords: {
        es: [
            "Desarrollo de Página Web",
            "Diseñador Principal",
            "Agencia Digital",
            "Proyectos de TI",
            "Exhibición de Portafolio",
            "Experiencia Amigable para el Usuario",
            "Diseño Digital"
        ],
        en: [
            "Webpage Development",
            "Álterego Agency",
            "Lead Designer",
            "Digital Agency",
            "IT Projects",
            "Portfolio Showcase",
            "User-Friendly Experience",
            "Digital Design"
        ]

    },
    tools: ["HTML5",
        "CSS3",
        "JavaScript"
    ],
    category: CATEGORIAS_PORFOLIO.WEBJUEGOS,
    extra_css: 'background-color: white; padding: 3em 0'
}, {
    id: 29,
    title: 'Staley Martial Arts',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/c85b13139617007.Y3JvcCw4MDgsNjMyLDAsMA.png',
    link: 'https://www.staleymartialarts.com/',
    description: {
        es: 'Este proyecto implicó el desarrollo de un <strong>sitio web en WordPress</strong> para <strong>Staley Martial Arts</strong>, un gimnasio ubicado en Chicago, EE. UU. Colaborando con el equipo de <em>Álterego Agency</em>, el enfoque fue crear una interfaz <strong>amigable para el usuario</strong> y limpia para proporcionar a los visitantes información esencial sobre el gimnasio, incluidos los horarios de las clases y otros detalles relevantes. El sitio web fue diseñado para garantizar la facilidad de navegación, ofreciendo una experiencia simplificada tanto para posibles clientes como para miembros actuales.',
        en: "This project involved the development of a <strong>WordPress website</strong> for <strong>Staley Martial Arts</strong>, a gym based in Chicago, USA. Collaborating with the team at <em>Álterego Agency</em>, the focus was on creating a <strong>user-friendly</strong> and clean interface to provide visitors with essential information about the gym, including class schedules and other relevant details. The website was designed to ensure ease of navigation, offering a streamlined experience for both potential clients and current members.",
    },
    priority: 3,
    source: 'Web',
    keywords: {
        es: [
            "Desarrollo de Sitio Web en WordPress",
            "Staley Martial Arts",
            "Interfaz Amigable para el Usuario",
            "Diseño Limpio",
            "Información Esencial",
            "Horarios de Clases",
            "Facilidad de Navegación",
            "Experiencia Simplificada",
            "Sitio Web de Gimnasio"
        ],
        en: [
            "WordPress Website Development",
            "Staley Martial Arts",
            "User-Friendly Interface",
            "Clean Design",
            "Essential Information",
            "Class Schedules",
            "Ease of Navigation",
            "Streamlined Experience",
            "Gym Website"
        ]

    },
    tools: ['Wordpress', 'Html5', 'CSS3', 'Photoshop'],
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
    keywords: {
        es: [
            "Diseño de Animación 3D",
            "Diseño de ambientes",
            "Diseño de escenas 3D",
            "Escenario Metafórico",
            "Impacto Emocional",
            "Visuales Simbólicos",
            "Representación Abstracta"
        ],
        en: [
            "3D Animation Design",
            "Environment Design",
            "3D Scene Design",
            "Metaphorical Setting",
            "Emotional Impact",
            "Symbolic Visuals",
            "Abstract Representation"
        ]

    },
    tools: ['Blender', 'After Effects'],
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
    keywords: {
        es: [
            "Diseñador Gráfico Freelance",
            "Diseño Basado en Clientes",
            "Banners",
            "Portadas de Libros",
            "Folletos",
            "Identidad Visual",
        ],
        en: [
            "Freelance Graphic Designer",
            "Client-Based Design",
            "Banners",
            "Book Covers",
            "Flyers",
            "Visual Identity",
        ]

    },
    tools: ['Illustrator', 'Photoshop'],
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
    keywords: {
        es: ["Diseñador Gráfico Freelance", "Diseño", "Banners", "Señales", "Ropa", "Versatilidad", "Compromiso Visual", "Necesidades del Cliente"],
        en: ["Freelance Graphic Designer", "Design", "Banners", "Signs", "Clothing", "Versatility", "Visual Engagement", "Client Needs"]

    },
    tools: ['Illustrator', 'Photoshop'],
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
    keywords: {
        es: ["Diseñador Freelance",
            "Diseño de Lata de Cerveza",
            "Diseño Visual",
            "Elementos Gráficos",
            "Público Objetivo",
            "Identidad de Marca"
        ],
        en: ["Freelance Designer",
            "Beer Can Design",
            "Visual Design",
            "Graphic Elements",
            "Target Audience",
            "Brand Identity"
        ]

    },
    tools: ['Photoshop', 'Illustrator'],
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
    keywords: {
        es: ["Diseño Gráfico",
            "Diseño Audaz",
            "Gráficos Coloridos",
            "Texturas Ásperas",
            "Gradientes Vibrantes",
            "Entornos Oscuros",
            "Elementos 3D",
            "Componentes Fotográficos",
            "Expresión Visual"
        ],
        en: ["Graphic Design",
            "Bold Design",
            "Colorful Graphics",
            "Gritty Textures",
            "Vibrant Gradients",
            "Dark Settings",
            "3D Elements",
            "Photographic Components",
            "Visual Expression"
        ]

    },
    tools: ['Photoshop', 'Blender'],
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
    keywords: {
        es: ["Fotografía",
            "Fotografía Nocturna",
            "Fotografía Urbana",
            "Buenos Aires",
            "Luz Artificial",
            "Efectos Bokeh",
            "Luz y Sombra",
            "Atmósfera Dinámica"
        ],
        en: ["Photography",
            "Night Photography",
            "Urban Photography",
            "Buenos Aires",
            "Artificial Light",
            "Bokeh Effects",
            "Light and Shadow",
            "Dynamic Atmosphere"
        ]
    },
    tools: ['Photoshop', 'Camera Raw'],
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 36,
    title: '2023 World Photography Day photo walk in Buenos Aires',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/808/c535eb179057151.Y3JvcCw0OTg4LDM5MDEsMCw3NA.jpg',
    link: 'https://www.behance.net/gallery/179057151/2023-World-Photography-Day-photo-walk-in-Buenos-Aires',
    description: {
        es: 'Para el <strong>Día Mundial de la Fotografía 2023</strong>, colaboré con <strong>Pexels</strong>, la plataforma de imágenes de stock gratuitas, para organizar un evento de <strong>photo walk</strong> en mi ciudad natal de Buenos Aires. Coordiné el evento, que contó con <em>tres modelos femeninas</em>, <em>dos motociclistas</em> y un grupo de <strong>propietarios de autos vintage</strong>, generando diversos escenarios y ambientes para los fotógrafos que se unieron. Fui responsable de la coordinación total del evento y lideré la <strong>dirección creativa</strong> de la caminata, asegurando una variedad de escenas para capturar imágenes únicas y atractivas.',
        en: "For <strong>World Photography Day 2023</strong>, I collaborated with <strong>Pexels</strong>, the free stock images platform, to host a <strong>photo walk</strong> event in my home city of Buenos Aires. I coordinated the event, which featured <em>three female models</em>, <em>two bikers</em>, and a group of <strong>vintage car owners</strong>, creating diverse settings and ambiances for the photographers who joined. I was responsible for overseeing the entire event and led the <strong>creative direction</strong> of the walk, ensuring a variety of scenes for capturing unique and engaging images.",
    },
    priority: 2,
    source: 'Behance',
    keywords: {
        es: ["Evento de Fotografía",
            "Día Mundial de la Fotografía",
            "Caminata Fotográfica",
            "Buenos Aires",
            "Dirección Creativa",
            "Coordinación de Eventos",
            "Autos Vintage",
            "Modelos",
            "Moteros",
            "Configuraciones Diversas"
        ],
        en: ["Photography Event",
            "World Photography Day",
            "Photo Walk",
            "Buenos Aires",
            "Creative Direction",
            "Event Coordination",
            "Vintage Cars",
            "Models",
            "Bikers",
            "Diverse Settings"
        ]
    },
    tools: ['Photoshop', 'Camera Raw'],
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 37,
    title: 'Elal y Nosjteh - Tribal Axe Craft + Photo session',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/808/82d8e3179421987.Y3JvcCw1ODQwLDQ1NjcsMCw1Nw.jpg',
    link: 'https://www.behance.net/gallery/179421987/Elal-y-Nosjteh-Tribal-Axe-Craft-Photo-session',
    description: {
        es: 'Como creativo, disfruto trabajando tanto en <strong>arte digital</strong> como en <strong>arte físico</strong>. En este proyecto, diseñé y elaboré un <strong>hacha tribal</strong> para desafiar mis habilidades y trabajar con objetos del mundo real. Para este proyecto utilizé como narrativa un <em>cuento folclórico</em> sobre un gigante violento y su hijo que se rebeló contra él—donde el <strong>hacha</strong> simboliza al hijo y yo, al gigante. Para dar vida a esta historia, dirigí la <strong>dirección creativa</strong> de una sesión de fotos, colaborando con dos fotógrafos y modelando como el gigante. También me encargué de la <em>edición</em> y la <strong>postproducción</strong> de la sesión.',
        en: "As a creative, I enjoy working on both <strong>digital</strong> and <strong>physical art</strong>. In this project, I designed and crafted a <strong>tribal axe</strong> to challenge my skills and work on real-world objects. I use a <em>folkloric tale</em> of a violent giant and his son who rebelled against him as a narrative around this project—where the <strong>axe</strong> symbolizes the son, and I, the giant. To bring this story to life, I led the <strong>creative direction</strong> of a photoshoot, collaborating with two photographers and modeling as the giant myself. I also handled the <em>editing</em> and <strong>post-production</strong> of the session.",
    },
    priority: 1,
    source: 'Behance',
    keywords: {
        es: ["Dirección Creativa",
            "Artesano",
            "Arte Digital",
            "Arte Físico",
            "Hacha Tribal",
            "Cuento Folklórico",
            "Sessión Fotográfica",
            "Colaboración",
            "Post-Producción",
            "Edición",
            "Modelaje"
        ],
        en: ["Creative Direction",
            "Craftsman",
            "Digital Art",
            "Physical Art",
            "Tribal Axe",
            "Folkloric Tale",
            "Photoshoot",
            "Collaboration",
            "Post-Production",
            "Editing",
            "Modeling"
        ]

    },
    tools: ['Photoshop', 'Camera Raw', 'My Hands', 'Carving tools'],
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 38,
    title: 'Anael - Photo Session by Nicolás Ochoa',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/808/1e3147181940685.Y3JvcCwzNDA4LDI2NjYsMCww.jpg',
    link: 'https://www.behance.net/gallery/181940685/Anael-Photo-Session-by-Nicolas-Ochoa',
    description: {
        es: 'Participé en esta <strong>sesión de fotos</strong> liderada por un fotógrafo profesional y una actriz emergente argentina. Caminamos por las calles del Oeste del Gran Buenos Aires, buscando <em>luz natural</em> y sombras para crear imágenes impactantes.',
        en: "I participated in this <strong>photo session</strong> led by a professional photographer and an emerging Argentine actress. We explored the streets of West Greater Buenos Aires, seeking <em>natural light</em> and shadows to create striking imagery.",
    },
    priority: 2,
    source: 'Behance',
    keywords: {
        es: ["Sesión Fotográfica",
            "Luz Natural",
            "Fotografía",
            "Imágenes Impactantes",
            "Colaboración",
            "Fotógrafo Profesional",
            "Actriz",
            "Exploración Urbana"
        ],
        en: ["Photo Session",
            "Natural Light",
            "Photography",
            "Striking Imagery",
            "Collaboration",
            "Professional Photographer",
            "Actress",
            "Urban Exploration"
        ]

    },
    tools: ['Photoshop', 'Camera Raw'],
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 39,
    title: 'Little Sina in Auckland City - Photographic Session',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/808/03ec40185616447.Y3JvcCwzOTk5LDMxMjgsMCwxMDE5.jpg',
    link: 'https://www.behance.net/gallery/185616447/Little-Sina-in-Auckland-City-Photographic-Session',
    description: {
        es: 'Dirigí esta <strong>sesión fotográfica</strong> con una modelo alemana en la ciudad de <strong>Auckland, Nueva Zelanda</strong>. Por la noche, buscamos <em>luz artificial</em> y un bonito <em>bokeh</em> para crear imágenes visualmente cautivadoras.',
        en: "I led this <strong>photoshoot</strong> with a German model in the city of <strong>Auckland, New Zealand</strong>. At night, we searched for <em>artificial light</em> and beautiful <em>bokeh</em> to create visually captivating images.",
    },
    priority: 1,
    source: 'Behance',
    keywords: {
        es: ["Sesión Fotográfica",
            "Luz Artificial",
            "Bokeh",
            "Fotografía Nocturna",
            "Captivación Visual",
            "Modelo",
            "Auckland",
            "Nueva Zelanda"
        ],
        en: ["Photoshoot",
            "Artificial Light",
            "Bokeh",
            "Night Photography",
            "Visual Captivation",
            "Model",
            "Auckland",
            "New Zealand"
        ]
    },
    tools: ['Photoshop', 'Camera Raw'],
    category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
}, {
    id: 40,
    title: '3D - Weekly cretive pieces in Blender',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/808/b74896178951577.Y3JvcCw4MTEsNjM1LDMyNyww.jpg',
    link: 'https://www.behance.net/gallery/178951577/3D-Weekly-cretive-pieces-in-Blender',
    description: {
        es: 'Este proyecto es una colección de <strong>piezas de arte 3D</strong> semanales, creadas como parte de una práctica continua para perfeccionar mis habilidades en <strong>Blender</strong>. Cada pieza explora diferentes técnicas, desde texturizado hasta iluminación y composición, lo que me permite experimentar con diversas ideas creativas. La mayoría de estas piezas son <em>videos cortos</em> que han sido post-producidos en <strong>After Effects</strong>, mientras que otras son imágenes estáticas editadas en <strong>Photoshop</strong>. El enfoque de este proyecto es expandir los límites de mi creatividad y capacidad técnica, poniendo énfasis en <em>visuales dinámicos</em> y <em>narrativas</em> dentro del espacio 3D.',
        en: "This project is a collection of weekly <strong>3D art pieces</strong> created as part of an ongoing practice to refine my skills in <strong>Blender</strong>. Each piece explores different techniques, from texturing to lighting and composition, allowing me to experiment with various creative ideas. The majority of these pieces are <em>short videos</em> that have been post-processed in <strong>After Effects</strong>, while others are static images edited in <strong>Photoshop</strong>. The focus of this project is to push the boundaries of my creativity and technical ability, with an emphasis on <em>dynamic visuals</em> and <em>storytelling</em> within the 3D space.",
    },
    priority: 1,
    source: 'Behance',
    keywords: {
        es: ["Arte 3D",  
            "Texturización",  
            "Iluminación",  
            "Composición",  
            "Post-Procesamiento",  
            "Visuales Dinámicos",  
            "Narrativa"]
            ,
        en: ["3D Art",  
            "Texturing",  
            "Lighting",  
            "Composition",  
            "Post-Processing",  
            "Dynamic Visuals",  
            "Storytelling"]
            
    },
    tools: ['Blender','After Effects', 'Photoshop'],
    category: CATEGORIAS_PORFOLIO.D3
}, {
    id: 41,
    title: 'Antrieb Sudamericana Web',
    img: 'https://i0.wp.com/antriebsa.com/wp-content/uploads/2018/10/cropped-logo-antrieb-01.png',
    link: 'https://antriebsa.com/',
    description: {
        es: 'Este proyecto involucró el desarrollo de la página web corporativa para <strong>Antrieb S.A.</strong>, una pyme argentina especializada en la industria mecánica. Construida utilizando <strong>WordPress</strong>, el sitio incluye varias funciones clave para servir tanto a la empresa como a sus clientes. Entre estas funciones se encuentran un detallado <strong>catálogo de productos</strong>, un <strong>blog</strong> actualizado regularmente y secciones para <em>informes técnicos</em> y <em>estudios académicos</em>. El objetivo fue crear una interfaz profesional y fácil de usar que destaque la experiencia de la empresa y proporcione recursos valiosos para los visitantes.',
        en: "This project involved the development of a corporate webpage for <strong>Antrieb S.A.</strong>, an Argentine SME specializing in the mechanical industry. Built using <strong>WordPress</strong>, the site includes various key features to serve both the business and its clients. These features include a detailed <strong>product catalog</strong>, a regularly updated <strong>blog</strong>, and sections for <em>technical reports</em> and <em>academic studies</em>. The goal was to create a professional, user-friendly interface that effectively showcases the company’s expertise and provides valuable resources for visitors.",
    },
    priority: 1,
    source: 'Web',
    keywords: {
        es: ["Página Web Corporativa",  
            "WordPress",  
            "Catálogo de Productos",  
            "Blog",  
            "Informes Técnicos",  
            "Estudios Académicos",  
            "Interfaz Amigable",  
            "Diseño Profesional",  
            "Industria Mecánica"]
            ,
        en: ["Corporate Webpage",  
            "WordPress",  
            "Product Catalog",  
            "Blog",  
            "Technical Reports",  
            "Academic Studies",  
            "User-Friendly Interface",  
            "Professional Design",  
            "Mechanical Industry"]
    },
    tools: ['Wordpress', 'Html5', 'CSS3', 'Photoshop'],
    category: CATEGORIAS_PORFOLIO.WEBJUEGOS,
    extra_css: 'background-color: white; padding: 10vh 0; box-sizing: border-box'
}, {
    id: 42,
    title: 'Imperio Usados Web',
    img: 'https://http2.mlstatic.com/storage/mshops-appearance-api/images/70/66709070/logo-2019050418345411800.png',
    link: 'https://www.imperio-usados.com.ar/',
    description: {
        es: "Este proyecto involucró la creación de una <strong>plataforma de comercio electrónico</strong> para <strong>Imperio Usados</strong>, un mercado de bienes usados. Usando una herramienta similar a <strong>WooCommerce</strong>, configuré el sitio para <em>ventas al público</em>. El resultado es una <strong>tienda en línea totalmente operativa</strong> adaptada a las necesidades del mercado de bienes usados.",
        en: "This project involved setting up a simple e-commerce platform for <strong>Imperio Usados</strong>, a marketplace for used goods. Using a tool similar to <strong>WooCommerce</strong>, I configured the site for <em>public-facing sales</em>. The result is a <strong>fully operational online store</strong> tailored to the needs of the used goods market.",
    },
    priority: 2,
    source: 'Web',
    keywords: {
        es: ["Plataforma de Comercio Electrónico",  
            "WooCommerce",  
            "Ventas al Público",  
            "Tienda en Línea",  
            "Mercado",  
            "Bienes Usados"]
            ,
        en: ["E-commerce Platform",  
            "WooCommerce",  
            "Public-Facing Sales",  
            "Online Store",  
            "Marketplace",  
            "Used Goods"]
            
    },
    tools: ['Photoshop', 'MercadoLibre'],
    category: CATEGORIAS_PORFOLIO.WEBJUEGOS,
    extra_css: 'background-color: white; padding: 0 6em; box-sizing: border-box;'
}, {
    id: 43,
    title: 'Landrú.org Web design and Coordination',
    img: 'https://www.landru.org/wp-content/uploads/2021/12/11_gato.svg',
    link: 'https://www.landru.org/',
    description: {
        es: 'En mi rol como <strong>Coordinador Digital</strong> en la <strong>Fundación Landrú</strong>, lideré el desarrollo de un <strong>catálogo interno de obras de arte</strong> para organizar y archivar digitalmente el trabajo del artista. También supervisé las actualizaciones y mejoras del <em>sitio web público</em> de la fundación. En el archivo interno, aseguré que representara efectivamente el legado del artista, manteniendo una <strong>navegación fácil de usar</strong> y los estándares modernos de la web. Mi trabajo garantizó que tanto los activos digitales internos como externos estuvieran bien gestionados y alineados con la misión de la fundación de preservar y promover el trabajo del artista.',
        en: "In my role as <strong>Digital Coordinator</strong> at the <strong>Landrú Foundation</strong>, I led the development of an internal <strong>artwork catalogue</strong> to digitally organize and archive the artist's body of work. I also oversaw the updates and improvements of the foundation’s <em>public-facing website</em>. On the internal archive I ensured that it effectively represented the artist's legacy while maintaining <strong>user-friendly navigation</strong> and modern web standards. My work ensured that both the internal and external digital assets were well-managed and aligned with the foundation's mission to preserve and promote the artist's work.",
    },
    priority: 2,
    source: 'Web',
    keywords: {
        es: [
            "Coordinador Digital",
            "catálogo de obras de arte",
            "sitio web público",
            "navegación fácil de usar",
            "estándares web",
            "activos digitales",
            "misión de la fundación",
            "obra del artista"
          ]
          ,
        en: [
            "Digital Coordinator",
            "artwork catalogue",
            "public-facing website",
            "user-friendly navigation",
            "web standards",
            "digital assets",
            "foundation's mission",
            "artist's work"
          ]          
    },
    tools: ['Php', 'Javascript', 'HTML5', 'CSS3', 'MySQL'],
    category: CATEGORIAS_PORFOLIO.WEBJUEGOS,
    extra_css: 'background-color: white; padding: 2em 0'
}, {
    id: 44,
    title: 'AI Adventure Text Game',
    img: 'https://repository-images.githubusercontent.com/782311160/a1f145a1-7107-4812-82c1-ea605cd80b78',
    link: 'https://ai-text-game.marioa.me/',
    description: {
        es: 'Este proyecto muestra el desarrollo de un <strong>juego de aventuras de texto al estilo old-school</strong>, donde los <strong>modelos LLM</strong> actúan como el Game Master. El objetivo de este juego era aprender a implementar <strong>redes neuronales de generación de texto</strong> utilizando la <em>API de Inferencia de Hugging Face</em>. Los jugadores pueden experimentar <strong>generaciones de historias aleatorias</strong> y elegir qué <em>modelo de IA</em> utilizar para generar la historia, junto con una función de inicio de sesión. Aunque muchas características no se incluyeron en esta versión inicial, no estoy manteniendo el proyecto por ahora.',
        en: "This project showcases the development of an <strong>old-school text adventure</strong> game, where <strong>LLM models</strong> act as the Game Master. The objective of this game was to learn how to implement <strong>text-generation neural networks</strong> using the <em>Hugging Face Inference API</em>. Players can experience <strong>random story generations</strong> and choose which <em>AI model</em> to use for generating the story, along with a login feature. Although many features were not included in this initial version, I am not maintaining the project for now.",
    },
    priority: 1,
    source: 'Web',
    keywords: {
        es: [
            "Juego de aventura de texto",
            "Diseño de Videojuegos", 
            "Modelos LLM",
            "Maestro de Juego",
            "Redes neuronales de generación de texto",
            "API de Inferencia de Hugging Face",
            "Generaciones de historias aleatorias",
            "Modelo de IA"
          ]
          ,
        en: [
            "Text adventure game",
            "Video game design",
            "LLM models",
            "Game Master",
            "Text-generation neural networks",
            "Hugging Face Inference API",
            "Random story generations",
            "AI model"
          ]          
    },
    tools: ['Hugging-Face', 'LLM', 'AI Models', 'Javascript', 'React', 'Node', 'HTML5', 'CSS3', 'MySQL'],
    extra_css: 'background-color: black; padding: 3em 0',
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
    MODAL_DESCRIPTION: 'Descripción',
    MODAL_KEYWORDS: 'Palabras clave',
    MODAL_TOOLS: 'Herramientas',
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
    MODAL_DESCRIPTION: 'Description',
    MODAL_KEYWORDS: 'Keywords',
    MODAL_TOOLS: 'Tools',
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