// lib/base44Client.js
export const base44 = {
  /** ======================================================
   *  AUTHENTICATION (mock)
   *  ====================================================== */
  auth: {
    async me() {
      return null; // o { role: "admin" }
    },
    redirectToLogin() {
      if (typeof window !== "undefined") window.location.href = "/login";
    },
    logout() {
      if (typeof window !== "undefined") window.location.href = "/";
    },
  },

  /** ======================================================
   *  ENTITIES
   *  ====================================================== */
  entities: {
    /** ===========================
     *  ENTITY: Product
     *  =========================== */
    Product: {
      async list(order = "-created_date") {
        // TODO: reemplazar por tu endpoint real
        // const res = await fetch(`/api/products?order=${order}`);
        // return res.json();

        return [
          {
            id: "p1",
            name: "ALERNAL Core",
            description: "Base modular para apps con IA y microservicios.",
            price: 1290000,
            category: "software",
            type: "digital",
            image_url: "",
            features: [
              "Autenticación avanzada",
              "Módulos de IA integrados",
              "Diseño escalable",
            ],
            is_featured: true,
            stock: null,
            created_date: "2025-10-10",
          },
          {
            id: "p2",
            name: "ALERNAL Integrations",
            description:
              "Conectores listos para ERP, CRM y plataformas de mensajería.",
            price: 890000,
            category: "consulting",
            type: "digital",
            image_url: "",
            features: ["Integración con SAP", "Automatización de flujos", "API REST"],
            is_featured: true,
            stock: null,
            created_date: "2025-09-25",
          },
          {
            id: "p3",
            name: "ALERNAL Edge Device",
            description: "Gateway IoT diseñado para entornos industriales.",
            price: 2590000,
            category: "hardware",
            type: "physical",
            image_url: "",
            features: ["Conectividad 4G/LTE", "Soporte Modbus", "MQTT"],
            is_featured: true,
            stock: 8,
            created_date: "2025-09-20",
          },
          {
            id: "p4",
            name: "Workshop IA para equipos",
            description:
              "Capacitación intensiva en inteligencia artificial aplicada.",
            price: 4200000,
            category: "training",
            type: "digital",
            image_url: "",
            features: ["Prompt Engineering", "MVP con IA", "Evaluación personalizada"],
            is_featured: false,
            stock: null,
            created_date: "2025-09-15",
          },
          {
            id: "p5",
            name: "Consultoría Estratégica ALERNAL",
            description:
              "Asesoría en adopción tecnológica y escalabilidad empresarial.",
            price: 5500000,
            category: "consulting",
            type: "digital",
            image_url: "",
            features: [
              "Evaluación de madurez digital",
              "Hoja de ruta tecnológica",
              "Optimización de procesos",
            ],
            is_featured: true,
            stock: null,
            created_date: "2025-09-05",
          },
        ];
      },
    },

    /** ===========================
     *  ENTITY: Testimonial (corregida)
     *  =========================== */
    Testimonial: {
      async list(order = "-created_date") {
        // TODO: reemplazar por tu endpoint real
        // const res = await fetch(`/api/testimonials?order=${order}`);
        // return res.json();

        return [
          {
            id: "t1",
            client_name: "Camila R.",
            client_position: "CTO",
            client_company: "Nova Labs",
            testimonial_text: "ALERNAL superó nuestras expectativas.",
            rating: 5,
            avatar_url: "",
            is_featured: true,
            created_date: "2025-10-01",
          },
          {
            id: "t2",
            client_name: "Julián A.",
            client_position: "CEO",
            client_company: "BlueCore",
            testimonial_text: "Entrega ágil y calidad excelente.",
            rating: 5,
            avatar_url: "",
            is_featured: true,
            created_date: "2025-09-21",
          },
          {
            id: "t3",
            client_name: "Laura P.",
            client_position: "PM",
            client_company: "Quanty",
            testimonial_text: "Gran equipo, comunicación impecable.",
            rating: 4,
            avatar_url: "",
            is_featured: true,
            created_date: "2025-08-15",
          },
        ];
      },
    },

    /** ===========================
     *  ENTITY: TeamMember
     *  =========================== */
    TeamMember: {
      async list(order = "order") {
        // TODO: reemplazar por tu endpoint real
        // const res = await fetch(`/api/team?order=${order}`);
        // return res.json();

        return [
          {
            id: "m1",
            full_name: "Andrés Arrieta",
            position: "CEO & Founder",
            bio: "Visionario que lidera ALERNAL hacia un futuro donde la tecnología y la estrategia empresarial convergen.",
            avatar_url: "",
            skills: ["Estrategia", "Finanzas", "Innovación"],
            social_linkedin: "https://linkedin.com/in/andresarrieta",
            social_github: "",
            order: 1,
          },
          {
            id: "m2",
            full_name: "Lency Vitola",
            position: "Directora de Operaciones",
            bio: "Experta en procesos y gestión eficiente, asegura que cada proyecto alcance la excelencia.",
            avatar_url: "",
            skills: ["Gestión de proyectos", "Procesos", "Liderazgo"],
            social_linkedin: "https://linkedin.com/in/lencyvitola",
            social_github: "",
            order: 2,
          },
          {
            id: "m3",
            full_name: "Juan Pérez",
            position: "Desarrollador Full Stack",
            bio: "Apasionado por el código limpio, la arquitectura escalable y las soluciones innovadoras.",
            avatar_url: "",
            skills: ["React", "Node.js", "FastAPI"],
            social_linkedin: "https://linkedin.com/in/juanperezdev",
            social_github: "https://github.com/juanperezdev",
            order: 3,
          },
        ];
      },
    },

    /** ===========================
     *  ENTITY: PageSection
     *  =========================== */
    PageSection: {
      async list(page = "home") {
        // TODO: reemplazar por tu endpoint real
        // const res = await fetch(`/api/page-sections?page=${page}`);
        // return res.json();

        return [
          {
            id: "s1",
            title: "Innovación que transforma",
            subtitle: "Creamos soluciones que combinan IA, ingeniería y diseño.",
            content:
              "<p>En ALERNAL construimos herramientas tecnológicas que desafían los límites de lo posible.</p>",
            section_type: "hero",
            page: "home",
            order: 1,
            is_active: true,
            background_color: "#0a0f0d",
            image_url: "",
          },
          {
            id: "s2",
            title: "Soluciones inteligentes",
            subtitle: "Desde software hasta consultoría estratégica.",
            content:
              "<p>Nuestro portafolio abarca desde plataformas SaaS hasta capacitación empresarial, todo con un enfoque humano y sostenible.</p>",
            section_type: "features",
            page: "home",
            order: 2,
            is_active: true,
            background_color: "#121816",
            image_url: "",
          },
          {
            id: "s3",
            title: "Arquitectura del mañana",
            subtitle: "Cada línea de código cuenta.",
            content:
              "<p>Integrando talento, datos e inteligencia artificial para impulsar negocios del futuro.</p>",
            section_type: "cta",
            page: "home",
            order: 3,
            is_active: true,
            background_color: "#0a0f0d",
            image_url: "",
          },
        ];
      },
    },
  },
};
