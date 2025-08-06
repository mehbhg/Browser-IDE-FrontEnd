# CoPanda

 Tech Stack: React (Vite), TailwindCSS, ShadCN, Node.js, MongoDB, Docker, Azure VM, GitHub OAuth

 Browser-based IDE & DSA contest platform with real-time compilation and resource isolation

 Built from scratch a scalable, full-stack web app enabling users to participate in contests and practice data structures and algorithms.

 Frontend developed using React (Vite), styled with TailwindCSS & ShadCN for clean UI and responsiveness.

 Backend powered by Node.js and MongoDB, with Docker containers for language-specific code execution and sandboxing.

 Integrated GitHub OAuth login for passwordless authentication and rate limiting to prevent abuse.

 Designed a job queue system to distribute compilation tasks, preventing VM overload and ensuring reliable performance.

 Deployed frontend on Cloudflare Pages, backend on Render, and code executor VM on Azure.

 Collaborative project built with a 3-member team over several weeks with version control via GitHub.

**P.S.:**  
The frontend is deployed on Cloudflare Pages, the backend on Render, and one VM is running on Azure.

**Frontend Repo:** [Link](https://github.com/dhs26206/Browser-IDE-FrontEnd)  
**Backend Repo:** [Link](https://github.com/manpreet-singh1040/ashleel-backend)  
**Project Preview:** [Link](https://code.ddks.tech)

## Features

1. **Docker Images:** Used for compilation and output purposes, ensuring isolation and reducing spam.

2. **Login with GitHub OAuth:** Users don’t have to remember passwords—just log in using GitHub.

3. **Rate Limiter:** Implemented at the backend to prevent exploitation.

4. **Queue System:** Ensures our VM doesn’t get overwhelmed by managing the load efficiently.

