export const site = {
  name: "Yashaswi Makula",
  role: "Software engineer focused on systems that scale.",
  email: "ym3144@nyu.edu",
  phone: "+1 (516) 968-0854",
  location: "Brooklyn, New York",
  linkedin: "https://www.linkedin.com/in/yashaswi-makula/",
  github: "https://github.com/yashaswi2000",
};

export const selectedWork = [
  {
    index: "01",
    company: "Amazon",
    title: "Feature-flag infrastructure",
    summary:
      "Built reusable AWS CDK constructs and guardrails for Evidently, cutting platform setup time by 25% and improving developer productivity by 50%.",
    tags: ["TypeScript", "AWS CDK", "React", "REST"],
  },
  {
    index: "02",
    company: "Secure Systems Lab",
    title: "Confidential-computing toolchain",
    summary:
      "Automated CI/CD across five repositories, operated self-hosted Kubernetes runners, and contributed a libc shim for native applications inside Intel SGX TEEs.",
    tags: ["C++", "Rust", "Kubernetes", "Docker"],
  },
  {
    index: "03",
    company: "Zenefits",
    title: "Insurance fulfillment at scale",
    summary:
      "Automated enrollment and termination integrations processing 2,000 plans per day, while eliminating manual reconciliation and halving EDI runtime.",
    tags: ["Python", "Django", "Celery", "MySQL"],
  },
];

export const experience = [
  {
    company: "Secure Systems Lab",
    role: "Software Engineer Intern",
    period: "Jan 2023 — May 2023",
    location: "New York, USA",
    bullets: [
      "Built automated CI/CD pipelines with self-hosted containers running 100 jobs across five repositories.",
      "Implemented an on-premises Kubernetes cluster with actions-runner-controller and custom containers.",
      "Created development containers with reusable Docker layers for consistent builds and faster onboarding.",
      "Contributed a libc shim for running native applications inside Intel SGX trusted execution environments.",
    ],
  },
  {
    company: "Amazon",
    role: "Software Development Engineer",
    period: "Mar 2022 — Apr 2023",
    location: "Hyderabad, India",
    bullets: [
      "Led implementation of TypeScript L2 constructs for AWS Evidently in the AWS Cloud Development Kit.",
      "Designed guardrails that reduced feature-flag infrastructure setup time by 25% and improved developer productivity by 50%.",
      "Built an API Gateway and Lambda proxy that reduced development time for internal microservices by 40%.",
      "Created React prototypes and a continuous deployment pipeline for feature-flag education and platform setup.",
    ],
  },
  {
    company: "Zenefits",
    role: "Software Engineer",
    period: "Jun 2018 — Jul 2018",
    location: "Bengaluru, India",
    bullets: [
      "Automated insurance enrollment and termination integrations handling 2,000 plans per day.",
      "Built reconciliation mechanisms that eliminated manual verification across carrier systems.",
      "Used multiprocessing to reduce EDI-based insurance fulfillment runtime by 50%.",
    ],
  },
];

export const skillGroups = [
  ["Languages", "Python, TypeScript, JavaScript, C++, Rust, Java"],
  ["Web", "React, Django, FastAPI, Express, REST APIs"],
  ["Data", "PostgreSQL, MySQL, Redis, MongoDB, DynamoDB, Elasticsearch"],
  ["Systems", "AWS, Docker, Kubernetes, Kafka, Spark, microservices"],
];
