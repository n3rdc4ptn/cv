<script lang="ts">
  export let languages: {
    [key: string]: string;
  };
</script>

<h2 class="headline">Languages</h2>
<section>
  {#each Object.entries(languages) as [language, level]}
    <div class="flex justify-between px-2">
      <span>{language}</span>
      <span>{level}</span>
    </div>
  {/each}
</section>
