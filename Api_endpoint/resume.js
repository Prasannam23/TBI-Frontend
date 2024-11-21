\documentclass[letterpaper,11pt]{article}
\usepackage{fontawesome}
\usepackage[hidelinks]{hyperref}
\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage[english]{babel}
\usepackage{tabularx}
\input{glyphtounicode}
\usepackage{graphicx}
\usepackage{fancyhdr}

% Adjust margins for better spacing
\addtolength{\oddsidemargin}{-0.6in}
\addtolength{\evensidemargin}{-0.6in}
\addtolength{\textwidth}{1.2in}
\addtolength{\topmargin}{-.6in}
\addtolength{\textheight}{1.2in}

% Reduce section spacing and add dividing line after each section
\titleformat{\section}{\vspace{-4pt}\scshape\raggedright\large}{}{0em}{\titlerule \vspace{-5pt}}
\pdfgentounicode=1

% Custom commands for formatting
\newcommand{\resumeItem}[1]{\item\small{#1 \vspace{-2pt}}}
\newcommand{\resumeSubheading}[4]{\vspace{-2pt}\item\begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}\textbf{#1} & #2 \\ \textit{\small#3} & \textit{\small #4} \end{tabular*}\vspace{-7pt}}
\newcommand{\resumeSubSubheading}[2]{\item\begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}\textit{\small#1} & \textit{\small #2} \end{tabular*}\vspace{-7pt}}
\newcommand{\resumeProjectHeading}[2]{\item\begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}\small#1 & #2 \end{tabular*}\vspace{-7pt}}
\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.15in, label={}]}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
\newcommand{\resumeItemListStart}{\begin{itemize}}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}

% Resume begins
\begin{document}

%----------HEADING----------
\begin{center}
    \textbf{\Huge \scshape Praveen Kumar} \\ \vspace{1pt}
    \href{tel:+918534877688}{+91 7985643966} $|$ 
    \href{mailto:Praveencena101@gmail.com}{Praveencena101@gmail.com} $|$ 
    \href{https://www.linkedin.com/in/praveen-chaudhary-486871249}{LinkedIn: praveen-chaudhary} $|$
    \href{https://leetcode.com/u/Praveen_chhonker_18/}{Leetcode: Praveen_chhonker_18}
\end{center}

%-----------EDUCATION-----------
\section{Education}
  \resumeSubHeadingListStart
    \resumeSubheading
      {KIET Group of Institutions}{Ghaziabad, India}
      {Bachelor of Technology in Computer Science; CGPA: 8.7/10}{Oct 2022 -- Present}
    \resumeSubheading
      {Shivaji Group of Institutions}{Kanpur, India}
      {Intermediate (12th Grade) Percentage: 88.4\%}{Graduated: 2022}
  \resumeSubHeadingListEnd

%-----------PROJECTS-----------
\section{Projects}
  \resumeSubHeadingListStart
    \resumeProjectHeading
      {\textbf{Hospital Management System} | \emph{Next.js, TypeScript, Tailwind CSS, Node.js, MongoDB}}{Dec 2023}
      \resumeItemListStart
        \resumeItem{Developed a comprehensive hospital management system that supports patient management, appointment scheduling, and billing.}
        \resumeItem{Implemented secure user authentication for doctors, patients, and administrative staff with role-based access control.}
        \resumeItem{Designed an intuitive dashboard with real-time updates on patient status, appointment schedules, and hospital resources.}
        \resumeItem{Optimized backend queries to handle large datasets, improving system performance and reducing response time by 30\%.}
        \resumeItem{Integrated email notifications for appointment reminders, patient discharge, and billing confirmations, enhancing communication efficiency.}
      \resumeItemListEnd
  \resumeSubHeadingListEnd
      
    \resumeProjectHeading
      {\textbf{NSCC Website} \href{https://nscckiet.vercel.app/}{\faLink} | \emph{Next.js, Node.js, REST API}}{Dec 2023}
      \resumeItemListStart
        \resumeItem{Developed a full-stack application for Newton School Coding Club (NSCC) with event scheduling and resource-sharing functionalities.}
        \resumeItem{Automated content updates for 500+ members, reducing manual effort by 50\% through custom REST API integrations.}
        \resumeItem{Revamped UI/UX, increasing member engagement and activity by 25\%.}
      \resumeItemListEnd
  \resumeSubHeadingListEnd

%-----------LEADERSHIP-----------
\section{Leadership}
  \resumeSubHeadingListStart
    \resumeSubheading
      {Newton School Coding Club (NSCC)}{Ghaziabad, India}
      {Coordinator}{May 2023 -- Present}
      \resumeItemListStart
        \resumeItem{Organized coding events, skill development workshops, and web development seminars for 500+ members.}
        \resumeItem{Facilitated workshops on web technologies, mentoring 200+ students in hands-on web development projects.}
        \resumeItem{Oversaw development of NSCC website, integrating YouTube API for content delivery, saving 100+ hours of manual updates.}
      \resumeItemListEnd
  \resumeSubHeadingListEnd

%-----------TECHNICAL SKILLS-----------
\section{Technical Skills}
  \resumeSubHeadingListStart
    \resumeItem{\textbf{Languages:} JavaScript, TypeScript, Java, HTML5, CSS3, SQL, MongoDB}
    \resumeItem{\textbf{Frameworks \& Libraries:} React.js, Next.js, Node.js, Tailwind CSS, Express.js}
    \resumeItem{\textbf{Tools:} Git, GitHub, VS Code, Postman}
    \resumeItem{\textbf{Technologies:} REST APIs, Cookie-based Authentication, Redux, Server-side Rendering (SSR), State Management}
  \resumeSubHeadingListEnd

  %-----------CODING PROFILES-----------
  \section{Coding Profiles}
    \resumeSubHeadingListStart
      \resumeItem{\textbf{Leetcode:} \href{https://leetcode.com/u/adarsh1278/}{\faLink} (170++ solved problems)}
    \resumeSubHeadingListEnd
  
  \end{document}
