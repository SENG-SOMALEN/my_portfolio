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
      headline: ['I build', 'scalable full-stack', 'web applications.'],
      subhead: 'Full Stack Developer crafting fast, responsive, and reliable web applications with Vue 3, Laravel, PHP, and MySQL.',
      btnWork: 'View my work',
      btnContact: 'Get in touch'
    },
    about: {
      title: 'About Me',
      bio: "Hi, I'm Seng Somalen, a 3rd-year Software Development student at Norton University. With hands-on experience as a Frontend Developer Intern and a strong foundation in Vue 3, Laravel, TypeScript, and MySQL, I specialize in building responsive, efficient, and user-friendly web applications. I am passionate about solving real-world problems and continuously growing as a Full Stack Developer.",
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
      bio: 'ជម្រាបសួរ ខ្ញុំបាទឈ្មោះ សេង សុម៉ាឡែន ជានិស្សិតទី ៣ ជំនាញអភិវឌ្ឍន៍សូហ្វវែរ (Software Development) នៅសាកលវិទ្យាល័យ ន័រតុន។ ជាមួយនឹងបទពិសោធន៍ផ្ទាល់ដៃជា Frontend Developer Intern និងមានគ្រឹះយ៉ាងរឹងមាំលើ Vue 3, Laravel, TypeScript, និង MySQL ខ្ញុំមានជំនាញក្នុងការបង្កើតកម្មវិធីវេបសាយដែលមានភាពរហ័សរហួន ប្រសិទ្ធភាព និងងាយស្រួលប្រើប្រាស់។ ខ្ញុំមានឆន្ទៈយ៉ាងមុតមាំក្នុងការដោះស្រាយបញ្ហាក្នុងពិភពពិត និងអភិវឌ្ឍសមត្ថភាពខ្លួនឯងជាបន្តបន្ទាប់ដើម្បីក្លាយជា Full Stack Developer។',
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