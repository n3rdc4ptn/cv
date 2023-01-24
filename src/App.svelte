<script lang="ts">
  import Qualifications from "./lib/sections/Qualifications.svelte";

  import data from "./lib/data";
  import Languages from "./lib/sections/Languages.svelte";
  import Certificates from "./lib/sections/Certificates.svelte";
  import Educations from "./lib/sections/Educations.svelte";
  import WorkExperiences from "./lib/sections/WorkExperiences.svelte";
  import Projects from "./lib/sections/Projects.svelte";
  import Others from "./lib/sections/Others.svelte";
  import EducationsProjects from "./lib/sections/EducationsProjects.svelte";
</script>

<main class="p-4 grid grid-cols-3 gap-4">
  <div class="flex flex-col justify-center mb-48">
    <h1 class="text-3xl font-bold text-center">
      {data.name}
    </h1>

    <section class="flex flex-col my-4 gap-1 text-lg">
      <div>
        <i class="las la-at la-lg" />
        <a href="mailto:{data.email}">{data.email}</a>
      </div>
      <div>
        <i class="las la-phone la-lg" />
        <a href="tel:{data.phone}">{data.phone}</a>
      </div>
      <div>
        <i class="lab la-github la-lg" />
        <a href="https://github.com/{data.github}">@{data.github}</a>
      </div>
      <div>
        <i class="lab la-linkedin la-lg" />
        <a href="https://www.linkedin.com/in/{data.linkedin}">
          {data.linkedin}
        </a>
      </div>
    </section>

    <Languages languages={data.languages} />
    <Qualifications qualifications={data.qualifications} />

    <Certificates certificates={data.certificates} />

    {#if data.others}
      <Others others={data.others} />
    {/if}
    {#if data.projects && data.projects.length > 0}
      <Projects projects={data.projects} />
    {/if}
  </div>

  <div class="col-span-2">
    <WorkExperiences workExperiences={data.experiences} />

    <Educations educations={data.education} />
    <EducationsProjects
      title="Cloud Computing Module"
      projects={data.education_projects}
    />
  </div>
</main>
