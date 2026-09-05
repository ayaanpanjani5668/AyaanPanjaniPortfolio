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
  linkedin: 'https://www.linkedin.com/in/REPLACE-WITH-LINKEDIN-USERNAME',
  // REPLACE if the GitHub username ever changes
  github: 'https://github.com/ayaanpanjani5668',
  // REPLACE with the email address that should be shared with colleges
  email: 'REPLACE-WITH-EMAIL@example.com',
}

/* ---------------------------------------------------------------------------
 * 2. HERO / IDENTITY
 * ------------------------------------------------------------------------ */
export const profile = {
  name: 'Ayaan Panjnai',
  // Small pill shown above the name in the hero
  status: 'High school student · Class of 2027',
  headline: 'Future Engineer | Robotics & Technology Enthusiast | Student Leader',
  intro:
    'I am a high school student passionate about robotics, engineering, technology, community service, and using what I learn to solve real-world problems.',
  // Drop your own photo at public/images/ayaan-profile.jpg (keep the same name
  // and nothing else needs to change).
  photo: '/images/ayaan-profile.jpg',
  photoAlt: 'Portrait of Ayaan Panjnai',
  // Small caption shown under the portrait frame
  photoCaption: 'Class of 2027 · Robotics & Engineering',
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
    { icon: 'school', label: 'High School', value: 'REPLACE — High School Name' },
    { icon: 'calendar', label: 'Graduation Year', value: 'REPLACE — e.g. 2027' },
    { icon: 'chart', label: 'GPA', value: 'REPLACE — e.g. 4.0 / 4.0' },
    { icon: 'check', label: 'SAT', value: 'REPLACE — e.g. 1500' },
  ],
  coursework: [
    'REPLACE — Algebra II / Precalculus',
    'REPLACE — Physics',
    'REPLACE — Chemistry',
    'REPLACE — Computer Science',
    'REPLACE — Engineering / Design',
  ],
  honors: [
    'REPLACE — AP Course Name',
    'REPLACE — Honors Course Name',
    'REPLACE — Dual Enrollment / Summer Program',
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
    title: 'Young Scientist Program',
    role: 'Student Mentor / Volunteer',
    organization: 'REPLACE — Hosting Organization',
    grades: 'Grades 9–10',
    icon: 'flask',
    description:
      'Helped younger students explore science and technology through hands-on learning activities.',
    impact:
      'REPLACE — e.g. Supported ~20 elementary students across 6 weekend sessions.',
    skills: ['Mentoring', 'Public Speaking', 'Lesson Planning', 'Patience'],
  },
  {
    title: 'REPLACE — Club or Team Name',
    role: 'REPLACE — e.g. Team Lead',
    organization: 'REPLACE — School or Organization',
    grades: 'REPLACE — e.g. Grades 10–11',
    icon: 'users',
    description: 'REPLACE — What you did and why it mattered, in one or two sentences.',
    impact: 'REPLACE — A specific, honest result. Numbers help.',
    skills: ['REPLACE', 'REPLACE'],
  },
]

/* ---------------------------------------------------------------------------
 * 7. VOLUNTEERING  —  rendered as a vertical timeline
 *    Optional: add `image: '/images/your-photo.jpg'` to any entry.
 * ------------------------------------------------------------------------ */
export const volunteering = [
  {
    title: 'Dog Rescue & Fostering',
    role: 'Volunteer / Foster Helper',
    organization: 'REPLACE — Rescue Organization',
    dates: 'Grades 8–11',
    hours: 'REPLACE — e.g. 120+ hours',
    icon: 'dog',
    description:
      'Cared for rescue dogs at home and at the shelter — feeding, socializing, cleaning, and helping them get ready for adoption.',
    impact: 'REPLACE — e.g. Helped care for 15+ foster dogs.',
    // image: '/images/volunteering-dogs.jpg',
  },
  {
    title: 'Adoption Events',
    role: 'Event Volunteer',
    organization: 'REPLACE — Rescue Organization',
    dates: 'Grades 9–11',
    hours: 'REPLACE — e.g. 40 hours',
    icon: 'heart',
    description:
      'Set up adoption events, introduced families to available dogs, and answered questions about fostering.',
    impact: 'REPLACE — e.g. Supported 12 weekend adoption events.',
  },
  {
    title: 'Library Volunteering',
    role: 'Teen Volunteer',
    organization: 'REPLACE — Public Library',
    dates: 'Grades 9–11',
    hours: 'REPLACE — e.g. 60 hours',
    icon: 'book',
    description:
      'Shelved and organized materials, helped run youth programs, and assisted visitors at the desk.',
    impact: 'REPLACE — Add a specific contribution.',
  },
  {
    title: 'Young Scientist Program',
    role: 'Student Volunteer',
    organization: 'REPLACE — Hosting Organization',
    dates: 'Grades 9–10',
    hours: 'REPLACE — e.g. 30 hours',
    icon: 'flask',
    description:
      'Ran hands-on science stations so younger students could try experiments themselves.',
    impact: 'REPLACE — Add a specific contribution.',
  },
  {
    title: 'Book Buddy',
    role: 'Reading Partner',
    organization: 'REPLACE — School or Library Program',
    dates: 'REPLACE — Grades',
    hours: 'REPLACE — Hours',
    icon: 'bookOpen',
    description:
      'Read one-on-one with younger students each week to help build their reading confidence.',
    impact: 'REPLACE — Add a specific contribution.',
  },
  {
    title: 'Soup Kitchen',
    role: 'Kitchen & Serving Volunteer',
    organization: 'REPLACE — Community Organization',
    dates: 'REPLACE — Grades',
    hours: 'REPLACE — Hours',
    icon: 'utensils',
    description: 'Prepared and served meals and helped with cleanup during community meal service.',
    impact: 'REPLACE — Add a specific contribution.',
  },
  {
    title: 'Art & Craft Teaching',
    role: 'Activity Helper',
    organization: 'REPLACE — Community Center / Program',
    dates: 'REPLACE — Grades',
    hours: 'REPLACE — Hours',
    icon: 'palette',
    description: 'Led small art and craft activities for younger children and helped them finish their projects.',
    impact: 'REPLACE — Add a specific contribution.',
  },
]

/* ---------------------------------------------------------------------------
 * 8. ATHLETICS
 * ------------------------------------------------------------------------ */
export const athletics = [
  {
    sport: 'Soccer',
    team: 'JV Soccer — High School Team',
    years: 'REPLACE — e.g. Grades 9–10',
    position: 'REPLACE — e.g. Midfielder',
    icon: 'soccer',
    accomplishments: [
      'REPLACE — e.g. Full season starter',
      'REPLACE — e.g. Team record or playoff appearance',
    ],
    learned:
      'Playing on a team taught me to show up consistently, communicate under pressure, and keep working after a loss.',
  },
]

/* ---------------------------------------------------------------------------
 * 9. AWARDS
 * ------------------------------------------------------------------------ */
export const awards = [
  {
    name: 'Presidential Volunteer Service Award — Gold',
    organization: 'AmeriCorps / President’s Council on Service and Civic Participation',
    year: 'REPLACE — Year',
    icon: 'trophy',
    tier: 'gold',
    description:
      'Awarded for completing the gold-level threshold of verified community service hours in a single year.',
  },
  {
    name: 'Presidential Volunteer Service Award — Silver',
    organization: 'AmeriCorps / President’s Council on Service and Civic Participation',
    year: 'REPLACE — Year',
    icon: 'medal',
    tier: 'silver',
    description:
      'Awarded for completing the silver-level threshold of verified community service hours in a single year.',
  },
  {
    name: 'Three-Time Presidential Volunteer Service Award Recipient',
    organization: 'AmeriCorps / President’s Council on Service and Civic Participation',
    year: 'REPLACE — Years',
    icon: 'award',
    tier: 'repeat',
    description:
      'Recognized in three separate years, reflecting service that continued across multiple grade levels.',
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
    image: '/images/project-placeholder.jpg',
    imageAlt: 'Line following robot with infrared sensors',
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
    image: '/images/project-placeholder.jpg',
    imageAlt: 'Smart car robot with an ultrasonic distance sensor',
    description:
      'An obstacle-aware robot car that uses an ultrasonic sensor to measure distance and change direction before it hits something.',
    tech: ['Arduino', 'Ultrasonic Sensor', 'Motors'],
    built:
      'REPLACE — Built the driving base, added an ultrasonic sensor on a servo, and wrote the logic for scanning and choosing a clear path.',
    challenge: 'REPLACE — Describe the hardest part of getting reliable distance readings.',
    learned: 'REPLACE — What you learned about sensors and decision logic.',
    github: 'https://github.com/ayaanpanjani5668/REPLACE-REPO-NAME',
    demo: '',
  },
  {
    title: 'BattleBots / Robotics Experience',
    image: '/images/project-placeholder.jpg',
    imageAlt: 'Competition robot built for BattleBot-style engineering activities',
    description:
      'Designed and experimented with robotics through competitive BattleBot-style engineering activities.',
    tech: ['Mechanical Design', 'Motors', 'Iterative Testing'],
    built:
      'REPLACE — Describe the robot: drive system, weapon or mechanism, materials, and how the team divided the work.',
    challenge:
      'REPLACE — e.g. The first frame kept breaking on impact, so the design was reinforced between matches.',
    learned: 'REPLACE — What competition taught you about design tradeoffs and working under time pressure.',
    github: '',
    demo: '',
  },
  {
    title: 'Arduino Electronics Projects',
    image: '/images/project-placeholder.jpg',
    imageAlt: 'Breadboard electronics projects including LEDs and a binary counter',
    description:
      'A set of smaller circuits I built to learn the fundamentals: a binary counter, a dimmable LED, and RGB color mixing.',
    tech: ['Arduino', 'Breadboarding', 'C/C++', 'Circuits'],
    built:
      'REPLACE — Built each circuit from scratch on a breadboard and wrote the sketch that drives it.',
    challenge:
      'REPLACE — e.g. Understanding why the LED flickered led to learning about PWM and resistor values.',
    learned:
      'REPLACE — How these small builds became the building blocks for the bigger robotics projects.',
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
