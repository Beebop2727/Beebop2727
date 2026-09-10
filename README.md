<h1 align="center">Welcome, I'm Harry 👋</h1>

<p align="center">
  <b>Cyber Security & Digital Forensics Student</b> based in Bournemouth, UK
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/harry-watson-computing/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
  <a href="mailto:harry.watson2727@gmail.com"><img src="https://img.shields.io/badge/Student-Email-green?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/></a>
</p>

---

### About Me

I'm a final-year **Cyber Security with Digital Forensics** student at Bournemouth University, with a strong interest in practical security, systems administration, networking, incident response, virtualisation, digital forensics, and secure application development.

My work spans both software and infrastructure, from developing web and augmented reality projects to building and documenting practical cyber labs, workstation platforms, networking experiments, and security tooling.

My previous **Proxmox Workstation Platform** reached **V2** and is now **deprecated as my primary workstation architecture**. It remains documented as a completed engineering and virtualisation project, but I have moved away from running the everyday desktop on top of a dedicated hypervisor.

My current infrastructure project is the **Ryoku-Based Cyber Workstation**: a bare-metal Linux workstation designed to combine everyday desktop use, native Linux gaming, cybersecurity labs, virtualisation, containers, homelab management, networking experiments, and GPU passthrough on a single system.

I enjoy understanding how systems work, identifying where they can fail, and designing solutions that are secure, reliable, practical, and well-documented.

* Open to graduate opportunities, internships, collaboration, and continued learning
* Building a public 12-month cybersecurity portfolio
* Interested in SOC operations, networking, Linux, infrastructure, digital forensics, and offensive security
* Based in **Bournemouth, UK**

---

### Recently Updated Repositories

<!-- RECENT-REPOS:START -->
| Repository | Description | Main language | Last pushed |
|---|---|---|---|
| [**ryoku-based-cyber-workstation**](https://github.com/Beebop2727/ryoku-based-cyber-workstation) | the WIP repo for my cybersecurity and personal workstation | — | 2026-09-07 |
| [**cybersecurity-portfolio-year**](https://github.com/Beebop2727/cybersecurity-portfolio-year) | my cybersecurity portfolio year | — | 2026-09-04 |
| [**proxmox-workstation-platform**](https://github.com/Beebop2727/proxmox-workstation-platform) | version 2 of my proxmox workstation for virtulisation and gaming | — | 2026-09-04 |
| [**vast-shell-ubuntu**](https://github.com/Beebop2727/vast-shell-ubuntu) | WIP fork of vast-shell but rewired for ubuntu hyprland | QML | 2026-09-03 |
| [**thunderscope-dashboard**](https://github.com/Beebop2727/thunderscope-dashboard) | Warthunder dashboard made clean using the data exposed via port 8111 | Python | 2026-08-18 |
| [**WindyWaves-mockup-website**](https://github.com/Beebop2727/WindyWaves-mockup-website) | A mockup of a website used for an assignment | HTML | 2026-08-18 |
<!-- RECENT-REPOS:END -->

<sub>Automatically refreshed every day from my public GitHub repositories.</sub>

---

### Featured Projects

| Project                                                                                          | Description                                                                                                                                                                                                                                  | Tech                                                   |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [**ryoku-based-cyber-workstation**](https://github.com/Beebop2727/ryoku-based-cyber-workstation) | Active successor to the Proxmox platform. Bare-metal Ryoku Linux workstation combining daily desktop use, native gaming, cybersecurity labs, KVM virtualisation, containers, homelab management, networking experiments, and GPU passthrough | Ryoku Linux, Hyprland, KVM/QEMU, libvirt, VFIO, Docker |
| [**proxmox-workstation-platform**](https://github.com/Beebop2727/proxmox-workstation-platform)   | Deprecated primary architecture and completed V2 engineering project documenting dual-GPU passthrough, Windows/Linux VMs, Looking Glass, OPNsense, WireGuard, monitoring, and isolated security environments                                 | Proxmox, Linux, KVM/QEMU, VFIO, OPNsense               |
| [**cybersecurity-portfolio-year**](https://github.com/Beebop2727/cybersecurity-portfolio-year)   | 12-month public cybersecurity portfolio covering labs, security operations, governance, incident response, forensics, and secure development                                                                                                 | Cybersecurity, Labs, Documentation                     |
| [**thunderscope-dashboard**](https://github.com/Beebop2727/thunderscope-dashboard)               | War Thunder telemetry dashboard using locally exposed game data for maps, flight information, alerts, and supporting tools                                                                                                                   | Python, Web UI, Telemetry                              |
| [**SurveyingAR**](https://github.com/avidh7/SurveyingAR)                                         | AR-assisted maintenance system for the London Underground                                                                                                                                                                                    | Node.js, Prisma, Vite, WebXR                           |
| [**amelia-earhart-chatbot**](https://github.com/oli4406/amelia-earhart-chatbot)                  | Conversational chatbot built for a software engineering assignment (contributor)                                                                                                                                                             | Python / JavaScript                                    |
| [**WindyWaves-mockup-website**](https://github.com/Beebop2727/WindyWaves-mockup-website)         | Front-end mock-up built for a coursework assignment                                                                                                                                                                                          | HTML, CSS                                              |

> *Browse my full repo list [here](https://github.com/Beebop2727?tab=repositories)*

---

### Current Infrastructure Direction

> [!IMPORTANT]
> **Proxmox is deprecated as the primary workstation architecture.** The V2 repository remains available as a completed learning and engineering project, while active development has moved to the **Ryoku-Based Cyber Workstation**.

The Proxmox project successfully demonstrated:

* GPU passthrough
* Linux and Windows workstation VMs
* Looking Glass
* OPNsense networking
* WireGuard management
* Monitoring
* Backup and recovery
* Disposable security environments

It also exposed an important design trade-off: placing a dedicated hypervisor underneath an everyday workstation introduced unnecessary compromises for native Linux gaming, direct hardware access, desktop simplicity, and general day-to-day use.

The successor project therefore reverses the architecture:

```text
Previous — deprecated workstation model:
Hardware → Proxmox VE → Linux / Windows / Security VMs

Current — active workstation model:
Hardware → Ryoku Linux
         ├─ Native desktop / gaming / development
         ├─ KVM/QEMU/libvirt → Cyber & Windows VMs
         ├─ Containers / local services
         └─ Homelab management / monitoring
```

The guiding principle for the new build is:

> **Virtualisation should support the workstation, not become the workstation.**

Ryoku now has direct access to the **RTX 4070** for the Linux desktop, gaming, CUDA/AI, and general GPU workloads. The **Radeon Pro WX 3100** remains available for VFIO and guest GPU-passthrough experimentation where useful.

The active project is documented here: **[ryoku-based-cyber-workstation](https://github.com/Beebop2727/ryoku-based-cyber-workstation)**.

---

### 12-Month Cybersecurity Portfolio — August to July

Working through one project per month to build a public portfolio covering the full spectrum of cybersecurity — from hands-on technical labs to governance, incident response, digital forensics, and a capstone assessment.

Each project produces a GitHub repository, write-up, and LinkedIn post.

> 📁 Full portfolio repo: [cybersecurity-portfolio-year](https://github.com/Beebop2727/cybersecurity-portfolio-year)

| Month     | Project                                     | Status                               |
| --------- | ------------------------------------------- | ------------------------------------ |
| August    | Proxmox Personal Cyber Lab Build            | ✅ Complete / Deprecated architecture |
| September | Ryoku Cybersecurity Workstation & Lab Build | 🚧 In progress                       |
| October   | OWASP Top 10 mini-series                    | 🔜 Upcoming                          |
| November  | Vulnerability management dashboard          | 🔜 Upcoming                          |
| December  | Healthcare cyber risk register              | 🔜 Upcoming                          |
| January   | Ransomware incident response playbook       | 🔜 Upcoming                          |
| February  | SIEM detection project                      | 🔜 Upcoming                          |
| March     | Phishing awareness campaign                 | 🔜 Upcoming                          |
| April     | Cloud security baseline                     | 🔜 Upcoming                          |
| May       | Digital forensics mini-case                 | 🔜 Upcoming                          |
| June      | Secure coding review                        | 🔜 Upcoming                          |
| July      | Cyber resilience capstone                   | 🔜 Upcoming                          |

---

<p align="center">
  <i>"Security is a process, not a product." — Bruce Schneier</i>
</p>

<p align="center">
  Reach out on <a href="https://www.linkedin.com/in/harry-watson-computing/">LinkedIn</a>.
</p>
