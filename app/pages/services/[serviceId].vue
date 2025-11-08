<template>
    <div>
        <!-- 1. Hero Section -->
        <ServicesDetailHero :title="serviceData.title" :tag="serviceData.tag" />

        <!-- 2. About Section -->
        <ServicesAbout
            :description="serviceData.about.description"
            :images="serviceData.about.images"
        />

        <!-- 3. Expertise Section -->
        <ServicesExpertise
            :description="serviceData.expertise.description"
            :skills="serviceData.expertise.skills"
        />

        <!-- 4. Solutions Section -->
        <ServicesSolutions :solutions="serviceData.solutions" />

        <!-- 5. Technology Section -->
        <ServicesTechnology />

        <!-- 6. Projects Section -->
        <div class="m-5">
            <ServicesProject :projects="serviceData.projects" />
        </div>
    </div>
</template>

<script setup lang="ts">
interface Solution {
    title: string;
    description: string;
    content: string;
}

interface Project {
    title: string;
    description?: string;
    image: string;
    badge: string;
    to?: string;
}

interface ServiceData {
    title: string;
    tag: string;
    about: {
        description: string;
        images: string[];
    };
    expertise: {
        description: string;
        skills: string[];
    };
    solutions: Solution[];
    projects: Project[];
}

// Récupération du paramètre de route
const route = useRoute();
const serviceId = route.params.serviceId as string;

// Données mockées pour le développement - à remplacer par une vraie API
const serviceData: ServiceData = {
    title: "Développement Web sur Mesure",
    tag: "Agence de développement web",
    about: {
        description:
            "Nous créons des solutions web modernes et performantes adaptées à vos besoins spécifiques. Notre équipe d'experts maîtrise les dernières technologies pour vous offrir des applications web robustes et évolutives.",
        images: ["/about/about_1.png", "/about/about_2.png"],
    },
    expertise: {
        description:
            "Notre expertise couvre l'ensemble du développement web moderne, des frameworks frontend aux architectures backend scalables.",
        skills: [
            "React & Next.js",
            "Vue.js & Nuxt.js",
            "Node.js & Express",
            "Symfony & Laravel",
            "Architecture Microservices",
            "DevOps & CI/CD",
            "Bases de données",
            "APIs REST & GraphQL",
        ],
    },
    solutions: [
        {
            title: "Applications Web Modernes",
            description:
                "Développement d'applications single-page avec React ou Vue.js",
            content:
                "Création d'applications web interactives et performantes utilisant les derniers frameworks JavaScript. Interface utilisateur moderne et responsive design.",
        },
        {
            title: "APIs & Microservices",
            description: "Architecture backend scalable et maintenir",
            content:
                "Conception et développement d'APIs RESTful et GraphQL. Architecture microservices pour une meilleure scalabilité et maintenance.",
        },
        {
            title: "E-commerce sur Mesure",
            description: "Solutions de vente en ligne complètes",
            content:
                "Développement de plateformes e-commerce personnalisées avec gestion des paiements, inventory management et analytics avancés.",
        },
        {
            title: "Refactoring & Migration",
            description: "Modernisation d'applications existantes",
            content:
                "Migration d'applications legacy vers des technologies modernes. Refactoring de code pour améliorer les performances et la maintenabilité.",
        },
        {
            title: "Optimisation des Performances",
            description:
                "Amélioration de la vitesse et de l'efficacité des applications",
            content:
                "Audit complet des performances, optimisation du code, mise en cache avancée et techniques de lazy loading pour des temps de chargement ultra-rapides.",
        },
        {
            title: "Intégration & Déploiement Continu",
            description:
                "Automatisation des processus de développement et déploiement",
            content:
                "Mise en place de pipelines CI/CD, tests automatisés, déploiement sur le cloud (AWS, Azure, GCP) et monitoring en temps réel des applications.",
        },
    ],
    projects: [
        {
            title: "Plateforme E-commerce Next.js",
            description:
                "Développement d'une plateforme e-commerce moderne avec Next.js et Stripe",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
            badge: "E-commerce",
            to: "/portfolio/1",
        },
        {
            title: "Application SaaS Vue.js",
            description:
                "Interface d'administration pour une application SaaS B2B",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
            badge: "SaaS",
            to: "/portfolio/2",
        },
        {
            title: "API Microservices Node.js",
            description: "Architecture microservices avec Node.js et Docker",
            image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80",
            badge: "Backend",
            to: "/portfolio/3",
        },
    ],
};
</script>
