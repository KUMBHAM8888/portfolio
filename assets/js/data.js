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
    { title: 'AWS DevSecOps Engineer · NextEra Energy', sub: 'Securing AWS accounts, EKS and pipelines for grid operations', tag: 'Current role', target: 'experience', job: 3, palette: ['#3A0508', '#E50914'], motif: 'rings' },
    { title: 'AI-Assisted Incident Triage', sub: 'MCP + RAG for on-call engineers', tag: 'In use on-call', target: 'projects', project: 'mcp-triage' },
    { title: 'This portfolio website', sub: 'Next: Terraform on S3 + CloudFront', tag: 'Live · v2 planned', target: 'projects', project: 'this-site' },
  ],

  /* Key Results: the numbers recruiters ask about. */
  results: [
    { value: '30%', label: 'faster on-call mean time to identify', where: 'MCP triage tools · NextEra Energy' },
    { value: '35%', label: 'higher outage-map API availability', where: 'AWS WAF + SLO alerting · NextEra Energy' },
    { value: '25+', label: 'outage microservices moved to EKS and OpenShift, zero downtime', where: 'Grid platform migration' },
    { value: '<1h', label: 'releases, down from 4 hours', where: 'Grid platform migration' },
    { value: '15h', label: 'saved every week on patching', where: 'SSM Patch Manager + Ansible · NextEra Energy' },
    { value: '40+', label: 'services on shared CI/CD templates', where: 'Azure DevOps · Medtronic' },
    { value: '25%', label: 'fewer deployment failures', where: 'Azure DevOps templates · Medtronic' },
    { value: '200+', label: 'vulnerabilities fixed for HIPAA audits', where: 'With InfoSec · Medtronic' },
    { value: '18%', label: 'lower AWS costs', where: 'Rightsizing + S3 lifecycle · Mindtree LTI' },
  ],

  /* Experience, oldest first. The site lists every role, newest first, like LinkedIn.
     A company with more than one role can use `positions` (newest first) instead of role/description/tools. */
  experience: [
    {
      company: 'Mindtree LTI', role: 'Cloud Engineer', years: 'April 2020 – Jul 2022', short: '2020 – 2022', location: 'Hyderabad, India',
      project: 'Network Analytics Cloud Migration',
      description: [
        'Moved network-analytics reporting apps off data-center VMs to AWS, building VPCs, subnets, NAT and VPN in CloudFormation. I migrated MySQL and PostgreSQL reporting databases to Amazon RDS with AWS DMS, timing cutovers around reporting runs, and put the migrated apps behind Application Load Balancers and Auto Scaling groups spread across two Availability Zones.',
        'I wrote Ansible playbooks for hardened server builds, taking new server setup from a full day to under 2 hours, and containerized legacy Java apps with Docker to run on ECS Fargate, with Jenkins CI/CD pushing images to ECR. EC2 rightsizing, S3 lifecycle rules and nightly shutdown of idle dev instances lowered AWS costs by 18%.',
        'I set up CloudWatch alarms, dashboards and SNS alerts for CPU, disk, RDS connections and failed batch jobs, scheduled EBS snapshots and RDS backups, and tested a full restore before each major cutover. During migration waves I fixed connectivity issues across security groups, NACLs, route tables and the VPN tunnel. I also wrote Terraform for a client\u2019s GCP workloads (VPC, Compute Engine, GKE, Cloud Storage) alongside the AWS estate.',
      ],
      tools: ['AWS VPC · EC2 · RDS', 'DMS', 'ALB · Auto Scaling', 'ECS Fargate · ECR', 'CloudFormation', 'Terraform', 'GCP', 'Ansible', 'Docker', 'Jenkins', 'CloudWatch · SNS', 'MySQL', 'PostgreSQL'],
    },
    {
      company: 'Medtronic', role: 'DevOps Engineer', years: 'May 2023 – Jun 2024', short: '2023 – 2024', location: 'Austin, TX',
      project: 'Connected Care Platform CI/CD & Cloud Infrastructure',
      description: [
        'Standardized CI/CD on Azure DevOps, AKS and OpenShift for device-telemetry and patient-data services. I built Azure DevOps YAML templates used by 40+ services and moved 5 teams off Jenkins, cutting deployment failures by 25%, and provisioned AKS clusters with VNets, Key Vault and Private Link from reusable Terraform modules with locked remote state and a required plan review, cutting setup time by 40%.',
        'I deployed device-telemetry services to AKS and OpenShift with Helm blue-green releases, so rollback was a traffic switch, and tuned the AKS autoscaler and HPA so ML inference and telemetry services handled sync peaks and scaled down overnight. I enforced SonarQube, Checkmarx and BlackDuck gates and fixed 200+ vulnerabilities with InfoSec for HIPAA audits, and debugged failed rollouts (CrashLoopBackOff, image pull errors, failing readiness probes) with kubectl, logs and events.',
        'I set up Azure OpenAI behind private endpoints and API Management, keeping PHI out of a LangChain RAG pilot. I also configured Prometheus, Grafana and Azure Monitor alerts for patient-facing APIs with critical alerts routed to PagerDuty, ran production changes through ServiceNow CAB with validated rollback steps, and reported DORA metrics each sprint.',
      ],
      tools: ['Azure DevOps', 'AKS', 'OpenShift', 'Terraform', 'Helm', 'Key Vault · Private Link', 'API Management', 'Azure OpenAI', 'LangChain', 'SonarQube', 'Checkmarx', 'BlackDuck', 'Prometheus', 'Grafana', 'Azure Monitor', 'PagerDuty'],
    },
    {
      company: 'Duke Energy', role: 'Cloud Security Engineer', years: 'July 2024 – Jun 2025', short: '2024 – 2025', location: 'North Carolina',
      project: 'AWS Security Baseline & Grid Platform Migration',
      description: [
        'Built the security controls for the AWS accounts and EKS clusters that took on outage services and the first AI workloads. I set up a central logging account where org-wide CloudTrail, VPC Flow Logs and Config history land in S3 with Object Lock, and wrote AWS Config rules with Lambda auto-remediation that blocked public S3 access and turned EBS encryption back on.',
        'I hardened 25+ outage microservices moving to EKS and OpenShift with RBAC, NetworkPolicies and Pod Security Standards, and moved EKS and EC2 access behind private endpoints and SSM Session Manager, which let us retire the SSH bastion hosts. For AI workloads, I reviewed Terraform for GPU-enabled EKS node groups, used IRSA roles and taints to keep them isolated, and secured them with Vault, least-privilege IAM and VPC endpoints for S3, ECR and Bedrock, closing NERC CIP findings.',
        'I rolled out KMS customer-managed keys for RDS, S3 and EBS with key policies scoped to each application team, ran quarterly IAM access reviews with InfoSec to remove stale users, unused roles and old access keys, and pulled NERC CIP audit evidence from Config, CloudTrail and ServiceNow change records. I documented security standards and runbooks in Confluence and walked app teams through findings in plain language.',
      ],
      tools: ['AWS Organizations', 'CloudTrail', 'AWS Config · Lambda', 'S3 Object Lock', 'EKS', 'OpenShift', 'IRSA', 'KMS', 'SSM Session Manager', 'HashiCorp Vault', 'Bedrock', 'Terraform', 'ServiceNow', 'Confluence'],
    },
    {
      company: 'NextEra Energy', role: 'AWS DevSecOps Engineer', years: 'July 2025 – Present', short: '2025 – Now', location: 'Juno Beach, FL',
      project: 'AWS DevSecOps for Grid Operations Platforms',
      description: [
        'Securing the AWS accounts, EKS clusters and delivery pipelines behind outage, grid-operations and internal AI services. I run Checkov and tfsec on every Terraform pull request, blocking public S3 buckets, open security groups and unencrypted volumes, and replaced long-lived AWS keys in GitHub Actions with OIDC roles, with app secrets moved into Secrets Manager under KMS. Images are scanned with Trivy and Amazon Inspector in ECR, signed with cosign, and unsigned images are blocked on EKS with Kyverno.',
        'I manage Security Hub, GuardDuty and AWS Config across accounts, triaging findings by severity with an owner for each fix, enforce SCPs through AWS Organizations, and trim over-broad IAM and IRSA roles using IAM Access Analyzer findings. I map AWS controls to SOC 2, ISO 27001 and CMMC and automate audit evidence collection from AWS Config and CloudTrail. Putting AWS WAF in front of the public outage-map API and adding SLO-based alerting raised its availability by 35%.',
        'I handle P1/P2 and GuardDuty incidents on-call, and built MCP triage tools that cut mean time to identify by about 30%. I patch RHEL and Amazon Linux with SSM Patch Manager and Ansible against CIS baselines, saving about 15 hours a week, and use AI coding agents to draft Terraform modules and Python tooling, with every change still going through pull request review.',
      ],
      tools: ['Checkov', 'tfsec', 'GitHub Actions · OIDC', 'Secrets Manager · KMS', 'Trivy', 'Amazon Inspector', 'cosign', 'Kyverno', 'EKS', 'Security Hub', 'GuardDuty', 'AWS Config', 'AWS Organizations · SCPs', 'IAM Access Analyzer', 'AWS WAF', 'SSM Patch Manager', 'Ansible', 'Python'],
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
      category: 'AIOps · MCP · RAG',
      status: '30% faster MTTI',
      summary: '"Why is this pod restarting?" Ask the LLM. It brings the evidence and the runbook steps.',
      detail: 'A Python Model Context Protocol server that gives an LLM read-only access to Kubernetes events, Prometheus metrics, logs and a RAG index of runbooks. An on-call engineer asks a plain question and gets the relevant evidence plus the runbook steps in one answer. MCP triage tools like this cut on-call mean time to identify by about 30% at NextEra Energy.',
      features: ['MCP server written in Python', 'Read-only access to Kubernetes events through the K8s API', 'Pulls Prometheus metrics for the affected workload', 'Surfaces recent logs next to the metrics', 'RAG index of runbooks for the suggested fix'],
      flow: ['on-call question', 'LLM', 'MCP server', 'K8s API · Prometheus · logs · runbook RAG'],
      stack: ['Python', 'MCP', 'LLM', 'RAG', 'Kubernetes API', 'Prometheus API'],
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
    { name: 'Cloud Platforms', items: ['AWS EC2 · VPC · IAM · S3', 'EKS · ECR · ECS Fargate', 'Lambda · RDS · DMS', 'Route 53 · ALB · Auto Scaling', 'CloudWatch', 'Bedrock · SageMaker', 'Azure AKS · VMs · VNet', 'Key Vault · Private Link', 'API Management · Azure OpenAI', 'GCP Compute Engine · GKE', 'Cloud Storage · IAM'] },
    { name: 'Containers & Orchestration', items: ['Docker', 'Kubernetes', 'Amazon EKS', 'Azure AKS', 'Red Hat OpenShift', 'Helm', 'Istio', 'Karpenter', 'KEDA', 'HPA'] },
    { name: 'CI/CD & GitOps', items: ['GitHub Actions', 'Azure DevOps', 'Jenkins', 'GitLab CI', 'Harness', 'Tekton', 'Argo CD', 'Maven', 'JFrog Artifactory'] },
    { name: 'Infrastructure as Code', items: ['Terraform', 'CloudFormation', 'ARM Templates', 'Ansible (AWX/Tower)', 'Git', 'GitHub', 'Bitbucket'] },
    { name: 'AWS Security', items: ['Security Hub', 'GuardDuty', 'Inspector', 'AWS Config', 'CloudTrail', 'IAM Access Analyzer', 'Organizations SCPs', 'KMS', 'Secrets Manager', 'WAF', 'SSM'] },
    { name: 'DevSecOps & Compliance', items: ['Checkov', 'tfsec', 'Trivy', 'Snyk', 'SonarQube', 'Checkmarx', 'BlackDuck', 'cosign', 'Kyverno', 'HashiCorp Vault', 'GitHub OIDC', 'RBAC', 'Pod Security Standards', 'CIS', 'SOC 2 · ISO 27001', 'CMMC · HIPAA', 'FDA 21 CFR Part 11', 'NERC CIP'] },
    { name: 'Monitoring & Observability', items: ['Prometheus', 'Grafana', 'Splunk', 'ELK Stack', 'CloudWatch', 'Azure Monitor', 'OpenTelemetry', 'Langfuse', 'PagerDuty'] },
    { name: 'AI Platform & LLMOps', items: ['AI coding agents', 'vLLM', 'KServe', 'LiteLLM', 'Azure OpenAI', 'Amazon Bedrock', 'Llama 3', 'RAG', 'MCP', 'LangChain', 'pgvector', 'OpenSearch', 'MLflow', 'RAGAS', 'NeMo Guardrails', 'Presidio'] },
    { name: 'Scripting & OS', items: ['Python', 'Bash', 'PowerShell', 'YAML', 'SQL', 'Go', 'RHEL 7/8/9', 'Ubuntu', 'Amazon Linux', 'Windows Server'] },
    { name: 'ITSM & Process', items: ['ServiceNow', 'Jira', 'Confluence', 'Agile/Scrum', 'ITIL change management (CAB)', 'Incident management', 'RCA'] },
  ],

  certifications: [
    { name: 'AWS Certified Developer – Associate', issuer: 'Amazon Web Services', dates: 'Issued Oct 2024 · Expires Oct 2027', badge: 'AWS' },
  ],
  education: [
    { name: 'Master of Science in Computer Science', issuer: 'Lewis University', dates: 'Aug 2022 – May 2024 · Romeoville, Illinois', badge: 'MS' },
  ],
};
