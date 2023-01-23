<script lang="ts">
  export let qualifications: {
    topic: string;
    skills: string[];
  }[];
</script>

<h2 class="headline">Qualifikationen</h2>

<section>
  <ul>
    {#each qualifications as qualification}
      <li class="my-2">
        <h3 class="font-bold text-lg">{qualification.topic}</h3>
        <ul>
          {#each qualification.skills as skill}
            <li class="dashed list-inside">{skill}</li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</section>
