import { createStore } from "vuex";

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
      },
      {
        id: 3,
        name: "POCSO Act Overview",
        plans: [
          {
            "question": "What is the POCSO Act?",
            "answer": "The Protection of Children from Sexual Offences (POCSO) Act, 2012, is a comprehensive law to protect children from sexual assault, sexual harassment, and pornography, while safeguarding the interests of the child at every stage of the judicial process."
          },
          {
            "question": "What is the age limit under the POCSO Act?",
            "answer": "The POCSO Act applies to offenses committed against any child under the age of 18 years."
          },
          {
            "question": "Is the POCSO Act gender-neutral?",
            "answer": "Yes, the POCSO Act is gender-neutral and applies to any child under the age of 18, irrespective of gender."
          },
          {
            "question": "What are the main offenses under the POCSO Act?",
            "answer": "The main offenses under the POCSO Act include penetrative sexual assault, aggravated penetrative sexual assault, sexual assault, aggravated sexual assault, and sexual harassment of children."
          },
          {
            "question": "What are the penalties under the POCSO Act?",
            "answer": "The penalties vary by offense, with serious offenses like aggravated penetrative sexual assault punishable by life imprisonment or even death, while other offenses may have penalties of up to 5-7 years of imprisonment and fines."
          }
        ]
      },
      {
        id: 4,
        name: "POCSO Reporting and Legal Procedures",
        plans: [
          {
            "question": "How can one report a POCSO offense?",
            "answer": "Anyone can report a POCSO offense to the police, Child Welfare Committee, or Special Juvenile Police Unit. The report can be made verbally or in writing, and mandatory reporting is required by law."
          },
          {
            "question": "Is it mandatory to report POCSO cases?",
            "answer": "Yes, reporting of POCSO cases is mandatory under the law, and failure to report a case can result in legal consequences."
          },
          {
            "question": "What are the child-friendly procedures under POCSO?",
            "answer": "The POCSO Act mandates child-friendly procedures such as recording the statement of the child in safe spaces, avoiding contact with the accused, and providing support from professionals during investigations."
          },
          {
            "question": "Can a child be cross-examined during trial?",
            "answer": "The POCSO Act restricts direct cross-examination of a child by the accused or defense lawyer to ensure a comfortable environment for the child."
          },
          {
            "question": "Who conducts the trial under the POCSO Act?",
            "answer": "The trial is conducted by Special Courts designated for POCSO cases to ensure speedy and sensitive handling of cases involving child victims."
          }
        ]
      },
      {
        id: 5,
        name: "POCSO Protection and Rehabilitation",
        plans: [
          {
            "question": "What protection is provided to victims under the POCSO Act?",
            "answer": "The Act provides protection to the victim and family, including confidentiality of identity, support services, and protection from intimidation by the accused."
          },
          {
            "question": "What rehabilitation services are available for victims?",
            "answer": "Victims are entitled to counseling, medical care, and rehabilitation services, provided by Child Welfare Committees and NGOs to aid in their recovery."
          },
          {
            "question": "Is there financial compensation for POCSO victims?",
            "answer": "Yes, the victim or family can seek compensation through legal provisions or victim compensation schemes for rehabilitation and medical expenses."
          },
          {
            "question": "How does POCSO ensure victim confidentiality?",
            "answer": "Under the POCSO Act, disclosure of a child’s identity in the media or any public forum is strictly prohibited, and violators are subject to penalties."
          }
        ]
      },
      {
        id: 6,
        name: "POCSO Awareness and Training",
        plans: [
          {
            "question": "Why is POCSO Act awareness important?",
            "answer": "Awareness is crucial to prevent child sexual abuse, ensure reporting of cases, and educate the public on safeguarding children’s rights and welfare."
          },
          {
            "question": "Is POCSO training mandatory for schools?",
            "answer": "Yes, many states mandate that schools and educational institutions provide POCSO training for staff and students to help prevent and report abuse."
          },
          {
            "question": "What is the role of NGOs in POCSO awareness?",
            "answer": "NGOs play a vital role in spreading awareness, providing training, and assisting victims with support and rehabilitation under the POCSO Act."
          },
          {
            "question": "How can I access POCSO resources?",
            "answer": "You can access resources through government websites, Childline India, NGOs, and local child welfare offices for materials on child protection and POCSO law."
          }
        ]
      }
    ],
    profiles: [
      {
        name: 'Adv Noopur Singhal',
        sid: 'adv-noopur-singhal',
        role: 'Founder @ Shashaktam Mindz',
        pronouns: 'She/Her',
        image: '/img/owner.png',
        linkedin: '#',
        email: 'contact@example.com',
        titles: [
          "Adv. Noopur Singhal is the founder of the firm and Principal Consultant.",
          "Practicing advocate in New Delhi since 2007.",
          "Panel advocate with Government of Haryana.",
          "Three times Chairperson of Local Committee, New Delhi District, New Delhi",
          "State President of Uttar Pradesh Anti-Sexual Harassment Council with Women’s Indian Chamber of Commerce and Industry(WICCI)",
          "Chairperson of the Internal Committee and",
          "Currently empaneled as an External member of the Internal",
          "Committee-POSH with various corporates.",
        ],
        description: 'Established in January, 2022, सshaktaम्Mindz is a young and dynamic firm to provide Consultancy and Trainings to Organizations and Individuals on Anti-Sexual Harassment Laws - The Sexual Harassment of Women at Workplace (Prevention, Prohibition & Redressal) Act, 2013 and The Protection of Children from Sexual Offences, 2012.',
        statistics: [
          {
            "value": "1500",
            "description": "Organizations assisted with POSH compliance"
          },
          {
            "value": "150",
            "description": "Served as IC external member"
          },
          {
            "value": "500",
            "description": "Legal opinions issued"
          },
          {
            "value": "800",
            "description": "Complaints resolved"
          }
        ]
        ,
      },
      {
        name: 'Adv. Namrata Mishra',
        sid: 'adv-namrata-mishra',
        role: 'Founder @ Shashaktam Mindz',
        pronouns: 'She/Her',
        image: '/img/owner2.png',
        linkedin: '#',
        email: 'contact@example.com',
        titles: [
          "POCSO Trainer with सshaktaम्Mindz",
          "Practicing advocate with experience of 20 years",
          "President of Indian Lawyers Association, Agra Chapter",
          "State Vice-President of Uttar Pradesh Anti-Sexual Harassment Council with (WICCI), ",
          "Acclaimed POCSO Lawyer and Child Protection Activist",
          "Founder of Laws Around Us",
          "Founder of ‘We Against Child Abuse’ – An online community",
          "Conducted 600+ workshops and training programs attended by approximately 3 lakhs students across nation and 10,000 educators",
          "Counsellor with 1090 Women Helpline with Uttar Pradesh Police and UNICEF",
          "Conferred with ‘Global Goodwill Ambassador’ Award from USA and Rex Karamveer Chakra award instituted by UN in 2019"
        ],
        description: 'Established in January, 2022, सshaktaम्Mindz is a young and dynamic firm to provide Consultancy and Trainings to Organizations and Individuals on Anti-Sexual Harassment Laws - The Sexual Harassment of Women at Workplace (Prevention, Prohibition & Redressal) Act, 2013 and The Protection of Children from Sexual Offences, 2012.',
        statistics: [
          {
            "value": "1500",
            "description": "Organizations assisted with POSH compliance"
          },
          {
            "value": "150",
            "description": "Served as IC external member"
          },
          {
            "value": "500",
            "description": "Legal opinions issued"
          },
          {
            "value": "800",
            "description": "Complaints resolved"
          }
        ]
        ,
      },
    ],
    services: [
      {
        "title": "Setting Up of POSH Infrastructure",
        "description": "We help establish a compliant POSH (Prevention of Sexual Harassment) infrastructure within your organization. This includes drafting policies, creating awareness, and forming an internal committee to handle complaints effectively.",
        "sid": "setting-up-of-posh-infrastructure",
        type: "posh",
        "image": "/img/setup.png",
        "points": [
          "Drafting customized Policy / Review of existing policy to ensure that they are in line with the POSH Act, 2013 and also as per the organizational structure.",
          "Creation of Awareness Posters for workplace.",
          "Formation of Internal Committee – Provide guidance to select right persons to be members of Internal Committee and Documentation to be followed."
        ],
        services: [
          {
            id: 1,
            icon: 'bi-person-check',
            title: 'Employee Empowerment',
            description: 'Employee POSH Training'
          },
          {
            id: 2,
            icon: 'bi-people-fill',
            title: 'Committee Proficiency',
            description: 'POSH Committee Training'
          },
          {
            id: 3,
            icon: 'bi-gear-wide-connected',
            title: 'External Ally Inclusion',
            description: 'External Member Empanelment for POSH'
          },
          {
            id: 4,
            icon: 'bi-shield-check',
            title: 'Documentation Assurance',
            description: 'Ensuring POSH Compliance'
          }
        ]
      },
      {
        "title": "Trainings and Skill Building under the POSH Act 2013",
        "description": "We provide various training and skill-building programs under the POSH Act, 2013, including employee awareness, internal committee workshops, and leadership training to ensure a harassment-free workplace.",
        "sid": "trainings-and-skill-building-under-posh-act-2013",
        type: "posh",
        "image": "/img/traningPosh.png",
        "points": [
          "Trainings/Awareness sessions for Employees.",
          "Capability Building Workshop for Members of Internal Committee.",
          "Train the Trainer.",
          "Cyber safety training for online sexual harassment.",
          "Leadership awareness session for Top Management and HR.",
          "Active Bystander Training."
        ],
        services: [
          {
            id: 1,
            icon: 'bi-person-check',
            title: 'Employee Empowerment',
            description: 'Employee POSH Training'
          },
          {
            id: 2,
            icon: 'bi-people-fill',
            title: 'Committee Proficiency',
            description: 'POSH Committee Training'
          },
          {
            id: 3,
            icon: 'bi-gear-wide-connected',
            title: 'External Ally Inclusion',
            description: 'External Member Empanelment for POSH'
          },
          {
            id: 4,
            icon: 'bi-shield-check',
            title: 'Documentation Assurance',
            description: 'Ensuring POSH Compliance'
          }
        ]
      },
      {
        "title": "Empanelment and Complaint Handling under the POSH Act, 2012",
        "description": "We provide assistance with the empanelment of external members in the internal committee and handle complaints related to sexual harassment, including conducting inquiries and preparing reports.",
        "sid": "empanelment-and-complaint-handling-under-posh-act-2012",
        type: "posh",
        "image": "/img/complaint.png",
        "points": [
          "Empanelment as an External Member in the Internal Committee, as per provisions of Act.",
          "Empanelment as Presiding Officer of Internal Committee where there is no woman employee at senior level management.",
          "Providing assistance in preparing and submitting PoSH Annual Reports.",
          "Monitor functioning of Internal Committee, ensure meetings held on timely basis and got documented as per Act.",
          "Redressal of Complaints, Conducting Inquiry and Report Writing."
        ],
        services: [
          {
            id: 1,
            icon: 'bi-person-check',
            title: 'Employee Empowerment',
            description: 'Employee POSH Training'
          },
          {
            id: 2,
            icon: 'bi-people-fill',
            title: 'Committee Proficiency',
            description: 'POSH Committee Training'
          },
          {
            id: 3,
            icon: 'bi-gear-wide-connected',
            title: 'External Ally Inclusion',
            description: 'External Member Empanelment for POSH'
          },
          {
            id: 4,
            icon: 'bi-shield-check',
            title: 'Documentation Assurance',
            description: 'Ensuring POSH Compliance'
          }
        ]
      },
      {
        "title": "POSH Audit",
        "description": "We conduct a comprehensive POSH audit to ensure your organization's compliance with the POSH Act, review current practices, and assess employee awareness to make the workplace safer.",
        "sid": "posh-audit",
        type: "posh",
        "image": "/img/poshAudit.png",
        "points": [
          "Organization’s compliance to the POSH Act, 2013.",
          "Review of current practices followed and best practices to be adopted to make workplace safer.",
          "Awareness level of employees and staff with respect to POSH law.",
          "Audit of POSH Policy of organization.",
          "Audit of contracts for POSH compliance.",
          "Readiness of Organization to provide information and handle POSH inspections as provided under Section 25 of POSH Act."
        ],
        services: [
          {
            id: 1,
            icon: 'bi-person-check',
            title: 'Employee Empowerment',
            description: 'Employee POSH Training'
          },
          {
            id: 2,
            icon: 'bi-people-fill',
            title: 'Committee Proficiency',
            description: 'POSH Committee Training'
          },
          {
            id: 3,
            icon: 'bi-gear-wide-connected',
            title: 'External Ally Inclusion',
            description: 'External Member Empanelment for POSH'
          },
          {
            id: 4,
            icon: 'bi-shield-check',
            title: 'Documentation Assurance',
            description: 'Ensuring POSH Compliance'
          }
        ]
      },
      {
        "title": "POSCO Setup",
        "description": "We help institutions set up a child protection policy as per the POCSO Act (Protection of Children from Sexual Offences), ensuring safe and compliant environments for children.",
        "sid": "posco-setup",
        type: "posco",
        "image": "/img/setup.png",
        "points": [
          "Drafting Child Protection Policy for schools."
        ],
        services: [
          {
            id: 1,
            icon: 'bi-person-check',
            title: 'Employee Empowerment',
            description: 'Employee POSH Training'
          },
          {
            id: 2,
            icon: 'bi-people-fill',
            title: 'Committee Proficiency',
            description: 'POSH Committee Training'
          },
          {
            id: 3,
            icon: 'bi-gear-wide-connected',
            title: 'External Ally Inclusion',
            description: 'External Member Empanelment for POSH'
          },
          {
            id: 4,
            icon: 'bi-shield-check',
            title: 'Documentation Assurance',
            description: 'Ensuring POSH Compliance'
          }
        ]
      },
      {
        "title": "Trainings under the POCSO Act, 2012",
        "description": "We offer a variety of training programs under the POCSO Act, 2012, including child protection workshops, awareness sessions for staff and children, and training for school leaders and educators.",
        "sid": "trainings-under-the-pocso-act-2012",
        type: "posco",
        "image": "/img/traningPosco.png",
        "points": [
          "Awareness session for kids about ‘Safe-Unsafe and Confusing Touch.",
          "Train the Trainer.",
          "Age appropriate Child Sexual Abuse/ Online Sexual Abuse prevention workshop.",
          "Awareness training for support staff, admin staff, drivers, helpers in schools and all other organizations which are visited by children.",
          "Trainings/Awareness sessions for Educators & School Leaders.",
          "Compliance Training for Child Protection Committee Members."
        ],
        services: [
          {
            id: 1,
            icon: 'bi-person-check',
            title: 'Employee Empowerment',
            description: 'Employee POSH Training'
          },
          {
            id: 2,
            icon: 'bi-people-fill',
            title: 'Committee Proficiency',
            description: 'POSH Committee Training'
          },
          {
            id: 3,
            icon: 'bi-gear-wide-connected',
            title: 'External Ally Inclusion',
            description: 'External Member Empanelment for POSH'
          },
          {
            id: 4,
            icon: 'bi-shield-check',
            title: 'Documentation Assurance',
            description: 'Ensuring POSH Compliance'
          }
        ]
      },
      {
        "title": "POSCO Audit",
        "description": "Our POSCO audit ensures compliance with the POCSO Act, 2012, and assesses practices in schools and institutions to safeguard children from abuse and exploitation.",
        "sid": "posco-audit",
        type: "posco",
        "image": "/img/poscoAudit.png",
        "points": [
          "Institution's compliance to POCSO Act, 2012 and POCSO Rules 2020.",
          "Review of protocol followed and adoption of best practices in the school/college/educational institution in pursuance of POCSO law.",
          "Awareness level of Educators, Child Protection Committee, and Support staff.",
          "Audit of Child Protection Policy adopted by the institution.",
          "Audit of forms/contracts signed by the third party contractual employees in compliance of POCSO law.",
          "Audit of Police Verification Record of Support Staff/employees.",
          "Physical Inspection of the premises."
        ],
        services: [
          {
            id: 1,
            icon: 'bi-person-check',
            title: 'Employee Empowerment',
            description: 'Employee POSH Training'
          },
          {
            id: 2,
            icon: 'bi-people-fill',
            title: 'Committee Proficiency',
            description: 'POSH Committee Training'
          },
          {
            id: 3,
            icon: 'bi-gear-wide-connected',
            title: 'External Ally Inclusion',
            description: 'External Member Empanelment for POSH'
          },
          {
            id: 4,
            icon: 'bi-shield-check',
            title: 'Documentation Assurance',
            description: 'Ensuring POSH Compliance'
          }
        ]
      }
    ],
    tabs: [
      { id: 'all', name: 'All Posts' },
      { id: 'blog', name: 'Blog' },
      { id: 'events', name: 'Events' },
      { id: 'courses', name: 'POSH Courses' },
      { id: 'training', name: 'POSH Training' }
    ],
    posts: [
      {
        id: 1,
        title: 'Corporate Growth-Vs-PoSH Compliance a Catch22',
        sid: "corporate-growth-vs-posh-compliance-a-catch22",
        date: '01/10/2024',
        comments: 2,
        image: 'https://www.nomeansno.in/wp-content/uploads/2024/10/catch22-in-poshact.jpg',
        description: "Ultimately, creating a safe and inclusive workplace requires more than compliance. It's about making an ongoing effort to build a...",
        category: 'blog'
      },
      {
        id: 2,
        title: 'Breaking the Binary: Expanding POSH to Foster True Diversity & Inclusion',
        sid: "breaking-the-binary-expanding-posh-to-foster-true-diversity-inclusion",
        date: '24/09/2024',
        comments: 0,
        image: 'https://www.nomeansno.in/wp-content/uploads/2024/09/PoSH-FosteringDI.jpg',
        description: "Let's start now.Let's create workplaces where everyone—regardless of gender, background, or identity—feels safe and empowered. Let's make sure our...",
        category: 'blog'
      },
      {
        id: 3,
        title: 'Debunking the Fear of Malicious Complaints under PoSH Act.',
        sid: "debunking-the-fear-of-malicious-complaints-under-posh-act",
        date: '21/09/2024',
        comments: 0,
        image: 'https://www.nomeansno.in/wp-content/uploads/2024/09/Malicious-Complaints-Under-PoSH-Act.jpg',
        description: "The fear of malicious complaints shouldn't deter you from doing your job.Equip yourself with the right knowledge through POSH...",
        category: 'training'
      },
      {
        id: 4,
        title: 'The Legal Intrusion in POSH: When Redressal Becomes a Battle',
        sid: "the-legal-intrusion-in-posh",
        date: '27/08/2024',
        comments: 2,
        image: 'https://www.nomeansno.in/wp-content/uploads/2024/08/legal-intrusion-in-posh.jpg',
        description: 'The author expresses concern over how these tactics complicate the core objective of the PoSH Act, which is to ensure...',
        category: 'courses'
      },
      {
        id: 5,
        title: 'Power of Speaking Up in the Corporate Jungle',
        sid: "power-of-speaking-up-in-the-corporate-jungle",
        date: '17/08/2024',
        comments: 0,
        image: 'https://www.nomeansno.in/wp-content/uploads/2024/08/Power-of-Speaking-Up-in-the-Corporate-Jungle.jpg',
        description: 'In the corporate world, the POSH Act is our alarm system, and each of us plays a role in ensuring...',
        category: 'events'
      },
      {
        id: 6,
        title: 'Navigating the Skies of POSH Compliance',
        sid: "navigating-the-skies-of-posh-compliance",
        date: '13/08/2024',
        comments: 0,
        image: 'https://www.nomeansno.in/wp-content/uploads/2024/08/Navigating-the-Skies-of-POSH-Compliance-1.jpg',
        description: 'As we look to the future, the journey of POSH will require continuous navigation through the ever-changing skies of workplace...',
        category: 'training'
      }
    ],
    events: [
      {
        id: 1,
        date: '12 June 2024',
        location: 'Delhi',
        title: 'POSH Summit 2024',
        sid: 'posh-summit-2024',
        description: 'The annual POSH Summit brings together experts, schools, and institutions to discuss best practices, share insights, and schools, and institutions to discuss best practices, share  ',
        image: 'https://www.nomeansno.in/wp-content/uploads/2024/12/POSHSummit2024.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=pf-GH6yaVWQ',
        type: 'event'
      },
      {
        id: 2,
        date: '20 DECEMBER 2023',
        location: 'Delhi',
        title: 'POSH Summit 2023',
        sid: 'posh-summit-2023',
        description: 'The annual POSH Summit brings together experts, schools, and institutions to discuss best practices, share insights, and schools, and institutions to discuss best practices, share ',
        image: 'https://www.nomeansno.in/wp-content/uploads/2024/12/POSHSummit2024.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=pf-GH6yaVWQ',
        type: 'event'
      },
      {
        id: 2,
        date: '12-13 DECEMBER 2024',
        location: 'Mumbai',
        title: 'Batch 4 - Registrations',
        sid: 'batch-4-registration',
        upcoming: true,
        description: 'Embark on an in-depth journey to master the complexities of conducting PoSH investigations with our comprehensive two-day workshop. Dive into the intricacies of evidence collection, witness examination, and the art of balancing the Principles of Natural Justice with practical, hands-on exercises, including two mock investigations and live report writing sessions',
        image: 'https://www.nomeansno.in/wp-content/uploads/2024/12/POSHSummit2024.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=pf-GH6yaVWQ',
        type: 'event'
      },
    ]
  },
  getters: {
    getFaqs: state => state.faqs,
    getProfiles: state => state.profiles,
    getProfile: (state) => (profileId) => {
      let index = state.profiles.findIndex(profile => profile.sid == profileId);
      return state.profiles[index];
    },
    getServices: state => state.services,
    getService: (state) => (serviceId) => {
      let index = state.services.findIndex(service => service.sid == serviceId);
      return state.services[index];
    },
    getTabs: state => state.tabs,
    getPosts: state => state.posts,
    getPost: (state) => (postId) => {
      let index = state.posts.findIndex(post => post.sid == postId);
      return state.posts[index];
    },
    getEvents: state => state.events,
    getEvent: (state) => (eventId) => {
      let index = state.events.findIndex(event => event.sid == eventId);
      return state.events[index];
    }
  },
  mutations: {},
  actions: {},
  modules: {
  },
});
