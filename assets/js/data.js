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
    { title: 'DevOps Engineer · NextEra Energy', sub: 'Moving grid services to EKS and OpenShift', tag: 'Current role', target: 'experience', job: 2, palette: ['#3A0508', '#E50914'], motif: 'rings' },
    { title: 'AI-Assisted Incident Triage', sub: 'Python MCP server for on-call engineers', tag: 'In progress', target: 'projects', project: 'mcp-triage' },
    { title: 'This portfolio website', sub: 'Next: Terraform on S3 + CloudFront', tag: 'Live · v2 planned', target: 'projects', project: 'this-site' },
  ],

  /* Key Results: the numbers recruiters ask about. */
  results: [
    { value: '60%', label: 'less manual provisioning', where: 'Terraform modules · NextEra' },
    { value: '40%', label: 'fewer failed deployments', where: 'Security gates in CI · NextEra' },
    { value: '<1h', label: 'zero-downtime releases, down from 4h windows', where: 'Harness canary + blue-green · NextEra' },
    { value: '35%', label: 'fewer P1/P2 incidents', where: 'SLO alerting + autoscaling · NextEra' },
    { value: '25+', label: 'microservices migrated, no customer-facing downtime', where: 'EKS + OpenShift · NextEra' },
    { value: '15h', label: 'engineering time saved every week', where: 'Ansible + Python automation · NextEra' },
    { value: '40+', label: 'services on shared pipeline templates', where: 'Azure DevOps · JPMorgan Chase' },
    { value: '200+', label: 'vulnerabilities remediated', where: 'With InfoSec · JPMorgan Chase' },
    { value: '18%', label: 'lower AWS costs', where: 'Right-sizing + S3 lifecycle · Verizon' },
  ],

  /* Experience, oldest first. The newest role opens by default. */
  experience: [
    {
      company: 'Verizon', role: 'Cloud Engineer', years: 'Jan 2021 – Jun 2022', short: '2021 – 2022',
      project: 'Network Analytics Cloud Migration',
      summary: 'Moved internal network-analytics and reporting applications from data-center VMs to AWS.',
      highlights: [
        { title: 'Cost Optimization', text: 'Right-sized EC2 instances and added S3 lifecycle policies, reducing compute and storage costs by 18%.' },
        { title: 'Server Build Automation', text: 'Wrote Ansible playbooks and shell scripts to standardize server builds, cutting new server setup from a full day to under 2 hours.' },
        { title: 'First CI Pipelines', text: 'Containerized legacy Java applications with Docker and set up Jenkins builds with Maven and Nexus, the team\u2019s first working CI pipelines.' },
        { title: 'Monitoring & Recovery', text: 'Added CloudWatch alarms with SNS notifications, cutting incident response time by 30%. Handled Linux patching, backups and disaster-recovery validation.' },
      ],
      tools: ['AWS EC2 · VPC · IAM', 'S3 · RDS', 'CloudWatch · SNS', 'Ansible', 'Docker', 'Jenkins', 'Maven', 'Nexus', 'Bash', 'Linux'],
    },
    {
      company: 'JPMorgan Chase', role: 'DevOps Engineer', years: 'Mar 2023 – Jul 2024', short: '2023 – 2024',
      project: 'Payments Platform CI/CD Standardization',
      summary: 'Consolidated build and release for card-payments and treasury microservices onto Azure DevOps, AKS and OpenShift.',
      highlights: [
        { title: 'Shared Pipeline Templates', text: 'Wrote the shared multi-stage Azure DevOps YAML templates that 40+ Java and .NET payments services adopted, and led the move off legacy Jenkins for 5 application teams. Every team got the same build, scan and deploy stages, and deployment failures fell 25%.' },
        { title: 'Security Gates as Audit Evidence', text: 'Made SonarQube, Checkmarx and BlackDuck scans a required stage in every pipeline, failing builds on critical vulnerabilities or license issues. The scan results became the evidence used in SOX and PCI-DSS audits.' },
        { title: 'Vulnerability Remediation', text: 'Worked with InfoSec to remediate 200+ infrastructure and container vulnerabilities and supported quarterly security assessments.' },
        { title: 'Azure Infrastructure as Code', text: 'Provisioned AKS, Virtual Networks, Key Vault, load balancers and Azure Monitor with Terraform, cutting environment setup time by 40%. Packaged services as Helm charts for AKS and OpenShift.' },
        { title: 'Traceable Releases', text: 'Set GitFlow branching, pull request policies and release tagging across 6 teams, so every production release could be traced back to reviewed, tagged code.' },
        { title: 'Faster Triage', text: 'Added latency and error-rate alerts in Prometheus, Grafana, Splunk and Application Insights to speed up incident triage, and automated routine admin with PowerShell and Bash.' },
      ],
      tools: ['Azure DevOps', 'AKS', 'OpenShift', 'Terraform', 'Helm', 'SonarQube', 'Checkmarx', 'BlackDuck', 'Splunk', 'Prometheus', 'Grafana', 'Application Insights', 'Java', '.NET', 'PowerShell'],
    },
    {
      company: 'NextEra Energy', role: 'DevOps Engineer', years: 'Aug 2024 – Present', short: '2024 – Now',
      project: 'Grid Operations Platform Modernization',
      summary: 'Moving outage-management and meter-data microservices from on-prem RHEL servers to AWS EKS and Red Hat OpenShift.',
      highlights: [
        { title: 'Scaling for Storms', text: 'The on-prem servers behind outage management could not scale during storms and outage spikes, when load is highest. Designed and proposed the move to EKS and OpenShift, then migrated 25+ microservices with Helm and Tekton, using HPA and Auto Scaling so capacity grows with demand. No customer-facing downtime during cutover.' },
        { title: 'Zero-Downtime Releases', text: 'Replaced the manual, after-hours release window (about 4 hours, with downtime) with Harness canary and blue-green deployments that roll back automatically on failed health checks. Releases now go out with zero downtime in under an hour.' },
        { title: 'Terraform Layout', text: 'Proposed and built reusable Terraform modules for VPC, EKS, IAM and RDS, with S3 remote state and DynamoDB locking. Dev, QA and prod are built from the same code, and manual provisioning effort is down about 60%.' },
        { title: 'Secrets in Vault', text: 'Moved application credentials out of plaintext config files into HashiCorp Vault with dynamic credentials and automated SSL/TLS renewal, closing the related NERC CIP audit findings.' },
        { title: 'Pipelines That Block Bad Deploys', text: 'Built Jenkins and GitHub Actions pipelines that block deploys on SonarQube quality gates, Snyk dependency scans and Trivy image scans. Failed deployments fell 40%.' },
        { title: 'SLOs and Fewer Incidents', text: 'Set up Prometheus, Grafana and CloudWatch with SLO-based alerts routed to PagerDuty, and lead post-incident RCA reviews. Together with the autoscaling and release changes, P1/P2 incidents dropped about 35%.' },
        { title: 'Cluster Operations & Automation', text: 'Run the Kubernetes and OpenShift clusters day to day (namespaces, quotas, HPA, rolling updates, troubleshooting). Ansible roles and Python/Bash scripts for patching and health checks save about 15 engineering hours a week.' },
        { title: 'Mentoring & Change Management', text: 'Mentor 3 junior engineers on Terraform, Kubernetes and pipeline standards, and take production changes through ServiceNow CAB with development and QA.' },
      ],
      tools: ['AWS EKS · VPC · IAM · RDS', 'S3 · DynamoDB', 'OpenShift', 'Terraform', 'Harness', 'Jenkins', 'GitHub Actions', 'Tekton', 'Helm', 'Vault', 'SonarQube', 'Snyk', 'Trivy', 'Prometheus', 'Grafana', 'PagerDuty', 'Ansible', 'Python', 'Bash'],
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
      detail: 'A reference platform covering the full path from commit to cluster. Terraform provisions the VPC and EKS cluster. Jenkins builds, tests and scans images before pushing them to ECR, and Argo CD syncs Helm releases from Git, so what runs in the cluster always matches the repo. Secrets are injected at runtime by the Vault Agent Injector instead of living in images or manifests.',
      features: ['Terraform-provisioned VPC and EKS', 'Jenkins build, test, SonarQube and Trivy scans', 'Argo CD GitOps sync of Helm releases', 'Vault Agent Injector for runtime secrets', 'Istio mTLS between services', 'Grafana dashboards for latency, traffic, errors and saturation'],
      flow: ['git push', 'Jenkins', 'Sonar + Trivy', 'ECR', 'Argo CD', 'EKS'],
      stack: ['Terraform', 'EKS', 'ECR', 'Jenkins', 'Argo CD', 'Helm', 'Vault', 'SonarQube', 'Trivy', 'Istio', 'Prometheus', 'Grafana'],
      palette: ['#3A0508', '#E50914'],
      motif: 'rings',
    },
    {
      id: 'mcp-triage',
      title: 'AI-Assisted Incident Triage',
      category: 'AIOps · MCP · LLM',
      status: 'In progress',
      summary: '"Why is this pod restarting?" Ask the LLM. It brings the evidence.',
      detail: 'Gives on-call engineers one place to ask why something is failing. A Python Model Context Protocol server exposes Kubernetes events, Prometheus metrics and recent logs to an LLM, so an on-call engineer can ask a plain question and get the relevant evidence plus suggested runbook steps.',
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
      flow: ['git push', 'GitHub Actions', 'validate', 'deploy-pages', 'kumbham8888.github.io/portfolio'],
      stack: ['GitHub Actions', 'GitHub Pages', 'HTML', 'CSS', 'JavaScript'],
      palette: ['#2A0A0A', '#B20710'],
      motif: 'stack',
    },
  ],

  /* Skills, grouped as on the resume. */
  skills: [
    { name: 'CI/CD & Release', items: ['Jenkins', 'Harness', 'Tekton', 'GitHub Actions', 'GitLab CI', 'Azure DevOps', 'Argo CD', 'Maven', 'Gradle', 'Artifactory', 'Nexus'] },
    { name: 'Infrastructure as Code', items: ['Terraform', 'CloudFormation', 'ARM Templates', 'Ansible', 'Tower / AWX'] },
    { name: 'Containers', items: ['Docker', 'Kubernetes', 'OpenShift', 'Amazon EKS', 'Azure AKS', 'Helm', 'Istio'] },
    { name: 'Cloud', items: ['AWS EC2 · VPC · IAM', 'S3 · RDS · Lambda', 'EKS · ECS · ECR', 'Route 53 · CloudWatch', 'Azure AKS · Key Vault', 'Azure Monitor'] },
    { name: 'DevSecOps', items: ['SonarQube', 'Snyk', 'Checkmarx', 'BlackDuck', 'Trivy', 'HashiCorp Vault', 'Azure Key Vault', 'IAM / RBAC', 'SSL/TLS', 'SOX · PCI-DSS · NERC CIP'] },
    { name: 'Observability & SRE', items: ['Prometheus', 'Grafana', 'ELK', 'Splunk', 'AppDynamics', 'CloudWatch', 'Azure Monitor', 'PagerDuty', 'SLO alerting', 'RCA'] },
    { name: 'Languages & OS', items: ['Python', 'Bash', 'PowerShell', 'YAML', 'SQL', 'Go (working)', 'Java (working)', 'RHEL 7/8/9', 'Ubuntu', 'Windows Server'] },
    { name: 'Process & AI Tools', items: ['Git · GitFlow', 'ServiceNow', 'Jira', 'Confluence', 'CAB', 'Agile', 'GitHub Copilot', 'LLM log analysis', 'MCP'] },
  ],

  certifications: [
    { name: 'AWS Certified Developer – Associate', issuer: 'Amazon Web Services', dates: 'Issued Oct 2024 · Valid to Oct 2027', badge: 'AWS' },
  ],
  education: [
    { name: 'Master of Science in Computer Science', issuer: 'Lewis University', dates: 'Romeoville, Illinois', badge: 'MS' },
  ],
};
