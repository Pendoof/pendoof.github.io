export type Project = {
    id: string;
    title: string;
    slug: string;
    description: string;
    longDescription: string;
    tags: string[];
    links: {
        github: string;
        demo: string | null;
        live: string | null;
    };
    images: {
        thumbnail: string;
        gallery: string[];
    };
};

export type Social = {
    name: string;
    url: string;
};

export type Cert = {
    name: string;
    path: string;
};
