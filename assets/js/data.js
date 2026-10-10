/*
 * Sai Teja K portfolio · all site content lives in this one file.
 * Every fact here comes from Sai Teja's resume. Edit this file and the whole site updates.
 */
window.SITE = {
  profile: {
    name: 'Sai Teja K',
    email: 'saitejagoudk01@gmail.com',
    linkedin: 'https://www.linkedin.com/in/saitejagoudk/',
    github: 'https://github.com/KUMBHAM8888',
    resume: 'assets/Sai_Teja_K_Resume.pdf',
    photo: 'assets/photo.jpg',
  },

  /* Order of the sections below the banner. */
  order: ['focus', 'results', 'experience', 'projects', 'skills', 'credentials'],

  /* Current Focus: what's in progress right now. */
  focus: [
    { title: 'DevOps Engineer · NextEra Energy', sub: 'Grid Operations Platform Modernization', tag: 'Current role', target: 'experience', job: 2, palette: ['#3A0508', '#E50914'], motif: 'rings' },
    { title: 'AI-Assisted Incident Triage', sub: 'Python MCP server for on-call engineers', tag: 'In progress', target: 'projects', project: 'mcp-triage' },
    { title: 'This portfolio website', sub: 'Next: Terraform on S3 + CloudFront', tag: 'Live · v2 planned', target: 'projects', project: 'this-site' },
  ],

  /* Key Results: the numbers recruiters ask about. */
  results: [
    { value: '60%', label: 'less manual provisioning', where: 'Terraform modules · NextEra' },
    { value: '40%', label: 'fewer failed deployments', where: 'Security gates in CI · NextEra' },
    { value: '<1h', label: 'release windows, down from 4h', where: 'Harness canary · NextEra' },
    { value: '35%', label: 'better production availability', where: 'SLO alerting · NextEra' },
    { value: '25+', label: 'microservices migrated, zero downtime', where: 'EKS + OpenShift · NextEra' },
    { value: '200+', label: 'vulnerabilities remediated', where: 'With InfoSec · JPMorgan Chase' },
    { value: '40+', label: 'services on standard pipelines', where: 'Azure DevOps · JPMorgan Chase' },
    { value: '18%', label: 'lower cloud costs', where: 'Right-sizing · Verizon' },
  ],

  /* Experience, oldest first. The newest role opens by default. */
  experience: [
    {
      company: 'Verizon', role: 'Cloud Engineer', years: 'Jan 2021 – Jun 2022', short: '2021 – 2022',
      project: 'Network Analytics Cloud Migration',
      summary: 'Moved network-analytics and reporting applications from data center VMs to AWS.',
      highlights: [
        { title: 'AWS Foundation', text: 'Provisioned and maintained EC2, VPC, IAM, S3 and RDS for enterprise apps across dev and test.' },
        { title: 'Cost Optimization', text: 'Right-sized EC2 and applied S3 lifecycle policies, cutting compute and storage costs by 18%.' },
        { title: 'Server Build Automation', text: 'Standardized server builds with Ansible playbooks, taking new server setup from a full day to under 2 hours.' },
        { title: 'First CI Pipelines', text: 'Containerized legacy Java apps with Docker and set up the team’s first Jenkins CI with Maven and Nexus.' },
        { title: 'Monitoring & Alerting', text: 'Built CloudWatch alarms with SNS notifications, reducing incident response time by 30%.' },
      ],
    },
    {
      company: 'JPMorgan Chase', role: 'DevOps Engineer', years: 'Mar 2023 – Jul 2024', short: '2023 – 2024',
      project: 'Payments Platform CI/CD Standardization',
      summary: 'Consolidated build and release for card-payments and treasury microservices onto Azure DevOps, AKS and OpenShift.',
      highlights: [
        { title: 'Standard Pipelines', text: 'Built multi-stage Azure DevOps YAML pipelines with reusable templates for 40+ Java and .NET services, cutting deployment failures by 25%.' },
        { title: 'Azure Infrastructure as Code', text: 'Provisioned AKS, VNets, Key Vault and Azure Monitor with Terraform, reducing environment setup time by 40%.' },
        { title: 'Security Gates', text: 'Added SonarQube, Checkmarx and BlackDuck gates to every pipeline, producing evidence for SOX and PCI-DSS audits.' },
        { title: 'Vulnerability Remediation', text: 'Worked with InfoSec to remediate 200+ infrastructure and container vulnerabilities.' },
        { title: 'Jenkins Migration', text: 'Led the move of legacy Jenkins jobs to Azure DevOps across 5 application teams, with Confluence runbooks.' },
        { title: 'Branching Strategy', text: 'Defined GitFlow, PR policies and release tagging across 6 teams so every release is traceable.' },
      ],
    },
    {
      company: 'NextEra Energy', role: 'DevOps Engineer', years: 'Aug 2024 – Present', short: '2024 – Now',
      project: 'Grid Operations Platform Modernization',
      summary: 'Moving outage-management and meter-data microservices from on-prem RHEL to AWS EKS and Red Hat OpenShift.',
      highlights: [
        { title: 'Terraform Modules', text: 'Built modular Terraform for VPC, EKS, IAM and RDS with S3 remote state and DynamoDB locking, cutting manual provisioning by 60%.' },
        { title: 'Secure CI Pipelines', text: 'Designed Jenkins and GitHub Actions pipelines with SonarQube, Snyk and Trivy, reducing failed deployments by 40%.' },
        { title: 'Progressive Delivery', text: 'Introduced Harness canary and blue-green releases with automatic rollback, shrinking release windows from 4 hours to under 1.' },
        { title: 'Microservice Migration', text: 'Migrated 25+ microservices to EKS and OpenShift with Helm and Tekton, with no customer-facing downtime.' },
        { title: 'Secrets Management', text: 'Moved secrets into HashiCorp Vault with dynamic credentials and automated TLS renewal, closing NERC CIP audit findings.' },
        { title: 'Observability & SLOs', text: 'Set up Prometheus, Grafana and CloudWatch with SLO alerts to PagerDuty, improving availability by 35%.' },
        { title: 'Operations Automation', text: 'Wrote Ansible roles and Python/Bash scripts for patching and health checks, saving about 15 engineering hours a week.' },
        { title: 'Mentoring & Change Management', text: 'Mentor 3 junior engineers and take production changes through the ServiceNow CAB process.' },
      ],
    },
  ],

  /* Projects. palette drives the generated cover art. */
  projects: [
    {
      id: 'gitops-platform',
      title: 'Secure GitOps Delivery Platform',
      category: 'Platform · GitOps · DevSecOps',
      status: 'AWS',
      summary: 'Terraform builds the cloud, Jenkins scans every image, Argo CD ships it from Git.',
      detail: 'A reference platform where Terraform provisions the VPC and EKS cluster, Jenkins builds, tests and scans container images before pushing to ECR, and Argo CD syncs Helm releases from Git to the cluster.',
      features: ['Terraform-provisioned VPC and EKS', 'Jenkins build, test, SonarQube and Trivy scans', 'Argo CD GitOps sync of Helm releases', 'Vault Agent Injector for runtime secrets', 'Istio mTLS between services', 'Grafana dashboards for latency, traffic, errors and saturation'],
      flow: ['git push', 'Jenkins', 'Sonar + Trivy', 'ECR', 'Argo CD', 'EKS'],
      stack: ['Terraform', 'EKS', 'Jenkins', 'Argo CD', 'Helm', 'Vault', 'Istio', 'Prometheus'],
      palette: ['#3A0508', '#E50914'],
      motif: 'rings',
    },
    {
      id: 'mcp-triage',
      title: 'AI-Assisted Incident Triage',
      category: 'AIOps · MCP · LLM',
      status: 'In progress',
      summary: '"Why is this pod restarting?" Ask the LLM. It brings the evidence.',
      detail: 'A Python Model Context Protocol server that exposes Kubernetes events, Prometheus metrics and recent logs to an LLM, so an on-call engineer can ask a plain question and get the relevant evidence plus suggested runbook steps.',
      features: ['MCP server written in Python', 'Reads Kubernetes events through the K8s API', 'Pulls Prometheus metrics for the affected workload', 'Surfaces recent logs next to the metrics', 'Suggests runbook steps for the on-call engineer'],
      flow: ['on-call question', 'LLM', 'MCP server', 'K8s API · Prometheus · logs'],
      stack: ['Python', 'MCP', 'LLM', 'Kubernetes API', 'Prometheus API'],
      palette: ['#24060A', '#FF4D5A'],
      motif: 'pulse',
    },
    {
      id: 'this-site',
      title: 'This Portfolio Website',
      category: 'CI/CD · GitHub Pages',
      status: 'Live',
      summary: 'This portfolio, shipped like production.',
      detail: 'Plain HTML, CSS and JavaScript with all content in one data file. Every push to main runs a GitHub Actions pipeline that validates the HTML and JavaScript, then deploys to GitHub Pages over HTTPS. Next version: Terraform-managed S3, CloudFront and Route 53 on a custom domain.',
      features: ['No framework and no build step', 'All content in one data file', 'GitHub Actions: validate, then deploy', 'Least-privilege workflow permissions', 'Roadmap: Terraform on AWS with a custom domain'],
      flow: ['git push', 'GitHub Actions', 'validate', 'deploy-pages', 'kumbham8888.github.io'],
      stack: ['GitHub Actions', 'GitHub Pages', 'HTML', 'CSS', 'JavaScript'],
      palette: ['#2A0A0A', '#B20710'],
      motif: 'stack',
    },
  ],

  /* Skills, grouped. */
  skills: [
    { name: 'CI/CD & Release', items: ['Jenkins', 'Harness', 'Tekton', 'GitHub Actions', 'GitLab CI', 'Azure DevOps', 'Argo CD', 'Maven', 'Gradle', 'Artifactory', 'Nexus'] },
    { name: 'Containers', items: ['Docker', 'Kubernetes', 'OpenShift', 'Amazon EKS', 'Azure AKS', 'Helm', 'Istio'] },
    { name: 'Infrastructure as Code', items: ['Terraform', 'CloudFormation', 'ARM Templates', 'Ansible', 'AWX'] },
    { name: 'Cloud', items: ['AWS EC2 · VPC · IAM', 'S3 · RDS · Lambda', 'EKS · ECS · ECR', 'Route 53 · CloudWatch', 'Azure AKS · Key Vault', 'Azure Monitor'] },
    { name: 'DevSecOps', items: ['SonarQube', 'Snyk', 'Checkmarx', 'BlackDuck', 'Trivy', 'HashiCorp Vault', 'IAM & RBAC', 'SOX · PCI-DSS · NERC CIP'] },
    { name: 'Observability', items: ['Prometheus', 'Grafana', 'ELK', 'Splunk', 'AppDynamics', 'CloudWatch', 'PagerDuty'] },
    { name: 'Scripting', items: ['Python', 'Bash', 'PowerShell', 'YAML', 'SQL', 'Go (working)', 'Java (working)'] },
    { name: 'AI & Ways of Working', items: ['GitHub Copilot', 'LLM log analysis', 'MCP', 'ServiceNow', 'Jira', 'Agile', 'CAB', 'RCA'] },
  ],

  certifications: [
    { name: 'AWS Certified Developer – Associate', issuer: 'Amazon Web Services', dates: 'Issued Oct 2024 · Valid to Oct 2027', badge: 'AWS' },
  ],
  education: [
    { name: 'Master of Science in Computer Science', issuer: 'Lewis University', dates: 'Romeoville, Illinois', badge: 'MS' },
  ],
};
