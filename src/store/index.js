import { createStore } from "vuex";

export default createStore({
  state: {
    faqs: [
      {
        id: 1,
        name: "POSH",
        plans: [
          {
            question: "How to know whether POSH Act is applicable on my organization?",
            answer: "POSH Act is applicable on all organisations irrespective of nature of work and number of employees."
          },
          {
            question: "Is it mandatory for organisations to have an Anti-Sexual Harassment policy?",
            answer: "Yes."
          },
          {
            question: "Is it mandatory to constitute Internal Committee?",
            answer: "Internal Committee is mandatory for all organisations having more than 10 employees, to address complaints of sexual harassment."
          },
          {
            question: "How can IC members handle complaints?",
            answer: "It’s employer’s responsibility to organise skill development and capacity building trainings for members of Internal Committee. You can contact us for imparting such training."
          },
          {
            question: "How should I inform my employees what is Sexual Harassment and its consequences?",
            answer: "Employees Awareness training is one of the mandatory training under the law where Employees are trained on the aspects of Sexual Harassment and its consequences on the perpetrator and impact on victims. Contact us to organise Employees Awareness Training at your organisation."
          },
          {
            question: "Is it mandatory for me to display a poster in my organization?",
            answer: "Yes, it is required by law to display information on the penal consequences of sexual harassment, details of the IC, and policy information at conspicuous places to ensure safety at the workplace."
          },
          {
            question: "My employees do not understand English. What do I do?",
            answer: "We have posters available in all Indian languages. You can choose the preferred language and customize other details like size and color."
          },
          {
            question: "Is it possible to have my organization’s logo on the poster?",
            answer: "Yes, you can add your organization's logo to the poster, along with other customizations like size and color."
          },
          {
            question: "I have less than 10 employees. Do I need to have an IC?",
            answer: "No. The Sexual harassment complaint in organisations having less than 10 employees will be filed before Local Committee (LC) of the District."
          },
          {
            question: "I have 10 employees, none of whom are women. Do I still need to have an IC?",
            answer: "Yes. Internal Committee is mandatory irrespective of gender of employees."
          },
          {
            question: "What is the composition of Internal Committee?",
            answer: "Presiding Officer – Women working at senior level in the organisation; 2 Internal Members (at least) – Amongst employees committed to women issues, have legal knowledge or experience in social work; 1 External Member – from NGO or the person having knowledge of POSH Act."
          },
          {
            question: "Can my organisation’s lawyer be an External Member?",
            answer: "No. External Member has to be a neutral person and not related to organisation in any other manner."
          },
          {
            question: "My organisation has multiple branches. Can I make a single Internal Committee for all branches?",
            answer: "As per law, every branch having more than 10 employees, should have its own Internal Committee. To know more, contact us."
          },
          {
            question: "What will happen, if I do not constitute an Internal Committee?",
            answer: "Failure to constitute an Internal Committee, if you have more than 10 employees, can lead to penalties up to Rs. 50,000, doubling for repeat offenses, and possible license or registration cancellation."
          },
          {
            question: "What will happen, if I do not organise trainings sessions for employees and members of Internal Committee?",
            answer: "Employees awareness session and Skill Development and Capacity Building are mandatory by law. Failing to do so, can lead to penalties up to Rs. 50,000, doubling for repeat offenses, and possible license or registration cancellation."
          }
        ]
      },
      {
        id: 2,
        name: "POCSO ",
        plans: [
          {
            question: "What is the POCSO Act?",
            answer: "The Protection of Children from Sexual Offences (POCSO) Act, 2012, is a comprehensive law to protect children from sexual assault, sexual harassment, and pornography, while safeguarding the interests of the child at every stage of the judicial process."
          },
          {
            question: "What is the age limit under the POCSO Act?",
            answer: "The POCSO Act applies to offenses committed against any child under the age of 18 years."
          },
          {
            question: "Is the POCSO Act gender-neutral?",
            answer: "Yes, the POCSO Act is gender-neutral and applies to any child under the age of 18, irrespective of gender."
          },
          {
            question: "What are the main offenses under the POCSO Act?",
            answer: "The main offenses under the POCSO Act include penetrative sexual assault, aggravated penetrative sexual assault, sexual assault, aggravated sexual assault, and sexual harassment of children."
          },
          {
            question: "What are the penalties under the POCSO Act?",
            answer: "The penalties vary by offense, with serious offenses like aggravated penetrative sexual assault punishable by life imprisonment or even death, while other offenses may have penalties of up to 5-7 years of imprisonment and fines."
          },
          {
            question: "How can one report a POCSO offense?",
            answer: "Anyone can report a POCSO offense to the police, Child Welfare Committee, or Special Juvenile Police Unit. The report can be made verbally or in writing, and mandatory reporting is required by law. It can also be filed online. To know more, connect with us."
          },
          {
            question: "Is it mandatory to report POCSO cases?",
            answer: "Yes, reporting of POCSO cases is mandatory under the law, and failure to report a case can result in legal consequences."
          },
          {
            question: "What is Child Protection Committee under POCSO?",
            answer: "The Child Protection Committee is required to be constituted in schools to deal with child sexual abuse cases as per the law, ensure training for students, educators, parents, and support staff, and provide counseling to victims. To know more, connect with us."
          },
          {
            question: "What protection is provided to victims under the POCSO Act?",
            answer: "The Act provides protection to the victim and family, including confidentiality of identity, support services, and protection from intimidation by the accused."
          },
          {
            question: "What rehabilitation services are available for victims?",
            answer: "Victims are entitled to counseling, medical care, and rehabilitation services, provided by Child Welfare Committees and NGOs to aid in their recovery."
          },
          {
            question: "Is there financial compensation for POCSO victims?",
            answer: "Yes, the victim or family can seek compensation through legal provisions or victim compensation schemes for rehabilitation and medical expenses."
          },
          {
            question: "How does POCSO ensure victim confidentiality?",
            answer: "Under the POCSO Act, disclosure of a child’s identity in the media or any public forum is strictly prohibited, and violators are subject to penalties."
          },
          {
            question: "Why is POCSO Act awareness important?",
            answer: "Awareness is crucial to prevent child sexual abuse, ensure reporting of cases, and educate the public on safeguarding children’s rights and welfare."
          },
          {
            question: "Is POCSO training mandatory for schools?",
            answer: "Yes, many states mandate that schools and educational institutions provide POCSO training for staff and students to help prevent and report abuse."
          },
          {
            question: "What all trainings are provided under POCSO?",
            answer: "At सshaktaम् Mindz, age-appropriate trainings are provided to all children below 18 years. Trainings are also provided to stakeholders including Educators, Support Staff, Parents, Hospitals, Police, Child Protection Committee, Coaching Centres, etc. To know more about the trainings, contact us."
          }
        ]
      },
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
        "type": "posh",
        "image": "/img/servicesImages/poshInfra.svg",
        "points": [
          "Drafting customized Policy / Review of existing policy to ensure that they are in line with the POSH Act, 2013 and also as per the organizational structure.",
          "Creation of Awareness Posters for workplace.",
          "Formation of Internal Committee – Provide guidance to select right persons to be members of Internal Committee and Documentation to be followed."
        ],
        "services": [
          {
            "id": 1,
            "icon": 'bi-person-check',
            "title": 'Employee Empowerment',
            "description": 'Employee POSH Training'
          },
          {
            "id": 2,
            "icon": 'bi-people-fill',
            "title": 'Committee Proficiency',
            "description": 'POSH Committee Training'
          },
          {
            "id": 3,
            "icon": 'bi-gear-wide-connected',
            "title": 'External Ally Inclusion',
            "description": 'External Member Empanelment for POSH'
          },
          {
            "id": 4,
            "icon": 'bi-shield-check',
            "title": 'Documentation Assurance',
            "description": 'Ensuring POSH Compliance'
          }
        ]
      },
      {
        "title": "Empanelment and Complaint Handling under the POSH Act, 2012",
        "description": "We provide assistance with the empanelment of external members in the internal committee and handle complaints related to sexual harassment, including conducting inquiries and preparing reports.",
        "sid": "empanelment-and-complaint-handling-under-posh-act-2012",
        "type": "posh",
        "image": "/img/servicesImages/complaint.svg",
        "points": [
          "Empanelment as an External Member in the Internal Committee, as per provisions of Act.",
          "Empanelment as Presiding Officer of Internal Committee where there is no woman employee at senior level management.",
          "Providing assistance in preparing and submitting PoSH Annual Reports.",
          "Monitor functioning of Internal Committee, ensure meetings held on timely basis and got documented as per Act.",
          "Redressal of Complaints, Conducting Inquiry and Report Writing."
        ],
        "services": [
          {
            "id": 1,
            "icon": 'bi-person-check',
            "title": 'Employee Empowerment',
            "description": 'Employee POSH Training'
          },
          {
            "id": 2,
            "icon": 'bi-people-fill',
            "title": 'Committee Proficiency',
            "description": 'POSH Committee Training'
          },
          {
            "id": 3,
            "icon": 'bi-gear-wide-connected',
            "title": 'External Ally Inclusion',
            "description": 'External Member Empanelment for POSH'
          },
          {
            "id": 4,
            "icon": 'bi-shield-check',
            "title": 'Documentation Assurance',
            "description": 'Ensuring POSH Compliance'
          }
        ]
      },
      {
        "title": "POSH Audit",
        "description": "We conduct a comprehensive POSH audit to ensure your organization's compliance with the POSH Act, review current practices, and assess employee awareness to make the workplace safer.",
        "sid": "posh-audit",
        "type": "posh",
        "image": "/img/servicesImages/audit.svg",
        "points": [
          "Organization’s compliance to the POSH Act, 2013.",
          "Review of current practices followed and best practices to be adopted to make workplace safer.",
          "Awareness level of employees and staff with respect to POSH law.",
          "Audit of POSH Policy of organization.",
          "Audit of contracts for POSH compliance.",
          "Readiness of Organization to provide information and handle POSH inspections as provided under Section 25 of POSH Act."
        ],
        "services": [
          {
            "id": 1,
            "icon": 'bi-person-check',
            "title": 'Employee Empowerment',
            "description": 'Employee POSH Training'
          },
          {
            "id": 2,
            "icon": 'bi-people-fill',
            "title": 'Committee Proficiency',
            "description": 'POSH Committee Training'
          },
          {
            "id": 3,
            "icon": 'bi-gear-wide-connected',
            "title": 'External Ally Inclusion',
            "description": 'External Member Empanelment for POSH'
          },
          {
            "id": 4,
            "icon": 'bi-shield-check',
            "title": 'Documentation Assurance',
            "description": 'Ensuring POSH Compliance'
          }
        ]
      },
      {
        "title": "Trainings and Skill Building under the POSH Act 2013",
        "description": "We provide various training and skill-building programs under the POSH Act, 2013, including employee awareness, internal committee workshops, and leadership training to ensure a harassment-free workplace.",
        "sid": "trainings-and-skill-building-under-posh-act-2013",
        type: "posh",
        "image": "/img/servicesImages/posh-training.jpg",
        "points": [
          "Trainings/Awareness sessions for Employees.",
          "Capability Building Workshop for Members of Internal Committee.",
          "Train the Trainer.",
          "Cyber safety training for online sexual harassment.",
          "Leadership awareness session for Top Management and HR.",
          "Active Bystander Training."
        ],
        trainings: [
          {
            title: "Trainings/Awareness sessions for Employees.",
            sid: "training-session-for-employees",
            image: "/img/trainingImages/training.jpg",
            type: "posh",
            description: "Comprehensive sessions aimed at educating employees on workplace policies, ethical practices, and fostering a safe and inclusive work environment.",
            points: [
              "Understand workplace harassment policies and reporting mechanisms.",
              "Learn about ethical workplace practices and cultural sensitivity.",
              "Promote a respectful and inclusive work environment."
            ]
          },
          {
            title: "Capability Building Workshop for Members of Internal Committee.",
            sid: "building-workshop",
            image: "/img/trainingImages/workshop.jpg",
            type: "posh",
            description: "A focused workshop to enhance the skills and knowledge of internal committee members, enabling them to handle complaints and ensure compliance effectively.",
            points: [
              "Build knowledge of legal guidelines and procedures.",
              "Enhance skills in investigation and conflict resolution.",
              "Strengthen the understanding of confidentiality and impartiality."
            ]
          },
          {
            title: "Train the Trainer.",
            sid: "train-the-trainer",
            image: "/img/trainingImages/training.jpg",
            type: "posh",
            description: "Specialized training designed to equip trainers with the skills and tools needed to conduct effective training sessions and spread awareness within the organization.",
            points: [
              "Learn best practices for delivering impactful sessions.",
              "Develop facilitation and public speaking skills.",
              "Gain knowledge on assessing trainee understanding and engagement."
            ]
          },
          {
            title: "Cyber safety training for online sexual harassment.",
            sid: "cyber-safety-training",
            image: "/img/trainingImages/cyber.jpg",
            type: "posh",
            description: "Training on cyber safety to help employees recognize, prevent, and respond to online harassment, promoting a safe online environment.",
            points: [
              "Identify and prevent online harassment and cyberbullying.",
              "Understand digital privacy and data protection practices.",
              "Learn steps for reporting and handling online abuse cases."
            ]
          },
          {
            title: "Leadership awareness session for Top Management and HR.",
            sid: "leadership-awareness",
            image: "/img/trainingImages/leadership.jpg",
            type: "posh",
            description: "A session dedicated to enhancing leadership awareness among top management and HR, emphasizing their role in fostering a safe and supportive workplace.",
            points: [
              "Understand leadership responsibilities in maintaining a safe workplace.",
              "Develop strategies for proactive policy enforcement.",
              "Promote a culture of transparency and accountability."
            ]
          },
          {
            title: "Active Bystander Training.",
            sid: "active-bystander-training",
            image: "/img/trainingImages/bystander.svg",
            type: "posh",
            description: "Training to empower employees to recognize and safely intervene in situations that could lead to harassment, helping to create a proactive and responsible work culture.",
            points: [
              "Learn how to recognize signs of harassment or distress.",
              "Gain techniques for safely intervening in risky situations.",
              "Encourage employees to support a safe workplace actively."
            ]
          },
        ]
      },
      {
        "title": "POCSO Setup",
        "description": "We help institutions set up a child protection policy as per the POCSO Act (Protection of Children from Sexual Offences), ensuring safe and compliant environments for children.",
        "sid": "pocso-setup",
        "type": "pocso",
        "image": "/img/servicesImages/protection.svg",
        "points": [
          "Drafting Child Protection Policy for schools.",
          "Conducting workshops to educate staff and students on child safety and protection under the POCSO Act.",
          "Establishing a dedicated grievance mechanism for children to report any issues safely and confidentially.",
          "Training school staff to recognize, report, and respond to any signs of abuse or misconduct appropriately.",
          "Assisting in forming a Child Protection Committee to ensure ongoing compliance and safety monitoring.",
          "Developing response protocols for handling reports of abuse or misconduct effectively and legally.",
          "Guidance on maintaining compliance documentation as per the POCSO Act and other child protection regulations.",
          "Providing educational resources and training materials for parents and guardians about child safety and awareness.",
          "Setting up a review mechanism for periodic assessment and improvement of child protection measures.",
          "Collaborating with child protection experts and organizations to ensure best practices are maintained."
        ],
        "services": [
          {
            "id": 1,
            "icon": 'bi-person-check',
            "title": 'Employee Empowerment',
            "description": 'Employee POSH Training'
          },
          {
            "id": 2,
            "icon": 'bi-people-fill',
            "title": 'Committee Proficiency',
            "description": 'POSH Committee Training'
          },
          {
            "id": 3,
            "icon": 'bi-gear-wide-connected',
            "title": 'External Ally Inclusion',
            "description": 'External Member Empanelment for POSH'
          },
          {
            "id": 4,
            "icon": 'bi-shield-check',
            "title": 'Documentation Assurance',
            "description": 'Ensuring POSH Compliance'
          }
        ]
      },
      {
        "title": "POCSO Audit",
        "description": "Our pocso audit ensures compliance with the POCSO Act, 2012, and assesses practices in schools and institutions to safeguard children from abuse and exploitation.",
        "sid": "pocso-audit",
        "type": "pocso",
        "image": "/img/servicesImages/pocso-audit.svg",
        "points": [
          "Institution's compliance to POCSO Act, 2012 and POCSO Rules 2020.",
          "Review of protocol followed and adoption of best practices in the school/college/educational institution in pursuance of POCSO law.",
          "Awareness level of Educators, Child Protection Committee, and Support staff.",
          "Audit of Child Protection Policy adopted by the institution.",
          "Audit of forms/contracts signed by the third party contractual employees in compliance of POCSO law.",
          "Audit of Police Verification Record of Support Staff/employees.",
          "Physical Inspection of the premises."
        ],
        "services": [
          {
            "id": 1,
            "icon": 'bi-person-check',
            "title": 'Employee Empowerment',
            "description": 'Employee POSH Training'
          },
          {
            "id": 2,
            "icon": 'bi-people-fill',
            "title": 'Committee Proficiency',
            "description": 'POSH Committee Training'
          },
          {
            "id": 3,
            "icon": 'bi-gear-wide-connected',
            "title": 'External Ally Inclusion',
            "description": 'External Member Empanelment for POSH'
          },
          {
            "id": 4,
            "icon": 'bi-shield-check',
            "title": 'Documentation Assurance',
            "description": 'Ensuring POSH Compliance'
          }
        ]
      },
      {
        "title": "Trainings under the POCSO Act, 2012",
        "description": "We offer a variety of training programs under the POCSO Act, 2012, including child protection workshops, awareness sessions for staff and children, and training for school leaders and educators.",
        "sid": "trainings-under-the-pocso-act-2012",
        type: "pocso",
        "image": "/img/servicesImages/training.png",
        "points": [
          "Awareness session for kids about ‘Safe-Unsafe and Confusing Touch.",
          "Train the Trainer.",
          "Age appropriate Child Sexual Abuse/ Online Sexual Abuse prevention workshop.",
          "Awareness training for support staff, admin staff, drivers, helpers in schools and all other organizations which are visited by children.",
          "Trainings/Awareness sessions for Educators & School Leaders.",
          "Compliance Training for Child Protection Committee Members."
        ],
        trainings: [
          {
            title: "Awareness session for kids about ‘Safe-Unsafe and Confusing Touch.",
            sid: "safe-unsafe-confusing-touch",
            image: "/img/trainingImages/touch.jpg",
            type: "pocso",
            description: "An engaging session for children to help them understand and distinguish between safe, unsafe, and confusing touches, building a foundation of personal safety.",
            points: [
              "Teach children to identify different types of touch.",
              "Empower kids to say 'no' and seek help if uncomfortable.",
              "Use age-appropriate language and examples for understanding."
            ]
          },
          {
            title: "Age appropriate Child Sexual Abuse/ Online Sexual Abuse prevention workshop.",
            sid: "child-sexual-abuse",
            image: "/img/trainingImages/child-abuse.jpg",
            type: "pocso",
            description: "A workshop tailored for children of different age groups, teaching them how to recognize, prevent, and report abuse in both physical and online environments.",
            points: [
              "Provide knowledge on safe internet use and online privacy.",
              "Teach children about consent and personal boundaries.",
              "Offer strategies for reporting inappropriate behavior."
            ]
          },
          {
            title: "Awareness training for support staff, admin staff, drivers, helpers in schools and all other organizations which are visited by children.",
            sid: "awareness-training-for-support-staff",
            image: "/img/trainingImages/school-helper.jpg",
            type: "pocso",
            description: "Awareness training for support staff to ensure they understand child protection protocols and their role in creating a safe environment for children.",
            points: [
              "Provide guidance on child protection protocols and responsibilities.",
              "Learn signs of potential abuse or neglect in children.",
              "Teach staff appropriate reporting procedures for child safety."
            ]
          },
          {
            title: "Trainings/Awareness sessions for Educators & School Leaders.",
            sid: "trainings-sessions-for-educators",
            image: "/img/trainingImages/school-training.jpg",
            type: "pocso",
            description: "Awareness sessions for educators and school leaders to build knowledge on safeguarding children and implementing best practices in educational settings.",
            points: [
              "Train educators on recognizing and preventing abuse.",
              "Establish a safe learning environment for all students.",
              "Understand mandatory reporting requirements."
            ]
          },
          {
            title: "Compliance Training for Child Protection Committee Members.",
            sid: "compliance-training-for-child-protection",
            image: "/img/trainingImages/child-protection.svg",
            type: "pocso",
            description: "Training to ensure that Child Protection Committee members are well-informed of compliance standards and best practices for protecting children’s welfare.",
            points: [
              "Learn about legal obligations and child protection policies.",
              "Develop skills for investigating and addressing complaints.",
              "Understand the importance of confidentiality and accountability."
            ]
          }
        ]
      },
    ],
    tabs: [
      { id: 'all', name: 'All Posts' },
      { id: 'blog', name: 'Blog' },
      { id: 'events', name: 'Events' },
      { id: 'courses', name: 'Courses' },
      { id: 'training', name: 'Training' }
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
    ],
    trainings: [
      {
        title: "Trainings/Awareness sessions for Employees.",
        sid: "training-session-for-employees",
        image: "/img/trainingImages/training.jpg",
        type: "posh",
        description: "Comprehensive sessions aimed at educating employees on workplace policies, ethical practices, and fostering a safe and inclusive work environment.",
        points: [
          "Understand workplace harassment policies and reporting mechanisms.",
          "Learn about ethical workplace practices and cultural sensitivity.",
          "Promote a respectful and inclusive work environment."
        ]
      },
      {
        title: "Capability Building Workshop for Members of Internal Committee.",
        sid: "building-workshop",
        image: "/img/trainingImages/workshop.jpg",
        type: "posh",
        description: "A focused workshop to enhance the skills and knowledge of internal committee members, enabling them to handle complaints and ensure compliance effectively.",
        points: [
          "Build knowledge of legal guidelines and procedures.",
          "Enhance skills in investigation and conflict resolution.",
          "Strengthen the understanding of confidentiality and impartiality."
        ]
      },
      {
        title: "Train the Trainer.",
        sid: "train-the-trainer",
        image: "/img/trainingImages/training.jpg",
        type: "posh",
        description: "Specialized training designed to equip trainers with the skills and tools needed to conduct effective training sessions and spread awareness within the organization.",
        points: [
          "Learn best practices for delivering impactful sessions.",
          "Develop facilitation and public speaking skills.",
          "Gain knowledge on assessing trainee understanding and engagement."
        ]
      },
      {
        title: "Cyber safety training for online sexual harassment.",
        sid: "cyber-safety-training",
        image: "/img/trainingImages/cyber.jpg",
        type: "posh",
        description: "Training on cyber safety to help employees recognize, prevent, and respond to online harassment, promoting a safe online environment.",
        points: [
          "Identify and prevent online harassment and cyberbullying.",
          "Understand digital privacy and data protection practices.",
          "Learn steps for reporting and handling online abuse cases."
        ]
      },
      {
        title: "Leadership awareness session for Top Management and HR.",
        sid: "leadership-awareness",
        image: "/img/trainingImages/leadership.jpg",
        type: "posh",
        description: "A session dedicated to enhancing leadership awareness among top management and HR, emphasizing their role in fostering a safe and supportive workplace.",
        points: [
          "Understand leadership responsibilities in maintaining a safe workplace.",
          "Develop strategies for proactive policy enforcement.",
          "Promote a culture of transparency and accountability."
        ]
      },
      {
        title: "Active Bystander Training.",
        sid: "active-bystander-training",
        image: "/img/trainingImages/bystander.svg",
        type: "posh",
        description: "Training to empower employees to recognize and safely intervene in situations that could lead to harassment, helping to create a proactive and responsible work culture.",
        points: [
          "Learn how to recognize signs of harassment or distress.",
          "Gain techniques for safely intervening in risky situations.",
          "Encourage employees to support a safe workplace actively."
        ]
      },

      {
        title: "Awareness session for kids about ‘Safe-Unsafe and Confusing Touch.",
        sid: "safe-unsafe-confusing-touch",
        image: "/img/trainingImages/touch.jpg",
        type: "pocso",
        description: "An engaging session for children to help them understand and distinguish between safe, unsafe, and confusing touches, building a foundation of personal safety.",
        points: [
          "Teach children to identify different types of touch.",
          "Empower kids to say 'no' and seek help if uncomfortable.",
          "Use age-appropriate language and examples for understanding."
        ]
      },
      {
        title: "Age appropriate Child Sexual Abuse/ Online Sexual Abuse prevention workshop.",
        sid: "child-sexual-abuse",
        image: "/img/trainingImages/child-abuse.jpg",
        type: "pocso",
        description: "A workshop tailored for children of different age groups, teaching them how to recognize, prevent, and report abuse in both physical and online environments.",
        points: [
          "Provide knowledge on safe internet use and online privacy.",
          "Teach children about consent and personal boundaries.",
          "Offer strategies for reporting inappropriate behavior."
        ]
      },
      {
        title: "Awareness training for support staff, admin staff, drivers, helpers in schools and all other organizations which are visited by children.",
        sid: "awareness-training-for-support-staff",
        image: "/img/trainingImages/school-helper.jpg",
        type: "pocso",
        description: "Awareness training for support staff to ensure they understand child protection protocols and their role in creating a safe environment for children.",
        points: [
          "Provide guidance on child protection protocols and responsibilities.",
          "Learn signs of potential abuse or neglect in children.",
          "Teach staff appropriate reporting procedures for child safety."
        ]
      },
      {
        title: "Trainings/Awareness sessions for Educators & School Leaders.",
        sid: "trainings-sessions-for-educators",
        image: "/img/trainingImages/school-training.jpg",
        type: "pocso",
        description: "Awareness sessions for educators and school leaders to build knowledge on safeguarding children and implementing best practices in educational settings.",
        points: [
          "Train educators on recognizing and preventing abuse.",
          "Establish a safe learning environment for all students.",
          "Understand mandatory reporting requirements."
        ]
      },
      {
        title: "Compliance Training for Child Protection Committee Members.",
        sid: "compliance-training-for-child-protection",
        image: "/img/trainingImages/child-protection.svg",
        type: "pocso",
        description: "Training to ensure that Child Protection Committee members are well-informed of compliance standards and best practices for protecting children’s welfare.",
        points: [
          "Learn about legal obligations and child protection policies.",
          "Develop skills for investigating and addressing complaints.",
          "Understand the importance of confidentiality and accountability."
        ]
      }
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
    },
    getTrainings: state => state.trainings,
    getTraining: (state) => (trainingId) => {
      let index = state.trainings.findIndex(training => training.sid == trainingId);
      return state.trainings[index];
    },
  },
  mutations: {},
  actions: {},
  modules: {
  },
});
