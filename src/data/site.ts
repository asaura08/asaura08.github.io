export type Lang = "es" | "en";
export const ids = [
  "hosting",
  "galera",
  "open-source",
  "gitops",
  "clinics",
  "disclosure",
  "marketplace",
  "invoices",
  "crm",
  "mail",
  "elk",
  "dns",
  "vision",
  "xss",
  "patas",
  "recon",
];
export const navigation = {
  es: ["Inicio", "Proyectos", "Open Source", "Sobre mí", "Contacto"],
  en: ["Home", "Projects", "Open Source", "About", "Contact"],
};
export const sections = ["home", "projects", "open-source", "about", "contact"];
export const areas = [
  "Backend / SaaS",
  "Platform / DevOps",
  "Security",
  "Automation",
  "Open Source",
];
export const categories = [
  [0, 1],
  [1],
  [4],
  [1, 3],
  [0, 2],
  [2],
  [0],
  [3],
  [3],
  [1],
  [2, 1],
  [2],
  [3],
  [2],
  [0],
  [0, 2],
];
export const stack = [
  "Python · Frappe Press · Agent · Docker · Nginx",
  "MariaDB Galera · MaxScale · Kubernetes · Longhorn",
  "Python · JavaScript · Git",
  "K3s · Rancher · Argo CD · Kargo · Helm · Grafana",
  "Frappe · MariaDB · REST · RBAC",
  "Product Security · INCIBE-CERT",
  "B2B · SaaS",
  "Stalwart · IMAP · Invoice Ninja",
  "n8n · Frappe CRM",
  "Stalwart · Frappe Mail",
  "Elastic Stack · Suricata",
  "Python · DNS",
  "Computer Vision · NVIDIA Tesla P4",
  "PHP · Web Security",
  "Nuxt · PostgreSQL · SSE",
  "FastAPI · React · PostgreSQL",
];
export const github = "https://github.com/asaura08";
export const linkedin = "https://www.linkedin.com/in/alfonso-s-0585b2176";
export const htbLabs = "https://app.hackthebox.com/public/users/297526";
export const cwesCertificate = "https://profile.hackthebox.com/profile/019dba2b-0e3c-7166-a99d-f867d0e219a4/certificate/HTBCERT-AAFE49B023";
export const prs = [
  [
    "press",
    2693,
    "Compatibilidad de imports",
    "Import compatibility",
    "Corregí la importación de _check_multicommand.",
    "Fixed the import of _check_multicommand.",
  ],
  [
    "press",
    2613,
    "Registro de deadlocks",
    "Deadlock logging",
    "Corregí una referencia incorrecta a private_ip.",
    "Corrected an invalid private_ip reference.",
  ],
  [
    "agent",
    198,
    "Inicialización del proxy",
    "Proxy initialization",
    "Corregí el acceso a _config_file_lock durante la inicialización.",
    "Fixed access to _config_file_lock during initialization.",
  ],
  [
    "builder",
    507,
    "Sincronización de archivos",
    "File synchronization",
    "Sincronicé los archivos al renombrar o eliminar páginas y scripts.",
    "Kept source files in sync when pages or scripts are renamed or deleted.",
  ],
  [
    "frappe",
    36938,
    "Actualización de la API de resaltado",
    "Highlighting API update",
    "Sustituí la llamada obsoleta a initHighlighting.",
    "Replaced the deprecated initHighlighting call.",
  ],
  [
    "mail",
    340,
    "Configuración de Redis",
    "Redis configuration",
    "Corregí el host de Redis en el script de inicialización.",
    "Corrected the Redis host in the initialization script.",
  ],
  [
    "helpdesk",
    2842,
    "Sincronización de correo",
    "Email synchronization",
    "Corregí el campo usado para recuperar mensajes entrantes.",
    "Corrected the field used to retrieve incoming messages.",
  ],
] as const;
export function segment(id: string, l: Lang) {
  const pages: Record<string, string> = {
    home: "",
    projects: l === "es" ? "proyectos" : "projects",
    about: l === "es" ? "sobre-mi" : "about",
    contact: l === "es" ? "contacto" : "contact",
    "open-source": "open-source",
  };
  return pages[id] ?? pages.projects + "/" + id;
}
export const pages = [...new Set([...sections.filter((id) => id !== "contact"), ...ids])];

export const projectStatus: Record<string, [string, string]> = {
  hosting: ["Operado en producción", "Previously in production"],
  galera: ["Implementado y probado", "Implemented and tested"],
  "open-source": ["Contribuciones fusionadas", "Merged contributions"],
  gitops: ["Infraestructura operada", "Previously operated infrastructure"],
  clinics: [
    "Producto desarrollado, sin comercializar",
    "Developed, pre-commercial product",
  ],
  disclosure: ["Reportado y escalado", "Reported and escalated"],
  marketplace: ["Participación en desarrollo", "Development contribution"],
  invoices: ["Flujo implementado", "Implemented workflow"],
  crm: ["Integración interna", "Internal integration"],
  mail: ["Servicio operado", "Previously operated service"],
  elk: ["Laboratorio reproducible", "Reproducible lab"],
  dns: ["Herramienta pública", "Public utility"],
  vision: ["Experimento local", "Local experiment"],
  xss: ["Laboratorio didáctico", "Teaching lab"],
  patas: ["En desarrollo", "In development"],
  recon: ["Herramienta propia", "Personal engineering project"],
};
