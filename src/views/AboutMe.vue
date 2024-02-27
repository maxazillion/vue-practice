<template>
  <div class="container profile">
    <div class="row">
      <div class="col-md-4">
        <img
          class="profile-picture"
          src="../assets/JasonProfilePicture.png"
          alt="Profile Picture"
        />
      </div>
      <div class="col-md-8">
        <div class="personal-info">
          <h1>{{ fullName }}</h1>
          <h4>{{ jobTitle }}</h4>
          <p>{{ location }}</p>
          <p>{{ email }}</p>
          <p>{{ phone }}</p>
          <p>{{ website }}</p>
        </div>
      </div>
    </div>

    <div class="summary">
      <h2>Summary</h2>
      <p>{{ summary }}</p>
    </div>

    <div class="experience">
      <h2>Experience</h2>
      <div v-for="job in experience" :key="job.position">
        <h5>{{ job.position }}</h5>
        <b>{{ job.company }} - {{ job.duration }}</b>
        <ul>
          <li
            v-for="responsibility in job.responsibilities"
            :key="responsibility"
          >
            {{ responsibility }}
          </li>
        </ul>
      </div>
    </div>
    <div class="clearance">
      <h2>clearance</h2>
      <div v-for="security in clearance" :key="security.clearance">
        <h5>{{ security.clearanceLevel }}</h5>
        <b>{{ security.clearanceReason }} - {{ security.year }}</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: "Jason Rodgers",
      jobTitle: "Front End Developer",
      location: "Nashua, NH",
      email: "jason@rodgersworld.com",
      phone: "(603) 548-2204",
      website: "https://jason-rodgers-react-project.netlify.app/",
      summary:
        "Experienced Front End Developer with expertise in modern web technologies including MUI, React, TypeScript, and Vue.js. Skilled in designing and implementing user-friendly interfaces and maintaining high coding standards.",
      experience: [
        {
          position: "Front-End Developer",
          company: "Professional Software for Nurses",
          duration: "08/2022 – 11/2023",
          responsibilities: [
            "Recreated legacy application using modern tools such as MUI, React, and TypeScript.",
            "Designed and implemented reusable, maintainable, functional components to enhance user experience.",
            "Conducted code reviews and maintained high coding standards.",
            "Created and maintained critical application features such as authentication, form validation, and additional API call layer.",
          ],
        },
        {
          position: "Front-End Developer",
          company: "Symphony Solutions",
          duration: "07/2018 – 12/2018 | 9/2021 – 5/2022",
          responsibilities: [
            "Developed new features for a per diem nursing application, contributing to revenue growth for MAS Medical Staffing.",
            "Collaborated with backend developers to integrate frontend code with backend APIs and middleware.",
            "Participated in design meetings to improve user interface and responsiveness.",
            "Communicated with customers to gather ideas and implement robust features.",
          ],
        },
        {
          position: "Java Developer & Unit Tester",
          company: "Accenture Federal Services",
          duration: "05/2021 – 09/2021",
          responsibilities: [
            "Participated in the development and testing of Java-based applications for federal clients.",
            "Assisted in the design and implementation of unit tests to ensure code quality.",
            "Self-taught J-unit testing to collaborate with QA for issue resolution.",
          ],
        },
      ],
      clearance: [
        {
          clearanceLevel: "Secret",
          clearanceReason: "Army Special Operations",
          year: "2014",
        },
        { clearanceLevel: "General", clearanceReason: "GSA", year: "2021" },
      ],
    };
  },
};
</script>

<style scoped>
.profile {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.profile-picture {
  width: 190px;
  height: 190px;
}

.personal-info p {
  margin: 3px 0;
}

.summary h2,
.experience h2 {
  margin-top: 30px;
}

.experience ul {
  list-style-type: none;
  padding: 0;
}

.experience li {
  margin-bottom: 5px;
}

.experience div:not(:last-child) {
  margin-bottom: 20px;
}

.clearance h2 {
  margin-top: 30px;
}
</style>
