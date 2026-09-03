import { createI18n } from 'vue-i18n'

const messages = {
    // English language
  en: {
    nav: {
      home: 'Home.vue',
      projects: 'Project.vue',
      skills: 'Skill.vue',
      about: 'About.vue',
      contact: 'Contact.vue'
    },
    hero: {
      name: 'Seng Somalen',
      location: 'Phnom Penh, Cambodia',
      headline: ['I build', 'interfaces that', 'feel inevitable.'],
      subhead: 'Frontend developer crafting fast, accessible web experiences with Vue, TypeScript, and Tailwind CSS.',
      btnWork: 'View my work',
      btnContact: 'Get in touch'
    },
    about: {
      title: 'About Me',
      bio: "Hi, I'm Seng Somalen, a 2nd-year Information Technology student majoring in Software Development at Norton University. Originally from Banteay Meanchey, I am passionate about Web Development and building modern web applications. My goal is to build efficient and user-friendly technology solutions.",
      education: 'Education',
      university: 'Norton University - Software Development',
      universityOld: 'DUC University Web Development',
      highSchool: 'Pkam High School (Graduated 2023)'
    },
    skills: {
      title: 'Skills & Technologies',
      languages: 'Languages',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      tools: 'Tools & Design'
    }
  },

    // Khmer Language
  kh: {
    nav: {
      home: 'ទំព័រដើម',
      projects: 'គម្រោង',
      skills: 'ជំនាញ',
      about: 'អំពីខ្ញុំ',
      contact: 'ទំនាក់ទំនង'
    },
    hero: {
      name: 'សេង សុម៉ាឡែន',
      location: 'រាជធានីភ្នំពេញ, កម្ពុជា',
      headline: ['ខ្ញុំបង្កើត', 'គេហទំព័រដែល', 'មានប្រសិទ្ធភាពខ្ពស់។'],
      subhead: 'អ្នកអភិវឌ្ឍន៍ Frontend ដែលបង្កើតបទពិសោធន៍ Web ឆាប់រហ័ស និងងាយស្រួលប្រើប្រាស់ជាមួយ Vue, TypeScript និង Tailwind CSS។',
      btnWork: 'មើលស្នាដៃខ្ញុំ',
      btnContact: 'ទាក់ទងខ្ញុំ'
    },
    about: {
      title: 'អំពីខ្ញុំ',
      bio: 'ខ្ញុំបាទឈ្មោះ សេង សុម៉ាឡែន ជានិស្សិតផ្នែក Software Development ឆ្នាំទី ២ នៅសាកលវិទ្យាល័យ ន័រតុន។ ខ្ញុំមានស្រុកកំណើតនៅខេត្តបន្ទាយមានជ័យ និងបានបញ្ចប់ការសិក្សានៅវិទ្យាល័យផ្គាំក្នុងឆ្នាំ ២០២៣។ ខ្ញុំមានចំណូលចិត្តខ្ពស់លើការអភិវឌ្ឍ Web Application ដោយប្រើប្រាស់បច្ចេកវិទ្យាទំំនើបៗ ដើម្បីបង្កើតនូវដំណោះស្រាយបច្ចេកវិទ្យាដែលមានប្រយោជន៍។',
      education: 'ការសិក្សា',
      university: 'សាកលវិទ្យាល័យ ន័រតុន - ជំនាញ Software Development (ឆ្នាំទី ២)',
      highSchool: 'វិទ្យាល័យផ្គាំ (បញ្ចប់ឆ្នាំ ២០២៣)'
    },
    skills: {
      title: 'ជំនាញ និងបច្ចេកវិទ្យា',
      languages: 'ភាសាសរសេរកូដ',
      frontend: 'ផ្នែកខាងមុខ (Frontend)',
      backend: 'ផ្នែកខាងក្រោយ (Backend)',
      database: 'ប្រព័ន្ធទិន្នន័យ (Database)',
      tools: 'ឧបករណ៍ និងការរចនា'
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem('user-lang') || 'en',
  fallbackLocale: 'en',
  messages
})