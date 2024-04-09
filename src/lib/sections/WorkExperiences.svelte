<script lang="ts">
  import List from "../List.svelte";

  export let workExperiences: {
    title: string;
    subtitle: string;
    description: string[];
    date?: string;
  }[];
</script>

<h2 class="headline">Work</h2>

<section>
  <List
    data={workExperiences}
    title_text_class="text-xl"
    text_text_class="text-lg"
  />
</section>
