/**
 * ============================================================================
 *  portfolioData.js  —  EDIT THIS FILE TO UPDATE THE WEBSITE
 * ============================================================================
 *
 *  Everything a visitor reads on the site comes from this one file.
 *  You never have to touch the layout or styling code to update content.
 *
 *  Anything written as "REPLACE ..." or "PLACEHOLDER" is meant to be swapped
 *  for real information before the site is shared with colleges.
 *
 *  Icon names (the `icon:` fields) come from src/components/Icon.jsx.
 *  Open that file to see the full list of names you can use.
 * ============================================================================
 */

/* ---------------------------------------------------------------------------
 * 1. LINKS  —  update these three lines first
 * ------------------------------------------------------------------------ */
export const links = {
  // REPLACE with the real LinkedIn profile URL
  linkedin: 'https://www.linkedin.com/in/ayaan-panjani-88a9b940a',
  // REPLACE if the GitHub username ever changes
  github: 'https://github.com/ayaanpanjani5668',
  // REPLACE with the email address that should be shared with colleges
  email: 'ayaanpanjani@gmail.com',
}

/* ---------------------------------------------------------------------------
 * 2. HERO / IDENTITY
 * ------------------------------------------------------------------------ */
export const profile = {
  name: 'Ayaan Panjani',
  // Small pill shown above the name in the hero
  status: 'High school student · Class of 2027',
  headline: 'Future Engineer | Electronics, Robotics & Technology Enthusiast | Student Leader',
  intro:
    'I am a high school student passionate about robotics, engineering, technology, community service, and using what I learn to solve real-world problems.',
  // Drop your own photo at public/images/ayaan-profile.jpg (keep the same name
  // and nothing else needs to change).
  photo: '/images/ayaan-profile.jpg',
  photoAlt: 'Portrait of Ayaan Panjani',
  // Small caption shown under the portrait frame
  photoCaption: 'Class of 2027 · Engineering',
}

/* ---------------------------------------------------------------------------
 * 3. QUICK HIGHLIGHTS  —  the 3-4 cards under the hero
 * ------------------------------------------------------------------------ */
export const highlights = [
  {
    icon: 'robot',
    title: 'Engineering & Robotics',
    text: 'Arduino builds, sensors, and competitive robotics — I learn by making things work.',
  },
  {
    icon: 'hands',
    title: 'Community Volunteer',
    text: 'Animal rescue, library programs, and tutoring younger students year after year.',
  },
  {
    icon: 'soccer',
    title: 'Student Athlete',
    text: 'JV Soccer — practice, teamwork, and showing up for a team every season.',
  },
  {
    icon: 'medal',
    title: '3× Presidential Volunteer Service Award',
    text: 'Recognized three times for sustained hours of community service.',
  },
]

/* ---------------------------------------------------------------------------
 * 4. ABOUT ME
 * ------------------------------------------------------------------------ */
export const about = {
  heading: 'About Me',
  paragraphs: [
    'I enjoy understanding how things work and turning ideas into something I can build. Robotics and engineering have taught me that progress often comes from testing, failing, adjusting, and trying again.',
    'Outside the classroom, volunteering and athletics have taught me responsibility, teamwork, empathy, and persistence. Whether I am wiring a sensor, helping at an adoption event, or running drills at practice, I like work that has a result I can see.',
  ],
  // Short traits shown as small chips. Keep these honest and specific.
  traits: ['Curiosity', 'Persistence', 'Empathy', 'Teamwork', 'Initiative'],
}

/* ---------------------------------------------------------------------------
 * 5. ACADEMICS
 * ------------------------------------------------------------------------ */
export const academics = {
  subtitle: 'Building a foundation in mathematics, science, engineering, and technology.',
  // The four "fact" tiles. Delete a tile if you would rather not publish it
  // (for example, remove the SAT tile until you have a score to share).
  facts: [
    { icon: 'school', label: 'High School', value: 'Canton High School, CT' },
    { icon: 'calendar', label: 'Graduation Year', value: '2027' },
  ],
  coursework: [
    'Engineering Electives — Architecture, Vehicle Design, Transportation Systems, Woodworking, Alternative Energy',
    'Steadily increasing rigor — Precalculus to Honors Calculus and AP Physics',
    'Chemistry',
  ],
  honors: [
    'AP Physics',
    'Calculus Honors',
    'Biology Honors',
    'AP Computer Science — Virtual High School (self-directed, not offered at his school)',
  ],
  interests: [
    'Robotics Engineering',
    'Mechatronics',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Computer Engineering',
  ],
}

/* ---------------------------------------------------------------------------
 * 6. LEADERSHIP
 *    Add an activity by copying one { ... } block and editing it.
 *    Every field except `title` is optional — leave one out and the card
 *    simply will not show that row.
 * ------------------------------------------------------------------------ */
export const leadership = [
  {
    title: 'Neighborhood Robotics Boot Camp',
    role: 'Instructor',
    organization: 'Neighborhood Program',
    grades: 'Grade 12',
    icon: 'chip',
    description: 'Designed and taught a beginner robotics camp for neighborhood kids using Arduino and hands-on STEM activities.',
    impact: '2 hrs/week over 6 weeks.',
    skills: ['Leadership', 'Teaching'],
    image: '/images/project-placeholder.jpg',
  },
  {
    title: 'Camp Counselor',
    role: 'Counselor',
    organization: 'Overnight Summer Camp',
    grades: 'Grades 11–12',
    icon: 'users',
    description: 'Supervised and mentored children ages 8–12, planning activities and resolving conflicts as a role model.',
    impact: '40 hrs/week across 8 weeks each summer.',
    skills: ['Leadership', 'Communication'],
    image: '/images/camp-counselor.jpg',
    imageAlt: 'Camp counselor leading a group activity with campers seated on the floor',
  },
  {
    title: 'Robotics Club',
    role: 'Member',
    grades: 'Grades 9–12',
    icon: 'robot',
    description: 'Collaborated on robotics projects and engineering challenges, building programming and hardware integration skills.',
    impact: '1 hr/week, 30 weeks/year.',
    skills: ['Collaboration', 'Robotics'],
    image: '/images/project-placeholder.jpg',
  },
  {
    title: 'LinkedIn Engineering Portfolio',
    role: 'Creator',
    grades: 'Grade 11',
    icon: 'linkedin',
    description: 'Built a professional LinkedIn profile documenting engineering projects, leadership, and volunteer service.',
    skills: ['Professional Branding'],
    image: '/images/project-placeholder.jpg',
  },
  {
    title: 'GitHub Engineering Portfolio (Planned)',
    role: 'Creator',
    grades: 'Grade 11',
    icon: 'github',
    description: 'Publishing robotics and Arduino projects with documentation, code, photos, and engineering reflections.',
    skills: ['Git', 'Documentation'],
    image: '/images/project-placeholder.jpg',
  },
]

/* ---------------------------------------------------------------------------
 * 7. VOLUNTEERING  —  rendered as one 3-per-row grid, in this array order.
 *    `category` ('stem' or 'community') shows as a small badge on the card.
 *    `image` defaults to the shared placeholder — point it at a real photo
 *    any time.
 * ------------------------------------------------------------------------ */
export const volunteering = [
  {
    title: 'Young Scientist Program',
    role: 'Volunteer',
    organization: 'Local Library',
    dates: 'Grade 9',
    hours: '2 hrs/week, seasonal',
    icon: 'flask',
    category: 'stem',
    description: 'Led science experiments and STEM activities for elementary students at the local library.',
    impact: 'Skills: Public Speaking, Mentoring',
    image: '/images/project-placeholder.jpg',
  },
  {
    title: 'Math Homework Club',
    role: 'Tutor',
    dates: 'Grades 11–12',
    hours: '1 hr/week, 25 weeks/year',
    icon: 'chart',
    category: 'stem',
    description: 'Assisted classmates with mathematics homework and problem-solving.',
    impact: 'Skills: Mentoring, Math',
    image: '/images/project-placeholder.jpg',
  },
  {
    title: 'Animal Rescue & Foster Care',
    role: 'Volunteer / Caregiver',
    organization: 'Dog Star Rescue',
    dates: 'Grades 9–12',
    hours: 'Daily fostering + 2 hrs/week shelter volunteering (seasonal)',
    icon: 'dog',
    category: 'community',
    description:
      'Fostered rescue dogs at home — feeding, walking, and socializing — and volunteered at the shelter with adoption events and animal care.',
    impact: 'Skills: Responsibility, Empathy, Compassion',
    image: '/images/dog-star-rescue.jpg',
    imageAlt: 'Rescue dog wearing a Dog Star Rescue bandana at an adoption event',
  },
  {
    title: 'Library Volunteering',
    role: 'Teen Volunteer',
    organization: 'REPLACE — Public Library',
    dates: 'Grades 9–11',
    hours: 'REPLACE — e.g. 60 hours',
    icon: 'book',
    category: 'community',
    description:
      'Shelved and organized materials, helped run youth programs, and assisted visitors at the desk.',
    impact: 'REPLACE — Add a specific contribution.',
    image: '/images/project-placeholder.jpg',
  },
  {
    title: 'Book Buddy Program',
    role: 'Mentor',
    dates: 'Grade 9',
    hours: '2 hrs/week, seasonal',
    icon: 'bookOpen',
    category: 'community',
    description: 'Encouraged reading and literacy by mentoring younger students during summer reading activities.',
    impact: 'Skills: Mentoring, Communication',
    image: '/images/project-placeholder.jpg',
  },
  {
    title: 'Soup Kitchen',
    role: 'Volunteer',
    dates: 'Grades 9–12',
    hours: '3 hrs/week, seasonal',
    icon: 'utensils',
    category: 'community',
    description: 'Prepared meals, cleaned facilities, maintained the community garden, and supported food distribution.',
    impact: 'Skills: Service, Teamwork',
    image: '/images/project-placeholder.jpg',
  },
  {
    title: 'Food Bank',
    role: 'Volunteer',
    dates: 'Grades 9–12',
    hours: '3 hrs/week, seasonal',
    icon: 'hands',
    category: 'community',
    description: 'Sorted, packed, and distributed food to families in need.',
    impact: 'Skills: Community Engagement',
    image: '/images/food-bank.jpg',
    imageAlt: 'Ayaan sorting canned goods at a food bank',
  },
  {
    title: 'Power of Peace',
    role: 'Volunteer',
    dates: 'Grades 9–12',
    hours: '3 hrs/week, seasonal',
    icon: 'hands',
    category: 'community',
    description: 'Volunteered at community outreach and cultural events supporting the Power of Peace program.',
    impact: 'Skills: Community Engagement, Teamwork',
    image: '/images/power-of-peace.jpg',
    imageAlt: 'Ayaan and fellow volunteers holding certificates at a Power of Peace community event',
  },
  {
    title: 'Art & Craft Instructor',
    role: 'Instructor',
    dates: 'Grade 9',
    hours: '2 hrs/week, seasonal',
    icon: 'palette',
    category: 'community',
    description: 'Planned and taught arts and crafts activities for younger children.',
    impact: 'Skills: Creativity, Teaching',
    image: '/images/project-placeholder.jpg',
  },
]

/* ---------------------------------------------------------------------------
 * 8. ATHLETICS
 * ------------------------------------------------------------------------ */
export const athletics = [
  {
    sport: 'Soccer',
    team: 'Varsity Soccer — High School Team',
    years: 'Grades 11–12',
    icon: 'soccer',
    accomplishments: ['10 hrs/week, 16 weeks/year season commitment'],
    learned:
      'Competed at the varsity level while balancing rigorous academics and extracurricular commitments.',
    image: '/images/project-placeholder.jpg',
  },
  {
    sport: 'Soccer',
    team: 'Travel Soccer — Club Team',
    years: 'Grades 9–12',
    icon: 'soccer',
    accomplishments: ['8 hrs/week, 35 weeks/year — year-round commitment'],
    learned: 'Competed in regional tournaments that required year-round dedication and teamwork.',
    image: '/images/project-placeholder.jpg',
  },
  {
    sport: 'Lacrosse',
    team: 'Varsity Lacrosse — High School Team',
    years: 'Grade 11',
    icon: 'bolt',
    accomplishments: ['10 hrs/week, 14 weeks/year season'],
    learned: 'Competed in varsity lacrosse while balancing academics and service commitments.',
    image: '/images/project-placeholder.jpg',
  },
]

/* ---------------------------------------------------------------------------
 * 9. AWARDS
 * ------------------------------------------------------------------------ */
export const awards = [
  {
    name: 'Presidential Volunteer Service Award — Gold',
    organization: 'AmeriCorps / President’s Council on Service and Civic Participation',
    year: 'Grades 11–12',
    icon: 'trophy',
    tier: 'gold',
    description: 'Part of ~500 hours of community service earning national recognition for outstanding volunteer work.',
    image: '/images/project-placeholder.jpg',
  },
  {
    name: 'Presidential Volunteer Service Award — Bronze',
    organization: 'AmeriCorps / President’s Council on Service and Civic Participation',
    year: '2023',
    icon: 'medal',
    tier: 'bronze',
    description: 'Part of ~250+ hours of community service earning national recognition for outstanding volunteer work.',
    image: '/images/award-bronze-2023.jpg',
    imageAlt: 'Presidential Volunteer Service Award Bronze certificate awarded to Ayaan Panjani, 2023',
  },
  {
    name: 'Leadership and Community',
    organization: 'AmeriCorps / President’s Council on Service and Civic Participation',
    year: 'Grades 11–12',
    icon: 'award',
    tier: 'repeat',
    description: 'Led various community efforts, recognized nationally for outstanding service through hundreds of volunteer hours.',
    image: '/images/power-of-peace.jpg',
    imageAlt: 'Ayaan and fellow volunteers holding certificates at a community leadership event',
  },
  {
    name: 'Community Service & Leadership — Camp Counselor',
    organization: 'Hindu Heritage Summer Camp',
    year: 'July 2025',
    icon: 'users',
    tier: 'community',
    description: 'Recognized for 250 hours of community service and leadership as a Camp Counselor.',
    image: '/images/award-camp-counselor-2025.jpg',
    imageAlt: 'Certificate of Achievement from Hindu Heritage Summer Camp awarded to Ayaan Panjani for 250 community service hours as a counselor',
  },
]

/* ---------------------------------------------------------------------------
 * 10. PROJECTS
 *     `image` defaults to the shared placeholder. Add your own photo to
 *     public/images/ and point to it, e.g. image: '/images/water-sensor.jpg'
 * ------------------------------------------------------------------------ */
export const projects = [
  {
    title: 'Water Level Monitoring System',
    image: '/images/project-placeholder.jpg',
    imageAlt: 'Water level monitoring prototype built with an Arduino and sensors',
    description:
      'A sensor-based prototype designed to detect water levels and explore how technology can help monitor animal care.',
    tech: ['Arduino', 'Sensors', 'Electronics'],
    built:
      'REPLACE — Wired a water level sensor to an Arduino and wrote code that reads the level and triggers an alert when it drops too low.',
    challenge:
      'REPLACE — Describe the problem you were solving and what made it hard (noisy readings, calibration, power, waterproofing).',
    learned:
      'REPLACE — What the build taught you about sensors, debugging, or designing for real conditions.',
    github: 'https://github.com/ayaanpanjani5668/REPLACE-REPO-NAME',
    demo: '', // optional — leave '' to hide the button
  },
  {
    title: 'Line Following Robot',
    image: '/images/line-following-robot.png',
    imageAlt: 'Two line-following robots navigating a taped track between corrugated tubes',
    description:
      'A small robot that uses infrared sensors to read a track and steer itself along the line.',
    tech: ['Arduino', 'IR Sensors', 'Motors'],
    built:
      'REPLACE — Assembled the chassis, mounted IR sensors, and tuned the motor logic so the robot could follow curves without overshooting.',
    challenge:
      'REPLACE — e.g. The robot lost the line on sharp turns until the sensor spacing and turn speed were adjusted.',
    learned: 'REPLACE — What you learned about feedback, tuning, and testing.',
    github: 'https://github.com/ayaanpanjani5668/REPLACE-REPO-NAME',
    demo: '',
  },
  {
    title: 'Smart Car Robot',
    image: '/images/smart-car-robot.jpg',
    imageAlt: 'Arduino UNO-based robotic car with servo steering and sensors',
    description:
      'Built and programmed an Arduino UNO–based robotic car, integrating servo steering, ultrasonic sensors, line-tracking sensors, motors, and electronic circuits. Programmed multiple driving functions including obstacle avoidance, line tracking, Bluetooth control, and Wi-Fi/IoT control, gaining hands-on experience with robotics, electronics, sensors, actuators, and Arduino coding.',
    tech: ['Arduino UNO', 'Servo Motor', 'Ultrasonic Sensor', 'Line-Tracking Sensors', 'Bluetooth', 'Wi-Fi/IoT'],
    github: 'https://github.com/ayaanpanjani5668/REPLACE-REPO-NAME',
    demo: '',
  },
  {
    title: 'UConn Robotics Summer Academy',
    image: '/images/project-placeholder.jpg',
    imageAlt: 'Raspberry Pi-powered autonomous robot built at a summer robotics academy',
    description:
      'Designed, built, and programmed a Raspberry Pi-powered autonomous robot with sensors and embedded electronics as a team member.',
    tech: ['Raspberry Pi', 'Python', 'Sensors', 'Embedded Systems'],
    github: '',
    demo: '',
  },
  {
    title: 'BattleBot VEX Robotics',
    image: '/images/battlebot-vex-robotics.jpg',
    imageAlt: 'VEX competition robot with a claw arm on a BattleBots-branded arena field',
    description:
      'Built and programmed a combat robot — motors, electronics, and 3D-printed parts — at a Carnegie Mellon BattleBots camp, then competed in the tournament.',
    tech: ['VEX Robotics', 'Motors', 'Electronics', 'Programmable Controllers', '3D Printing'],
    github: '',
    demo: '',
  },
  {
    title: 'Arduino Electronics Projects',
    image: '/images/arduino-binary-counter.jpg',
    imageAlt: 'Breadboard LED binary counter wired to an Arduino Uno',
    description:
      'Built a binary counter, dimmable LED circuit, and RGB color-mixing controller to learn Arduino fundamentals.',
    tech: ['Arduino', 'Breadboarding', 'C/C++', 'Circuits'],
    github: 'https://github.com/ayaanpanjani5668/REPLACE-REPO-NAME',
    demo: '',
  },
]

/* ---------------------------------------------------------------------------
 * 11. SECTION HEADINGS  —  titles and subtitles used across the page
 * ------------------------------------------------------------------------ */
export const sections = {
  academics: {
    title: 'Academics',
    subtitle: 'Building a foundation in mathematics, science, engineering, and technology.',
  },
  leadership: {
    title: 'Leadership',
    subtitle: 'Taking initiative, helping others, and contributing beyond the classroom.',
  },
  volunteering: {
    title: 'Volunteering & Community Service',
    subtitle: 'Using my time and skills to make a positive difference in my community.',
  },
  athletics: {
    title: 'Athletics',
    subtitle: 'Learning teamwork, discipline, resilience, and commitment through sports.',
  },
  awards: {
    title: 'Awards & Recognition',
    subtitle: 'Recognition earned through consistent service over several years.',
  },
  projects: {
    title: 'Engineering & Robotics Projects',
    subtitle: 'Learning engineering by designing, building, testing, failing, and improving.',
  },
  contact: {
    title: 'Let’s Connect',
    subtitle: 'The best ways to reach me or see more of my work.',
  },
}

/* ---------------------------------------------------------------------------
 * 12. NAVIGATION  —  the order here controls the menu and the page order
 * ------------------------------------------------------------------------ */
export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'academics', label: 'Academics' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'volunteering', label: 'Volunteering' },
  { id: 'athletics', label: 'Athletics' },
  { id: 'awards', label: 'Awards' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
