import { createStore } from "vuex";
import pricing from "./pricing";

export default createStore({
  state: {
    faqs: [
      {
        id: 109,
        name: "All",
        plans: [
          {
            question: "What services does your IT company provide?",
            answer: "Our IT company offers a range of services including software development, IT consulting, managed IT services, cloud solutions, cybersecurity, and technical support."
          },
          {
            question: "Where are you located?",
            answer: "Our headquarters are located in [City, Country]. We also have offices in [Other Locations]."
          },
          {
            question: "How long have you been in business?",
            answer: "We have been providing IT services since [Year]."
          },
          {
            question: "Who are your typical clients?",
            answer: "Our clients range from small businesses to large enterprises across various industries such as finance, healthcare, education, and retail."
          },
          {
            question: "What is managed IT services?",
            answer: "Managed IT services involve outsourcing your company's IT operations to a third-party service provider, who manages and assumes responsibility for providing a defined set of services."
          },
          {
            question: "What software development services do you offer?",
            answer: "We offer custom software development, mobile app development, web application development, and software maintenance and support."
          },
          {
            question: "Can you help with cloud migration?",
            answer: "Yes, we provide comprehensive cloud migration services including planning, execution, and ongoing management."
          },
          {
            question: "What kind of cybersecurity services do you offer?",
            answer: "Our cybersecurity services include vulnerability assessments, penetration testing, security audits, and incident response."
          },
          {
            question: "What kind of technical support do you offer?",
            answer: "We offer 24/7 technical support through various channels including phone, email, and live chat."
          },
          {
            question: "How quickly can you respond to support requests?",
            answer: "Our response times vary based on the service level agreement (SLA) but we strive to respond to all critical issues within [X] hours."
          },
          {
            question: "Do you provide on-site support?",
            answer: "Yes, we offer on-site support services as needed, in addition to remote support."
          },
          {
            question: "What is your process for handling IT issues?",
            answer: "Our process includes logging the issue, assessing its severity, assigning it to a specialist, and resolving it promptly. We also follow up to ensure complete resolution."
          },
          {
            question: "How do you price your services?",
            answer: "Our pricing depends on the type of service and the specific needs of the client. We offer both fixed-price and flexible pricing models."
          },
          {
            question: "Do you offer service packages?",
            answer: "Yes, we offer several service packages tailored to different business needs and sizes."
          },
          {
            question: "Is there a long-term contract required?",
            answer: "We offer both short-term and long-term contract options based on client preferences."
          },
          {
            question: "Can I customize my service package?",
            answer: "Absolutely, we can customize service packages to fit your specific business requirements."
          },
          {
            question: "How do I get started with your services?",
            answer: "You can get started by contacting us through our website, phone, or email. We will arrange an initial consultation to understand your needs."
          },
          {
            question: "What is the onboarding process like?",
            answer: "Our onboarding process includes an initial consultation, needs assessment, proposal presentation, contract signing, and project kickoff."
          },
          {
            question: "Do you offer a trial period for your services?",
            answer: "Yes, we offer a trial period for certain services. Please contact us for more details."
          },
          {
            question: "How do you ensure a smooth transition to your services?",
            answer: "We have a dedicated onboarding team that works closely with new clients to ensure a smooth transition, including data migration, training, and ongoing support."
          },
          {
            question: "What technologies do you specialize in?",
            answer: "We specialize in a wide range of technologies including [List of Technologies, e.g., Java, Python, .NET, AWS, Azure, etc.]."
          },
          {
            question: "How do you handle data security and privacy?",
            answer: "We follow industry best practices and comply with relevant regulations to ensure data security and privacy, including encryption, access controls, and regular security audits."
          },
          {
            question: "Can you integrate with our existing systems?",
            answer: "Yes, we have extensive experience integrating new solutions with existing systems to ensure seamless operation."
          },
          {
            question: "What is your approach to software development?",
            answer: "We follow agile methodologies to ensure iterative progress, flexibility, and client collaboration throughout the development process."
          },
          {
            question: "Do you require an NDA before starting a project?",
            answer: "Yes, we typically require a Non-Disclosure Agreement (NDA) to protect the confidentiality of both parties' information before commencing a project."
          },
          {
            question: "What is included in your NDA?",
            answer: "Our NDA includes clauses that ensure the confidentiality of shared information, outlines the obligations of both parties, and specifies the duration of the confidentiality agreement."
          },
          {
            question: "Can we use our own NDA?",
            answer: "Yes, we are open to reviewing and using your company's NDA, provided it meets our standards for confidentiality and mutual protection."
          },
          {
            question: "How long does the NDA remain in effect?",
            answer: "The NDA remains in effect for the duration specified in the agreement, typically ranging from one to five years, depending on the nature of the project and the information involved."
          },
          {
            question: "How can I contact your support team?",
            answer: "You can contact our support team via phone, email, or live chat available on our website."
          },
          {
            question: "What are your support hours?",
            answer: "Our support hours are 24/7, ensuring assistance is available whenever you need it."
          },
          {
            question: "Where can I find documentation and resources?",
            answer: "Documentation and resources can be found in the client portal on our website."
          },
          {
            question: "How do I provide feedback on your services?",
            answer: "We welcome feedback and you can provide it through our website, by email, or during regular client meetings."
          },
        ]
      },
      {
        id: 1,
        name: "General Information",
        plans: [
          {
            question: "What services does your IT company provide?",
            answer: "Our IT company offers a range of services including software development, IT consulting, managed IT services, cloud solutions, cybersecurity, and technical support."
          },
          {
            question: "Where are you located?",
            answer: "Our headquarters are located in [City, Country]. We also have offices in [Other Locations]."
          },
          {
            question: "How long have you been in business?",
            answer: "We have been providing IT services since [Year]."
          },
          {
            question: "Who are your typical clients?",
            answer: "Our clients range from small businesses to large enterprises across various industries such as finance, healthcare, education, and retail."
          }
        ]
      },
      {
        id: 2,
        name: "Services",
        plans: [
          {
            question: "What is managed IT services?",
            answer: "Managed IT services involve outsourcing your company's IT operations to a third-party service provider, who manages and assumes responsibility for providing a defined set of services."
          },
          {
            question: "What software development services do you offer?",
            answer: "We offer custom software development, mobile app development, web application development, and software maintenance and support."
          },
          {
            question: "Can you help with cloud migration?",
            answer: "Yes, we provide comprehensive cloud migration services including planning, execution, and ongoing management."
          },
          {
            question: "What kind of cybersecurity services do you offer?",
            answer: "Our cybersecurity services include vulnerability assessments, penetration testing, security audits, and incident response."
          }
        ]
      },
      {
        id: 3,
        name: "Support and Maintenance",
        plans: [
          {
            question: "What kind of technical support do you offer?",
            answer: "We offer 24/7 technical support through various channels including phone, email, and live chat."
          },
          {
            question: "How quickly can you respond to support requests?",
            answer: "Our response times vary based on the service level agreement (SLA) but we strive to respond to all critical issues within [X] hours."
          },
          {
            question: "Do you provide on-site support?",
            answer: "Yes, we offer on-site support services as needed, in addition to remote support."
          },
          {
            question: "What is your process for handling IT issues?",
            answer: "Our process includes logging the issue, assessing its severity, assigning it to a specialist, and resolving it promptly. We also follow up to ensure complete resolution."
          }
        ]
      },
      {
        id: 4,
        name: "Pricing and Contracts",
        plans: [
          {
            question: "How do you price your services?",
            answer: "Our pricing depends on the type of service and the specific needs of the client. We offer both fixed-price and flexible pricing models."
          },
          {
            question: "Do you offer service packages?",
            answer: "Yes, we offer several service packages tailored to different business needs and sizes."
          },
          {
            question: "Is there a long-term contract required?",
            answer: "We offer both short-term and long-term contract options based on client preferences."
          },
          {
            question: "Can I customize my service package?",
            answer: "Absolutely, we can customize service packages to fit your specific business requirements."
          }
        ]
      },
      {
        id: 5,
        name: "Client Onboarding",
        plans: [
          {
            question: "How do I get started with your services?",
            answer: "You can get started by contacting us through our website, phone, or email. We will arrange an initial consultation to understand your needs."
          },
          {
            question: "What is the onboarding process like?",
            answer: "Our onboarding process includes an initial consultation, needs assessment, proposal presentation, contract signing, and project kickoff."
          },
          {
            question: "Do you offer a trial period for your services?",
            answer: "Yes, we offer a trial period for certain services. Please contact us for more details."
          },
          {
            question: "How do you ensure a smooth transition to your services?",
            answer: "We have a dedicated onboarding team that works closely with new clients to ensure a smooth transition, including data migration, training, and ongoing support."
          }
        ]
      },
      {
        id: 6,
        name: "Technical Questions",
        plans: [
          {
            question: "What technologies do you specialize in?",
            answer: "We specialize in a wide range of technologies including [List of Technologies, e.g., Java, Python, .NET, AWS, Azure, etc.]."
          },
          {
            question: "How do you handle data security and privacy?",
            answer: "We follow industry best practices and comply with relevant regulations to ensure data security and privacy, including encryption, access controls, and regular security audits."
          },
          {
            question: "Can you integrate with our existing systems?",
            answer: "Yes, we have extensive experience integrating new solutions with existing systems to ensure seamless operation."
          },
          {
            question: "What is your approach to software development?",
            answer: "We follow agile methodologies to ensure iterative progress, flexibility, and client collaboration throughout the development process."
          }
        ]
      },
      {
        id: 7,
        name: "Non-Disclosure Agreement (NDA)",
        plans: [
          {
            question: "Do you require an NDA before starting a project?",
            answer: "Yes, we typically require a Non-Disclosure Agreement (NDA) to protect the confidentiality of both parties' information before commencing a project."
          },
          {
            question: "What is included in your NDA?",
            answer: "Our NDA includes clauses that ensure the confidentiality of shared information, outlines the obligations of both parties, and specifies the duration of the confidentiality agreement."
          },
          {
            question: "Can we use our own NDA?",
            answer: "Yes, we are open to reviewing and using your company's NDA, provided it meets our standards for confidentiality and mutual protection."
          },
          {
            question: "How long does the NDA remain in effect?",
            answer: "The NDA remains in effect for the duration specified in the agreement, typically ranging from one to five years, depending on the nature of the project and the information involved."
          }
        ]
      },
      {
        id: 8,
        name: "Contact and Support",
        plans: [
          {
            question: "How can I contact your support team?",
            answer: "You can contact our support team via phone, email, or live chat available on our website."
          },
          {
            question: "What are your support hours?",
            answer: "Our support hours are 24/7, ensuring assistance is available whenever you need it."
          },
          {
            question: "Where can I find documentation and resources?",
            answer: "Documentation and resources can be found in the client portal on our website."
          },
          {
            question: "How do I provide feedback on your services?",
            answer: "We welcome feedback and you can provide it through our website, by email, or during regular client meetings."
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
