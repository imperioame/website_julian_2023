export const URLS_CV = {
    ESPANOL: new URL('../pdfs/CV_Ame-2022_04-ESP.pdf',
    import.meta.url),
    INGLES: new URL('../pdfs/CV_Ame-2022_04-ING.pdf',
    import.meta.url)
};

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
    DISENO: 'Diseño',
    PUBLICITARIO: 'Publicitario',
    D3: '3D',
    FOTOGRAFIA: 'Fotografía',
    JUEGOS: 'Juegos'
}

export const FORM_TYPES = {
    NOMBRE: 'text',
    MAIL: 'email',
    MENSAJE: 'textarea',

}


export const TRABAJOS_PORFOLIO = [];
TRABAJOS_PORFOLIO.push({
        id: 1,
        title: 'VoRges',
        img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/095573160433619.Y3JvcCwxMzUwLDEwNTUsMCwxMw.jpg',
        link: 'https://www.behance.net/gallery/160433619/VoRges-VR-app-of-a-JL-Borgess-short-tale',
        priority: 1,
        source: 'behance',
        category: CATEGORIAS_PORFOLIO.JUEGOS
    }, {
        id: 2,
        title: 'BitBang fest',
        img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/3cd542150708753.Y3JvcCw0MTY4LDMyNjAsMCw0NTM.png',
        link: 'https://www.behance.net/gallery/150708753/BitBang-2020-Desarrollo-de-identidad-visual-y-Campana',
        priority: 1,
        source: 'behance',
        category: CATEGORIAS_PORFOLIO.PUBLICITARIO
    }, {
        id: 3,
        title: 'Godspeed',
        img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/d38c39152608337.Y3JvcCwyNzI3LDIxMzMsMCwyNw.jpg',
        link: 'https://www.behance.net/gallery/152608337/Godspeed-3D-Gods-creation',
        priority: 2,
        source: 'behance',
        category: CATEGORIAS_PORFOLIO.D3
    }, {
        id: 4,
        title: 'Domingo Granja',
        img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/c9fc1d156358269.Y3JvcCwyMDMwLDE1ODcsMCwyMA.jpg',
        link: 'https://www.behance.net/gallery/156358269/Domingo-Granja-Branding-y-Web',
        priority: 1,
        source: 'behance',
        category: CATEGORIAS_PORFOLIO.DISENO
    }, {
        id: 5,
        title: "Miko's Story",
        img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/cb9ab9155963781.Y3JvcCwxODE4LDE0MjIsMCwxOA.jpg',
        link: 'https://www.behance.net/gallery/155963781/Mikos-Story-An-AI-made-graphic-novel',
        priority: 2,
        source: 'behance',
        category: CATEGORIAS_PORFOLIO.DISENO
    }, {
        id: 6,
        title: "Uptown",
        img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9fb975159547247.Y3JvcCwzODY4LDMwMjUsMCwzOA.jpg',
        link: 'https://www.behance.net/gallery/159547247/Uptown-Photography-Session-by-Angie-Perfumo',
        priority: 3,
        source: 'behance',
        category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
    }, {
        id: 7,
        title: 'BMW S1000XR',
        img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9cddcc149302767.Y3JvcCwxMjc4LDEwMDAsNTMsMA.jpg',
        link: 'https://www.behance.net/gallery/149302767/BMW-S1000-XR-por-Virginia-Guidetti',
        priority: 1,
        source: 'behance',
        category: CATEGORIAS_PORFOLIO.FOTOGRAFIA
    }, {
        id: 8,
        title: 'Manual de Marca - Voluntarias del Hospital Gutierrez',
        img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/ebe072152780691.Y3JvcCw1NjgxLDQ0NDMsMCw1Ng.jpg',
        link: 'https://www.behance.net/gallery/152780691/Manual-de-Marca-Voluntarias-del-Hospital-Gutierrez',
        priority: 2,
        source: 'behance',
        category: CATEGORIAS_PORFOLIO.DISENO
    }, {
        id: 9,
        title: 'Impervious',
        img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/b5e635156654979.Y3JvcCw5OTksNzgyLDAsOQ.jpg',
        link: 'https://www.behance.net/gallery/156654979/Impervious-3D-Intervention-over-photography',
        priority: 2,
        source: 'behance',
        category: CATEGORIAS_PORFOLIO.D3
    },

);


export const TEXTOS = {
    SUBTITLE_HERO: 'Diseñador Multimedial | Lic. En Comunicación | Director de proyectos digitales | Quality Assurance Lead',
    BANNER_MI_PERSONA: "Diseñador Multimedial y líder de proyectos digitales.<br> Emprendedor y apasionado en la organización y organizaciones.<br> Técnico por naturaleza.",
    BLOQUE_CONTACTO: "Si buscás ponerte en contacto conmigo para llevar a cabo un proyecto puedes utilizar el siguiente formulario, suelo responder en una hora aproximadamente dependiendo del día y hora en el que se envíe el mensaje. En caso de que no responda, dejo mi mail para que me escribas directamente por dicho medio."
}