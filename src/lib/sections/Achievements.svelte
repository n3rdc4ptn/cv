<script lang="ts">
  import List from "../List.svelte";

  export let achievements: {
    title: string;
    subtitle: string;
    date: string;
    link: string;
    description?: string[];
  }[];
</script>

<h2 class="headline">Achievements</h2>

<section>
  <List data={achievements} />
</section>
