<script lang="ts">
  import List from "../List.svelte";

  export let projects: {
    title: string;
    subtitle: string;
    date: string;
    link: string;
    description?: string[];
  }[];
</script>

<h2 class="headline">Private Projekte</h2>

<section>
  <List data={projects} />
</section>
