export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  summary: string;
  proofPdf: string;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  year: string;
  summary: string;
  proofPdf: string;
};

export const educationHistory: EducationItem[] = [
  {
    degree: "S1 Teknik Komputer",
    institution: "Universitas Telkom",
    period: "2021 - 2025",
    gpa: "3.34 / 4.00",
    summary:
      "Fokus pada pengembangan web, rekayasa perangkat lunak, dan manajemen basis data melalui proyek akademik serta kolaborasi tim.",
    proofPdf: "/cv-diaz-abdi.pdf",
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "EPrT (English Proficiency Test)",
    issuer: "Telkom University Language Center",
    year: "2025",
    summary:
      "Tes kemampuan bahasa Inggris resmi yang dikembangkan oleh Telkom University Language Center untuk mengukur kecakapan berbahasa Inggris.",
    proofPdf: "/sertifikat_eprt.pdf",
  },
];
