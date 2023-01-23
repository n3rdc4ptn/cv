<script lang="ts">
  import List from "../List.svelte";

  export let workExperiences: {
    title: string;
    subtitle: string;
    description: string[];
    date?: string;
  }[];
</script>

<h2 class="headline">Arbeitserfahrung</h2>

<section>
  <List data={workExperiences} />
</section>
