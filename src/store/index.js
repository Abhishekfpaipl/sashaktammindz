import { createStore } from "vuex";
import pricing from "./pricing";

export default createStore({
  state: {
    faqs: [
      {
        id: 1,
        name: "POSH Policy and Implementation",
        plans: [
          {
            question: "Is it mandatory for me to have a policy against sexual harassment?",
            answer: "Yes"
          },
          {
            question: "How can I inform my employees about the policy?",
            answer: "You can inform your employees by circulating the policy via email, publishing it on the website or intranet, and displaying posters at conspicuous places in the workplace. Posters also help visitors become aware of the policy."
          },
          {
            question: "Is it mandatory for me to display a poster in my organization?",
            answer: "Yes, it is required by law to display information on the penal consequences of sexual harassment, details of the IC, and policy information at conspicuous places to ensure safety at the workplace."
          },
          {
            question: "My employees do not understand English, what do I do?",
            answer: "We have posters available in all Indian languages. You can choose the preferred language and customize other details like size and color."
          },
          {
            question: "Is it possible to have my organization’s logo on the poster?",
            answer: "Yes, you can add your organization's logo to the poster, along with other customizations like size and color."
          },
          {
            question: "Are there any samples?",
            answer: "Yes. Please contact us if you wish to see samples."
          },
          {
            question: "How do I pay for the posters?",
            answer: "We offer bank transfer, cash on delivery, and online payment options. Please choose the one suitable for you."
          },
          {
            question: "How can IC members handle complaints?",
            answer: "IC members should be trained on the law and complaint handling, including helping the complainant file a complaint, supporting them emotionally, informing the accused, and conducting inquiries."
          },
          {
            question: "The IC of my organization is not familiar with the procedure under law, what can I do?",
            answer: "You can arrange training for your IC on handling complaints."
          },
          {
            question: "Is it mandatory to conduct training for IC?",
            answer: "Yes"
          },
          {
            question: "How will I know that the training/workshop/seminar/awareness program was effective?",
            answer: "We offer several methods to ensure session effectiveness. For more details, please contact us."
          },
          {
            question: "Am I required to create awareness about prevention of sexual harassment amongst my employees?",
            answer: "Yes"
          },
          {
            question: "What is an IC?",
            answer: "An Internal Committee (IC) is an internal workplace committee to address complaints of sexual harassment. Employers with 10 or more employees must constitute an IC."
          },
          {
            question: "I have 10 employees, do I need to have an IC?",
            answer: "Yes"
          },
          {
            question: "I have 10 employees, none of whom are women, do I still need to have an IC?",
            answer: "Yes"
          },
          {
            question: "Who can be an External Member?",
            answer: "An External Member can be someone from an NGO or association dedicated to women's issues or familiar with sexual harassment matters."
          },
          {
            question: "Is there any fee for the External Member?",
            answer: "Yes, the External Member is entitled to an allowance of Rs. 200 per day and travel reimbursement."
          },
          {
            question: "What happens if I do not fulfil the duties prescribed under law?",
            answer: "Failure to meet the requirements, such as constituting an IC, can lead to penalties up to Rs. 50,000, doubling for repeat offenses, and possible license or registration cancellation."
          },
          {
            question: "Can I ask for legal advice from POSH at Work?",
            answer: "Yes. You can ask for a lawyer or submit a query through our platform."
          }
        ]
      },
      {
        id: 2,
        name: "POSH General Information",
        plans: [
          {
            question: "What is POSH policy?",
            answer: "The POSH Act 2013 was enacted to protect women from sexual harassment and provide a safe and secure work environment."
          },
          {
            question: "Is POSH training mandatory?",
            answer: "Yes, creating awareness on preventing sexual harassment is required by the POSH Act."
          },
          {
            question: "What is ICC in POSH?",
            answer: "ICC, now referred to as IC, is an Internal Committee to address complaints of sexual harassment, mandated for organizations with 10 or more employees."
          },
          {
            question: "What is the full form of POSH?",
            answer: "Prevention Of Sexual Harassment (POSH), aimed at creating a safe, harassment-free work environment."
          },
          {
            question: "What are examples of harassment?",
            answer: "Harassment includes actions like offering job benefits in exchange for sexual favors."
          },
          {
            question: "Why is POSH training important?",
            answer: "POSH training helps create awareness and a safe work environment."
          },
          {
            question: "What is the origin of POSH law in India?",
            answer: "POSH Law 2013 was India’s first legislation to specifically protect women from workplace sexual harassment."
          },
          {
            question: "What is POSH awareness?",
            answer: "POSH awareness educates employees on the POSH Act 2013 and helps prevent workplace harassment."
          },
          {
            question: "What is POSH law?",
            answer: "A law to protect women from workplace harassment and to ensure complaint redressal."
          },
          {
            question: "What is HR POSH?",
            answer: "The POSH Act aims to protect women from workplace harassment and ensure a secure work environment."
          },
          {
            question: "What is Quid Pro Quo harassment?",
            answer: "Quid Pro Quo harassment occurs when job benefits are offered in exchange for sexual favors, typically by someone in authority."
          },
          {
            question: "What kind of harassment is illegal?",
            answer: "Harassment based on race, age, sex, religion, national origin, disability, pregnancy, or marital status is illegal."
          },
          {
            question: "What defines harassment?",
            answer: "Harassment includes behavior that is offensive, affecting emotional and physical well-being, productivity, or relationships, leading to a toxic workplace."
          },
          {
            question: "Why is POSH important?",
            answer: "The POSH Act is vital for protecting women at work, ensuring a safe environment."
          },
          {
            question: "What is indirect harassment?",
            answer: "Indirect harassment involves offensive actions not directed at a person, like lewd jokes or images."
          },
          {
            question: "Who can file a complaint of sexual harassment at the workplace?",
            answer: "Any woman working in or visiting a workplace, whether as an employee, visitor, intern, or in another capacity, can file a complaint."
          }
        ]
      }

    ],
  },
  getters: {
    getFaqs: state => state.faqs,
  },
  mutations: {},
  actions: {},
  modules: {
    pricing: pricing,
  },
});
