<script lang="ts">
  import List from "../List.svelte";

  export let educations: {
    title: string;
    subtitle: string;
    date: string;
    grade: string;
    description?: string[];
  }[];
</script>

<h2 class="headline">Bildungsweg</h2>

<section>
  <List data={educations} />
</section>
