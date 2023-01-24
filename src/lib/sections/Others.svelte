<script lang="ts">
  export let others: {
    title: string;
    subtitle: string;
    date?: string;
    link?: string;
  }[];
</script>

<h2 class="headline">Private Projekte</h2>

<section class="flex flex-col gap-2">
  {#each others as other}
    <div class="flex flex-col">
      <h3 class="text-lg font-bold">{other.title}</h3>

      <p>
        {other.subtitle}
      </p>
      {#if other.date}
        <p class="text-sm italic">{other.date}</p>
      {/if}
      {#if other.link}
        <a href={other.link} class="text-sm italic underline">
          {other.link}
        </a>
      {/if}
    </div>
  {/each}
</section>
