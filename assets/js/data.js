/*
 * Sai Teja K portfolio · all site content lives in this one file.
 * Every fact here comes from Sai Teja's resume. Edit this file and the whole site updates.
 */
window.SITE = {
  profile: {
    name: 'Sai Teja K',
    email: 'tejakumbham@gmail.com',
    linkedin: 'https://www.linkedin.com/in/saitejagoudk/',
    github: 'https://github.com/KUMBHAM8888',
    resume: 'assets/Sai_Teja_K_Resume.pdf',
    photo: 'assets/photo.jpg',
  },

  /* Order of the sections below the banner. */
  order: ['focus', 'results', 'experience', 'projects', 'skills', 'credentials'],

  /* Current Focus: what's in progress right now. */
  focus: [
    { title: 'Site Reliability Analyst · NextEra Energy', sub: 'On-call and reliability for grid services', tag: 'Current role', target: 'experience', job: 2, palette: ['#3A0508', '#E50914'], motif: 'rings' },
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

  /* Experience, oldest first. The site lists every role, newest first, like LinkedIn.
     A company with more than one role uses `positions` (newest first) instead of role/description/tools. */
  experience: [
    {
      company: 'Verizon', role: 'Cloud Engineer', years: 'Jan 2021 – Jun 2022', short: '2021 – 2022',
      project: 'Network Analytics Cloud Migration',
      description: [
        'Provisioned EC2, VPC, IAM, S3 and RDS to move network-analytics reporting apps off data-center VMs to AWS. I right-sized EC2 from CloudWatch metrics and moved old reports to Glacier with S3 lifecycle rules, cutting costs by 18%, and wrote Ansible playbooks for standard server builds (users, packages, monitoring agents, OS hardening), bringing new server setup down from a full day to under 2 hours.',
        'I containerized legacy Java applications with Docker and set up Jenkins jobs with Maven and Nexus, giving the team its first working CI pipelines. I also built CloudWatch alarms with SNS notifications for disk, CPU and application health checks, reducing incident response time by 30%, and handled Linux patching, backups and disaster-recovery validation.',
      ],
      tools: ['AWS EC2 · VPC · IAM', 'S3 · Glacier · RDS', 'CloudWatch · SNS', 'Ansible', 'Docker', 'Jenkins', 'Maven', 'Nexus', 'Bash', 'Linux'],
    },
    {
      company: 'JPMorgan Chase', role: 'DevOps Engineer', years: 'Mar 2023 – Jul 2024', short: '2023 – 2024',
      project: 'Payments Platform CI/CD Standardization',
      description: [
        'Standardized build and release for card-payments and treasury microservices on Azure DevOps, AKS and OpenShift. I built multi-stage Azure DevOps YAML pipelines from shared templates so 40+ Java and .NET services followed the same build, scan and deploy stages, reducing deployment failures by 25%, and provisioned AKS, VNets, Key Vault and load balancers with Terraform modules, cutting environment setup time by 40%.',
        'I packaged payments services as Helm charts for AKS and OpenShift, handling rolling updates, readiness and liveness probe tuning, and pod scaling during month-end processing peaks. I added SonarQube, Checkmarx and BlackDuck gates that failed builds on critical vulnerabilities or license issues and pulled pipeline evidence for SOX and PCI-DSS audits, and worked with InfoSec to remediate 200+ vulnerabilities by patching base images, upgrading libraries and rebuilding containers.',
        'I built Splunk dashboards and Prometheus and Grafana alerts on latency and error rates for faster triage on bridge calls. I also led the move of legacy Jenkins jobs to Azure DevOps with 5 application teams, wrote the Confluence runbooks, and set GitFlow branching and pull request policies across 6 teams.',
      ],
      tools: ['Azure DevOps', 'AKS', 'OpenShift', 'Terraform', 'Helm', 'Key Vault', 'SonarQube', 'Checkmarx', 'BlackDuck', 'Splunk', 'Prometheus', 'Grafana', 'Jenkins', 'Java', '.NET'],
    },
    {
      company: 'NextEra Energy', years: 'Aug 2024 – Present', short: '2024 – Now', location: 'Juno Beach, FL',
      positions: [
        {
          role: 'Site Reliability Analyst',
          project: 'Grid Operations Reliability',
          description: [
            'Keeping outage-management and meter-data services on EKS and OpenShift stable for control-room and field-crew users, especially during storm season. I’m part of the weekly on-call rotation for P1/P2 incidents through PagerDuty and ServiceNow: I triage the alert, pull logs from Splunk and CloudWatch, bring app teams onto the bridge call, then write the RCA and follow-up Jira tickets.',
            'I worked with app teams to define SLIs and SLOs (availability, p95 latency, error rate) for the outage-map and meter-read APIs and rebuilt the Prometheus and Grafana alerts around them, so on-call stopped getting paged for noisy CPU alerts and production availability improved by 35%. Before hurricane season, I tuned HPA settings and resource requests and limits for services that spike during storms and load-tested them with JMeter, so pods scale out before latency degrades.',
            'Day to day, I troubleshoot Kubernetes and OpenShift issues such as CrashLoopBackOff and OOMKilled pods, ImagePullBackOff from expired registry credentials, PVC mount failures and NotReady nodes, and turn each fix into a Confluence runbook. I wrote Ansible roles and Python/Bash scripts for monthly RHEL patching, log rotation, disk cleanup and health checks that used to be done by hand in weekend windows, saving roughly 15 engineering hours a week. I also review changes and rollback plans in the weekly ServiceNow CAB and mentor 3 junior engineers on on-call and Kubernetes.',
          ],
          tools: ['EKS', 'OpenShift', 'Kubernetes', 'PagerDuty', 'ServiceNow', 'Splunk', 'CloudWatch', 'Prometheus', 'Grafana', 'JMeter', 'Ansible', 'Python', 'Bash', 'RHEL', 'Jira', 'Confluence'],
        },
        {
          role: 'Cloud Infrastructure Analyst',
          project: 'Grid Operations Platform Modernization',
          description: [
            'Moved outage-management and meter-data microservices from on-prem RHEL servers to AWS EKS and Red Hat OpenShift. I built modular Terraform for VPC, subnets, EKS, IAM and RDS with remote state in S3 and DynamoDB locking, with every change going through a pull request and a reviewed terraform plan, cutting manual provisioning effort by 60%. I migrated 25+ microservices in waves, running old and new side by side and shifting traffic with Route 53 weighted records, with no customer-facing downtime.',
            'I ran EKS upgrades across dev, QA and prod (deprecated API checks, add-on upgrades, node groups rolled one at a time) and fixed pods stuck in Pending from subnet IP exhaustion with VPC CNI prefix delegation. I moved application secrets out of config files into HashiCorp Vault with dynamic database credentials, tightened IAM roles (IRSA) and Security Groups, and automated SSL/TLS renewal, closing NERC CIP audit findings.',
            'I set up RDS automated snapshots, multi-AZ failover and S3 versioning, and ran twice-yearly DR tests that restored a production database copy and measured recovery time against target. I also built Jenkins and GitHub Actions pipelines with SonarQube, Snyk and Trivy gates, plus Harness canary deployments with automatic rollback, reducing failed deployments by 40% and release windows from about 4 hours to under 1.',
          ],
          tools: ['AWS EKS · VPC · IAM · RDS', 'S3 · DynamoDB', 'Route 53', 'OpenShift', 'Terraform', 'HashiCorp Vault', 'Jenkins', 'GitHub Actions', 'Harness', 'SonarQube', 'Snyk', 'Trivy'],
        },
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
