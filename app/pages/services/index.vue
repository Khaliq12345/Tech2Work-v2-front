<template>
    <div class="min-h-screen">
        <!-- Hero Section -->
        <ServicesHero />

        <!-- Services Grid -->
        <UContainer>
            <ServicesServiceCard
                v-for="(service, index) in services"
                :key="index"
                :image="service.image"
                :title="service.title"
                :description="service.description"
                :reverse="index % 2 !== 0"
            />
        </UContainer>
    </div>
</template>

<script setup lang="ts">
const services = [
    {
        image: "service_1.png",
        title: "Mobile Application Development",
        description: `Although it may seem hard to believe, the number of mobile phones being used is approximately equal to the number of people on our planet. This means there is a huge market for mobile apps. Is your company doing all it can be take advantage of this tremendous opportunity?

Our expert mobile app developers are fully prepared to guide you and your company every step of the way. Read on to learn about our experience developing apps for all smart Devices and mobile web platforms.

Take advantage of the fastest growing segment of the software development industry with our expertise and knowledge.`,
    },
    {
        image: "service_2.png",
        title: "Web Design & Development",
        description: `Since 2010, we have been developing web applications for large corporations and startups: ranging from proof-of-concept MVPs to high-load systems, static websites and dynamic web applications, on-premises and cloud-based solutions, HIPAA and GDPR compliant.

Your website is the face of your online business. It has the ability to speak directly to your target audience, providing information exactly as they need it, giving them an experience that convinces them to become your customer.

A web design that matches your company's brand, while engaging your target audience, takes work. Websites range from small e-brochures to massive enterprise websites. We have the know-how required to design and develop your website, wherever it falls in this wide spectrum.`,
    },
    {
        image: "service_3.png",
        title: "Digital Marketing",
        description: `A Digital Marketing Agency That Understands Business, Not Just Ranking!

Drive traffic, build engagement, score meaningful conversions, and cultivate long-term relationships with intelligent, cost-effective, integrated campaigns that focus on relevant targets. Our core digital marketing services and channels include:

Strategic Campaign Planning – Organic SEO – Search Marketing / Pay Per Click – Contextual & Display Advertising – Email Campaigns – (SMO – SMM Social Media Management)`,
    },
    {
        image: "service_4.png",
        title: "Branding",
        description: `Branding is at the core of everything we do. Every design, every detail, every decision—all purposefully crafted to strengthen our clients' brands.

We build brands that cannot be ignored.

This is our bread and butter (and sometimes our tea). Whether it's launching a new brand or reinvigorating an old one, we've perfected the art.

Building bold, resonant, electrifying brands is what we've been doing for 10+ years. And although our branding clients range from tiny startups to global brands, our recipe for success is fundamentally the same. It's a highly collaborative process that begins with some intense introspection and discovery, explores strategic and creative options, and culminates with the launch (or relaunch) of an authentic brand that simply cannot be ignored.`,
    },
    {
        image: "service_5.png",
        title: "Advertising Design",
        description: `We'll take you on a creative journey, from initial concepts and sketches, all the way to hand delivering a beautiful piece of printed artwork in your hands. We love creating solutions that are inspiring, functional, visually appealing and that work for your business.

We can create a range of print material including:

Packing Design – Product Design – poster design – flyer design – billboard – company profile – Catalogue – annual reports – Presentations – sticker design – Magazine Design`,
    },
    {
        image: "service_6.png",
        title: "Media Production",
        description: `Visual content is known to be one of the most powerful tools and a key aspect of any successful digital marketing strategy. Our company guarantees a unique, professional and successful process of media production as we handle media production process from start to end by carrying out creative, production, post production and message delivery.

A picture has always said a thousand words, engagement rises dramatically on social media, websites and virtually every platform when the conversation includes photos and videos.

We can transform your static message into movement and motion that connects with an audience on an entirely different level.

We are confident that our advice and vision will help you lead your marketing campaign to its goals.`,
    },
];
</script>
